import ProgressBar from "../../Displays/ProgressBar";
import React, {useCallback,useEffect, useState} from "react";
import useTaskProgress from "../../../Hooks/useTaskProgress";

//Displays and handles the progress of a resource task.
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
            setProgress(i += 2);

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


    useTaskProgress(isActive, task, setProgress);



    return (
        <ProgressBar
            progress={progress}
            style={{width: `${progress}%`}}>
        </ProgressBar>
    );
}

export default ResourceTask;

