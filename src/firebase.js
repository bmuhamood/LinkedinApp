import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjzkP7DmWQfqxpDNITtwd5FdTBQvaqn-A",
    authDomain: "linkedin-clone-yt-720a6.firebaseapp.com",
    projectId: "linkedin-clone-yt-720a6",
    storageBucket: "linkedin-clone-yt-720a6.appspot.com",
    messagingSenderId: "217826409358",
    appId: "1:217826409358:web:cda22e9a8e9361721842df",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };