import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCv_qhhXIplAcu1Z_HKbEtH7c-tN_Gs8Bg",
    authDomain: "twitter-clone-3b6fd.firebaseapp.com",
    projectId: "twitter-clone-3b6fd",
    storageBucket: "twitter-clone-3b6fd.appspot.com",
    messagingSenderId: "479219891786",
    appId: "1:479219891786:web:89ce5d64a85f4a4a1d30b3",
    measurementId: "G-QZ3L41007K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;