import React, {useContext, useState} from "react";
import  {CookiesContext} from "./CookiesProvider";
import { SaveResourceCookies} from "./CookiesForm";
import ResourceTask from "./ResourceTask";
import Enums from "../assets/Enums"
import ProgressBar from "./ProgressBar";




function UserComponent(){

    const { userName,  resources, updateUserName, updateResources} = useContext(CookiesContext);
    const parsedResources = JSON.parse(resources);
    let amount = 1;



    function onClick(){
        parsedResources.Mining.Tin += 1;
        parsedResources.Fishing.Trout += 1;
        updateResources(parsedResources);
    }

    function HandleResourceIncrease(category, item , amount){

       parsedResources[category][item] += amount;
        updateResources(parsedResources);


    }
    function handleSave(){
        SaveResourceCookies(parsedResources);
    }


    return(
        <>
        <h1>{userName}</h1>
            <h1>{JSON.stringify(parsedResources)}</h1>
            {/*<button onClick={onClick}>Increase Tin</button>*/}
            <ResourceTask
                category={Enums.ResourceEnum.MINING}
                item = {Enums.MiningEnum.TIN}
                amount={amount}
                HandleResourceIncrease={HandleResourceIncrease}
            />

            <button onClick={handleSave}>Save Progress</button>
        </>
    );
}

export default UserComponent;

