import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./pages/App";
import {ResourceProvider} from "./components/Storage/ResourceProvider";
import {CookieProvider} from "./components/Storage/CookiesProvider";
import {CookiesExist} from "./components/Storage/CookiesForm";
import WelcomeScreenComponent from "./components/Displays/WelcomeScreenComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));


if (CookiesExist()) {
    if(localStorage.getItem('lastVisitTime') === null)
    {
        localStorage.setItem('lastVisitTime', new Date().getTime().toString());
    }


    root.render(
        <React.StrictMode>
            <CookieProvider>
                <ResourceProvider>
                    <App/>
                </ResourceProvider>
            </CookieProvider>
        </React.StrictMode>
    );
} else {
    root.render(
        <WelcomeScreenComponent/>
    );
}


