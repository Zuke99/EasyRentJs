import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import backgroundImage from '../assets/ui-images/LogoBg.png'
import { AntDesign, Entypo } from '@expo/vector-icons'

const SignIn = () => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -10}
  >
     
    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
      <View className='h-full'>
        {/* Empty Logo COntainer */}
        <View className=' h-[40%]'>

        </View>

        {/* Login Form */}
        <View className=' h-[40%]'>
          {/* Heading */}
          <View className='flex-row h-[20%] items-center justify-center'> 
            <Text className='text-2xl mx-2 font-bold text-slate-500'>Sign In</Text>
            <AntDesign name='login' size={24} color={'black'}/>
          </View>
          {/* Form */}
          <View className='justify-center items-center'>
            <View className='w-[80%] my-2'>
              <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                placeholder="Enter Username or Email" />
            </View>

            <View className='w-[80%] my-2'>
              <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                placeholder="Enter Password" />
            </View>

            <View className='flex-row w-[80%] my-2 items-center justify-center'>
              <TouchableOpacity className='flex-row  w-[60%] h-8 rounded-xl justify-center items-center bg-ui_red'>
                <Text className='mx-1 font-semibold text-white'>Login</Text>
                <Entypo name='login' size={15} color={'white'}/>
              </TouchableOpacity>
            </View>

            <View className='w-[100%] h-8 justify-center items-center'>
              <View className=' flex-row  w-[70%] items-center'>
                <View className=' flex-1 h-[2px] bg-slate-300'></View>
                <Text className='mx-2 text-slate-400'>or</Text>
                <View className=' flex-1 h-[2px] bg-slate-300'></View>
              </View>
            </View>


            <View className='flex-row w-[80%] my-2 items-center justify-center'>
              <TouchableOpacity className='flex-row  w-[60%] h-8 rounded-xl justify-center items-center border'>
                <Text className='mx-1 font-semibold text-slate-900'>Sign Up</Text>
                <Entypo name='login' size={15} color={'black'}/>
              </TouchableOpacity>
            </View>
           
           {/* Login with phone/ email */}
            <View>
                
            </View>

          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
   
    </KeyboardAvoidingView>


  )
}

export default SignIn

const styles = StyleSheet.create({})