import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/pages/App";
import {ResourceProvider} from "./components/Storage/ResourceProvider";
import {CookieProvider} from "./components/Storage/CookiesProvider";
import {CookiesExist} from "./components/Storage/CookiesForm";
import WelcomeScreenComponent from "./components/pages/WelcomeScreenComponent";
import ErrorBoundaryComponent from "./components/ClassComponent/ErrorBoundaryComponent";


const root = ReactDOM.createRoot(document.getElementById('root'));

if (CookiesExist()) {
    if (localStorage.getItem('lastVisitTime') === null) {
        localStorage.setItem('lastVisitTime', new Date().getTime().toString());
    }


    root.render(
        //Strict mode to help detect potential problems
        <React.StrictMode>
            <ErrorBoundaryComponent>
                <CookieProvider>
                    <ResourceProvider>
                        <App/>
                    </ResourceProvider>
                </CookieProvider>
            </ErrorBoundaryComponent>
        </React.StrictMode>
    );
} else {
    root.render(
        <WelcomeScreenComponent/>
    );
}




