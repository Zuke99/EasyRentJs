import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Platform, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, Button, Image, Alert, ScrollView } from 'react-native'
import backgroundImage from '../assets/ui-images/post.png'
import React, { useState } from 'react'
import GlobalStyles from '../GlobalStyles'
import { Feather } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { Cloudinary } from "@cloudinary/url-gen";
import { useDispatch } from 'react-redux';
import { addPostDetails } from '../features/slices/post.js';

const shadowByPlatform = `${Platform.OS === 'android' ? 'shadow-lg shadow-black' : 'shadow-sm shadow-black'}`
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dsoqxv8kk'
  }
});

const cityList = [
  { key: 1, value: 'hyderabad' },
  { key: 2, value: 'guntur' }
]

const Post = ({ navigation }) => {
  const [uploadButtons, setUploadButtons] = useState([
    { id: 0, hasImage: false, uri: '' },
    { id: 1, hasImage: false, uri: '' },
    { id: 2, hasImage: false, uri: '' },
    { id: 3, hasImage: false, uri: '' },
    { id: 4, hasImage: false, uri: '' }
  ]);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [specification, setspecification] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [state, setState] = useState('');

  const dispatch = useDispatch();


  const pickImage = async (id) => {
    const { status } = await ImagePicker.
      requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {

      // If permission is denied, show an alert 
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera  
        roll permission to upload images.`
      );
    } else {

      // Launch the image library and get 
      // the selected image 
      const result =
        await ImagePicker.launchImageLibraryAsync();


      if (!result.canceled) {
        // If an image is selected (not cancelled),  
        // update the file state variable 
        setImage([...image, result.assets[0].uri]);
        const updatedButtons = uploadButtons.map(button =>
          button.id === id ? { ...button, hasImage: true, uri: result.assets[0].uri } : button
        );
        setUploadButtons(updatedButtons);
        setSelectedImage(result.assets[0].uri);

        // Clear any previous errors 
        setError(null);
      } else {

      }

    }
  };

  const handleConfirmDeleteImage = () => {
    Alert.alert('Are you sure you want to remove the image?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress: () => handleDeleteImage(),
      }
    ])
  }

  const handleDeleteImage = () => {

    const updatedButtons = uploadButtons.map(button =>
      button.uri === selectedImage ? { ...button, hasImage: false, uri: '' } : button
    );
    setUploadButtons(updatedButtons);
    setSelectedImage(null);
  }

  const handleSelectedImage = (id) => {
    console.log("id", id)
    setSelectedImage(uploadButtons[id].uri);
    console.log("SetSelected image called", selectedImage)

  }

  const imageUploadHanlder = async () => {


  }

  const handleNextButton = () => {
    dispatch(addPostDetails({title, specification, description }))
    navigation.navigate('Price');
    
  }



  return (

    <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : -10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={GlobalStyles.droidSafeArea}>

            <View className='h-full'>

              {/* Image Preview */}
              <View className='h-[40%] mt-[5%] justify-center items-center'>
                <View className={`w-[90%] h-[80%] rounded-2xl bg-white ${shadowByPlatform} justify-center items-center`}>
                  {selectedImage === null ? <View className='flex-row absolute h-[50%] w-[90%] items-center justify-center'>
                    <Text className='text-3xl text-gray-400 font-bold'> Image Preview </Text>
                    <Feather name="upload" size={28} color="gray" />
                  </View> : (
                    <View className='w-[100%] flex-row'>
                      <View style={styles.imageContainer} className='mt-3  w-[80%] items-end'>
                        <Image source={{ uri: selectedImage }}
                          style={styles.image}
                        />
                      </View>
                      <View className='w-[20%] items-end'>
                        <TouchableOpacity className='my-2 mx-2' onPress={handleConfirmDeleteImage}>
                          <Ionicons name='close-circle-outline' size={28} color="red" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>




                <View className={`flex-row h-[20%] w-[100%] justify-center items-end `}>
                  {uploadButtons.map(button => (
                    <View className={`h-[90%] w-[13%] ml-[2%] `} key={button.id}>
                      {!button.hasImage ? <TouchableOpacity onPress={() => pickImage(button.id)} className='border border-slate-400 rounded-lg'>
                        <View className='h-[100%] w-[100%] items-center justify-center'>
                          <Feather name="upload" size={18} color="gray" />
                          <Text className='text-xs text-gray-400 font-bold'>Upload</Text>
                        </View>
                      </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => handleSelectedImage(button.id)} className='rounded-lg'>
                          <View className='h-[100%] w-[100%] items-center justify-center bg-green-500 rounded-lg'>
                            <MaterialIcons name='done' size={25} color='white' className='font-extrabold' />
                          </View>
                        </TouchableOpacity>
                      }
                    </View>))}
                </View>
              </View>

              {/* Input Fields */}
              <View className='h-[50%] items-center justify-start mt-[2%]'>

                <View className=' w-[70%] h-8 my-[3%]'>
                  <Text className='text-xs px-1'>Title*</Text>
                  <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                    value={title} onChangeText={setTitle} placeholder="Enter Title" />
                </View>

                <View className=' w-[70%] h-8 my-[3%]'>
                  <Text className='text-xs px-1'>Specification*</Text>
                  <TextInput className='border border-slate-300 h-8 rounded-xl px-5'
                    value={specification} onChangeText={setspecification} placeholder="Enter Specifications of the Product" />
                </View>

                <View className=' w-[70%] h-16 my-[3%]'>
                  <Text className='text-xs px-1'>Description</Text>
                  <TextInput className='border border-slate-300 h-16 rounded-xl px-4 py-2'
                    value={description} onChangeText={setDescription} placeholder="Brief Description about your product" multiline={true} />
                </View>

               



                {/* <TouchableOpacity onPress={() => navigation.navigate('Price')} */}
                <TouchableOpacity onPress={handleNextButton}
                  className='w-[40%] h-8 my-[7%] items-center justify-center bg-ui_red rounded-xl'>
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
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 250,
    height: "100%",
    borderRadius: 8,
    resizeMode: 'center'
  },
})