import {useCallback, useContext, useEffect, useState} from "react";
import {ResourceContext} from "../Storage/ResourceProvider";

export default function SkillDisplay(props){
    const {
        currentResourceCategory,
        parsedResources,
    } = useContext(ResourceContext);
    const [available, setAvailable] = useState(props.availableSkills);
    const [keys, setKeys] = useState(Object.keys(available));



    useEffect(() => {
        const newAvailableSkills = parsedResources[currentResourceCategory];
        const newObjectKeys = Object.keys(newAvailableSkills);

        setAvailable(newAvailableSkills);
        setKeys(newObjectKeys);
    }, [parsedResources, currentResourceCategory]);
    function HandleOnClick(value){
        props.onClick(value);
    }

    const renderObjects = useCallback(() => {
            return keys.map((key, i) => {
                return (
                    <div key={`Resources-+${i}`}
                         onClick={() =>  HandleOnClick(key)}
                         className="skill-item"                    >
                        <div key={`Resources-${i}`} >
                            <img
                                className="skill-item"
                                src={`./${props.Folder}/${props.category}/${key}.png`}
                                alt={`./${props.Folder}/${props.category}/${key}.png not found`}
                            />
                            <div className="skillItem-text" >{key}</div>
                        </div>
                    </div>
                );
            });
    }, [keys, parsedResources]);


    return(
        renderObjects()
    );


}