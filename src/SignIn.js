import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyAgvVeqLO_dVnxF5M8L7Bi1P3NCD12Bdes',
  authDomain: 'mega-ca516.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

class SignInScreen extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => {
          window.gtag('event', !!user ? 'login': 'logout');
          this.setState({isSignedIn: !!user})
        }
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    // console.log('tokena', firebase.auth().currentUser.getIdToken())
    return (
      <div >
        <p>Welcome {firebase.auth().currentUser.displayName} !!You are now signed-in!!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        {this.props.children(() => firebase.auth().currentUser.getIdToken()) }
      </div>
    );
  }
}

export default SignInScreen;