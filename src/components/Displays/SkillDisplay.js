import React from "react";
import ChangeSkill from "../Functionality/ChangeSkill";
import ChangeSkillItem from "../Functionality/ChangeSkillItem";


function SkillDisplay({parsedResources, currentResourceCategory, HandleSetCurrentResourceCategory, HandleSetCurrentResourceItem}){

    return(
            <div>
                <ChangeSkill currentResourceCategory={currentResourceCategory}
                             parsedResources={parsedResources}
                             HandleSetCurrentResourceCategory={HandleSetCurrentResourceCategory}
                             HandleSetCurrentResourceItem={HandleSetCurrentResourceItem}/>
                <br/>
                <ChangeSkillItem currentResourceCategory={currentResourceCategory}
                                 parsedResources={parsedResources}
                                 HandleSetCurrentResourceCategory={HandleSetCurrentResourceCategory}
                                 HandleSetCurrentResourceItem={HandleSetCurrentResourceItem}/>
            </div>


    );
}



export default SkillDisplay;