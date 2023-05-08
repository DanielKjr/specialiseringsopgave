import ProgressBar from "./ProgressBar";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {UserContext} from "../Storage/UserProvider";



function ResourceTask({category, item, amount, handleResourceIncrease, isGathering}) {

    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(isGathering);

    //update value when parent value changes
    useEffect(() => {
        setIsActive(isGathering);
    }, [isGathering]);

    //TODO make it stop the process entirely when cancelled
    const resourceGathering = useCallback(() => {
        let i = 0;
        const interval = setInterval(() => {
                setProgress(i+=10);
                if (i === 100) {
                    clearInterval(interval);
                    handleResourceIncrease(category, item, amount);
                    setProgress(0);
                }
        }, 100);
    }, [category, item, amount, handleResourceIncrease]);

    //TODO fix so that it doesn't freak out when paused. needs to be stopped entirely
    useEffect(() => {
        if(isActive && progress === 0)
            resourceGathering();
        else if(!isActive && progress >= 1)
            setProgress(0);

    }, [isActive, progress, resourceGathering]);

    return (
        <>

                <ProgressBar
                    progress={progress}
                    item={item}
                    style={{ width: `${progress}%`}}

                ></ProgressBar>

        </>
    );
}

export default ResourceTask;

