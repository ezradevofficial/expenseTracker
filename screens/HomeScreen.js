import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EmptyList, TripsCard} from '../components';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth, tripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';
import {getDocs, query, where} from 'firebase/firestore';

const HomeScreen = () => {
  const navigation = useNavigation();
  const screenHeight = Math.round(Dimensions.get('window').height);
  const isFocused = useIsFocused();

  const {user} = useSelector(state => state.user);
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    const q = query(tripsRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      // console.log('document', doc.data());
      data.push({...doc.data(), id: doc.id});
      //console.log(doc.id, ' => ', doc.data());
      console.log(data);
    });
    setTrips(data);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    fetchTrips();
  }, [isFocused]);
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
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
          data={trips}
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
    </SafeAreaView>
  );
};

export default HomeScreen;
