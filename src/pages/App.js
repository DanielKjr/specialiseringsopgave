import React from "react";
import WelcomeScreenComponent from "../components/WelcomeScreenComponent";
import HandleDeleteCookies, {CookiesExist} from "../components/CookiesForm";
import UserComponent from "../components/UserComponent";
import {CookieProvider} from "../components/CookiesProvider";




function App(){



    if (!CookiesExist())
    {
        return(
            <>
                <WelcomeScreenComponent/>
            </>
        );
    }
    else{

        return(
            <>
                <CookieProvider >
                    <UserComponent />
                </CookieProvider>

                <HandleDeleteCookies/>
            </>

        );
    }



}

export default App;