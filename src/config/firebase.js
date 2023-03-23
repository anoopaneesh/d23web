import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore/lite';




const firebaseConfig = {
    apiKey: "AIzaSyAUtKkMwE_nf44Ir4GUJdBPf0nyONrB4yA",
    authDomain: "d23dyuksha.firebaseapp.com",
    projectId: "d23dyuksha",
    storageBucket: "d23dyuksha.appspot.com",
    messagingSenderId: "18744469513",
    appId: "1:18744469513:web:c0a85e5a7aa7182430b0d8",
    measurementId: "G-6D1WDB4WYR"
};


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export default app