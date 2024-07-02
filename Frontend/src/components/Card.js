import { Image, Platform, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({ card }) => {
    const dropShadow = `${Platform.OS === 'android' ? 'shadow shadow-black' : 'shadow'}`
    const shadowOpacity = 0.10, shadowRadius = 25.00;
  return (
    <View className={`h-[100%] rounded-2xl ${dropShadow}`} style={[
      styles.square,
      {
        shadowOffset: {
          width: 7,
          height: 10,
        },
        shadowOpacity,
        shadowRadius,
      },
    ]}>
      {/* Image */}
      <View className='h-[60%]'>
        <Image source={card.image} style={styles.image} className='rounded-t-2xl'/>
      </View>

      {/* Rest */}
      <View className='px-[6%] h-[40%] pb-[2%]'>
        {/* Title */}
        <View className='h-[20%] mt-[5%]'>
          <Text className='font-semibold'>{card.title}</Text>
        </View>

        {/* Specs */}
        <View className='h-[45%]'>
          <Text className='text-xs'>{card.specs}</Text>
        </View>

        {/* Price  & Fav*/}
        <View className=' flex-1 flex-row h-[30%] justify-between items-center'>
          <Text className='text-xs font-semibold'>{card.price}</Text>
          <TouchableOpacity className='h-[100%] justify-center w-[15%] items-end'>
            <Ionicons name='heart-outline' size={15} />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  square: {
    backgroundColor: 'white',
    borderRadius: 4,
    shadowColor: 'black',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})