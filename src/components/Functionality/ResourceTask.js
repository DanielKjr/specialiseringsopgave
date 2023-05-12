import ProgressBar from "./ProgressBar";
import React, {useCallback,useEffect, useState} from "react";
import useTask from "../../Hooks/useTask";


function ResourceTask({category, item, amount, HandleResourceIncrease, isGathering}) {

    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(isGathering);

    //Get status from parent component
    useEffect(() => {
        setIsActive(isGathering);
    }, [isGathering]);


    const task = useCallback(() => {
        let i = 0;
        const interval = setInterval(() => {
            setProgress(i += 10);

            if (i === 100) {
                clearInterval(interval);
                if (isActive) {
                    HandleResourceIncrease(category, item, amount);
                }
                setProgress(0);
            }
        }, 100);

        return interval;
    }, [isActive, category, item, amount, HandleResourceIncrease]);


    useTask(isActive, task, setProgress);



    return (
        <ProgressBar
            progress={progress}
            item={item}
            style={{width: `${progress}%`}}>
        </ProgressBar>
    );
}

export default ResourceTask;

