import React from "react";
import WelcomeScreenComponent from "../components/Displays/WelcomeScreenComponent";
import HandleDeleteCookies, {CookiesExist} from "../components/Storage/CookiesForm";
import UserComponent from "../components/Functionality/UserComponent";
import {CookieProvider} from "../components/Storage/CookiesProvider";




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