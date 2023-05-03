import React, {useContext, useEffect, useState} from "react";
import  {CookiesContext} from "../Storage/CookiesProvider";
import { SaveResourceCookies} from "../Storage/CookiesForm";
import Enums from "../../assets/Enums"
import ResourceGather from "../Displays/ResourceGather";
import SkillDisplay from "../Displays/SkillDisplay";
import ChangeSkill from "./ChangeSkill";




function UserComponent(){

    const { userName,  resources} = useContext(CookiesContext);
    const [currentResourceCategory, setCurrentResourceCategory] = useState(Enums.ResourceEnum.MINING);
    const [currentResourceItem, setCurrentResourceItem] = useState(Enums.MiningEnum.TIN);
    const parsedResources = JSON.parse(resources);
    let amount = 1;


    function handleSave(){
        SaveResourceCookies(parsedResources);
    }


    function HandleSetCurrentResourceCategory(category){
            setCurrentResourceCategory(category);
            setCurrentResourceItem(Object.keys(parsedResources[category])[0]);
    }

    function HandleSetCurrentResourceItem(item){
        setCurrentResourceItem(item);
    }



    return(
        <>
        <h1>{userName}</h1>
            {/*temporary for debug purposes*/}
            <h1>{JSON.stringify(parsedResources[currentResourceCategory])}</h1>

            <ResourceGather
                category={currentResourceCategory}
                item = {currentResourceItem}
                amount={amount}
            />
            <SkillDisplay
                currentResourceCategory={currentResourceCategory}
                parsedResources={parsedResources}
                HandleSetCurrentResourceCategory={HandleSetCurrentResourceCategory}
                HandleSetCurrentResourceItem={HandleSetCurrentResourceItem}
            />


            <button onClick={handleSave}>Save Progress</button>


        </>
    );
}

export default UserComponent;

