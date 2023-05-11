import {useCallback, useContext, useEffect, useState} from "react";
import "../../Styles/SkillDisplay.css";
import "../../Styles/App.css";
import {ResourceContext} from "../Storage/ResourceProvider";

function ChangeSkill() {
    const {
        currentResourceCategory,
        parsedResources,
        HandleSetCurrentResourceCategory
    } = useContext(ResourceContext);
    const [availableSkills, setAvailableSkills] = useState(parsedResources);
    const [objectKeys, setObjectKeys] = useState(Object.keys(parsedResources));



    const renderObjects = useCallback(() => {
        try {

            return objectKeys.map((key, i) => {
                return (
                    <div key={`Resources-+${i}`}
                        onClick={() =>  HandleSetCurrentResourceCategory(key)}
                        className="skill"                    >
                        <div key={`Resources-${i}`} >
                            <img
                                className="skill-image"
                                src={`./SkillSprites/${key}.png`}
                                alt={key}

                            />
                            <div className="skill-text" >{key}</div>
                        </div>

                    </div>

                );
            });
        } catch (error) {
            return (
                <div></div>
            );
        }
    }, [HandleSetCurrentResourceCategory ,objectKeys]);




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