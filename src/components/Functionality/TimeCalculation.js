import {useContext, useEffect, useState} from "react";
import {ResourceContext} from "../Storage/ResourceProvider";
import "../../Styles/PopUp.css"

//Calculates how many "ticks" the player has been gone for and gives offline progression for each tick.
//This is calculated through saved date values in localStorage
export default function TimeCalculation(props) {
    const {methods} = useContext(ResourceContext);
    const lastVisitTime= GetStorage('lastVisitTime');
    const [numIntervals, setNumIntervals] = useState(0);
    const [now, setNow] = useState(new Date().getTime());
    const [awayTimer, setAwayTimer] = useState((now - lastVisitTime) / 1000);
    const maxInterval = 100;

    useEffect(() => {
        setNow(new Date().getTime());
        CalculateTicks();
        UpdateResources();

    }, [numIntervals,lastVisitTime])


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
            setAwayTimer((now - lastVisit)/ 1000 );
            setNumIntervals(Math.floor(awayTimer / 15));
        }
    }

    // function UpdateResources(){
    //     if(numIntervals >= 1)
    //     {
    //         if(numIntervals >= maxInterval)
    //         {
    //             methods.HandleResourceIncrease(GetStorage('lastResourceCategory'), GetStorage('lastResourceItem'), maxInterval);
    //             SetStorage('lastVisitTime', now.toString());
    //         }
    //         else
    //         {
    //             methods.HandleResourceIncrease(GetStorage('lastResourceCategory'), GetStorage('lastResourceItem'), numIntervals);
    //             SetStorage('lastVisitTime', now.toString());
    //         }
    //
    //     }
    // }

    function UpdateResources() {
            numIntervals >= 1 ?
                numIntervals >= maxInterval ?
                  methods.HandleResourceIncrease(GetStorage('lastResourceCategory'), GetStorage('lastResourceItem'), maxInterval) &&
                    SetStorage('lastVisitTime', now.toString())
                  :
                   methods.HandleResourceIncrease(GetStorage('lastResourceCategory'), GetStorage('lastResourceItem'), numIntervals) &&
                    SetStorage('lastVisitTime', now.toString())

            :  console.log(); //had to have something there


    }

    return (
        <>
            {numIntervals !== 0 && (
                <div className="popup"
                    // style={{
                    // position: "absolute", top: 0, left: 0,
                    // width: "100%", height: "100%",
                    // backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex",
                    // justifyContent: "center", alignItems: "center"}}
                     >

                    <div className="popup-text"
                        // style={{backgroundColor: "white", padding: "20px", borderRadius: "5px", textAlign: "center"}}
                    >
                        <h2>While you were gone you've received:</h2>
                        <div>
                            <img className="resourceGain-Image"
                                src={`./ResourceSprites/${GetStorage('lastResourceCategory')}/${GetStorage('lastResourceItem')}.png`}
                                alt={`./ResourceSprites/${GetStorage('lastResourceCategory')}/${GetStorage('lastResourceItem')}.png not found`}
                            />
                            <h2>{numIntervals >= maxInterval ? maxInterval: numIntervals} {GetStorage('lastResourceItem')}.</h2>
                            <h4>You were gone for: {Math.round(awayTimer)} Seconds</h4>
                        </div>
                        <button onClick={() => SetLocalStorage()}>OK</button>
                    </div>
                </div>
            )}
        </>

    );

}

