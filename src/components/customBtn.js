import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomBtn = props => {
  const {LeftIcon, Title, bgClr, OnPress, isFull} = props;
  return (
    <TouchableOpacity
      onPress={OnPress}
      style={{
        backgroundColor: bgClr,
        borderRadius: 45,
        alignItems: 'center',
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        width: isFull ? '100%' : '45%',
      }}>
      <Image
        source={LeftIcon}
        style={{height: 11, width: 11.5, marginRight: 8}}
      />
      <Text style={{fontWeight: '600', fontSize: 14, color: '#fff'}}>
        {Title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({});
