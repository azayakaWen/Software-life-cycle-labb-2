// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB_hyAPA26QXYbRzByYvKMq1HCAgqEIMVU',
	authDomain: 'uppgift2-databas.firebaseapp.com',
	projectId: 'uppgift2-databas',
	storageBucket: 'uppgift2-databas.appspot.com',
	messagingSenderId: '681507245912',
	appId: '1:681507245912:web:70449b026d57ed18731f2d',
	measurementId: 'G-N2X58HK6C7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const db = getFirestore()
