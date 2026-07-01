import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZ2cE6sxr9T0zb5tXmfumJhwghL_XSJes",
  authDomain: "ay-byay-c2d3f.firebaseapp.com",
  projectId: "ay-byay-c2d3f",
  storageBucket: "ay-byay-c2d3f.firebasestorage.app",
  messagingSenderId: "20199204971",
  appId: "1:20199204971:web:2279af3038f6946bcd292e",
  measurementId: "G-VVN7YN3KWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // আমরা এখান থেকে db এক্সপোর্ট করছি যাতে অন্য ফাইলে ব্যবহার করা যায়
