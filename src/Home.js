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
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import React, {useState, useRef} from 'react';
import fonts from './fonts';
import CustomBtn from './components/customBtn';
import SimplePicker from 'react-native-simple-picker';
import NumberPlease from 'react-native-number-please';
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';
// import {Picker, DatePicker} from 'react-native-wheel-pick';
const Home = props => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const initialValues = [{id: 'pizza', value: 3}];
  const [pizzas, setPizzas] = useState(initialValues);
  const pizzaNumbers = [{id: 'pizza', label: '🍕', min: 0, max: 99}];
  const [selectedValue, setSelectedValue] = useState('java');
  // const [selectedNumber, setSelectedNumber] = useState(null);
  const [selected, setSelected] = useState('');
  const [numbers, setNumbers] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [selectedNumber, setSelectedNumber] = useState(0);
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: false},
  );

  const handleItemPress = index => {
    // Calculate the selected number based on the index
    const newSelectedNumber = index;
    setSelectedNumber(newSelectedNumber);

    // Scroll to the selected item
    scrollViewRef.current.scrollTo({y: itemHeight * index, animated: true});
  };

  const itemHeight = 50; // Adjust the item height as needed
  const itemCount = 100; // Adjust the number of items as needed
  const scrollViewRef = useRef();

  if (numbers.length === 0) {
    const newNumbers = [];
    for (let i = 0; i <= 100; i++) {
      newNumbers.push(i);
    }
    setNumbers(newNumbers);
  }

  const openModal = item => {
    // console.log('first');
    setSelected(item);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const dataSource = ['1', '2', '3', '4', '5', '6'];
  const ref = React.useRef();
  const [index, setIndex] = React.useState(0);
  const onValueChange = (data, selectedIndex) => {
    setIndex(selectedIndex);
  };

  const options = ['Option1', 'Option2', 'Option3'];
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingTop: 15,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
        }}>
        <Text style={styles.headText}>Today’s Games</Text>
        <View style={styles.shadowContainer}>
          <View style={styles.card}>
            <ImageBackground
              source={require('./assets/purpleBG.png')}
              style={{width: '100%', height: 104}}>
              <View style={{padding: 10}}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: '600',
                        color: '#D2BAF5',
                        fontFamily: fonts.Montserrat,
                      }}>
                      Under or Over
                    </Text>
                    <Image
                      source={require('./assets/iIcon.png')}
                      style={{
                        height: 13,
                        width: 13,
                        alignSelf: 'center',
                        marginLeft: 8,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: '600',
                        color: '#B296DC',
                        fontFamily: fonts.Montserrat,
                      }}>
                      Starting in
                    </Text>
                    <Image
                      source={require('./assets/Clock.png')}
                      style={{
                        height: 14,
                        width: 14,
                        alignSelf: 'center',
                        marginHorizontal: 8,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: '600',
                        color: '#D2BAF5',
                        fontFamily: fonts.Montserrat,
                      }}>
                      03:23:12
                    </Text>
                  </View>
                </View>
                <View style={{marginTop: 15}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: '#D2BAF5',
                      fontFamily: fonts.Montserrat,
                    }}>
                    Bitcoin price will be under{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#D2BAF5',
                      fontFamily: fonts.Montserrat,
                    }}>
                    {' '}
                    $24,524{' '}
                    <Text style={{fontWeight: '400'}}>
                      at 7 a ET on 22nd Jan’21
                    </Text>
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15,
                marginHorizontal: 15,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: fonts.Montserrat,
                    color: '#B5C0C8',
                  }}>
                  Prize Pool
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#333333',
                    marginTop: 8,
                  }}>
                  $12,000
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: fonts.Montserrat,
                    color: '#B5C0C8',
                  }}>
                  Under
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#333333',
                    marginTop: 8,
                  }}>
                  3.25x
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: fonts.Montserrat,
                    color: '#B5C0C8',
                  }}>
                  Over
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#333333',
                    marginTop: 8,
                  }}>
                  1.25x
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    fontFamily: fonts.Montserrat,
                    color: '#B5C0C8',
                  }}>
                  Entry Fees
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#333333',
                    marginTop: 8,
                    alignSelf: 'center',
                  }}>
                  5
                </Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  color: '#727682',
                  fontFamily: fonts.Montserrat,
                }}>
                What’s your prediction?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
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
            <View
              style={{
                // backgroundColor: '#F6F3FA',
                padding: 10,
                flexDirection: 'row',
                // flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // backgroundColor: 'red',
                  flex: 1,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('./assets/profile.png')}
                    style={{alignSelf: 'center', marginRight: 10}}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#727682',
                      fontFamily: fonts.Montserrat,
                    }}>
                    355 Players
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('./assets/mnt.png')}
                    style={{alignSelf: 'center', marginRight: 10}}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: '#727682',
                      fontFamily: fonts.Montserrat,
                    }}>
                    View chart
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#2DABAD',
                height: 10,
                width: '100%',
                borderRadius: 10,
                marginTop: 10,
              }}>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: '#FE4190',
                  width: '70%',
                  height: 10,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}></View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // flex: 1,
              // backgroundColor: 'red',
              marginTop: 10,
            }}>
            <Text style={{color: '#B5C0C8', fontWeight: '500', fontSize: 12}}>
              232 predicted under
            </Text>
            <Text style={{color: '#B5C0C8', fontWeight: '500', fontSize: 12}}>
              123 predicted over
            </Text>
          </View>
        </View>
      </View>
      {/* <Modal
        transparent
        animationType="slide"
        // visible={isModalVisible}
        visible={isModalVisible}
        onRequestClose={closeModal}>
        <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
          <TouchableOpacity disabled={true} style={styles.modalContent}>
            <Text style={{fontWeight: '600', fontSize: 16, color: '#333333'}}>
              Your Prediction is Under
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                color: '#727682',
                marginTop: 20,
              }}>
              Entry tickets
            </Text>

       

            <SimplePicker
              ref={pickerRef}
              options={options}
              // onSubmit={handlePickerSubmit}
            />
           
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal> */}
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
            <Text style={{fontWeight: '600', fontSize: 16, color: '#333333'}}>
              Your Prediction is {selected}
            </Text>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 12,
                color: '#727682',
                marginTop: 20,
              }}>
              Entry tickets
            </Text>
            <View style={[styles.container, {backgroundColor: 'red'}]}>
              <ScrollView
                ref={scrollViewRef}
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
                snapToInterval={itemHeight}
                snapToAlignment="start">
                {Array.from({length: itemCount}, (_, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.item,
                      {
                        backgroundColor:
                          index === selectedNumber ? 'lightblue' : 'white',
                      },
                    ]}
                    onPress={() => handleItemPress(index)}>
                    <Text>{index}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            {/* <Picker
              style={{backgroundColor: 'white', width: 300, height: 215}}
              selectedValue="item0"
              pickerData={numbers}
              onValueChange={value => {
                console.log(value);
              }}
            /> */}
            {/* <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 25}}>
                Select a number:
              </Text>
              <Picker
                selectedValue={selectedNumber}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedNumber(itemValue)
                }
                style={{height: 200, width: 150}}>
                {Array.from({length: 100}, (_, index) => (
                  <Picker.Item
                    key={index}
                    label={`${index + 1}`}
                    value={`${index + 1}`}
                  />
                ))}
              </Picker>
            </View> */}

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#B5C0C8',
                    fontFamily: fonts.Montserrat,
                  }}>
                  You can win
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#03A67F',
                    fontFamily: fonts.Montserrat,
                  }}>
                  $2000
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'center',
                  // backgroundColor: 'red',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#727682',
                    fontFamily: fonts.Montserrat,
                  }}>
                  Total
                </Text>
                <Image
                  source={require('./assets/Fill3.png')}
                  style={{
                    marginHorizontal: 8,
                    // alignSelf: 'center',
                    // height: 10,
                    // width: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#333333',
                    fontFamily: fonts.Montserrat,
                    // textAlign: 'center',
                    // alignSelf: 'center',
                    // marginBottom: 10,
                  }}>
                  5
                </Text>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 20,
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
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    color: 'blue',
    fontSize: 16,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});
