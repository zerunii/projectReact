import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

import axios from 'axios';

import {useFocusEffect} from '@react-navigation/native';

import {version} from 'react/cjs/react.production.min';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let cancelToken;

  const getData = async () => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course',{
      cancelToken : cancelToken.token
    });
    //alert(JSON.stringify(res.data.data));
    setProduct(res.data.data);
    setLoading(false);
  };

  //ทุกๆ ครั้งที่เข้าหน้า product หรือ focus ที่หน้า product
  //เราจะให้ไปดึงข้อมูลที่ server ตลอดเวลา
  useFocusEffect(
    //usecallBack เอาไว้ optimize ฟังก์ชัน เพื่อไม่ให้ re-render ของ child component
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();
      return () => {
        //alert('Exit ProductScreen')
        cancelToken.cancel();
      };
    }, []),
  );

  //useEffect จะทำงานเมื่อคลิกที่เมนูสินค้า
  // useEffect(() => {
  //   getData();
  // }, []);

  if (loading === true) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="gold" size="large" />
      </View>
    );
  }

  const _onrefresh = () => {
    getData();
  };

  return (
    <View>
      <FlatList
        //data ใช้สำหรับวนรอบเพื่อแสดงข้อมูลใน Backend
        data={product}
        //keyExtractor คีย์หลัก
        keyExtractor={(item, index) => item.id.toString()}
        //pull to refresh
        onRefresh={_onrefresh}
        refreshing={loading} // ถ้า refreshig เป็น true คือจะรอให้ refresh data
        //renderItem สำหรับ render UI ที่จะให้ user มองเห็น
        renderItem={({item}) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate('DetailScreen', {
                id: item.id,
                title: item.title, // นำค่า title จาก backend ส่งให้ตัวแปร title เพื่อนำไปใช้ใน page Detail Screen
              });
            }}>
            <Left>
              <Thumbnail square source={{uri: item.picture}} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
