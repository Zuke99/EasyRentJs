import { Button, ImageBackground, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import backgroundImage from '../assets/ui-images/LogoBg.png'
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import GlobalStyles from '../GlobalStyles'
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/actions/authActions'


const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const SignUpButtonHandler = () => {
    if (validatePassword()) {
      const data = {
        username: username,
        password: password
      }
      dispatch(registerUser(data))
      .then(navigation.navigate('SigninScreen'))
      // .catch(console.log(error));
      //navigation.navigate('SigninScreen')
    } else {
      console.log("Not Validated");
    }
  }

  const validatePassword = () => {
    if (password === confirmPassword) return true;
    return false;
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -10}
    >

      <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <View className='h-full'>

              {/* Empty Logo COntainer */}
              <View className=' h-[40%]'>
                <View>
                  <TouchableOpacity className='mx-2 my-2 w-[20%]'
                    onPress={() => navigation.goBack()}>
                    <MaterialIcons name='keyboard-backspace' size={35} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Login Form */}
              <View className=' h-[40%]'>
                {/* Heading */}
                <View className='flex-row h-[20%] items-center justify-center'>
                  <Text className='text-2xl mx-2 font-bold text-slate-500'>Sign Up</Text>
                  <AntDesign name='login' size={24} color={'black'} />
                </View>
                {/* Form */}
                <View className='justify-center items-center'>
                  <View className='w-[80%] my-2'>
                    <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                      onChangeText={setUsername}
                      placeholder="Enter Username or Email" />
                  </View>

                  <View className='w-[80%] my-2'>
                    <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                      secureTextEntry={true}
                      onChangeText={setPassword}
                      placeholder="Enter Password" />
                  </View>

                  <View className='w-[80%] mt-2'>
                    <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                      secureTextEntry={true}
                      onChangeText={setConfirmPassword}
                      placeholder="Re - Enter Password" />
                  </View>

                  {/* Validation Message View */}
                  <View className='h-5 mt-1 w-[80%]'>
                    <Text className='text-[12px] px-3 text-red-600'>Username already exists</Text>
                  </View>

                  <View className='flex-row w-[80%] my-2 items-center justify-center'>
                    <TouchableOpacity className='flex-row  w-[60%] h-8 rounded-xl justify-center items-center bg-ui_red'
                      onPress={SignUpButtonHandler}
                    >
                      <Text className='mx-1 font-semibold text-white'>Sign Up</Text>
                      <Entypo name='login' size={15} color={'white'} />
                    </TouchableOpacity>
                  </View>

                  <View className='w-[100%] h-8 justify-center items-center'>
                    <View className=' flex-row  w-[70%] items-center'>
                      <View className=' flex-1 h-[2px] bg-slate-300'></View>
                      <Text className='mx-2 text-slate-400'>Already an Existing User?</Text>
                      <View className=' flex-1 h-[2px] bg-slate-300'></View>
                    </View>
                  </View>


                  <View className='flex-row w-[80%] my-2 items-center justify-center'>
                    <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}
                      className='flex-row  w-[60%] h-8 rounded-xl justify-center items-center border'>
                      <Text className='mx-1 font-semibold text-slate-900'>Login</Text>
                      <Entypo name='login' size={15} color={'black'} />
                    </TouchableOpacity>
                  </View>

                  {/* Login with phone/ email */}
                  <View>

                  </View>

                </View>
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>

    </KeyboardAvoidingView>


  )
}

export default SignUp

const styles = StyleSheet.create({})