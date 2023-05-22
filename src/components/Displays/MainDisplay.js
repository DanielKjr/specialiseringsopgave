import React from "react";
import HandleSkillCategory from "../Functionality/HandleSkillCategory";
import HandleSkillItem from "../Functionality/HandleSkillItem";
import "../../Styles/App.css";



function DisplaySidebar({parsedResources, currentResourceCategory, HandleSetCurrentResourceCategory, HandleSetCurrentResourceItem}){

    return(
                   <HandleSkillCategory currentResourceCategory={currentResourceCategory}
                                        parsedResources={parsedResources}
                                        HandleSetCurrentResourceCategory={HandleSetCurrentResourceCategory}
                                        HandleSetCurrentResourceItem={HandleSetCurrentResourceItem}/>
    );
}



export default DisplaySidebar;

export function DisplaySkillItems({parsedResources, currentResourceCategory, HandleSetCurrentResourceCategory, HandleSetCurrentResourceItem})
{
    return(
            <HandleSkillItem currentResourceCategory={currentResourceCategory}
                             parsedResources={parsedResources}
                             HandleSetCurrentResourceCategory={HandleSetCurrentResourceCategory}
                             HandleSetCurrentResourceItem={HandleSetCurrentResourceItem}/>
    );
}
