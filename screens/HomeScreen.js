import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';
import randomImage from '../assests/images/randomImage';
import {EmptyList, TripsCard} from '../components';
import {useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth} from '../config/firebase';

const items = [
  {
    id: 1,
    place: 'Nairobi',
    country: 'Kenya',
  },
  {
    id: 2,
    place: 'Machester',
    country: 'England',
  },
  {
    id: 3,
    place: 'Washington dc',
    country: 'America',
  },
  {
    id: 4,
    place: 'New york',
    country: 'America',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);

  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      {/* <ScrollView> */}
      <View className="flex-row justify-between items-center p-4">
        <Text className={`text-black font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className="text-gray-600">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assests/images/banner.png')}
          className="h-60 w-60"
        />
      </View>
      <View className="px-4 space-y-4 ">
        <View className="flex-row justify-between items-center">
          <Text className={`text-black font-bold text-xl shadow-sm`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrip')}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className="text-gray-600">Add Trip</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <EmptyList message={"you haven't recorded any trips yet"} />
          }
          style={{height: screenHeight / 2 - 20}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({item}) => <TripsCard item={item} />}
        />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
