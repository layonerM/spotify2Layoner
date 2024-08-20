import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA564usbkYtt53Qp7fgWkvxuGx2UdTfJmk",
  authDomain: "spotify-layoner.firebaseapp.com",
  projectId: "spotify-layoner",
  storageBucket: "spotify-layoner.appspot.com",
  messagingSenderId: "847037071617",
  appId: "1:847037071617:web:cf45f7f92cde81fdef1b00",
  measurementId: "G-994L0MVVMT"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios que vas a usar
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Exporta los servicios para usarlos en otros lugares de tu app
export { auth, analytics };
