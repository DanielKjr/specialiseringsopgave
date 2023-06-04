import {useContext, useEffect, useState} from "react";
import {ResourceContext} from "../Storage/ResourceProvider";
import "../../Styles/PopUp.css"

//Calculates how many "ticks" the player has been gone for and gives offline progression for each tick.
//This is calculated through saved date values in localStorage
export default function TimeCalculation(props) {
    const {methods} = useContext(ResourceContext);
    const lastVisitTime= getStorage('lastVisitTime');
    const [numIntervals, setNumIntervals] = useState(0);
    const [now, setNow] = useState(new Date().getTime());
    const [awayTimer, setAwayTimer] = useState((now - lastVisitTime) / 1000);
    const maxInterval = 100;

    useEffect(() => {
        setNow(new Date().getTime());
        calculateTicks();
        updateResources();

    }, [numIntervals,lastVisitTime])


    function getStorage(name){
        return localStorage.getItem(name);
    }
    function setStorage(name, value){
        localStorage.setItem(name, value);
    }
    function setLocalStorage(){
        setStorage('lastResourceCategory', getStorage('lastResourceCategory'));
        setStorage('lastResourceItem', getStorage('lastResourceItem'));
        setStorage('lastVisitTime', now.toString());
        props.handleSetHasLoaded();
    }
    function calculateTicks() {
        const storedTime = getStorage('lastVisitTime');
        if (storedTime) {
            const lastVisit = new Date(parseInt(storedTime, 10)).getTime();
            setAwayTimer((now - lastVisit)/ 1000 );
            setNumIntervals(Math.floor(awayTimer / 15));
        }
    }


    function updateResources() {
            numIntervals >= 1 ?
                numIntervals >= maxInterval ?
                  methods.HandleResourceIncrease(getStorage('lastResourceCategory'), getStorage('lastResourceItem'), maxInterval) &&
                    setStorage('lastVisitTime', now.toString())
                  :
                   methods.HandleResourceIncrease(getStorage('lastResourceCategory'), getStorage('lastResourceItem'), numIntervals) &&
                    setStorage('lastVisitTime', now.toString())

            :  <></>
    }

    return (
        <>
            {numIntervals !== 0 && (
                <div className="popup">
                    <div className="popup-text">
                        <h2>While you were gone you've received:</h2>
                        <div>
                            <img className="resourceGain-Image"
                                src={`./ResourceSprites/${getStorage('lastResourceCategory')}/${getStorage('lastResourceItem')}.png`}
                                alt={`./ResourceSprites/${getStorage('lastResourceCategory')}/${getStorage('lastResourceItem')}.png not found`}
                            />
                            <h2>{numIntervals >= maxInterval ? maxInterval: numIntervals} {getStorage('lastResourceItem')}.</h2>
                            <h4>You were gone for: {Math.round(awayTimer)} Seconds</h4>
                        </div>
                        <button onClick={() => setLocalStorage()}>OK</button>
                    </div>
                </div>
            )};
        </>
    );

}

