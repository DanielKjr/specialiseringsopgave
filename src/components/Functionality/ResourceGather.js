import {useContext, useEffect, useState} from "react";
import ResourceTask from "./ResourceTask";
import {ResourceContext} from "../Storage/ResourceProvider";
import CraftingTask from "./CraftingTask";


function ResourceGather(){

    const {
        currentResourceCategory,
        currentResourceItem,
        amount,
        HandleResourceIncrease,
        HandleCheckRecipeRequirement,
        HandleCheckCanCraft,
        HandleCheckIfRecipeExists
    } = useContext(ResourceContext);
    const [isGathering, setIsGathering] = useState(false);
    const [isCrafting, setIsCrafting] = useState(false);
    const [currentItem, setCurrentItem] = useState(currentResourceItem);
    const [currentCategory, setCurrentCategory] = useState(currentResourceCategory);

    function handleSetGathering(){
        setIsGathering(!isGathering);
    }
    function handleSetCrafting(){
        if(HandleCheckCanCraft(currentCategory, currentItem))
         setIsCrafting(!isCrafting);
    }


    useEffect(()=>{
        setCurrentItem(currentResourceItem);
        setCurrentCategory(currentResourceCategory);

        if(isCrafting && !HandleCheckCanCraft(currentCategory, currentItem))
            setIsCrafting(false);

    }, [ HandleCheckCanCraft,isCrafting,currentResourceItem, currentResourceCategory])

    return(
        <>
            {!HandleCheckIfRecipeExists(currentCategory)? (
                <div >

                    <ResourceTask isGathering={isGathering}
                                  category={currentCategory}
                                  item={currentItem}
                                  amount={amount}
                                  HandleResourceIncrease={HandleResourceIncrease}
                    />
                    <br/>
                    <br/>
                    <button  onClick={handleSetGathering}>StartGather</button>
                </div>
            ):

                <div>
                    <h1>Add the requirements dummy</h1>
                    <CraftingTask isCrafting={isCrafting}
                                  category={currentCategory}
                                  item={currentItem}
                                  amount={amount}
                                  HandleResourceIncrease={HandleResourceIncrease}
                                  handleCheckRecipeRequirement={HandleCheckRecipeRequirement}
                    />
                    <button  onClick={handleSetCrafting}>Start Crafting</button>
                    {/*TODO show requirements on screen*/}

                </div>}
        </>

    );

}

export default ResourceGather;