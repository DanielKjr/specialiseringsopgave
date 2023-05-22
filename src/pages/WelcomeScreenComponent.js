import React from "react";
import NameForm from "../components/Displays/NameForm";
import HandleDeleteCookies from "../components/Storage/CookiesForm"
function welcomeScreen(){

    return(
        <>
            <h1>Welcome to this Idle game</h1>
            <h3>Enter a name and submit to continue</h3>
            <NameForm />
            <HandleDeleteCookies/>
        </>

    );
}
export default  welcomeScreen;