import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4c6ICJn__1cERmtSvrJQAZg0zNbvV6oo",
  authDomain: "hvm-linkedin.firebaseapp.com",
  projectId: "hvm-linkedin",
  storageBucket: "hvm-linkedin.appspot.com",
  messagingSenderId: "231469090230",
  appId: "1:231469090230:web:e036c418ca606e055bad17",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
