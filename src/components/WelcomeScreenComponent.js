import React from "react";
import NameForm from "./NameForm";
import HandleDeleteCookies from "./CookiesForm"
function welcomeScreen(){

    return(
        <>
            <NameForm />
            <HandleDeleteCookies/>
        </>

    );
}
export default  welcomeScreen;