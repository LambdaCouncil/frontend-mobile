import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCPVmMRkhRB5ebmcl8L_60kmcWI-_KI1Ow",
    authDomain: "council-c200f.firebaseapp.com",
    databaseURL: "https://council-c200f.firebaseio.com",
    projectId: "council-c200f",
    storageBucket: "council-c200f.appspot.com",
    messagingSenderId: "419030896972",
    appId: "1:419030896972:android:0f56b665454136744dbfe9",
    measurementId: "G-XTQP3M861X"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
