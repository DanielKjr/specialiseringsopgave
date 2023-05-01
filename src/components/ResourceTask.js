import ProgressBar from "./ProgressBar";
import React, {useState} from "react";


function ResourceTask({category, item, amount, HandleResourceIncrease }) {
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState(false);

    //TODO make it restart when it finishes
    function handleStart() {
        if (!isActive) {
            setIsActive(true);
            let i = 0;
            const interval = setInterval(() => {
                setProgress(++i);
                if (i === 100) {
                    clearInterval(interval);
                    HandleResourceIncrease(category, item, amount);
                    setProgress(0);
                     setIsActive(false);
                }
            }, 100);
        }
    }

    function handleSetResource(){
        HandleResourceIncrease(category, item, amount);
    }

    return (
        <>
            <div>
                <ProgressBar progress={progress} style={{ width: `${progress}%`}}></ProgressBar>
                <button onClick={handleStart} disabled={isActive}>Start</button>
                <button onClick={() => setIsActive(false)} disabled={!isActive}>Stop</button>
            </div>
        </>
    );
}

export default ResourceTask;


