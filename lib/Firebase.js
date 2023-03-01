import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyDrQOfv531TtgBwuzeZYkzvlYMZ8mqlDDo',
  authDomain: "uk-care-connection.firebaseapp.com",
  projectId: "uk-care-connection",
  storageBucket: "uk-care-connection.appspot.com",
  messagingSenderId: "679034708150",
  appId: '1:679034708150:web:2c1f1c024a416268714617',
  measurementId: "G-BPG0TK6MKG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
// const analytics = getAnalytics(app);