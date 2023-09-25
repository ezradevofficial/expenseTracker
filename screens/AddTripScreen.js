import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';
import {BackButton} from '../components';
import {useNavigation} from '@react-navigation/native';

const AddTripScreen = () => {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (place && country) {
      //good to go
      navigation.navigate('Home');
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
              Add Trip
            </Text>
          </View>
          <View className="flex items-center my-3 mt-5">
            <Image
              source={require('../assests/images/4.png')}
              className="h-72 w-72"
            />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Where on Earth?
            </Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3"
              value={place}
              onChangeText={setPlace}
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Which Country
            </Text>
            <TextInput
              className="p-4 bg-white rounded-full mb-3"
              value={country}
              onChangeText={setCountry}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleAddTrip}
            style={{backgroundColor: colors.button}}
            className="my-6 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddTripScreen;
