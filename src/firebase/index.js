import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDdiUQZeYY3PS8Hf631bFGNogfwqdnYa90",
    authDomain: "task-management-71079.firebaseapp.com",
    projectId: "task-management-71079",
    storageBucket: "task-management-71079.appspot.com",
    messagingSenderId: "1067136693609",
    appId: "1:1067136693609:web:ccc0f33f2d114dbde8f9f8"
};

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore();

export { projectFireStore };