import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
} from 'native-base';
import React, {Component} from 'react';
import axios from 'axios';
import {Formik, Field} from 'formik';


const LoginScreen = ({navigation}) => {
  return (
    <Container>
    <Content padder>
      <Formik
      initialValues={{
        email: '',
        password: '',
      }}
        onSubmit={async (values, {setSubmitting}) => {
          try {
            const url = 'https://api.codingthailand.com/api/login'
            const res = await axios.post(url,{
                email : values.email, 
                password : values.password
              })
          } catch (error) { 
            
          } finally{
            setSubmitting = false
          }

        }}>
        {({errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting}) => ( 
          <Form>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input 
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType='email-address'
              />
            </Item>

            <Item fixedLabel>
              <Label>Password</Label>
              <Input 
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                keyboardType='number-pad'
                secureTextEntry={true}
              />
            </Item>

            <Button
              onPress={handleSubmit}
              disabled = {isSubmitting}
              block
              large
              style={{marginTop: 30, backgroundColor: 'magenta'}}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                LOGIN
              </Text>
            </Button>
          </Form>
        )}
      </Formik>
    </Content>
  </Container>
  )
}

export default LoginScreen