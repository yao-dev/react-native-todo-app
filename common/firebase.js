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

export const getUser = () => {
  return firebase.auth().onAuthStateChanged((user) => user)
}

export const isUserAuth = (onResponse = {}) => {
  const isAuth = getUser() ? true : false;

  if (!isAuth) {
    if (typeof onResponse.no === 'function') return onResponse.no()
    return false;
  }

  if (typeof onResponse.yes === 'function') return onResponse.yes()
  return true;
}

export const signOut = async (data = {}) => {
  try {
    await firebase.auth().signOut()
    return data.onSuccess();
  } catch (e) {
    console.log(e)
    return data.onError();
  }
}

export default app;
