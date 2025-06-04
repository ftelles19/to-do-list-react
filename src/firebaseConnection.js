import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyDevVmQi1xhNWhszInOtNzCo1oupvhxQqI",
  authDomain: "projeto-react-f8411.firebaseapp.com",
  projectId: "projeto-react-f8411",
  storageBucket: "projeto-react-f8411.firebasestorage.app",
  messagingSenderId: "190005677413",
  appId: "1:190005677413:web:3affe527bd210f6423258c"
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };