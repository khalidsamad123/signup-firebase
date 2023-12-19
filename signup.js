import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore,collection, addDoc,setDoc,doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCHQSt5DH6T4PxcvoL22NRoGT9g5gwE4Bs",
  authDomain: "registration-form-7beea.firebaseapp.com",
  projectId: "registration-form-7beea",
  storageBucket: "registration-form-7beea.appspot.com",
  messagingSenderId: "969883445091",
  appId: "1:969883445091:web:03cb3b5a4dfee93abb5556",
  measurementId: "G-0WC6MGQ1H2"
}

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  let abtn =document.querySelector("#asignup");
   abtn.addEventListener("click",()=>{
     
    let restaurent=document.getElementById("restaurent");
    let phone=document.getElementById("phone");
    let email=document.getElementById("aemail");
    let password=document.getElementById("apassword");
      
    let admin  = {
      
      restaurent:restaurent.value,
      phone:phone.value,
      email:email.value,
      password:password.value,

    }

    createUserWithEmailAndPassword(auth, admin.email, admin.password)
    .then(async(userCredential) => {
      
      const user = userCredential.user;
      try {
        await setDoc(doc(db, "admin", user.uid), {
         ...admin,
         uid:user.uid
        });
        console.log(user)
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      swal("Good job!", "your account has been created");
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

      swal({
        title: "Ooops!",
        text: "please signup again",
        icon: "error",
        button: "okay",
      });
     
    });
  



   });

  //  let getAllusers =async()=>{
    
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
 
  //   getAllUsers()



  //  }


  









