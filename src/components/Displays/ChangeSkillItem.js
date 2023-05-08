import {useCallback, useContext, useEffect, useState} from "react";
import "./SkillDisplay.css";
import "./App.css";
import {UserContext} from "../Storage/UserProvider";


function ChangeSkillItem(){
    const {
        currentResourceCategory,
        currentResourceItem,
        resources,
        parsedResources,
        HandleSetCurrentResourceCategory,
        HandleSetCurrentResourceItem
    } = useContext(UserContext);
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
                    />

                    // <div className="skill-item">
                    //
                    //     <button key={i} onClick={() => HandleChangeResource(key)}>{key}</button>
                    // </div>

                )

            })
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