import {View, Text} from 'react-native';
import React from 'react';
import {categoryBG, colors} from '../theme';

const ExpenseCard = ({item}) => {
  return (
    <View
      style={{backgroundColor: categoryBG[item.category]}}
      className="flex-row justify-between items-center py-3 px-5 mb-3 rounded-2xl">
      <View>
        <Text className={`text-gray-600 font-bold`}>{item.title}</Text>
        <Text className={`text-gray-600 text-xs`}>{item.category}</Text>
      </View>
      <View>
        <Text className="text-black">Ksh {item.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;
