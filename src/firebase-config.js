import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const {
  REACT_APP_API,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
} = process.env

const firebaseConfig = {
  apiKey: { REACT_APP_API },
  authDomain: { REACT_APP_AUTH_DOMAIN },
  projectId: "todo-f1ee0",
  storageBucket: { REACT_APP_STORAGE_BUCKET },
  messagingSenderId: { REACT_APP_MESSAGING_SENDER_ID },
  appId: { REACT_APP_APP_ID },
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
