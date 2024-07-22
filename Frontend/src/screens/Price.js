import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Switch, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import GlobalStyles from '../GlobalStyles'
import { ImageBackground } from 'react-native'
import backgroundImage from '../assets/ui-images/post.png'
import { SelectList } from 'react-native-dropdown-select-list'
import { MaterialIcons } from '@expo/vector-icons';

const categories = [
  { key: '1', value: 'Cars' },
  { key: '2', value: 'Mobiles' },
  { key: '3', value: 'Bikes' },
  { key: '4', value: 'Electronics' },
  { key: '5', value: 'Furniture' },
  { key: '6', value: 'Fashion' },
  { key: '7', value: 'Musical Instruments' },
  { key: '8', value: 'Pets' },
  { key: '9', value: 'Misc' },
]

const Price = ({ navigation }) => {
  const [category, setCategory] = useState();
  const [isDepositAmountEnabled, setIsDepositAmountEnabled] = useState(false);

  const handleDepositAmountSwitch = () => {
    setIsDepositAmountEnabled(previousState => !previousState);
  }
  return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -10}
      >
    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>

        <View className='h-full'>

          <View>
            <TouchableOpacity className='mx-2 my-2 w-[20%]'
              onPress={() => navigation.goBack()}>
              <MaterialIcons name='keyboard-backspace' size={35} color={'white'} />
            </TouchableOpacity>
          </View>

          <View className='justify-center items-center w-[100%] h-[80%]'>

            {/* Price */}
            <View className=' w-[70%] h-44 mt-[20%]'>
              {/* <Text className='m-2'>Enter Price</Text> */}
              <View className='flex w-[90%]'>
              <Text className='text-xs'>Price a Day</Text>
                <TextInput className='border border-slate-300 h-8 w-[100%] rounded-md px-5 my-1 mr-1'
                  placeholder='Enter amount per Day' keyboardType='numeric' />
              </View>
              <View className='flex w-[90%]'>
              <Text className='text-xs'>Price a Week</Text>
                <TextInput className='border border-slate-300 h-8 w-[100%] rounded-md px-5 my-1 mr-1'
                  placeholder='Enter amount per Week' keyboardType='numeric' />
              </View>
              <View className='flex w-[90%]'>
              <Text className='text-xs'>Price a Month</Text>
                <TextInput className='border border-slate-300 h-8 w-[100%] rounded-md px-5 my-1 mr-1'
                  placeholder='Enter amount per Month' keyboardType='numeric' />
              </View>
            </View>

            {/* Deposit Amount */}
            <View className=' w-[70%] h-24 mt-2'>
            <View className='flex w-[90%]'>
              <Text className='text-xs'>Do you want to set a prior deposit amount?</Text>
              <Switch value={isDepositAmountEnabled} onValueChange={handleDepositAmountSwitch} className='my-1'/>
              {isDepositAmountEnabled && <TextInput className='border border-slate-300 h-8 w-[100%] rounded-md px-5 my-1 mr-1'
                  placeholder='Enter the Security/Deposit Amount' keyboardType='numeric' />}
            </View>
            </View>

            {/* Categories */}
            <View className='w-[70%] h-36 mt-4 mb-6'>
              <SelectList boxStyles={{ borderColor: '#c1c1c1' }} placeholder='Category' searchPlaceholder='Search'
                dropdownStyles={{ height: 100 }}
                setSelected={(val) => setCategory(val)} data={categories} save='value'
              />
            </View>

        

            {/* Create Post Button */}
            <View className='justify-center items-center w-[100%]'>
            <TouchableOpacity onPress={() => navigation.navigate('Location')}
                  className='w-[40%] h-8 items-center justify-center bg-ui_red rounded-xl'>
                  <Text className='text-white font-bold'>Next</Text>
                </TouchableOpacity>
            </View>

          </View>
        </View>
      </SafeAreaView>
        </TouchableWithoutFeedback>
    </ImageBackground>
        </KeyboardAvoidingView>
  )
}

export default Price

const styles = StyleSheet.create({})