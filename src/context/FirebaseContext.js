import React, { useState, useEffect, useContext, useRef } from 'react'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore/lite';
import app, { db } from '../config/firebase'

const FirebaseContext = React.createContext({})



// // Get a list of cities from your database
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }


const FirebaseProvider = ({ children }) => {

    const [generalEvents, setGeneralEvents] = useState({ day1: [], day2: [], day3: [] })


    

    useEffect(() => {

    }, [])
    async function getProshowData() {
        return new Promise(async (resolve, reject) => {
            let listdata = []
            const pquery = query(collection(db, `events`), orderBy("day"));
            const querySnapshot = await getDocs(pquery)
            querySnapshot.forEach((doc) => {
                listdata.push(doc.data())
            })
            resolve(listdata)
        })
    }
    async function getDaysData(dept) {
        return new Promise(async (resolve, reject) => {
            let day1 = await getData(1, dept)
            let day2 = await getData(2, dept)
            let day3 = await getData(3, dept)
            resolve({ day1, day2, day3 })
        })

    }
    async function getData(day, dept) {
        if (db == null || app == null) return
        const q = query(collection(db, `cse/events/day${day}`), where("dept", "==", dept), where('type', "!=", "workshop"));
        let listday = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            listday.push(doc.data())
        });
        return listday
    }

    async function getGeneralEvents() {
        return new Promise(async (resolve, reject) => {

            const data = {
                day1: [],
                day2: [],
                day3: []
            }
            let q1 = query(collection(db, `cse/events/day1`), where('type', "==", "general_event"));
            let q2 = query(collection(db, `cse/events/day2`), where('type', "==", "general_event"));
            let q3 = query(collection(db, `cse/events/day3`), where('type', "==", "general_event"));
            const qs1 = await getDocs(q1);
            const qs2 = await getDocs(q2);
            const qs3 = await getDocs(q3);
            qs1.forEach((doc) => {
                data.day1.push(doc.data())
            });
            qs2.forEach((doc) => {
                data.day2.push(doc.data())
            });
            qs3.forEach((doc) => {
                data.day3.push(doc.data())
            });
            resolve(data)

        })
    }

    async function getAllWorkshops() {
        return new Promise(async (resolve, reject) => {

            const data = {
                day1: [],
                day2: [],
                day3: []
            }
            let q1 = query(collection(db, `cse/events/day1`), where('type', "==", "workshop"));
            let q2 = query(collection(db, `cse/events/day2`), where('type', "==", "workshop"));
            let q3 = query(collection(db, `cse/events/day3`), where('type', "==", "workshop"));
            const qs1 = await getDocs(q1);
            const qs2 = await getDocs(q2);
            const qs3 = await getDocs(q3);
            qs1.forEach((doc) => {
                data.day1.push(doc.data())
            });
            qs2.forEach((doc) => {
                data.day2.push(doc.data())
            });
            qs3.forEach((doc) => {
                data.day3.push(doc.data())
            });
            resolve(data)


        })
    }






    return <FirebaseContext.Provider value={{ getGeneralEvents, getDaysData, getProshowData, getAllWorkshops }}>
        {children}
    </FirebaseContext.Provider>
}

export default FirebaseProvider

export const useFirebaseContext = () => useContext(FirebaseContext)