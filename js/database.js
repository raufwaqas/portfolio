import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
export default function databaseConfig() {
  const firebaseConfig = {
    apiKey: "AIzaSyDPoGt1fTegyu2KihP0SkLNiAXK91NaUt4",
    authDomain: "personal-portfolio-6c4f9.firebaseapp.com",
    databaseURL: "https://personal-portfolio-6c4f9-default-rtdb.firebaseio.com",
    projectId: "personal-portfolio-6c4f9",
    storageBucket: "personal-portfolio-6c4f9.appspot.com",
    messagingSenderId: "41033403930",
    appId: "1:41033403930:web:a3930bb2810cb4e7c7cba3",
  };

  const app = initializeApp(firebaseConfig);
}
