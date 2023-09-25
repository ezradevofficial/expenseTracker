import {View, Text, Image} from 'react-native';
import React from 'react';

const EmptyList = ({message}) => {
  return (
    <View className="flex justify-center space-y-3 items-center my-5">
      <Image
        source={require('../assests/images/empty.png')}
        className="h-36 w-36 shadow"
      />
      <Text className="font-bold text-gray-400">
        {message || 'data not found'}
      </Text>
    </View>
  );
};

export default EmptyList;
