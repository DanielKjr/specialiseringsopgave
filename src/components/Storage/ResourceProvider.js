import React, {useContext, useEffect, useState} from "react";
import Enums from "../../Constants/Enums";
import {CookiesContext} from "./CookiesProvider";
import {SaveResourceCookies} from "./CookiesForm";
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

    const HandleSave = () => {
        SaveResourceCookies(parsedResources);
    }

    const HandleSetAmount = (value) => {
        setAmount(value);
    }

    const HandleSetCurrentResourceCategory = (category) => {
        HandleSetPreviousResourceInfo();
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

    const HandleSetPreviousResourceInfo = () => {
        if(HandleCategoryMisMatchCheck(currentResourceCategory, currentResourceItem))
        {
            setPreviousResourceCategory(currentResourceCategory);
            setPreviousResourceItem(currentResourceItem);
        }
    }
    const HandleCategoryMisMatchCheck = (category, item) => {
        try{
            return parsedResources[category][item].amount !== undefined;
        }
        catch (e)
        {
            return false;
        }
    }
    const HandleSetBankView = (category) => {
        setCurrentResourceCategory(category);
    }

    const HandleSetCurrentResourceItem =(item)=> {
        setCurrentResourceItem(item);

    }
    const HandleResourceIncrease = (category, item , amount) =>{
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
    //Duplicate code
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

    const GetCraftingRequirements = (category, item) => {
        let requirements = recipes[category][item].recipe;
        let tmp = [];

        for(let req in requirements)
        {
            let obj = {name: req, value: requirements[req]}
            tmp.push(obj);
        }

       return tmp;
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
        previousResourceItem,
        previousResourceCategory,
        currentResourceItem,
        resources,
        parsedResources,
        amount,
        bank,
        methods : {
            HandleSetBankView,
            HandleSetAmount,
            HandleSave,
            HandleSetCurrentResourceCategory,
            HandleSetCurrentResourceItem,
            HandleResourceIncrease,
            HandleCheckIfRecipeExists,
            HandleCheckRecipeRequirement,
            HandleCheckCanCraft,
            GetCraftingRequirements,
            HandleDetermineRecipeSubset,
            HandleCategoryMisMatchCheck
        }
    };

    return(
        <ResourceContext.Provider value={contextValue}>
            {props.children}
        </ResourceContext.Provider>
    );
}

export {ResourceContext, ResourceProvider};