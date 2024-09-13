import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import backgroundImage from '../assets/ui-images/post.png'
import GlobalStyles from '../GlobalStyles'
import { MaterialIcons } from '@expo/vector-icons'
import { SelectList } from 'react-native-dropdown-select-list'
import cities from '../utils/cities.js';
import states from '../utils/states.json'
import { addPostLocation } from '../features/slices/post.js'
import { createPost } from '../features/actions/postActions.js'
import { useDispatch, useSelector } from 'react-redux'
import { Cloudinary } from '@cloudinary/url-gen'

const Location = ({ navigation }) => {

  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [state, setState] = useState('');
  const [images, setImages] = useState([]);

  const postData = useSelector((state) => state.post);
  const dispatch = useDispatch();

//   const cld = new Cloudinary({
//     cloud: {
//         cloudName: '<your_cloud_name>'
//     },
//     url: {
//         secure: true
//     }
// });

// upload(cld, {file: '<path_to_file>' , callback: (error, response) => {
//         //.. handle response
// }})



//   const cld = new Cloudinary({
//     cloud: {
//         cloudName: 'dsoqxv8kk'
//     },
//     url: {
//         secure: true
//     }
// });
// const cloudinaryImageUpload = async () => {
//     await upload(cld, {file: postData.images[0].uri, callback: (error, response) => {
//             //.. handle response
//             console.log("Response from CLoudinary", response);
//             if(error) {
//               console.log('error', error);
//             }
//     }})
// }

  const handleCreatePostButton = () => {
    const url = 'https://api.cloudinary.com/v1_1/dsoqxv8kk/upload'
    const files = document.querySelector('[type=file]').files;

    cloudinaryImageUpload();
    // handleUploadToCloudinary().then(() => {
      
    // });
    // dispatch(addPostLocation({ city, state, locality }));
    //   console.log('postData', JSON.stringify(postData, null, 2));
    //   dispatch(createPost({...postData, city, state, locality}))
    //   .then((result) => {
    //     console.log('ResultInLocation',JSON.stringify(result, null, 2))
    //     setImages(result.meta.arg.images);
    //     alert(result.payload.message);
    //     navigation.navigate('MyAds')
    //   });
      
  }

  const uploadImages = async (image) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri: image.uri,
        type: image.mimeType,
        name: image.fileName,
      });
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');
  
      const response = await fetch(`https://api.cloudinary.com/v1_1/dsoqxv8kk/image/upload`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      console.log('Cloudinary URL:', data.secure_url);
      return data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload failed', error);
      return null;
    }
  }

  const handleUploadToCloudinary = async () => {
    const uploadPromises = images.map(uploadImages);
    const imageUrls = await Promise.all(uploadPromises);
    console.log('Uploaded Image URLs:', imageUrls);
    // You can now save these URLs in your MongoDB
  };


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -10}
    >
      <ImageBackground source={backgroundImage} className="flex-1 h-full w-full" resizeMethod='cover'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={GlobalStyles.droidSafeArea}>

            <View className='h-full mx-2'>
              {/* Back Button */}
              <View>
                <TouchableOpacity className='mx-2 my-2 w-[20%]'
                  onPress={() => navigation.goBack()}>
                  <MaterialIcons name='keyboard-backspace' size={35} color={'white'} />
                </TouchableOpacity>
              </View>


              {/* Locartion */}
              <View className=' w-[100%] h-64 mt-[10%] '>
                <View className=''>
                  <Text className='text-xs px-1 mt-1'>City*</Text>
                  <SelectList boxStyles={{ borderColor: '#c1c1c1', height: 42 }} placeholder='Enter City' searchPlaceholder='Search'
                    dropdownStyles={{ height: 120 }}
                    setSelected={(val) => setCity(val)} data={cities} save='value'
                  />
                </View>
                <View className=''>
                  <Text className='text-xs px-1 mt-2'>State*</Text>
                  <SelectList boxStyles={{ borderColor: '#c1c1c1', height: 42 }} placeholder='Enter State' searchPlaceholder='Search'
                    dropdownStyles={{ height: 120 }}
                    setSelected={(val) => setState(val)} data={states} save='value' />
                </View>
              </View>

              <View className=' h-20 mt-[10%]'>
                <Text className='text-xs px-1'>Locality / Area*</Text>
                <TextInput className='border border-slate-300 h-8 rounded-xl px-4 py-2'
                  value={locality} onChangeText={setLocality} placeholder="Enter the name of your State" />
              </View>

              {/* Create Post Button */}
              <View className='justify-center items-center w-[100%]'>
                <TouchableOpacity onPress={handleCreatePostButton}
                  className='w-[40%] h-8 items-center justify-center bg-ui_red rounded-xl'>
                  <Text className='text-white font-bold'>Create Post</Text>
                </TouchableOpacity>
              </View>

            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default Location

const styles = StyleSheet.create({})