import { useEffect } from 'react';

function useTaskProgress(isActive, task, setProgress) {
    useEffect(() => {
        let intervalId = null;

        if (isActive) {
            intervalId = task();
        } else {
            setProgress(0);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isActive, task, setProgress]);
}

export default useTaskProgress;
