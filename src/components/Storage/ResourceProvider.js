import React, {useContext, useEffect, useState} from "react";
import Enums from "../../assets/Enums";
import {CookiesContext} from "./CookiesProvider";
import {SaveResourceCookies} from "./CookiesForm";


const ResourceContext = React.createContext({});



function ResourceProvider(props){
    const {resources, updateResources} = useContext(CookiesContext);
    const [currentResourceCategory, setCurrentResourceCategory] = useState(Enums.ResourceEnum.MINING);
    const [currentResourceItem, setCurrentResourceItem] = useState(Enums.MiningEnum.TIN);
    const [amount, setAmount] = useState(1);
    const [bank, setBank] = useState(resources);
    const parsedResources = JSON.parse(resources);

    useEffect(() => {
        if(bank !== resources)
            setBank(resources);
    },[bank, resources])
    const HandleSave = () => {
        SaveResourceCookies(parsedResources);
    }

    const HandleSetAmount = (value) => {
        setAmount(value);
    }

    const HandleSetCurrentResourceCategory = (category) => {
        if(category !== "Bank")
        {
            setCurrentResourceCategory(category);
            setCurrentResourceItem(Object.keys(parsedResources[category])[0]);
        }
        else{
            setCurrentResourceCategory(category);
        }


    }

    const HandleSetBankView = (category) => {
        setCurrentResourceCategory(category);
    }

    const HandleSetCurrentResourceItem =(item)=> {
        setCurrentResourceItem(item);

    }
    const HandleResourceIncrease = (category, item , amount) =>{
        parsedResources[category][item].amount += amount;
        updateResources(parsedResources);
    }

    const contextValue = {
        currentResourceCategory,
        currentResourceItem,
        resources,
        parsedResources,
        amount,
        bank,
        HandleSetBankView,
        HandleSetAmount,
        HandleSave,
        HandleSetCurrentResourceCategory,
        HandleSetCurrentResourceItem,
        handleResourceIncrease: HandleResourceIncrease

    };

    return(
        <ResourceContext.Provider value={contextValue}>
            {props.children}
        </ResourceContext.Provider>
    );
}

export {ResourceContext, ResourceProvider};