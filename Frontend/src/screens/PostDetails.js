import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import backgroundImage from '../assets/ui-images/post.png'
import { MaterialIcons } from '@expo/vector-icons';

const PostDetails = ({ route, navigation }) => {
  const { card } = route.params;
  return (
    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
      <View className='h-full'>

        {/* Header */}
        <View className='flex-row h-[12%] justify-start items-end '>
          <View className='flex-1 justify-end w-[40%]'>
            <TouchableOpacity className='mx-2 w-[20%]'
              onPress={() => navigation.goBack()}>
              <MaterialIcons name='keyboard-backspace' size={35} color={'white'} />
            </TouchableOpacity>
          </View>
          <View className='w-[60%]'>
            <Text className='text-white text-2xl font-semibold'> Details </Text>
          </View>
        </View>

        <ScrollView className=''>
          {/* Image */}
          <View className=' mt-[10%] h-96 border-b-2 border-slate-100 justify-center items-center'>
            <Image source={card.image} style={styles.image} />
          </View>

          {/* Price & Description */}
          <View className=' h-auto m-[2%]'>
            <View className='mx-[2%]'>
              <Text className='text-md font-bold'>{card.price}</Text>
              <Text className='text-md font-bold'>{card.title}</Text>
              <Text className='text-xs'>{card.specs}</Text>
              <Text>{card.description}</Text>
            </View>
          </View>

          {/* Owner Info */}
          <View className=' h-[7%]'>
            <Image />
            <Text></Text>
          </View>


          {/* Chat / Call Buttons */}
          <View className=' flex-row justify-around h-[5%] '>
            <TouchableOpacity className=' flex-row justify-center items-center w-[45%] bg-ui_red'>
              <Text className='font-extrabold text-white'>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity className=' flex-row justify-center items-center w-[45%] bg-ui_red'>
              <Text className='font-extrabold text-white'>Call</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default PostDetails

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
})