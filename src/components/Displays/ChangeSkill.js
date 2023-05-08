import {useCallback, useContext, useEffect, useState} from "react";
import "./SkillDisplay.css";
import "./App.css";
import {UserContext} from "../Storage/UserProvider";


// {
    // parsedResources,
    // currentResourceCategory,
    // HandleSetCurrentResourceCategory,
    // HandleSetCurrentResourceItem
// }
function ChangeSkill() {
    const {
        currentResourceCategory,
        parsedResources,
        HandleSetCurrentResourceCategory
    } = useContext(UserContext);
    const [availableSkills, setAvailableSkills] = useState(parsedResources);
    const [objectKeys, setObjectKeys] = useState(Object.keys(parsedResources));

    const HandleChangeResource= (key) => {
        HandleSetCurrentResourceCategory(key);

    }

    const renderObjects = useCallback(() => {
        try {
            return objectKeys.map((key, i) => {
                return (
                    <div key={`Resources-+${i}`}
                        onClick={() => HandleChangeResource(key)}
                        className="skill"                    >
                        <div key={`Resources-${i}`} >
                            <img
                                src={`./SkillSprites/${key}.png`}
                                alt={key}

                            />
                            <div className="skill-text" style={{color: "white"}}>{key}</div>
                        </div>
                    </div>

                );
            });
        } catch (error) {
            return (
                <div></div>
            );
        }
    }, [ objectKeys]);




    useEffect(() => {
        const newAvailableSkills = parsedResources;
        const newObjectKeys = Object.keys(availableSkills);

        setAvailableSkills(newAvailableSkills);
        setObjectKeys(newObjectKeys);
    }, [availableSkills, parsedResources, currentResourceCategory,]);

    return (
        <div className="sidebar">
            {renderObjects()}
        </div>


    );
}


export default ChangeSkill;