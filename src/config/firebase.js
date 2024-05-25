import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore/lite';




const firebaseConfig = {
    apiKey: "",
    authDomain: "d23dyuksha.firebaseapp.com",
    projectId: "d23dyuksha",
    storageBucket: "d23dyuksha.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export default app
