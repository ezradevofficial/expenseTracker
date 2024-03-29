// !Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// !https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  //   initializeAuth,
  //   getReactNativePersistence,
} from 'firebase/auth';
import {getFirestore, collection} from 'firebase/firestore';
// import { ReactNativeAsyncStorage } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// !Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDvvpQnP-jAS-UboHLGKxdG7_fG9WNyzIs',
  authDomain: 'expensify-4a9e3.firebaseapp.com',
  projectId: 'expensify-4a9e3',
  storageBucket: 'expensify-4a9e3.appspot.com',
  messagingSenderId: '1000171008028',
  appId: '1:1000171008028:web:62ce6b18184c1157f36fd9',
};

// !Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;
