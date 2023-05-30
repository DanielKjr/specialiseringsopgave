import React from "react";
import NameForm from "../components/Displays/NameForm";
import HandleDeleteCookies from "../components/Storage/CookiesForm"
import "../Styles/WelcomeScreen.css";
function welcomeScreen(){

    return(
        <div className="welcome-container">
            <h1 className="welcome-text">Welcome to this Idle game</h1>
            <h3 className="welcome-text">Enter a name and submit to continue</h3>
            <NameForm />
            <HandleDeleteCookies/>
        </div>

    );
}
export default  welcomeScreen;