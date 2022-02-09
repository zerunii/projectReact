import {View, ScrollView} from 'react-native';
import React from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
} from 'native-base';

const MenuScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          }}>
          เมนูหลัก
        </Text>
        {/* CODE FROM NATIVE BASE */}
        <Content>
          <ListItem icon
            onPress={()=> navigation.navigate('HomeStack')}
          >
            <Left>
              <Button style={{backgroundColor: 'orange'}}>
                <Icon active name="home" />
              </Button>
            </Left>
            <Body>
              <Text>หน้าหลัก</Text>
            </Body>
            <Right>
                <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon
             onPress={()=> navigation.navigate('ProductStack')}
          >
            <Left>
              <Button style={{backgroundColor: 'violet'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>สินค้า</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </View>
    </ScrollView>
  );
};

export default MenuScreen;