import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';
import {BackButton} from '../components';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email && password) {
      //good to go
      navigation.goBack();
      navigation.navigate('Home');
    } else {
      //error message
    }
  };
  return (
    <SafeAreaView>
      <ScrollView className="bg-slate-100">
        <View className="flex justify-between h-full p-4">
          <View>
            <View className="relative">
              <View className="z-10  absolute top-0 left-0">
                <BackButton />
              </View>
              <Text className={`text-black text-xl font-bold text-center`}>
                Welcome Back
              </Text>
            </View>
            <View className="flex items-center my-3 mt-5">
              <Image
                source={require('../assests/images/login.png')}
                className="h-72 w-72"
              />
            </View>
            <View className="space-y-2 mx-2">
              <Text className={`text-gray-400 text-lg font-bold`}>Email</Text>
              <TextInput
                className="p-4 bg-white rounded-full mb-3 text-black font-semibold"
                value={email}
                onChangeText={setEmail}
              />
              <Text className={`text-gray-400 text-lg font-bold`}>
                Password
              </Text>
              <TextInput
                className="p-4 bg-white rounded-full mb-3 text-black font-semibold"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity className="flex-row justify-end">
                <Text className="text-black">Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{backgroundColor: colors.button}}
              className="my-6 rounded-full p-3 shadow-sm mx-2">
              <Text className="text-center text-white text-lg font-bold">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
