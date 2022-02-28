// Import the functions you need from the SDKs you need
import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot((/* { app, router, ... } */) => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: 'AIzaSyA1Oz5YJdGN3T0fMdd7QQ9WrBI6yhbUA60',
    authDomain: 'web-app-c2d6e.firebaseapp.com',
    projectId: 'web-app-c2d6e',
    storageBucket: 'web-app-c2d6e.appspot.com',
    messagingSenderId: '120042492551',
    appId: '1:120042492551:web:a46c36674300b953ac5e22',
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
});
