import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from '../components/styles';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>This is Setting Screen</Text>
          <View>
            <Button
              title="Go to home Tab"
              onPress={() => navigation.navigate('HomeScreen')}
              color="black"
            />
             <View style={{height:10}}/>
            <Button
              title="Open News Screen"
              onPress={() => alert('TBD')}
              color="green"
            />
             <View style={{height:10}}/>
            <Button
              title="Go to Profile Screen"
              onPress={() => navigation.navigate('ProfileScreen')}
              color="orange"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;
