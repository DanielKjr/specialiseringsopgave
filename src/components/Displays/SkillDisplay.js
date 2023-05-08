import React from "react";
import ChangeSkill from "./ChangeSkill";
import ChangeSkillItem from "./ChangeSkillItem";
// import "./SkillDisplay.css";
import "./App.css";



function DisplaySidebar({parsedResources, currentResourceCategory, HandleSetCurrentResourceCategory, HandleSetCurrentResourceItem}){

    return(

                   <ChangeSkill currentResourceCategory={currentResourceCategory}
                                parsedResources={parsedResources}
                                HandleSetCurrentResourceCategory={HandleSetCurrentResourceCategory}
                                HandleSetCurrentResourceItem={HandleSetCurrentResourceItem}/>

    );
}



export default DisplaySidebar;

export function DisplaySkillItems({parsedResources, currentResourceCategory, HandleSetCurrentResourceCategory, HandleSetCurrentResourceItem})
{
    return(

            <ChangeSkillItem currentResourceCategory={currentResourceCategory}
                             parsedResources={parsedResources}
                             HandleSetCurrentResourceCategory={HandleSetCurrentResourceCategory}
                             HandleSetCurrentResourceItem={HandleSetCurrentResourceItem}/>


    );
}
