import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';
import randomImage from '../assests/images/randomImage';
import {BackButton, EmptyList, ExpenseCard} from '../components';
import {useNavigation} from '@react-navigation/native';

const items = [
  {
    id: 1,
    title: 'ate sandwitch',
    amount: 250,
    category: 'food',
  },
  {
    id: 2,
    title: 'bought a jacket',
    amount: 1200,
    category: 'shopping',
  },
  {
    id: 3,
    title: 'watched a movie',
    amount: 400,
    category: 'entertainment',
  },
];

const TripExpensesScreen = props => {
  // console.log('Props: ', props);
  const {id, place, country} = props.route.params;
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);
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
              onPress={() => navigation.navigate('AddExpense')}
              className="p-2 px-3 bg-white border border-gray-200 rounded-full">
              <Text className="text-gray-600">Add Expense</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{height: screenHeight / 2 - 20}}
            data={items}
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
