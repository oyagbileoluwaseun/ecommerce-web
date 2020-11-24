import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc2QlCnT1MG8Wmlo1FZlwEYwVUk0jh0Ew",
  authDomain: "ecommercetask-13e1c.firebaseapp.com",
  databaseURL: "https://ecommercetask-13e1c.firebaseio.com",
  projectId: "ecommercetask-13e1c",
  storageBucket: "ecommercetask-13e1c.appspot.com",
  messagingSenderId: "609519409633",
  appId: "1:609519409633:web:db20a9b7bb02819873daa0",
  measurementId: "G-V410YE5C06"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };