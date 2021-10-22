import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
// export default signInWithPopup(auth, provider);
// export { auth, provider as default };
