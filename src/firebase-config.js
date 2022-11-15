import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: 'AIzaSyC_8Ga-sm4itLTmx7TB3jIcyB07Vh5-RMU',
	authDomain: 'todo-f1ee0.firebaseapp.com',
	projectId: 'todo-f1ee0',
	storageBucket: 'todo-f1ee0.appspot.com',
	messagingSenderId: '677196461002',
	appId: '1:677196461002:web:00e76905b560c758bcd533'
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

const hej = 2
console.log(hej);
