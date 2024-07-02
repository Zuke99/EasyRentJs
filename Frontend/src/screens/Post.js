import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, Button } from 'react-native'
import backgroundImage from '../assets/ui-images/post.png'
import React, { useState } from 'react'
import GlobalStyles from '../GlobalStyles'
import { Feather } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

const shadowByPlatform = `${Platform.OS === 'android' ? 'shadow-lg shadow-black' : 'shadow-sm shadow-black'}`
const uploadButtons = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
]

const Post = ({ navigation }) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [title, setTitle] = useState('');
  const [specs, setSpecs] = useState('');
  const [description, setDescription] = useState('');



  return (

    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={GlobalStyles.droidSafeArea}>

            <View className='h-full'>

              {/* Image Preview */}
              <View className='h-[40%] mt-[10%] justify-center items-center'>
                <View className={`w-[90%] h-[80%] rounded-2xl bg-white ${shadowByPlatform} justify-center items-center`}>
                  <View className='flex-row h-[50%] w-[90%] items-center justify-center'>
                    <Text className='text-3xl text-gray-400 font-bold'> Image Preview </Text>
                    <Feather name="upload" size={28} color="gray" />
                  </View>
                </View>

                <View className={`flex-row h-[20%] w-[100%] justify-center items-end `}>
                  {uploadButtons.map(button => (
                    <View className={`h-[90%] w-[13%] ml-[2%] rounded-lg border border-slate-400`} key={button.id}>
                      <View className='h-[100%] w-[100%] items-center justify-center'>
                        <Feather name="upload" size={18} color="gray" />
                        <Text className='text-xs text-gray-400 font-bold'>Upload</Text>
                      </View>
                    </View>))}
                </View>
              </View>

              {/* Input Fields */}
              <View className='h-[50%] items-center justify-start mt-[10%]'>

                <View className=' w-[70%] h-8 my-[2%]'>
                  <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                    value={title} onChangeText={setTitle} placeholder="Enter Title" />
                </View>

                <View className=' w-[70%] h-8 my-[2%]'>
                  <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                    value={specs} onChangeText={setSpecs} placeholder="Enter Specifications of the Product" />
                </View>

                <View className=' w-[70%] h-16 my-[2%]'>
                  <TextInput className='border border-slate-300 h-16 rounded-xl px-4 py-2'
                    value={description} onChangeText={setDescription} placeholder="Brief Description about your product" multiline={true} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Price')}
                  className='w-[40%] h-8 my-[2%] items-center justify-center bg-ui_red rounded-xl'>
                  <Text className='text-white font-bold'>Next</Text>
                </TouchableOpacity>
              </View>

            </View>
            
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>


  )
}

export default Post

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: 40
  }
})