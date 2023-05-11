import {useContext, useEffect, useState} from "react";
import ResourceTask from "./ResourceTask";
import {ResourceContext} from "../Storage/ResourceProvider";


function ResourceGather(){

    const {
        currentResourceCategory,
        currentResourceItem,
        amount,
        handleResourceIncrease

    } = useContext(ResourceContext);
    const [isGathering, setIsGathering] = useState(false);
    const [currentItem, setCurrentItem] = useState(currentResourceItem);
    const [currentCategory, setCurrentCategory] = useState(currentResourceCategory);

    function handleSetGathering(){
        setIsGathering(!isGathering);
    }


    useEffect(()=>{
        setCurrentItem(currentResourceItem);
        setCurrentCategory(currentResourceCategory);
    }, [currentResourceItem, currentResourceCategory])

    return(
        <div >
        <ResourceTask isGathering={isGathering}
                      category={currentCategory}
                      item={currentItem}
                      amount={amount}
                      handleResourceIncrease={handleResourceIncrease}

        />
            <br/>
            <br/>
            <button  onClick={handleSetGathering}>StartGather</button>
        </div>
    );

}

export default ResourceGather;