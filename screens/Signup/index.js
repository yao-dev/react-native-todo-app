import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { signupWithEmailAndPassword } from '../../common/firebase';
import globalStyles from '../../common/globalStyles';
import Button from '../../components/Button';
import Input from '../../components/Input';


export default Signup = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createAccountLinkProps = {
    style: styles.createAccountLink,
    suppressHighlighting: true,
    onPress: () => props.navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* BODY */}
      <View style={styles.body}>
        <Image style={{ width: '80%', height: 250, alignSelf: 'center' }} source={require('../../assets/signup.png')} />
        {/* TITLE */}
        <Text style={styles.title}>
          Signup
        </Text>
        <Text style={styles.createAccountText}>
          Already have an account? <Text {...createAccountLinkProps}>Login to your account</Text>
        </Text>

        {/* INPUTS */}
        <View>
          {/* EMAIL */}
          <Input
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            style={styles.input}
            iconModule='MaterialCommunityIcons'
            iconName='email-outline'
            iconPosition='left'
            containerStyle={styles.containerInput}
          />

          {/* PASSWORD */}
          <Input
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => {
              setLoading(true)
              signupWithEmailAndPassword({
                email,
                password,
                onSuccess: () => {
                  setLoading(false)
                  setEmail('');
                  setPassword('');
                  props.navigation.navigate('Home')
                },
                onError: () => setLoading(false),
              })
            }}
            returnKeyType='go'
            secureTextEntry
            style={styles.input}
            iconModule='Feather'
            iconName='lock'
            iconPosition='left'
            containerStyle={styles.containerInput}
          />
        </View>

        {/* SUBMIT */}
        <Button
          backgroundColor='blue'
          color='#FFF'
          shadowColor='blue'
          large
          containerStyle={styles.containerButton}
          isLoading={isLoading}
          onPress={() => {
            setLoading(true)
            signupWithEmailAndPassword({
              email,
              password,
              onSuccess: () => {
                setLoading(false)
                setEmail('');
                setPassword('');
                props.navigation.navigate('Home')
              },
              onError: () => setLoading(false),
            })
          }}
        >
          CREATE MY ACCOUNT
        </Button>

        {/* LOGIN OPTIONS TEXT */}
        <Text style={styles.loginOptionsText}>
          Or signup with
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
