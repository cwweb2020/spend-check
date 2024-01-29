import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { createItem } from './controllers';

const firebaseConfig = {
  apiKey: 'AIzaSyBRMN1AE0Yf-SfOZ3emkhXbBBxrlsZbvKQ',
  authDomain: 'spend-test-70e45.firebaseapp.com',
  projectId: 'spend-test-70e45',
  storageBucket: 'spend-test-70e45.appspot.com',
  messagingSenderId: '398299519865',
  appId: '1:398299519865:web:4f201a85e925aac1d4eda8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const auth = getAuth();
let name = '';
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const {
        displayName,
        email,
        uid,
        accessToken,
        metadata: { lastSignInTime },
      } = user;
      name = displayName;

      let firstName = name.split(' ');

      localStorage.setItem('token', accessToken);
      localStorage.setItem('name', firstName[0]);

      const newUserID = await createItem(db, { displayName, email, lastSignInTime, uid }, 'users');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};