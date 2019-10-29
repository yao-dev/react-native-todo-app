import * as firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDV07dRrPQZK3cIuZ0ZduB7_5HWkKZbWE0',
  databaseURL:'https://react-native-todo-app-c253a.firebaseio.com'
});

export const signupWithEmailAndPassword = async (data = {}) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    return data.onSuccess();
  } catch (e) {
    console.log(e)
    return data.onError();
  }
}

export const signinWithEmailAndPassword = async (data = {}) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    return data.onSuccess();
  } catch (e) {
    console.log(e)
    return data.onError();
  }
}

export default app;
