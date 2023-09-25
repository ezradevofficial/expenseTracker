import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';
import randomImage from '../assests/images/randomImage';
import {EmptyList} from '../components';
import {useNavigation} from '@react-navigation/native';

const items = [
  {
    id: 1,
    place: 'Gujrat',
    country: 'Pakistan',
  },
  {
    id: 2,
    place: 'London Eye',
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
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require('../assests/images/banner.png')}
          className="h-60 w-60"
        />
      </View>
      <View className="px-4 space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl shadow-sm`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTrip')}
            className="p-2 px-3 bg-white border border-gray-200 rounded-full">
            <Text className={colors.heading}>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
          <FlatList
            data={items}
            keyExtractor={item => item.id}
            numColumns={2}
            ListEmptyComponent={
              <EmptyList message={"you haven't recorded any trips yet"} />
            }
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            className="mx-1"
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                <View>
                  <Image source={randomImage()} className="h-36 w-36 mb-2" />
                  <Text className={`${colors.heading} font-bold`}>
                    {item.place}
                  </Text>
                  <Text className={`${colors.heading} text-xs`}>
                    {item.country}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
