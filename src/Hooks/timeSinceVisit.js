import React, {useState, useEffect, useContext} from 'react';
import {ResourceContext} from "../components/Storage/ResourceProvider";


export default function TimeSinceVisit() {

    const {
        previousResourceCategory,
        HandleResourceIncrease,
    } = useContext(ResourceContext);
    const [lastVisitTime, setLastVisitTime] = useState(localStorage.getItem('lastVisitTime') || null);
    const [timeSinceLastVisit, setTimeSinceLastVisit] = useState(null);
    const [numIntervals, setNumIntervals] = useState(null);

    useEffect(() => {
        const now = new Date().getTime();
        const storedTime = localStorage.getItem('lastVisitTime');

        if (storedTime) {
            const lastVisit = new Date(parseInt(storedTime, 10)).getTime();
            const timeDifference = now - lastVisit;
            setTimeSinceLastVisit(timeDifference);
            setNumIntervals(Math.floor(timeDifference / 8000));
        }

        const handleUnload = (event) => {
            // Check if the unload event was triggered by a page refresh
            if (event.type === 'beforeunload' && performance.getEntriesByType('navigation')[0].type === 'reload') {
                return;
            }
            localStorage.setItem('lastVisitTime', now.toString());
        };

        // Add an event listener to save the lastVisitTime when the page is closed
        window.addEventListener('beforeunload', handleUnload);

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    return (
        <div>
            {lastVisitTime && (
                <p>Last visit: {new Date(parseInt(lastVisitTime, 10)).toLocaleString()}</p>
            )}
            {timeSinceLastVisit && (
                <p>Time since last visit: {Math.round(timeSinceLastVisit / 1000)} seconds</p>
            )}
            {numIntervals && (
                <p>Number of 8-second intervals since last visit: {numIntervals}</p>
            )}
        </div>
    );
}






// import {useEffect, useState} from "react";
// import {useTimeCalculation} from "./useTimeCalculation";
//
//
// export default function TimeSinceVisit(){
//     const [lastVisitTime, setLastVisitTime] = useState(localStorage.getItem('lastVisitTime')|| null);
//     const [timeSinceLastVisit, setTimeSinceLastVisit] = useState(null);
//     const [calcTime, setCalcTime] = useState(useTimeCalculation(timeSinceLastVisit));
//
//     useEffect(() => {
//         const now = new Date().getTime();
//         const storedTime = localStorage.getItem('lastVisitTime');
//
//         if(storedTime){
//             const lastVisit = new Date(parseInt(storedTime, 10)).getTime();
//             const timeDifference = now - lastVisit;
//             setTimeSinceLastVisit(timeDifference);
//         }
//
//         localStorage.setItem('lastVisitTime', now.toString());
//     }, []);
//
//
//     return (
//         <div>
//             {calcTime.amount}
//             {/*<h1>{calcTime}</h1>*/}
//             {/*{lastVisitTime && (*/}
//             {/*    <p>Last visit: {new Date(parseInt(lastVisitTime, 10)).toLocaleString()}</p>*/}
//             {/*)}*/}
//             {/*{timeSinceLastVisit && (*/}
//             {/*    <p>Time since last visit: {Math.round(timeSinceLastVisit / 1000)} seconds</p>*/}
//             {/*)}*/}
//         </div>
//     );
//
// }