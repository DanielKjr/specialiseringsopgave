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
        setResources(newResources);
    };

    return(
        <CookiesContext.Provider value={{ userName, resources}}>
            {props.children}
        </CookiesContext.Provider>
    );

}

export {CookiesContext, CookieProvider };
