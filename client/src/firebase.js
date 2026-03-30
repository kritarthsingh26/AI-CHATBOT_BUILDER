import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv5_MT_lf3HzQz74zKsbKutyH4N2jQ850",
  authDomain: "ai-chatbot-builder-b9429.firebaseapp.com",
  projectId: "ai-chatbot-builder-b9429",
  storageBucket: "ai-chatbot-builder-b9429.firebasestorage.app",
  messagingSenderId: "751412051848",
  appId: "1:751412051848:web:31cc3278ae1c8fec37043d",
  measurementId: "G-L2VM2RFGYP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
