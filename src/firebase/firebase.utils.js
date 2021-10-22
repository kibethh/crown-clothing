import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAxp_3CA-5tdHf-HWPw03Bc01_sbNyJ64",
  authDomain: "crown-db-5f4e6.firebaseapp.com",
  projectId: "crown-db-5f4e6",
  storageBucket: "crown-db-5f4e6.appspot.com",
  messagingSenderId: "764514781163",
  appId: "1:764514781163:web:5d4ed3f67cd5cbae11bbae",
  measurementId: "G-ZHRE0GQPQL",
};
initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const startLogin = () => {
  return signInWithPopup(auth, provider);
};
// Firestore db
const db = getFirestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(db, "users", `${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
    return userRef;
  }
};
