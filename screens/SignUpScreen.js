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
import {BackButton, Loading} from '../components';
import Snackbar from 'react-native-snackbar';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../redux/slices/user';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {userLoading} = useSelector(state => state.user);

  const handleSubmit = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (error) {
        dispatch(setUserLoading(false));
        Snackbar.show({
          text: 'Try Again Later',
          backgroundColor: 'red',
        });
      }
    } else {
      //error message
      Snackbar.show({
        text: 'Email and Password are required',
        backgroundColor: 'red',
      });
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
              <Text
                className={`${colors.heading} text-xl font-bold text-center`}>
                Get Started
              </Text>
            </View>
            <View className="flex items-center my-3 mt-5">
              <Image
                source={require('../assests/images/signup.png')}
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
            </View>
          </View>

          <View>
            {userLoading ? (
              <Loading />
            ) : (
              <TouchableOpacity
                onPress={handleSubmit}
                style={{backgroundColor: colors.button}}
                className="my-6 rounded-full p-3 shadow-sm mx-2">
                <Text className="text-center text-white text-lg font-bold">
                  Sign Up
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
