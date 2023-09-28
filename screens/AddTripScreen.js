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
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {addDoc} from 'firebase/firestore';
import {tripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';

const AddTripScreen = () => {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(state => state.user);

  const navigation = useNavigation();

  const handleAddTrip = async () => {
    if (place && country) {
      setLoading(true);
      let doc = await addDoc(tripsRef, {
        place,
        country,
        userId: user.uid,
      });
      setLoading(false);
      if (doc && doc.id) {
        navigation.navigate('Home');
      }
    } else {
      setLoading(false);
      Snackbar.show({
        text: 'Destination and Country are Required!',
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
              <Text className={`text-black text-xl font-bold text-center`}>
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
              <Text className={`text-gray-600 text-lg font-bold`}>
                Where on Earth?
              </Text>
              <TextInput
                className="p-4 bg-white rounded-full mb-3 text-black font-semibold"
                value={place}
                onChangeText={setPlace}
              />
              <Text className={`text-gray-600 text-lg font-bold`}>
                Which Country
              </Text>
              <TextInput
                className="p-4 bg-white rounded-full mb-3 text-black font-semibold"
                value={country}
                onChangeText={setCountry}
              />
            </View>
          </View>

          <View>
            {loading ? (
              <Loading />
            ) : (
              <TouchableOpacity
                onPress={handleAddTrip}
                style={{backgroundColor: colors.button}}
                className="my-6 rounded-full p-3 shadow-sm mx-2">
                <Text className="text-center text-white text-lg font-bold">
                  Add Trip
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTripScreen;
