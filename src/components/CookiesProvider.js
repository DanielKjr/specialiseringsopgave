import React, { useState } from "react";
import {GetNameCookie, GetResourceCookie } from "./CookiesForm";

const CookiesContext = React.createContext();

function CookieProvider(props){
    const [userName, setUserName] = useState(GetNameCookie());
    const [resources, setResources] = useState(GetResourceCookie());

    const updateUserName = (name) => {
        setUserName(name);
    };

    const updateResources = (newResources) => {
        setResources(JSON.stringify(newResources));
    };

    const contextValue = {
        userName,
        resources,
        updateUserName,
        updateResources
    };

    return(
        <CookiesContext.Provider value={contextValue}>
            {props.children}
        </CookiesContext.Provider>
    );

}

export {CookiesContext, CookieProvider };
