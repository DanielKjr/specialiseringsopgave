import React, {useContext} from "react";
import  {CookiesContext} from "./CookiesProvider";



function UserComponent(){

    const { userName,  resources} = useContext(CookiesContext);
    const parsedResources = JSON.parse(resources);


    return(
        <>
        <h1>{userName}</h1>

            <h1>{JSON.stringify(parsedResources)}</h1>
        </>
    );
}

export default UserComponent;