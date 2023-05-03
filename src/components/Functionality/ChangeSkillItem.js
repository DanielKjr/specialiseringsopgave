import {useCallback, useEffect, useState} from "react";


function ChangeSkillItem({parsedResources, currentResourceCategory, HandleSetCurrentResourceCategory, HandleSetCurrentResourceItem}){
    const [availableSkills, setAvailableSkills] = useState(parsedResources[currentResourceCategory]);
    const [objectKeys, setObjectKeys] = useState(Object.keys(availableSkills));

    function HandleChangeResource(key){
        HandleSetCurrentResourceItem(key);

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
        const newAvailableSkills = parsedResources[currentResourceCategory];
        const newObjectKeys = Object.keys(newAvailableSkills);

        setAvailableSkills(newAvailableSkills);
        setObjectKeys(newObjectKeys);
    }, [parsedResources, currentResourceCategory]);

    return(
        <div>
            {renderObjects()}
        </div>


    );
}



export default ChangeSkillItem;