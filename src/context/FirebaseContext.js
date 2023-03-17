import React, { useState, useEffect, useContext, createContext } from 'react'
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const FirebaseContext = React.createContext({})


const firebaseConfig = {
    apiKey: "AIzaSyAUtKkMwE_nf44Ir4GUJdBPf0nyONrB4yA",
    authDomain: "d23dyuksha.firebaseapp.com",
    projectId: "d23dyuksha",
    storageBucket: "d23dyuksha.appspot.com",
    messagingSenderId: "18744469513",
    appId: "1:18744469513:web:c0a85e5a7aa7182430b0d8",
    measurementId: "G-6D1WDB4WYR"
};




// // Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }


const FirebaseProvider = ({ children }) => {
    let app = null
    let db = null
    useEffect(() => {

        if (getApps().length == 0) {

            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
            getData(1)
        }
    }, [])

    async function getData(day) {
        if (db == null || app == null) return
        const querySnapshot = await getDocs(collection(db, "cse"));
        console.log(querySnapshot)
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    }



    return <FirebaseContext.Provider value={{}}>
        {children}
    </FirebaseContext.Provider>
}

export default FirebaseProvider

export const useFirebaseContext = () => useContext(FirebaseContext)