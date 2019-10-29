import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import globalStyles from '../../common/globalStyles';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default Login = (props) => {
  const createAccountLinkProps = {
    style: styles.createAccountLink,
    suppressHighlighting: true,
    onPress: () => props.navigation.navigate('Signup')
  }

  return (
    <SafeAreaView style={styles.container}>
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
        <View>
          {/* USERNAME */}
          <Input
            placeholder='Username'
            iconModule='Feather'
            iconName='user'
            iconPosition='left'
            containerStyle={styles.containerInput}
            style={styles.input}
          />

          {/* PASSWORD */}
          <Input
            placeholder='Password'
            iconModule='Feather'
            iconName='lock'
            iconPosition='left'
            containerStyle={styles.containerInput}
            style={styles.input}
          />
        </View>

        {/* SUBMIT */}
        <Button
          backgroundColor='blue'
          color='#FFF'
          shadowColor='blue'
          large
          containerStyle={styles.containerButton}
          onPress={() => props.navigation.navigate('Home')}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
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
