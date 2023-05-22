import {useContext, useEffect, useState} from "react";
import ResourceTask from "./ResourceTask";
import {ResourceContext} from "../Storage/ResourceProvider";
import CraftingTask from "./CraftingTask";
import SkillDisplay from "../Displays/MainDisplay";
import craftingTask from "./CraftingTask";
import recipes from "../../services/Recipes";


function ResourceGather(){

    const {
        currentResourceCategory,
        currentResourceItem,
        parsedResources,
        amount,
        methods
    } = useContext(ResourceContext);
    const [isGathering, setIsGathering] = useState(false);
    const [isCrafting, setIsCrafting] = useState(false);
    const [currentItem, setCurrentItem] = useState(currentResourceItem);
    const [currentCategory, setCurrentCategory] = useState(currentResourceCategory);
    const [craftingRequirements, setCraftingRequirements] = useState([]);

    useEffect(() =>{
        if(methods.HandleCheckIfRecipeExists(currentCategory, currentItem))
        {
            HandleSetCraftingRequirements();
        }

    }, [currentCategory, currentItem,methods.HandleCheckIfRecipeExists])
    function HandleSetCraftingRequirements(){
        setCraftingRequirements(methods.GetCraftingRequirements(currentCategory, currentItem));
    }
    function handleSetGathering(){
        setIsGathering(!isGathering);
    }
    function handleSetCrafting(){
        if(methods.HandleCheckCanCraft(currentCategory, currentItem))
         setIsCrafting(!isCrafting);
    }


    useEffect(()=>{
        setCurrentItem(currentResourceItem);
        setCurrentCategory(currentResourceCategory);

        if(isCrafting && !methods.HandleCheckCanCraft(currentCategory, currentItem))
            setIsCrafting(false);

    }, [ methods.HandleCheckCanCraft,isCrafting,currentResourceItem, currentResourceCategory])

    return(
        <>
            {!methods.HandleCheckIfRecipeExists(currentCategory)? (
                <div >
                    <ResourceTask isGathering={isGathering}
                                  category={currentCategory}
                                  item={currentItem}
                                  amount={amount}
                                  HandleResourceIncrease={methods.HandleResourceIncrease}
                    />
                    <br/>
                    <br/>
                    <button  onClick={handleSetGathering}>StartGather</button>
                </div>
            ):
                <div>
                    <div className="skill-requirementContainer">
                        Requirements:
                        {craftingRequirements.map((key, value) => (
                            <div key={`${value}+${key}`} className="skill-requirement">
                                <img key={`${value}+- ${key}`} className="requirement-image"
                                     src={`./ResourceSprites/${methods.HandleDetermineRecipeSubset(currentCategory)}/${craftingRequirements[value].name}.png`}
                                     alt={`./ResourceSprites/${methods.HandleDetermineRecipeSubset(currentCategory)}/${craftingRequirements[value].name}.png not found`}
                                />
                                <h1 className="skill-requirementText" key={`${key}+value`}>
                                    {craftingRequirements[value].value}
                                </h1>

                            </div>


                        ))}


                    </div>


                    <CraftingTask isCrafting={isCrafting}
                                  category={currentCategory}
                                  item={currentItem}
                                  amount={amount}
                                  HandleResourceIncrease={methods.HandleResourceIncrease}
                                  handleCheckRecipeRequirement={methods.HandleCheckRecipeRequirement}
                    />
                    <button  onClick={handleSetCrafting}>Start Crafting</button>

                </div>}
        </>

    );

}

export default ResourceGather;