import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'gnocchi-596a2.firebaseapp.com',
  projectId: 'gnocchi-596a2',
  storageBucket: 'gnocchi-596a2.appspot.com',
  messagingSenderId: '6369541759',
  appId: '1:6369541759:web:9db64a00d1a5a996f6894a'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
