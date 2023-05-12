import React, {useContext, useEffect, useState} from "react";
import Enums from "../../assets/Enums";
import {CookiesContext} from "./CookiesProvider";
import {SaveResourceCookies} from "./CookiesForm";
import recipes from "../../services/Recipes";

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
    const HandleResourceDecrease = (category, item , amount) =>{
            parsedResources[category][item].amount -= amount;
        updateResources(parsedResources);
    }

    //TODO should probably split this to different component
    const HandleCheckIfRecipeExists = (category) => {
        return recipes.hasOwnProperty(category);
    }

    const HandleCheckRecipeRequirement = (category, item) => {
        let requirements = recipes[category][item].recipe;
        let subskill = HandleDetermineRecipeSubset(category);
        let count = 0;
        let tmp = [];
        for(let req in requirements)
        {
            if(parsedResources[subskill][req].amount >= requirements[req])
                count++;
                tmp.push(req);
        }

        if ( count === Object.keys(requirements).length)
        {
            for(let i = 0; i < tmp.length; i++)
            {
                HandleResourceDecrease(subskill, [tmp[i]], requirements[tmp[i]]);
            }
            HandleResourceIncrease(category, item, 1);
        }
    }
    //TODO find out if I can get rid of this duplicate code
    const HandleCheckCanCraft = (category, item) => {
        let requirements = recipes[category][item].recipe;
        let subskill = HandleDetermineRecipeSubset(category);
        let count = 0;

        for(let req in requirements)
        {
            if(parsedResources[subskill][req].amount >= requirements[req])
                count++;

        }
        return count === Object.keys(requirements).length;
    }

    const HandleDetermineRecipeSubset = (category) => {
        switch (category)
        {
            case"Smithing":
                return "Mining";

            case"Cooking":
                return "Fishing";

            default:
                break;

        }
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
        HandleResourceIncrease,
        HandleCheckIfRecipeExists,
        HandleCheckRecipeRequirement,
        HandleCheckCanCraft

    };

    return(
        <ResourceContext.Provider value={contextValue}>
            {props.children}
        </ResourceContext.Provider>
    );
}

export {ResourceContext, ResourceProvider};