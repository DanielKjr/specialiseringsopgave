import React from "react";
import NameForm from "./NameForm";
import HandleDeleteCookies from "./CookiesForm"
function welcomeScreen(props){

    return(
        <>
            <NameForm />
            <HandleDeleteCookies/>
        </>

    );
}
export default  welcomeScreen;