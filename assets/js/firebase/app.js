  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB5nC4PJ3yb9iGJ9QXrba9SgjOWrHKJX9U",
    authDomain: "projeto-teste-dd25c.firebaseapp.com",
    projectId: "projeto-teste-dd25c",
    storageBucket: "projeto-teste-dd25c.appspot.com",
    messagingSenderId: "500136252433",
    appId: "1:500136252433:web:b8fd71f2e12e8899510db0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    
  export default app