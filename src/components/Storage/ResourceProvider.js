import React, {useContext, useEffect, useState} from "react";
import Enums from "../../Constants/Enums";
import {CookiesContext} from "./CookiesProvider";
import {saveResourceCookies} from "./CookiesForm";
import recipes from "../../Constants/Recipes";

const ResourceContext = React.createContext({});

//Provides all the functionality regarding the resources in this app, so that any component can make use of the functionality without having to repeat code.
function ResourceProvider(props){
    const {resources, updateResources} = useContext(CookiesContext);
    const [currentResourceCategory, setCurrentResourceCategory] = useState(localStorage.getItem('lastResourceCategory') ||Enums.ResourceEnum.MINING);
    const [currentResourceItem, setCurrentResourceItem] = useState(localStorage.getItem('lastResourceItem') ||Enums.MiningEnum.TIN);
    const [previousResourceItem, setPreviousResourceItem] = useState(localStorage.getItem('lastResourceItem'));
    const [previousResourceCategory, setPreviousResourceCategory] = useState(localStorage.getItem('lastResourceCategory'));
    const [amount, setAmount] = useState(1);
    const [bank, setBank] = useState(resources);
    const parsedResources = JSON.parse(resources);

    useEffect(() => {
        if(bank !== resources)
            setBank(resources);
    },[bank, resources])

    const handleSave = () => {
        saveResourceCookies(parsedResources);
    }

    const handleSetAmount = (value) => {
        setAmount(value);
    }

    const handleSetCurrentResourceCategory = (category) => {
        handleSetPreviousResourceInfo();
        if(category !== "Bank")
        {
            setCurrentResourceCategory(category);
            setCurrentResourceItem(Object.keys(parsedResources[category])[0]);
        }
        else
        {
                setCurrentResourceCategory(category);
        }
    }

    const handleSetPreviousResourceInfo = () => {
        if(handleCategoryMisMatchCheck(currentResourceCategory, currentResourceItem))
        {
            setPreviousResourceCategory(currentResourceCategory);
            setPreviousResourceItem(currentResourceItem);
        }
    }
    const handleCategoryMisMatchCheck = (category, item) => {
        try{
            return parsedResources[category][item].amount !== undefined;
        }
        catch (e)
        {
            return false;
        }
    }
    const handleSetBankView = (category) => {
        setCurrentResourceCategory(category);
    }

    const handleSetCurrentResourceItem =(item)=> {
        setCurrentResourceItem(item);

    }
    const handleResourceIncrease = (category, item , amount) =>{
        try{
            console.log("Category: " + category, "item: " + item, "Amount: " + amount);
            parsedResources[category][item].amount += amount;
            updateResources(parsedResources);
        }
        catch (e)
        {   //in case of mismatch of categories and item clear the local storage
            localStorage.clear();
        }

    }
    const handleResourceDecrease = (category, item , amount) =>{
            parsedResources[category][item].amount -= amount;
        updateResources(parsedResources);
    }



    //TODO should probably split this to different component
    const handleCheckIfRecipeExists = (category) => {
        return recipes.hasOwnProperty(category);
    }

    const handleCheckRecipeRequirement = (category, item) => {
        let requirements = recipes[category][item].recipe;
        let subskill = handleDetermineRecipeSubset(category);
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
                handleResourceDecrease(subskill, [tmp[i]], requirements[tmp[i]]);
            }
            handleResourceIncrease(category, item, 1);
        }
    }
    //Duplicate code
    const handleCheckCanCraft = (category, item) => {
        let requirements = recipes[category][item].recipe;
        let subskill = handleDetermineRecipeSubset(category);
        let count = 0;

        for(let req in requirements)
        {
            if(parsedResources[subskill][req].amount >= requirements[req])
                count++;

        }
        return count === Object.keys(requirements).length;
    }

    const getCraftingRequirements = (category, item) => {
        let requirements = recipes[category][item].recipe;
        let tmp = [];

        for(let req in requirements)
        {
            let obj = {name: req, value: requirements[req]}
            tmp.push(obj);
        }

       return tmp;
    }

    const handleDetermineRecipeSubset = (category) => {
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
        previousResourceItem,
        previousResourceCategory,
        currentResourceItem,
        resources,
        parsedResources,
        amount,
        bank,
        methods : {
            HandleSetBankView: handleSetBankView,
            HandleSetAmount: handleSetAmount,
            HandleSave: handleSave,
            HandleSetCurrentResourceCategory: handleSetCurrentResourceCategory,
            HandleSetCurrentResourceItem: handleSetCurrentResourceItem,
            HandleResourceIncrease: handleResourceIncrease,
            HandleCheckIfRecipeExists: handleCheckIfRecipeExists,
            HandleCheckRecipeRequirement: handleCheckRecipeRequirement,
            HandleCheckCanCraft: handleCheckCanCraft,
            GetCraftingRequirements: getCraftingRequirements,
            HandleDetermineRecipeSubset: handleDetermineRecipeSubset,
            HandleCategoryMisMatchCheck: handleCategoryMisMatchCheck
        }
    };

    return(
        <ResourceContext.Provider value={contextValue}>
            {props.children}
        </ResourceContext.Provider>
    );
}

export {ResourceContext, ResourceProvider};