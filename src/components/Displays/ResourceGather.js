import {useContext, useEffect, useState} from "react";
import ResourceTask from "../Functionality/ResourceTask";
import {CookiesContext} from "../Storage/CookiesProvider";
import {UserContext} from "../Storage/UserProvider";


function ResourceGather(){

    const {
        currentResourceCategory,
        currentResourceItem,
        HandleSetCurrentResourceCategory,
        HandleSetCurrentResourceItem,
        amount,
        handleResourceIncrease

    } = useContext(UserContext);
    const [isGathering, setIsGathering] = useState(false);
    const {resources,updateResources } = useContext(CookiesContext);
    const [currentItem, setCurrentItem] = useState(currentResourceItem);
    const [currentCategory, setCurrentCategory] = useState(currentResourceCategory);
    const parsedResources = JSON.parse(resources);

    function handleSetGathering(){
        setIsGathering(!isGathering);
    }

    // function handleResourceIncrease(category, item , amount){
    //     parsedResources[category][item] += amount;
    //     updateResources(parsedResources);
    // }

    useEffect(()=>{
        setCurrentItem(currentResourceItem);
        setCurrentCategory(currentResourceCategory);
    }, [currentResourceItem, currentResourceCategory])

    return(
        <div >
        <ResourceTask isGathering={isGathering}
                      category={currentCategory}
                      item={currentItem}
                      amount={1}
                      handleResourceIncrease={handleResourceIncrease}

        />
            <br/>
            <br/>
            <button  onClick={handleSetGathering}>StartGather</button>
        </div>
    );

}

export default ResourceGather;