import React from "react";
import WelcomeScreenComponent from "../components/WelcomeScreenComponent";
import HandleDeleteCookies, {CookiesExist, GetNameCookie} from "../components/CookiesForm";
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
            <h1>We dun logged in {GetNameCookie()}</h1>
                {/*User component stores the cookie state*/}
                <CookieProvider>
                    <UserComponent/>
                </CookieProvider>

                <HandleDeleteCookies/>
            </>

        );
    }



}

export default App;