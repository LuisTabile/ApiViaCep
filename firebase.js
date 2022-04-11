import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCC9WKBtVMrZjnbFPNfW7QZDukv0UJ5mVU",
  authDomain: "registration-form-bf915.firebaseapp.com",
  databaseURL: "https://registration-form-bf915-default-rtdb.firebaseio.com",
  projectId: "registration-form-bf915",
  storageBucket: "registration-form-bf915.appspot.com",
  messagingSenderId: "426333220417",
  appId: "1:426333220417:web:721a3be8ecd73cd18e20c0"
};

const app1 = initializeApp(firebaseConfig);
export const database = getDatabase(app1);