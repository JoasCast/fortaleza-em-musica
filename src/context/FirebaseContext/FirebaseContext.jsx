import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext } from "react";

const FirebaseContext = createContext(null);

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDncHQagbmeHubkIgLyPaUkJ1E1AmtCDNk",
  authDomain: "fortalezaemmusica.firebaseapp.com",
  projectId: "fortalezaemmusica",
  // storageBucket: "fortalezaemmusica.appspot.com",
  // messagingSenderId: "32493750823",
  // appId: "1:32493750823:web:59de0aea8415d5388b9c02",
  // measurementId: "G-BGF8R7MQFD"
});

function FirebaseProvider({ children }) {

  const db = getFirestore(firebaseApp);

  return (
    <FirebaseContext.Provider value={ db }>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseProvider, FirebaseContext };