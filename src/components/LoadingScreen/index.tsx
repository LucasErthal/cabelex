import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles';


const IsLoading = () => (
  <View  style={styles.container} >
    <ActivityIndicator color='#DD922E' size='large' />
  </View>
);

export default IsLoading;