import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/Displays/App";
import {UserProvider} from "./components/Storage/UserProvider";
import {CookieProvider} from "./components/Storage/CookiesProvider";
import {CookiesExist} from "./components/Storage/CookiesForm";
import WelcomeScreenComponent from "./components/Displays/WelcomeScreenComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));


if(CookiesExist())
{
    root.render(
        <React.StrictMode>
            <CookieProvider>
                <UserProvider>
                    <App/>
                </UserProvider>
            </CookieProvider>
        </React.StrictMode>
    );
}
else {
    root.render(
        <WelcomeScreenComponent/>
    );
}
