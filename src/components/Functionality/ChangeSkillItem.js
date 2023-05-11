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
                    <div key={`Resource-+${i}`} onClick={() => HandleChangeResource(key)}
                    className="skill-item"
                    >
                        <div key={`Resource-${i}`}>
                            <img
                                className="skill-item"

                                src={`./ResourceSprites/${currentResourceCategory}/${key}.png`}
                                alt={key}
                            />

                        </div>

                        <div className="skillItem-text">
                            {key}
                        </div>

                    </div>

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
            renderObjects()
    );
}



export default ChangeSkillItem;