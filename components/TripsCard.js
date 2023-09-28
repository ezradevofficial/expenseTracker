import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import randomImage from '../assests/images/randomImage';
import {useNavigation} from '@react-navigation/native';

const TripsCard = ({item}) => {
  const navigation = useNavigation();
  const screenWidth = Math.round(Dimensions.get('window').width);
  const cardWidth = screenWidth / 2 - 24;
  return (
    // <TouchableOpacity
    //   onPress={() => navigation.navigate('TripExpenses', {...item})}
    //   className="bg-white p-3 rounded-2xl mb-3 shadow-sm flex-1">
    //   <View>
    //     <Image source={randomImage()} className="h-36 w-36 mb-2" />
    //     <Text className={`text-gray-600 font-bold`}>{item.place}</Text>
    //     <Text className={`text-gray-600 text-xs`}>{item.country}</Text>
    //   </View>
    // </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('TripExpenses', {...item})}
      style={{width: cardWidth}}
      className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
      <Image source={randomImage()} className="h-36 w-36 mb-2" />
      <Text className={`text-gray-600 font-bold`}>{item.place}</Text>
      <Text className={`text-gray-600 text-xs`}>{item.country}</Text>
    </TouchableOpacity>
  );
};

export default TripsCard;
