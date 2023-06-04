import React, { useState } from "react";
import {getNameCookie, getResourceCookie } from "./CookiesForm";


const CookiesContext = React.createContext({});

//Provides access to information stored in cookies, most importantly the resources.
function CookieProvider(props){
    const [userName, setUserName] = useState(getNameCookie());
    const [resources, setResources] = useState(getResourceCookie());

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
