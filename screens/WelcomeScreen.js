import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-around bg-slate-100">
      <View className="flex items-center">
        <Image
          className="h-96 w-96 shadow"
          source={require('../assests/images/welcome.gif')}
        />
      </View>
      <View className=" mx-5 mb-20">
        <Text className={`font-bold text-4xl text-center mb-10 text-black`}>
          Expensify
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{backgroundColor: colors.button}}
          className="p-4 rounded-full shadow mb-5">
          <Text className="text-white font-bold text-center text-lg">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{backgroundColor: colors.button}}
          className="p-4 rounded-full shadow">
          <Text className="text-white font-bold text-center text-lg">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
