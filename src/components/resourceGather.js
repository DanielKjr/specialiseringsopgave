import {useContext, useState} from "react";
import ResourceTask from "./ResourceTask";
import {CookiesContext} from "./CookiesProvider";


function ResourceGather(props){
    const [isGathering, setIsGathering] = useState(false);
    const {resources,updateResources } = useContext(CookiesContext);
    const parsedResources = JSON.parse(resources);

    function handleSetGathering(){
        setIsGathering(!isGathering);
    }

    function handleResourceIncrease(category, item , amount){
        parsedResources[category][item] += amount;
        updateResources(parsedResources);
    }

    return(
        <>
        <ResourceTask isGathering={isGathering}
                      category={props.category}
                      item={props.item}
                      amount={props.amount}
                      handleResourceIncrease={handleResourceIncrease}

        />
            <br/>
            <br/>
            <button onClick={handleSetGathering}>StartGather</button>
        </>
    );

}

export default ResourceGather;