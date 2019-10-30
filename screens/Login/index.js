import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { signinWithEmailAndPassword } from '../../common/firebase';
import globalStyles from '../../common/globalStyles';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';

export default Login = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const getFieldsError = () => {
    let error = {}
    if (!email.trim().length) error.email = 'The field is required';
    if (!password.length) error.password = 'The field is required';

    if (error.email) setEmailError(error.email);
    if (error.password) setPasswordError(error.password);

    return Object.keys(error).length ? error : false;
  }

  const signin = () => {
    if (getFieldsError()) return;

    setLoading(true)
    signinWithEmailAndPassword({
      email,
      password,
      onSuccess: () => {
        setLoading(false);
        setEmail('');
        setPassword('');
        props.navigation.navigate('Home')
      },
      onError: () => {
        setLoading(false)
        setFormError('There is an error')
      },
    })
  }

  const createAccountLinkProps = {
    style: styles.createAccountLink,
    suppressHighlighting: true,
    onPress: () => props.navigation.navigate('Signup')
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={20}>
          {/* BODY */}
          <View style={styles.body}>
            <Image style={{ width: '100%', height: 250 }} source={require('../../assets/login.png')} />
            {/* TITLE */}
            <Text style={styles.title}>
              Login
            </Text>
            <Text style={styles.createAccountText}>
              Don't have an account? <Text {...createAccountLinkProps}>Create your account</Text>
            </Text>

            {/* INPUTS */}
            <Form formError={formError}>
              {/* EMAIL */}
              <Input
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                onFocus={() => {
                  setEmailError('');
                  setFormError('');
                }}
                style={styles.input}
                iconModule='MaterialCommunityIcons'
                iconName='email-outline'
                iconPosition='left'
                errorText={emailError}
                containerStyle={styles.containerInput}
              />

              {/* PASSWORD */}
              <Input
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={signin}
                returnKeyType='go'
                onFocus={() => {
                  setPasswordError('');
                  setFormError('');
                }}
                secureTextEntry
                style={styles.input}
                iconModule='Feather'
                iconName='lock'
                iconPosition='left'
                containerStyle={styles.containerInput}
                errorText={passwordError}
              />
            </Form>

            {/* SUBMIT */}
            <Button
              backgroundColor='blue'
              color='#FFF'
              shadowColor='blue'
              large
              containerStyle={styles.containerButton}
              isLoading={isLoading}
              onPress={signin}
            >
              LOGIN
            </Button>

            {/* LOGIN OPTIONS TEXT */}
            <Text style={styles.loginOptionsText}>
              Or Login with
            </Text>

            {/* LOGIN OPTIONS */}
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              {/* FACEBOOK */}
              <Button
                backgroundColor='#273c75'
                color='#FFF'
                shadowColor='grey'
                containerStyle={{ marginRight: 10}}
                iconModule='MaterialCommunityIcons'
                iconName='facebook'
                iconColor='#FFF'
              />
              {/* TWITTER */}
              <Button
                backgroundColor='#00a8ff'
                color='#FFF'
                shadowColor='grey'
                containerStyle={{ marginRight: 10}}
                iconModule='MaterialCommunityIcons'
                iconName='twitter'
                iconColor='#FFF'
              />
              {/* GOOGLE+ */}
              <Button
                backgroundColor='#e84118'
                color='#FFF'
                shadowColor='grey'
                containerStyle={{}}
                iconModule='Ionicons'
                iconName='logo-googleplus'
                iconColor='#FFF'
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: globalStyles.marginTop,
    marginHorizontal: 40
  },
  title: {
    ...globalStyles.title,
    marginBottom: 10,
  },
  createAccountText: {
    marginBottom: 30,
  },
  createAccountLink: {
    color: 'red'
  },
  containerInput: {
    marginBottom: 20
  },
  input: {},
  containerButton: {
    marginBottom: 25
  },
  loginOptionsText: {
    textAlign: 'center',
    marginBottom: 25
  }
})
