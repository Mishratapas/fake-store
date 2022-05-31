import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4B3lUQDR33jYVfX1wjM9YsDz-p9oSSpI",
  authDomain: "fakestore-77189.firebaseapp.com",
  projectId: "fakestore-77189",
  storageBucket: "fakestore-77189.appspot.com",
  messagingSenderId: "168074443154",
  appId: "1:168074443154:web:2b04a831c9616ebbe2694b",
  measurementId: "G-4CEV13QT7G",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
