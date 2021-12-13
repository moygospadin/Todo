import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from '@react-native-firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
const firebaseConfig = {
  apiKey: 'AIzaSyBExygSsa_aiIxbl3fLAn9QeUWyQxUpkLI',
  authDomain: 'todo-77c10.firebaseapp.com',
  projectId: 'todo-77c10',
  storageBucket: 'todo-77c10.appspot.com',
  messagingSenderId: '500942045442',
  appId: '1:500942045442:web:2b40dacc79b4df8ac6c21b',
  measurementId: 'G-C0GKFKC4X4',
  databaseURL: 'https://todo-77c10-default-rtdb.firebaseio.com/',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
