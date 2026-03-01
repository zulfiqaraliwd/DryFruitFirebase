import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { auth } from "./config.js";

async function signup() {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful: " + userCredential.user.uid);
  } catch (error) {
    alert(error.message);
  }
}

document.getElementById("signup").addEventListener("click", signup);


