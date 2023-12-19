
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore,addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCHQSt5DH6T4PxcvoL22NRoGT9g5gwE4Bs",
    authDomain: "registration-form-7beea.firebaseapp.com",
    projectId: "registration-form-7beea",
    storageBucket: "registration-form-7beea.appspot.com",
    messagingSenderId: "969883445091",
    appId: "1:969883445091:web:03cb3b5a4dfee93abb5556",
    measurementId: "G-0WC6MGQ1H2"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 const db = getFirestore(app);
  let ubtn =document.querySelector("#usignup");

 let cbtn=document.getElementById("usignup").addEventListener("click",()=>{
     
     let fname =document.getElementById("first");
     let lname =document.getElementById("last");
     let cemail =document.getElementById("uemail");
     let cpassword =document.getElementById("upassword");

     let costumer  = {
      
      firstName:fname.value,
      lastName:lname.value,
      costumeremail:cemail.value,
      costumerpassword:cpassword.value,

    }

    createUserWithEmailAndPassword(auth, costumer.email,costumer.password)
    .then(async(userCredential) => {
      
      const user = userCredential.user;

      try {
        const docRef = await addDoc(collection(db, "costumer"), {
        ...costumer,
        uid: user.uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
     
      
    })
    .catch((error) => {
   
      const errorMessage = error.message;
      console.log(errorMessage)
      alert("wrong")
      
   
    });   
      





 })