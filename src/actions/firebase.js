// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtzveYVKunyJZfK4Ptklgc8CDQI-qdyAw",
  authDomain: "shop-aura.firebaseapp.com",
  databaseURL: "https://shop-aura.firebaseio.com",
  projectId: "shop-aura",
  storageBucket: "shop-aura.appspot.com",
  messagingSenderId: "188819437988",
  appId: "1:188819437988:web:6e1ca729c29dea06d8a931",
  measurementId: "G-JW93K01CNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const useUserData = () => {
  return { name: "testUser", email: "testEmail", password: "testPassword" }; // test for now
};
