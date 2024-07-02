import { ImageBackground, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import backgroundImage from '../assets/ui-images/post.png'
import { Feather, Ionicons } from '@expo/vector-icons';
import GlobalStyles from '../GlobalStyles';
import { ScrollView } from 'react-native';
import Car from '../assets/ui-images/car.jpeg'
import Bike from '../assets/ui-images/image.jpeg'
import Guitar from '../assets/ui-images/guitar.jpeg'
import Camera from '../assets/ui-images/camera.jpeg'
import Macbook from '../assets/ui-images/macbook.jpeg'
import iPhone from '../assets/ui-images/iphone.jpeg'
import Headphones from '../assets/ui-images/headphones.jpeg'
import Kindle from '../assets/ui-images/kindle.jpeg'
import Tripod from '../assets/ui-images/tripod.jpeg'
import TeaPot from '../assets/ui-images/teapot.jpeg'
import Bat from '../assets/ui-images/bat.jpeg'
import Categories from '../components/Categories';
import { categoryImages } from '../utils/Images';
import { FlatList } from 'react-native';


const Home = ({ navigation }) => {
  const image = require('../assets/ui-images/EasyRentBghome.png');
  const dropShadow = `${Platform.OS === 'android' ? 'shadow shadow-black' : 'shadow'}`
  const cards = [
    { id: 1, title: 'Car', price: '5000/-', specs: '15000 kms driven', image: Car },
    { id: 2, title: 'Bike', price: '1500/-', specs: '8000 kms driven', image: Bike },
    { id: 3, title: 'Guitar', price: '300/-', specs: 'New, Acoustic', image: Guitar },
    { id: 4, title: 'Camera', price: '2500/-', specs: '24MP, DSLR', image: Camera },
    { id: 5, title: 'Macbook', price: '80000/-', specs: '16GB RAM, 512GB SSD', image: Macbook },
    { id: 6, title: 'iPhone', price: '60000/-', specs: '128GB, Space Gray', image: iPhone },
    { id: 7, title: 'Headphones', price: '2000/-', specs: 'Wireless, Noise Cancelling', image: Headphones },
    { id: 8, title: 'Kindle', price: '7000/-', specs: '10th Gen, 8GB', image: Kindle },
    { id: 9, title: 'Tripod', price: '1500/-', specs: 'Aluminum, 60-inch', image: Tripod },
    { id: 10, title: 'Tea pot', price: '500/-', specs: 'Ceramic, 1L', image: TeaPot },
    { id: 11, title: 'Bat', price: '1200/-', specs: 'Wooden, Standard Size', image: Bat },
  ];

  const categories = [
    { id:1, title: 'Cars', image: categoryImages.cars},
    { id:2, title: 'Mobiles', image: categoryImages.mobiles},
    { id:3, title: 'Bikes', image: categoryImages.bikes},
    { id:4, title: 'Electronics', image: categoryImages.electronics},
    { id:5, title: 'Furniture', image: categoryImages.furniture},
    { id:6, title: 'Fashion', image: categoryImages.fashion},
    { id:7, title: 'Musical Instruments', image: categoryImages.musical},
    { id:8, title: 'Pets', image: categoryImages.pets},
    { id:9, title: 'Cars', image: categoryImages.cars},

  ]

  const props = categories[0];
  
  return (
    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View className="h-full">

          {/* Location & Notification*/}
          <View className='flex-row mt-[2%] justify-center items-center'>
            <TouchableOpacity className='flex-row items-center w-[87%] '>
              <Ionicons name='location-outline' size={20} color={'white'}/>
              <Text className='font-semibold mx-1 text-white'>Secunderabad 500017, TG</Text>
              <Ionicons name='chevron-down-outline' size={20} color={'white'}/>
            </TouchableOpacity>

            <TouchableOpacity className=''>
              <Ionicons name='notifications-outline' size={20} color={'white'}/>
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View className="flex-col mt-[2%] h-[4.5%] items-center ">
            <View className="flex-row h-9 w-[90%] px-[2%] items-center rounded-full bg-white">
              <Feather name="search" size={24} color="gray" />
              <TextInput className=" h-8 w-[80%] px-3" placeholder="Find Cars, Bikes, Cameras and more..." />
            </View>
          </View>

          <ScrollView className='mt-[10%] mx-[3%]' showsVerticalScrollIndicator={false}>

          <View className='m-1 mb-[4%]'>
            <Text className='font-semibold'>Explore Categories</Text>
          </View>


            {/* Categories */}
          <View className={`flex-row flex-grow items-center h-[5%] rounded-2xl bg-white ${dropShadow}`}>
            <ScrollView horizontal={true} className={`h-[100%]`} contentContainerStyle={styles.scrollViewContent} showsHorizontalScrollIndicator={false}>
            {categories.map(category => (
              <View className='justify-center h-[95%] w-[15%] ml-[3.5%] ' key={category.id}>
                <Categories props={category}/>
              </View>))}
             
              </ScrollView>
              
          </View>
          <View className='m-1 mt-[8%]'>
            <Text className='font-semibold'>Top Recommendations</Text>
          </View>
              {/* Cards */}
              <View className="flex-row mt-[1%] h-[100%] flex-wrap mb-[50%]">
                {cards.map(card => (
                  <TouchableHighlight className={`h-[27vh] w-[45%] rounded-2xl ml-[3%] my-[2%]`}
                  key={card.id} onPress={()=> navigation.navigate('PostDetails', { card })}>
                    <Card card={card}></Card>
                </TouchableHighlight>))}
              </View>
          </ScrollView>


        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
})