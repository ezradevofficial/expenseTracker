import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackButton, EmptyList, ExpenseCard} from '../components';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {getDocs, query, where} from 'firebase/firestore';
import {expensesRef} from '../config/firebase';

const TripExpensesScreen = props => {
  // console.log('Props: ', props);
  const {id, place, country} = props.route.params;
  const [expenses, setExpenses] = useState([]);
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);
  const isFocused = useIsFocused();

  const fetchExpenses = async () => {
    const q = query(expensesRef, where('tripId', '==', id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data(), id: doc.id});
    });
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, [isFocused]);

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="p-4">
        <View className="relative">
          <View className="z-10  absolute top-2 left-0">
            <BackButton />
          </View>
          <View>
            <Text className={`text-gray-600 text-xl font-bold text-center`}>
              {place}
            </Text>
            <Text className={`text-gray-600 text-xs text-center`}>
              {country}
            </Text>
          </View>
        </View>
        <View className="flex-row justify-center rounded-xl mb-4">
          <Image
            source={require('../assests/images/7.png')}
            className="h-80 w-80"
          />
        </View>
        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <Text className={`text-black font-bold text-xl shadow-sm`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddExpense', {id, place, country})
              }
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className="text-gray-600">Add Expense</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{height: screenHeight / 2 - 20}}
            data={expenses}
            keyExtractor={item => item.id}
            ListEmptyComponent={
              <EmptyList message={"you haven't recorded any expenses yet"} />
            }
            className="mx-1"
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <ExpenseCard item={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TripExpensesScreen;
