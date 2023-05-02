import React, {useContext, useState} from "react";
import  {CookiesContext} from "./CookiesProvider";
import { SaveResourceCookies} from "./CookiesForm";
import Enums from "../assets/Enums"
import ResourceGather from "./resourceGather";




function UserComponent(){

    const { userName,  resources} = useContext(CookiesContext);
    const [currentResourceCategory, setCurrentResourceCategory] = useState(Enums.ResourceEnum.MINING);
    const [currentResourceItem, setCurrentResourceItem] = useState(Enums.MiningEnum.TIN);
    const parsedResources = JSON.parse(resources);
    let amount = 1;


    function handleSave(){
        SaveResourceCookies(parsedResources);
    }

    function handleSetCurrentResourceCategory(category){
        setCurrentResourceCategory(category);
    }

    function handleSetCurrentResourceItem(item){
        setCurrentResourceItem(item);
    }

    return(
        <>
        <h1>{userName}</h1>
            <h1>{JSON.stringify(parsedResources.Mining)}</h1>

            <ResourceGather
                category={currentResourceCategory}
                item = {currentResourceItem}
                amount={amount}
            />
            <button onClick={handleSave}>Save Progress</button>
        </>
    );
}

export default UserComponent;

