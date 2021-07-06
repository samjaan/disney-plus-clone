import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAb6fW22bpNmFKofJN8vxLAXGjP394tw_A",
    authDomain: "disney-plus-clone-6df46.firebaseapp.com",
    projectId: "disney-plus-clone-6df46",
    storageBucket: "disney-plus-clone-6df46.appspot.com",
    messagingSenderId: "4791004426259",
    appId: "1:47910026259:web:1729532a3e815f4e3a53e6",
    measurementId: "G-VNH1MZM3JK"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export {auth, provider, storage};
  export default db