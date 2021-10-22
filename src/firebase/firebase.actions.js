import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();
export const startLogin = () => {
  return signInWithPopup(auth, provider);
};
