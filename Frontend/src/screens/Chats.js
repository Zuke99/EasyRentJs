import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import backgroundImage from '../assets/ui-images/post.png'

const Chats = () => {
  return (
    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
      <SafeAreaView>
        <View className=' h-full items-center'>
          {/* Heading */}
          <View className='mt-[5%]'>
            <Text className='text-white font-bold text-2xl'>Chats</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Chats

const styles = StyleSheet.create({})