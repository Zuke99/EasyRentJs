import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const Categories = ({ props }) => {
  return (
    <View className='h-[100%]'>
     
     {/* Image */}
     <View className='h-[80%]'>
      <Image source={props.image} style={styles.image} />
     </View>

     {/* Title */}
     <View className='h-[20%] items-center'>
      <Text className='font-semibold'>{props.title}</Text>
     </View>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})