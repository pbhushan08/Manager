import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
componentWillMount() {
    const config= {
        apiKey: "AIzaSyDMc-4ErI6r4wqF9Z6zX3J_wZuXUOJZXAA",
        authDomain: "manager-4485e.firebaseapp.com",
        databaseURL: "https://manager-4485e.firebaseio.com",
        projectId: "manager-4485e",
        storageBucket: "manager-4485e.appspot.com",
        messagingSenderId: "985068746140"
    };

    firebase.initializeApp(config);  
    }

    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store = {store}>
            <Router />
        </Provider>
    )
}
};

export default App;