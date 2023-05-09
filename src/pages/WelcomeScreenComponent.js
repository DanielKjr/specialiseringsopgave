import React from "react";
import NameForm from "../components/Displays/NameForm";
import HandleDeleteCookies from "../components/Storage/CookiesForm"
function welcomeScreen(){

    return(
        <>
            <NameForm />
            <HandleDeleteCookies/>
        </>

    );
}
export default  welcomeScreen;