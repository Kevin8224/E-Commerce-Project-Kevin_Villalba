import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDafULM-yfDfCkRwufTRJTaFwIFUXPw52E",
    authDomain: "coderhouse-sabrium.firebaseapp.com",
    projectId: "coderhouse-sabrium",
    storageBucket: "coderhouse-sabrium.appspot.com",
    messagingSenderId: "504274667720",
    appId: "1:504274667720:web:3016ee211dd33a6486fdfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
