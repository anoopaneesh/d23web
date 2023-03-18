import React, { useState, useEffect, useContext, createContext } from 'react'
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore/lite';

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
    const [day1, setDay1] = useState([])
    const [day2, setDay2] = useState([])
    const [day3, setDay3] = useState([])
    useEffect(() => {

        if (getApps().length == 0) {

            app = initializeApp(firebaseConfig);
            db = getFirestore(app);
        }


    }, [])
    function getDaysData(dept) {
        getData(1, dept).then((data) => {
            setDay1(data)
        })
        getData(2, dept).then((data) => {
            setDay2(data)
        })
        getData(3, dept).then((data) => {
            setDay3(data)
        })
    }

    async function getData(day, dept) {
        if (db == null || app == null) return
        const q = query(collection(db, `cse/events/day${day}`), where("dept", "==", dept));
        let listday = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            listday.push(doc.data())
        });
        return listday
    }



    return <FirebaseContext.Provider value={{ day1, day2, day3,getDaysData }}>
        {children}
    </FirebaseContext.Provider>
}

export default FirebaseProvider

export const useFirebaseContext = () => useContext(FirebaseContext)