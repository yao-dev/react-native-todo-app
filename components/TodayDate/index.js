import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default TodayDate = () => {
  return (
    <View>
      <Text style={styles.day}>{moment().format('dddd')}</Text>
      <Text style={styles.date}>{moment().format('DD MMMM')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  day: {
    color: '#FFF',
    fontSize: 32,
    marginBottom: 5
  },
  date: {
    color: '#FFF',
    fontSize: 20
  }
})
