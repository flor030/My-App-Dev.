import React from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyDfllLqqU8vnWMyDEtCjLpX3fhElApL-NA",
    authDomain: "my-app-71fea.firebaseapp.com",
    databaseURL: "https://my-app-71fea-default-rtdb.firebaseio.com",
    projectId: "my-app-71fea",
    storageBucket: "my-app-71fea.appspot.com",
    messagingSenderId: "964674605485",
    appId: "1:964674605485:web:e2fb9b5be1f5151671d124",
    measurementId: "G-KJ725Y9HNK"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
