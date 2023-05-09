import {useCallback, useContext, useEffect, useState} from "react";
import "../../Styles/SkillDisplay.css";
import "../../Styles/App.css";
import {ResourceContext} from "../Storage/ResourceProvider";


function ChangeSkillItem(){
    const {
        currentResourceCategory,
        parsedResources,
        HandleSetCurrentResourceItem
    } = useContext(ResourceContext);

    const [availableSkills, setAvailableSkills] = useState(parsedResources[currentResourceCategory]);
    const [objectKeys, setObjectKeys] = useState(Object.keys(availableSkills));

    function HandleChangeResource(key){
        HandleSetCurrentResourceItem(key);

    }

    const renderObjects = useCallback(() => {

        try{
            return objectKeys.map((key, i) => {
                return (
                    <img
                        className="skill-item"
                        key={`Resource-${i}`}
                        src={`./ResourceSprites/${key}.png`}
                        alt={key}
                        onClick={() => HandleChangeResource(key)}
                        width="75px"
                        height="75px"
                    />
                )
            });
        }
        catch (error)
        {
            return(
                <div></div>
            )
        }

    }, [objectKeys])


    useEffect(() => {
        const newAvailableSkills = parsedResources[currentResourceCategory];
        const newObjectKeys = Object.keys(newAvailableSkills);

        setAvailableSkills(newAvailableSkills);
        setObjectKeys(newObjectKeys);
    }, [parsedResources, currentResourceCategory]);

    return(
        <div className="content">
            {renderObjects()}
        </div>


    );
}



export default ChangeSkillItem;