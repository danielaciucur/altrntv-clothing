import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC61sQaxMTLxzu3d23uheK-twQa53Hm2aU",
    authDomain: "altrntv-clothing-db.firebaseapp.com",
    projectId: "altrntv-clothing-db",
    storageBucket: "altrntv-clothing-db.appspot.com",
    messagingSenderId: "207307373432",
    appId: "1:207307373432:web:338bf5cda7be4bce54a68d"
  };

  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef = doc(db, 'users', userAuth.uid);
     console.log(userDocRef);

     const userSnapshot = await getDoc(userDocRef);
     console.log(userSnapshot);
     console.log(userSnapshot.exists());

     if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
           await setDoc(userDocRef, {
            displayName, email, createdAt
           });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
     }

     return userDocRef;
  }