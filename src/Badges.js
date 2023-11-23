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

const Badges = () => {
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
        <View style={styles.renderlistV}>
          <View style={styles.rImge}>
            <Image source={item.image} style={styles.rImage1} />
          </View>
          <View style={styles.rTextV}>
            <Text style={styles.hText}>{item.heading}</Text>
            <Text style={styles.textDes}>{item.desc}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{height: '100%', width: '100%'}}>
      <FlatList data={data} renderItem={item => RenderList(item.item)} />
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  renderlistV: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  rImge: {
    width: '25%',
    paddingVertical: 10,
  },
  rImage1: {height: 60, width: 60, alignSelf: 'center'},
  rTextV: {
    width: '75%',
    backgroundColor: 'white',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  hText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333333',
    fontFamily: fonts.Montserrat,
    marginRight: 50,
    // textAlign: 'center',
    marginBottom: 10,
  },
  textDes: {
    fontWeight: '500',
    fontSize: 14,
    color: '#727682',
    fontFamily: fonts.Montserrat,
    marginRight: 50,
    // textAlign: 'center',
  },
});
