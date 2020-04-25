import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBgQayUZ9BHCk909HzMsg3Bzs8nRRRBk8I",
    authDomain: "crwn-db-690ba.firebaseapp.com",
    databaseURL: "https://crwn-db-690ba.firebaseio.com",
    projectId: "crwn-db-690ba",
    storageBucket: "crwn-db-690ba.appspot.com",
    messagingSenderId: "823107299190",
    appId: "1:823107299190:web:f2117ae9810caaeec6fc57",
    measurementId: "G-XT03XH0QXP"
  };
  
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
  
	const userRef = firestore.doc(`users/${userAuth.uid}`);
  
	const snapShot = await userRef.get();
  
	if (!snapShot.exists) {
	  const { displayName, email } = userAuth;
	  const createdAt = new Date();
	  try {
		await userRef.set({
		  displayName,
		  email,
		  createdAt,
		  ...additionalData
		});
	  } catch (error) {
		console.log('error creating user', error.message);
	  }
	}
  
	return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;