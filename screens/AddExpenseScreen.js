import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';
import {BackButton} from '../components';
import {useNavigation} from '@react-navigation/native';
import {categories} from '../constants';

const AddExpenseScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const handleAddExpense = () => {
    if (title && amount && category) {
      //good to go
      navigation.goBack();
    } else {
      //error message
    }
  };
  return (
    <SafeAreaView>
      <View className="flex justify-between h-full p-4">
        <View>
          <View className="relative">
            <View className="z-10  absolute top-0 left-0">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Add Expense
            </Text>
          </View>
          <View className="flex items-center my-3 mt-5">
            <Image
              source={require('../assests/images/expenseBanner.png')}
              className="h-72 w-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              For What?
            </Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3"
              value={title}
              onChangeText={setTitle}
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              How Much?
            </Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3"
              value={amount}
              onChangeText={setAmount}
            />
          </View>
          <View className="mx-2 space-x-2">
            <Text className={`text-lg font-bold`}>Category</Text>
            <View className="flex-row flex-wrap items-center">
              {categories.map(cat => (
                <TouchableOpacity
                  className={`px-4 py-3 mb-2 mr-2 rounded-full ${
                    cat.value == category ? `bg-green-200` : `bg-white`
                  }`}
                  key={cat.value}
                  onPress={() => setCategory(cat.value)}>
                  <Text>{cat.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleAddExpense}
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddExpenseScreen;
