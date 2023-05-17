import {useContext, useEffect, useState} from "react";
import {ResourceContext} from "../components/Storage/ResourceProvider";

export default function TimeCalculation(props) {
    const {HandleResourceIncrease} = useContext(ResourceContext);
    const [lastVisitTime, setLastVisitTime] = useState(GetStorage('lastVisitTime') || null);
    const [numIntervals, setNumIntervals] = useState(0);
    const [now, setNow] = useState(new Date().getTime());
    const maxInterval = 500;

    useEffect(() => {
        setNow(new Date().getTime());
        CalculateTicks();
        UpdateResources();

    }, [numIntervals, lastVisitTime])


    function GetStorage(name){
        return localStorage.getItem(name);
    }
    function SetStorage(name, value){
        localStorage.setItem(name, value);
    }
    function SetLocalStorage(){
        SetStorage('lastResourceCategory', GetStorage('lastResourceCategory'));
        SetStorage('lastResourceItem', GetStorage('lastResourceItem'));
        SetStorage('lastVisitTime', now.toString());
        props.HandleSetHasLoaded();
    }
    function CalculateTicks() {
        const storedTime = GetStorage('lastVisitTime');
        if (storedTime) {
            const lastVisit = new Date(parseInt(storedTime, 10)).getTime();
            const timeDifference = now - lastVisit;
            setNumIntervals(Math.floor(timeDifference / 15000));
        }
    }

    function UpdateResources() {
        if (numIntervals >= 1) {
            if(numIntervals >= maxInterval)
                setNumIntervals(maxInterval);

                //TODO either limit this to only be gathering or add a recipe check
                HandleResourceIncrease(GetStorage('lastResourceCategory'), GetStorage('lastResourceItem'), numIntervals);
                SetStorage('lastVisitTime', now.toString());
        }
    }

    return (
        <>
            {numIntervals !== 0 && (
                <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: "100%", height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
                    justifyContent: "center", alignItems: "center"}}>

                    <div style={{backgroundColor: "white", padding: "20px", borderRadius: "5px", textAlign: "center"}}>
                        <h2>While you were gone you've received:</h2>
                        <div>
                            <img
                                src={`./ResourceSprites/${GetStorage('lastResourceCategory')}/${GetStorage('lastResourceItem')}.png`}
                                alt="bad path"
                            />
                            <p>{numIntervals} {GetStorage('lastResourceItem')}.</p>
                        </div>
                        <button onClick={() => SetLocalStorage()}>OK</button>
                    </div>
                </div>
            )}
        </>

    );

}

