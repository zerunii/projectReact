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

const DetailScreen = ({navigation, route}) => {
  const {id, title} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // title:'รายละเอียดสินค้า' //set แบบ statice
      title: title, //set แบบ dynamic
    });
  }, [navigation]);

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async id => {
    setLoading(true);
    const res = await axios.get(
      'https://api.codingthailand.com/api/course/' + id,
    );
    setDetail(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  const _onrefresh = () => {
    getData(id);
  };

  return (
    <View>
      <FlatList
        data={detail}
        keyExtractor={(item,index) => item.ch_id.toString()}
        onRefresh={_onrefresh}
        refreshing={loading}
        renderItem={({item,index}) => (
          <ListItem thumbnail>
            <Left>
              <Text>{index+1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.ch_detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
