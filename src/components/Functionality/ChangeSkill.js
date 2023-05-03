import {useCallback, useEffect, useState} from "react";


function ChangeSkill({parsedResources, currentResourceCategory, HandleSetCurrentResourceCategory, HandleSetCurrentResourceItem}){
    const [availableSkills, setAvailableSkills] = useState(parsedResources);
    const [objectKeys, setObjectKeys] = useState(Object.keys(parsedResources));

    function HandleChangeResource(key){
        HandleSetCurrentResourceCategory(key);
    }

    const renderObjects = useCallback(() => {
        try{
            return objectKeys.map((key, i) => {
                return (
                    <button key={i} onClick={() => HandleChangeResource(key)}>{key}</button>
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
        const newAvailableSkills = parsedResources;
        const newObjectKeys = Object.keys(availableSkills);

        setAvailableSkills(newAvailableSkills);
        setObjectKeys(newObjectKeys);
    }, [availableSkills, parsedResources, currentResourceCategory]);

    return(
        <div>
            {renderObjects()}
        </div>


    );
}



export default ChangeSkill;