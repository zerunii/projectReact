import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const AboutScreen = ({route}) => {
  const {email} = route.params;
  return (
    <View style={styles.container}>
      <Text>ไม่เกี่ยวกับเรา</Text>
      <Text>คุณเมลล์ : {email}</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
