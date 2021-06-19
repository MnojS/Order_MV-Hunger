import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBIM7nJwTwBrkn2xTr-3Di2KtIqsVYeb7U",
  authDomain: "mv-hunger.firebaseapp.com",
  projectId: "mv-hunger",
  storageBucket: "mv-hunger.appspot.com",
  messagingSenderId: "141253103370",
  appId: "1:141253103370:web:8a77cdf0a26a58eb0034f3",
  measurementId: "G-VEHT5E28QZ",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;