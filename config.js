import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

export const firebaseConfig = {
apikey : process.env.API-KEY,
  authDomain: "dryfruit-web.firebaseapp.com",
  projectId: "dryfruit-web",
  storageBucket: "dryfruit-web.firebasestorage.app",
  messagingSenderId: "229250077459",
  appId: "1:229250077459:web:7b3be50f61375e3c6240e6",
  measurementId: "G-G3R9NN0VL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export auth so other files can import it
export const auth = getAuth(app);
