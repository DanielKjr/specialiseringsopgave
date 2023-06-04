import ProgressBar from "../../Displays/ProgressBar";
import React, {useCallback, useEffect, useState} from "react";
import useTaskProgress from "../../Hooks/useTaskProgress";

//Similar to ResourceTask but utilizes the recipe requirement checks and handling of resources.
function CraftingTask({category, item, isCrafting, handleCheckRecipeRequirement}) {
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(isCrafting);
    //update value when parent value changes
    useEffect(() => {
        setIsActive(isCrafting);
    }, [isCrafting]);

    const task = useCallback(() => {
        let i = 0;
        const interval = setInterval(() => {
                setProgress(i+=2);
                if (i === 100) {
                    clearInterval(interval);
                    if(isActive)
                     handleCheckRecipeRequirement(category, item);
                    setProgress(0);
                }
        }, 100);
        return interval;
    }, [isActive ,category, item, handleCheckRecipeRequirement]);

    //custom hook to avoid repeating useEffect code
    useTaskProgress(isActive, task, setProgress);

    return (
                <ProgressBar
                    progress={progress}
                    style={{ width: `${progress}%`}}>
                </ProgressBar>
    );
}

export default CraftingTask;

