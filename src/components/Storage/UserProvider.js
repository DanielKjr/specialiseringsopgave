import React, {useContext, useState} from "react";
import Enums from "../../assets/Enums";
import {CookiesContext} from "./CookiesProvider";
import {CookiesExist, GetResourceCookie, SaveResourceCookies} from "./CookiesForm";


const UserContext = React.createContext();

function UserProvider(props){
    const {resources, updateResources} = useContext(CookiesContext);
    const [currentResourceCategory, setCurrentResourceCategory] = useState(Enums.ResourceEnum.MINING);
    const [currentResourceItem, setCurrentResourceItem] = useState(Enums.MiningEnum.TIN);
    const parsedResources = JSON.parse(resources);

    const HandleSave = ()=> {
        SaveResourceCookies(parsedResources);
    }


    const HandleSetCurrentResourceCategory = (category) => {
        setCurrentResourceCategory(category);
        setCurrentResourceItem(Object.keys(parsedResources[category])[0]);
        // setValuesChanged(true);
    }

    const HandleSetCurrentResourceItem =(item)=> {
        setCurrentResourceItem(item);
        // setValuesChanged(true);
    }
    const HandleResourceIncrease = (category, item , amount) =>{
        parsedResources[category][item] += amount;
        updateResources(parsedResources);
    }

    const contextValue = {
        currentResourceCategory,
        currentResourceItem,
        resources,
        parsedResources,
        HandleSave,
        HandleSetCurrentResourceCategory,
        HandleSetCurrentResourceItem,
        handleResourceIncrease: HandleResourceIncrease

    };

    return(
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};