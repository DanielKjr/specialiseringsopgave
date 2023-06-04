import {useCallback, useContext, useEffect, useState} from "react";
import "../../../Styles/SkillDisplay.css";
import "../../../Styles/App.css";
import {ResourceContext} from "../../Storage/ResourceProvider";

//Handles the display and interactions of the Skill categories
function HandleSkillCategory() {
    const {
        currentResourceCategory,
        parsedResources,
        methods
    } = useContext(ResourceContext);
    const [availableSkills, setAvailableSkills] = useState(parsedResources);
    const [objectKeys, setObjectKeys] = useState(Object.keys(parsedResources));

    useEffect(() => {
        const newAvailableSkills = parsedResources;
        const newObjectKeys = Object.keys(availableSkills);

        setAvailableSkills(newAvailableSkills);
        setObjectKeys(newObjectKeys);
    }, [availableSkills, parsedResources, currentResourceCategory,]);

    const renderObjects = useCallback(() => {
            return objectKeys.map((key, i) => {
                return (
                    <div key={`Resources-+${i}`}
                        onClick={() =>  methods.HandleSetCurrentResourceCategory(key)}
                        className="skill"                    >
                        <div key={`Resources-${i}`} >
                            <img
                                className="skill-image"
                                src={`./SkillSprites/${key}.png`}
                                alt={`./SkillSprites/${key}.png not found`}
                            />
                            <div className="skill-text" >{key}</div>
                        </div>
                    </div>
                );
            });
    }, [objectKeys]);


    return (
        <div className="sidebar">
            {renderObjects()}
        </div>
    );
}


export default HandleSkillCategory;