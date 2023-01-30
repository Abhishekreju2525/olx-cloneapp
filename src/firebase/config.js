import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-JU4uIhDev9JHE3tI1OmynqvG11bTnf8",
    authDomain: "olx-clone-7bb2e.firebaseapp.com",
    projectId: "olx-clone-7bb2e",
    storageBucket: "olx-clone-7bb2e.appspot.com",
    messagingSenderId: "568040181302",
    appId: "1:568040181302:web:21698935caa482200fd297",
    measurementId: "G-QMDCXRY3RY"
};

export const firebase = firebase.initializeApp(firebaseConfig)