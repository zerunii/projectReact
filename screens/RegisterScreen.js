import {View, Text} from 'react-native';
import React from 'react';
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
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validateSchema = Yup.object().shape({
  name: Yup.string().required('กรุณาป้อนชื่อ-สกุล'),
  email: Yup.string()
    .email('รูปแบบอีเมล์ไม่ถูกต้อง')
    .required('กรุณากรอกอีเมล์ใหม่'),
  password: Yup.string()
    .min(3, 'รหัสผ่าน 3 ตัวอักษรขึ้นไป')
    .required('กรุณาป้อนรหัสผ่านใหม่'),
});

const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <Formik
          //ค่าเริ่มต้นของข้อมูลโดยกำหนดให้ตรงกัน backend
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={async(values,{setSubmitting}) => {
            // same shape as initial values
            //console.log(values);
            //alert(JSON.stringify(values));
            try {
              const url = 'https://api.codingthailand.com/api/register';
              const res = await axios.post(url,{
                name : values.name,
                email : values.email,
                password : values.password
              });
              alert(res.data.message)
              //กลับหน้าหลัก
              navigation.navigate('HomeScreen');
            } catch (error) { // unable to save data to server ex. duplicate email
              alert(error.response.data.errors.email[0]);
            }finally{
              //ให้ปุ่มสามารถกลับมาคลิกได้อีก
              setSubmitting(false);
            }
          }}>
          {/*//errors ใช้สำหรับการตรวจสอบ state (ถ้าผู้ใช้ไม่กรอกข้อมูลจะให้ error อะไรเกิดขึ้น)*/}
          {/* touched  เมื่อผู้ใช้ไปกดที่ name และเลื่อนเม้าส์ไปด้านนอกช่อง input โดยไม่กรอกข้อมูล*/}

          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              {/* กำหนดให้มีเส้นสีแดงถ้าผู้ใช้ไม่กรอกข้อมูลชื่อ */}
              <Item
                fixedLabel
                error={errors.name && touched.name ? true : false}>
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name && <Icon name="close-circle" />}
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.name}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                error={errors.email && touched.email ? true : false}>
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                error={errors.password && touched.password ? true : false}>
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  keyboardType="number-pad"
                  secureTextEntry={true}
                />
                {errors.password && touched.password && (
                  <Icon name="close-circle" />
                )}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{color: 'red'}}>{errors.password}</Label>
                </Item>
              )}
              <Button
                onPress={handleSubmit}
                disabled={isSubmitting}
                block
                large
                style={{marginTop: 30, backgroundColor: 'darkgray'}}>
                <Text
                  style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
                  Register
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;
