import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import fonts from './fonts';

const GamePlayed = () => {
  const data = [
    {
      image: require('./assets/ListImg.png'),
      heading: 'First Stripe Earned',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      image: require('./assets/ListImg.png'),
      heading: 'Born Winner',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      image: require('./assets/ListImg.png'),
      heading: 'Trader of the Month',
      desc: 'Won 7 under-over games in a row',
    },
    {
      image: require('./assets/ListImg.png'),
      heading: 'Rising Star',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      image: require('./assets/ListImg.png'),
      heading: 'Jackpot',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      image: require('./assets/ListImg.png'),
      heading: 'Impossible',
      desc: 'Top 10% of highest spending players in a month',
    },
    {
      image: require('./assets/ListImg.png'),
      heading: 'First Stripe Earned',
      desc: 'Top 10% of highest spending players in a month',
    },
  ];
  const RenderList = item => {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              width: '25%',
              paddingVertical: 10,
            }}>
            <Image
              source={item.image}
              style={{height: 60, width: 60, alignSelf: 'center'}}
            />
          </View>
          <View
            style={{
              width: '75%',
              backgroundColor: 'white',
              paddingVertical: 10,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: '#333333',
                fontFamily: fonts.Montserrat,
                marginRight: 50,
                // textAlign: 'center',
                marginBottom: 10,
              }}>
              {item.heading}
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#727682',
                fontFamily: fonts.Montserrat,
                marginRight: 50,
                // textAlign: 'center',
              }}>
              {item.desc}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{height: '100%', width: '100%'}}>
      <FlatList data={data} renderItem={item => RenderList(item.item)} />
      {/* <RenderList /> */}
    </View>
  );
};

export default GamePlayed;

const styles = StyleSheet.create({});
