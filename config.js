import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCULeGi9gB00_EfQ4DfWCT3dIqtadVQUMw",
  authDomain: "wireless-buzzer-app-dcf63.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-dcf63.firebaseio.com",
  projectId: "wireless-buzzer-app-dcf63",
  storageBucket: "wireless-buzzer-app-dcf63.appspot.com",
  messagingSenderId: "1054265514102",
  appId: "1:1054265514102:web:f6ab948118dd4e8947e757"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()