import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyCvX8FT01Vxj_C015ToQQgoyhWwSkSEtd8",
  authDomain: "burger-queen-ap.firebaseapp.com",
  databaseURL: "https://burger-queen-ap.firebaseio.com",
  projectId: "burger-queen-ap",
  storageBucket: "burger-queen-ap.appspot.com",
  messagingSenderId: "548403669843",
  appId: "1:548403669843:web:fe659489c5f749a0f04fa6"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
