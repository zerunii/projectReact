import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons'
import {styles} from '../components/styles';


const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>

          <Text style={styles.textTopStyle}>This is Home Screen</Text>
          <View>
            <Button
              title="Go to Setting Tab"
              onPress={() => navigation.navigate('SettingScreen')}
              color="magenta"
            />
            <View style={{height:10}}/>
            <Button
              title="Open News Screen"
              onPress={() => alert('TBD')}
              color="green"
            />
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
