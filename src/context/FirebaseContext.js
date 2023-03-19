import React, { useState, useEffect, useContext, useRef } from 'react'
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore/lite';

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
    let app = useRef(null)
    let db = useRef(null)
    const [day1, setDay1] = useState([])
    const [day2, setDay2] = useState([])
    const [day3, setDay3] = useState([])
    const [proshows,setProshows] = useState([])

    useEffect(() => {

        if (getApps().length === 0) {

            app.current = initializeApp(firebaseConfig);
            db.current = getFirestore(app.current);
            getProshowData()
        }


    }, [])
    function getDaysData(dept, workshop) {
        getData(1, dept, workshop).then((data) => {
            setDay1(data)
        })
        getData(2, dept, workshop).then((data) => {
            setDay2(data)
        })
        getData(3, dept, workshop).then((data) => {
            setDay3(data)
        })
        
    }

    async function getData(day, dept, workshop) {
        if (db.current == null || app.current == null) return
        let q = null
        if (workshop) {
            q = query(collection(db.current, `cse/events/day${day}`), where("dept", "==", dept), where('type', "==", "workshop"));
        } else {
            q = query(collection(db.current, `cse/events/day${day}`), where("dept", "==", dept), where('type', "!=", "workshop"));
        }
        let listday = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            listday.push(doc.data())
        });
        return listday
    }
    async function getProshowData() {
        let listdata = []
        const pquery = query(collection(db.current, `events`),orderBy("day"));
        const querySnapshot = await getDocs(pquery)
        querySnapshot.forEach((doc) => {
            listdata.push(doc.data())
        })
        setProshows(listdata)
    }



    return <FirebaseContext.Provider value={{ day1, day2, day3, getDaysData, getProshowData,proshows }}>
        {children}
    </FirebaseContext.Provider>
}

export default FirebaseProvider

export const useFirebaseContext = () => useContext(FirebaseContext)