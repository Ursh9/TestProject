import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  Animated,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import fonts from './fonts';
import CustomBtn from './components/customBtn';

const Home = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [numbers, setNumbers] = useState([]);
  const openModal = item => {
    // console.log('first');
    setSelected(item);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.safeAreaStyle}>
        <Text style={styles.headText}>Today’s Games</Text>
        <View style={styles.shadowContainer}>
          <View style={styles.card}>
            <ImageBackground
              source={require('./assets/purpleBG.png')}
              style={{width: '100%', height: 104}}>
              <View style={{padding: 10}}>
                <View style={styles.pRow}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.underText}>Under or Over</Text>
                    <Image
                      source={require('./assets/iIcon.png')}
                      style={styles.iIconStyle}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.startingStyle}>Starting in</Text>
                    <Image
                      source={require('./assets/Clock.png')}
                      style={styles.timerImg}
                    />
                    <Text style={styles.timerTxt}>03:23:12</Text>
                  </View>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={styles.bitUnd}>
                    Bitcoin price will be under{' '}
                  </Text>
                  <Text style={styles.pText}>
                    $24,524{' '}
                    <Text style={{fontWeight: '400'}}>
                      at 7 a ET on 22nd Jan’21
                    </Text>
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.PPView}>
              <View>
                <Text style={styles.PPText}>Prize Pool</Text>
                <Text style={styles.Dtext}>$12,000</Text>
              </View>
              <View>
                <Text style={styles.PPText}>Under</Text>
                <Text style={styles.Dtext}>3.25x</Text>
              </View>
              <View>
                <Text style={styles.PPText}>Over</Text>
                <Text style={styles.Dtext}>1.25x</Text>
              </View>
              <View>
                <Text style={styles.PPText}>Entry Fees</Text>
                <Text style={[styles.Dtext, {alignSelf: 'center'}]}>5</Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text style={styles.PredText}>What’s your prediction?</Text>
              <View style={styles.BtnView}>
                <CustomBtn
                  OnPress={() => openModal('Under')}
                  LeftIcon={require('./assets/DwnArrow.png')}
                  Title={'Under'}
                  bgClr={'#452C55'}
                />

                <CustomBtn
                  OnPress={() => openModal('Over')}
                  LeftIcon={require('./assets/upArrow.png')}
                  Title={'Over'}
                  bgClr={'#6231AD'}
                />
              </View>
            </View>
            <View style={styles.BtmView}>
              <View style={styles.innerbtmView}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('./assets/profile.png')}
                    style={{alignSelf: 'center', marginRight: 10}}
                  />
                  <Text style={styles.playerText}>355 Players</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('./assets/mnt.png')}
                    style={{alignSelf: 'center', marginRight: 10}}
                  />
                  <Text style={styles.viewCartText}>View chart</Text>
                </View>
              </View>
            </View>
            <View style={styles.bar1}>
              <View style={styles.bar2}></View>
            </View>
          </View>
          <View style={styles.predView}>
            <Text style={styles.predText}>232 predicted under</Text>
            <Text style={styles.predText}>123 predicted over</Text>
          </View>
        </View>
      </View>

      <Modal
        transparent
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={closeModal}>
          <TouchableOpacity
            style={styles.modalContent}
            activeOpacity={1}
            onPress={e => {
              e.stopPropagation();
            }}>
            <Text style={styles.modalTitle}>Your Prediction is {selected}</Text>
            <Text style={styles.entery}>Entry tickets</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.uWin}>You can win</Text>
                <Text style={styles.amtText}>$2000</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={styles.ttText}>Total</Text>
                <Image
                  source={require('./assets/Fill3.png')}
                  style={{
                    marginHorizontal: 8,
                  }}
                />
                <Text style={styles.FIve}>5</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <CustomBtn
                OnPress={closeModal}
                Title={'Submit my prediction'}
                bgClr={'#6231AD'}
                isFull={true}
              />
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  shadowContainer: {
    // marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 20, // for Android
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    // padding: 20,
    borderRadius: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderRadius: 10,
    // alignItems: 'center',
  },

  safeAreaStyle: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  pRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  underText: {
    fontSize: 12,
    fontFamily: '600',
    color: '#D2BAF5',
    fontFamily: fonts.Montserrat,
  },
  iIconStyle: {
    height: 13,
    width: 13,
    alignSelf: 'center',
    marginLeft: 8,
  },
  startingStyle: {
    fontSize: 12,
    fontFamily: '600',
    color: '#B296DC',
    fontFamily: fonts.Montserrat,
  },
  timerImg: {
    height: 14,
    width: 14,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  timerTxt: {
    fontSize: 14,
    fontFamily: '600',
    color: '#D2BAF5',
    fontFamily: fonts.Montserrat,
  },
  bitUnd: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D2BAF5',
    fontFamily: fonts.Montserrat,
  },
  pText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D2BAF5',
    fontFamily: fonts.Montserrat,
  },
  PPView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 15,
  },
  PPText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: fonts.Montserrat,
    color: '#B5C0C8',
  },
  Dtext: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginTop: 8,
  },
  PredText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#727682',
    fontFamily: fonts.Montserrat,
  },
  BtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  BtmView: {
    padding: 10,
    flexDirection: 'row',
  },
  innerbtmView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    flex: 1,
  },
  playerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#727682',
    fontFamily: fonts.Montserrat,
  },
  viewCartText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#727682',
    fontFamily: fonts.Montserrat,
  },
  bar1: {
    backgroundColor: '#2DABAD',
    height: 10,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  bar2: {
    position: 'absolute',
    backgroundColor: '#FE4190',
    width: '70%',
    height: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  predView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
    // backgroundColor: 'red',
    marginTop: 10,
  },
  predText: {color: '#B5C0C8', fontWeight: '500', fontSize: 12},
  modalTitle: {fontWeight: '600', fontSize: 16, color: '#333333'},
  entery: {
    fontWeight: '600',
    fontSize: 12,
    color: '#727682',
    marginTop: 20,
  },
  uWin: {
    fontSize: 12,
    fontWeight: '500',
    color: '#B5C0C8',
    fontFamily: fonts.Montserrat,
  },
  amtText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#03A67F',
    fontFamily: fonts.Montserrat,
  },
  ttText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#727682',
    fontFamily: fonts.Montserrat,
  },
  FIve: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
    fontFamily: fonts.Montserrat,
  },
});
