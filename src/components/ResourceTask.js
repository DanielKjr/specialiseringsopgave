import ProgressBar from "./ProgressBar";
import React, {useCallback, useEffect,useState} from "react";



function ResourceTask({category, item, amount, handleResourceIncrease, isGathering}) {
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(isGathering);

    //update value when parent value changes
    useEffect(() => {
        setIsActive(isGathering);
    }, [isGathering]);


    const resourceGathering = useCallback(() => {
        let i = 0;
        const interval = setInterval(() => {
                setProgress(i+=2);
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
        else if(!isActive && progress !== 1)
            setProgress(0);

    }, [isActive, progress, resourceGathering])

    return (
        <>
            <div >
                <ProgressBar
                    progress={progress}
                    style={{ width: `${progress}%`}}
                ></ProgressBar>
            </div>
        </>
    );
}

export default ResourceTask;

