import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp(
  
    {
        apiKey: "AIzaSyBm18oOYd1-Eu9cAhNBflmpLW9OGJ79cNs",
        authDomain: "insta-reels-ca6aa.firebaseapp.com",
        projectId: "insta-reels-ca6aa",
        storageBucket: "insta-reels-ca6aa.appspot.com",
        messagingSenderId: "719042252207",
        appId: "1:719042252207:web:f5ec6abc744476296bf35a"
    }
)

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('Users'),
    posts: firestore.collection('Posts'),
    comments: firestore.collection('Comments'),
    getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();