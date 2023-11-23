import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import fonts from './fonts';

import {launchImageLibrary} from 'react-native-image-picker';
import GamePlayed from './GamePlayed';
import Badges from './Badges';
import TopTabs from './components/TopTabs';

const Profile = () => {
  const [imageSource, setImageSource] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setImageSource(imageUri);
      }
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {console.log(imageSource)}
      {/* <ScrollView style={{flex: 1}}> */}
      <View
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 10,
            // backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('./assets/Iconn.png')}
            style={{height: 30, width: 29, alignSelf: 'flex-start'}}
          />
          <Text style={{alignSelf: 'center'}}>Profile</Text>
          <Image
            source={require('./assets/message.png')}
            style={{
              height: 20,
              width: 20,
              alignSelf: 'center',
              // borderRadius: 30,
            }}
          />
        </View>
        <View>
          <Image
            source={
              imageSource
                ? {uri: imageSource}
                : require('./assets/PrfImage.png')
            }
            style={{
              height: 75,
              width: 75,
              alignSelf: 'center',
              marginTop: 30,
              borderRadius: 50,
            }}
          />
          <TouchableOpacity onPress={() => openImagePicker()}>
            <Image
              source={require('./assets/upld.png')}
              style={{
                height: 24,
                width: 24,
                alignSelf: 'center',
                marginTop: 30,
                position: 'absolute',
                // top: 55,
                right: 170,
                bottom: 1,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: '500',
              fontSize: 14,
              fontFamily: fonts.Montserrat,
              color: '#333333',
              marginTop: 10,
            }}>
            Jina Simons
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: '500',
              fontSize: 12,
              fontFamily: fonts.Montserrat,
              color: '#727682',
              marginTop: 10,
            }}>
            6000 Pts
          </Text>
          <Text
            style={{
              marginHorizontal: 10,
              fontWeight: '500',
              fontSize: 14,
              color: '#727682',
              fontFamily: fonts.Montserrat,
              marginTop: 10,
            }}>
            I’m a software developer that has been in the crypto space since
            2012. And I’ve seen it grow and falter over a period of time. Really
            happy to be here!
          </Text>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Image
              source={require('./assets/Logout.png')}
              style={{width: 18, height: 14, alignSelf: 'center'}}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontFamily: fonts.Montserrat,
                color: '#727682',
                marginLeft: 10,
              }}>
              Logout
            </Text>
          </View>
          <Image
            source={require('./assets/star.png')}
            style={{
              height: 31,
              width: 26.8,
              position: 'absolute',
              top: 275,
              bottom: 0,
              right: 0,
              left: 190,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#EEEAF3',
              marginHorizontal: 10,
              justifyContent: 'space-between',
              marginVertical: 10,
              marginTop: 35,
              marginBottom: 30,
            }}>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: fonts.Montserrat,
                  color: '#727682',
                  marginBottom: 13,
                }}>
                Under or Over
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./assets/up.png')}
                  style={{height: 30, width: 30}}
                />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    fontFamily: fonts.Montserrat,
                    color: '#4F4F4F',
                  }}>
                  81%
                </Text>
              </View>
            </View>
            <View style={{marginRight: 40, marginTop: 20, marginBottom: 10}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  fontFamily: fonts.Montserrat,
                  color: '#727682',
                  marginBottom: 13,
                }}>
                Top 5
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('./assets/dwn.png')}
                  style={{height: 30, width: 30}}
                />
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    fontFamily: fonts.Montserrat,
                    color: '#4F4F4F',
                  }}>
                  -51%
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{height: '100%', width: '100%', flex: 1}}>
          <TopTabs />
          {/* <Text>ojoj</Text> */}
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
