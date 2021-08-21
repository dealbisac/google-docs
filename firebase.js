// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoCcGoJ2GqLD1CbM1tRDLD7UfN55DLb1Y",
    authDomain: "docs-f635f.firebaseapp.com",
    projectId: "docs-f635f",
    storageBucket: "docs-f635f.appspot.com",
    messagingSenderId: "345370259334",
    appId: "1:345370259334:web:2ba883868d8ab180ae0607",
    measurementId: "G-LCMZYKG55P"
};

const app = !firebase.apps.length
    ? firebase.initilaizeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };