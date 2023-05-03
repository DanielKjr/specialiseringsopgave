import {useContext, useEffect, useState} from "react";
import ResourceTask from "../Functionality/ResourceTask";
import {CookiesContext} from "../Storage/CookiesProvider";


function ResourceGather({item, category, amount}){
    const [isGathering, setIsGathering] = useState(false);
    const {resources,updateResources } = useContext(CookiesContext);
    const [currentItem, setCurrentItem] = useState(item);
    const [currentCategory, setCurrentCategory] = useState(category);
    const parsedResources = JSON.parse(resources);

    function handleSetGathering(){
        setIsGathering(!isGathering);
    }

    function handleResourceIncrease(category, item , amount){
        parsedResources[category][item] += amount;
        updateResources(parsedResources);
    }

    useEffect(()=>{
        setCurrentItem(item);
        setCurrentCategory(category);
    }, [item, category])

    return(
        <>
        <ResourceTask isGathering={isGathering}
                      category={currentCategory}
                      item={currentItem}
                      amount={amount}
                      handleResourceIncrease={handleResourceIncrease}

        />
            <br/>
            <br/>
            <button onClick={handleSetGathering}>StartGather</button>
        </>
    );

}

export default ResourceGather;