import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import GlobalStyles from '../GlobalStyles'
import { ImageBackground } from 'react-native'
import backgroundImage from '../assets/ui-images/post.png'
import { SelectList } from 'react-native-dropdown-select-list'

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

const Price = () => {
  const [category, setCategory] = useState();
  return (
    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>

        <View className='justify-center items-center h-full'>


          <View className=' w-[70%] h-8 my-[2%]'>
            <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
              placeholder="Enter your locality" />
            <TouchableOpacity>
              <Text className='text-sm text-gray-500'>Select Automatically</Text>
            </TouchableOpacity>
          </View>

          {/* Price */}
          <View className=' w-[30%] h-[30%] my-[2%]'>
            <Text className='m-2'>Enter Price</Text>
            <View className='flex-row items-center justify-center'>
              <TextInput className='border border-slate-300 h-8 w-[100%] rounded-xl px-5 my-2 mr-1'
                placeholder='Day' keyboardType='numeric' />
              <Text>/day</Text>
            </View>
            <View className='flex-row items-center justify-center'>
              <TextInput className='border border-slate-300 h-8 w-[100%] rounded-xl px-5 my-2 mr-1'
                placeholder='Week' keyboardType='numeric' />
              <Text>/day</Text>
            </View>
            <View className='flex-row items-center justify-center'>
              <TextInput className='border border-slate-300 h-8 w-[100%] rounded-xl px-5 my-2 mr-1'
                placeholder='Month' keyboardType='numeric' />
              <Text>/day</Text>
            </View>
          </View>

          {/* Categories */}

          <View className='w-[70%] h-16 my-[2%]'>
            <SelectList boxStyles={{ borderColor: '#c1c1c1' }} placeholder='Category' searchPlaceholder='Search'
              dropdownStyles={{ height: 130 }}
              setSelected={(val) => setCategory(val)} data={categories} save='value'
            />
          </View>


        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Price

const styles = StyleSheet.create({})