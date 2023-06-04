import React, {useContext, useEffect, useState} from "react";
import HandleDeleteCookies, {saveResourceCookies} from "../Storage/CookiesForm";
import PlayerControlComponent from "../Displays/PlayerControlComponent";
import "../../Styles/App.css"
import "../../Styles/MainView.css";
import ShowBank from "../Functionality/ShowBank";
import TimeCalculation from "../Functionality/TimeCalculation";
import {ResourceContext} from "../Storage/ResourceProvider";
import HandleSkillCategory from "../Functionality/Handlers/HandleSkillCategory";
import ResourceHandler from "../Functionality/Handlers/ResourceHandler";


function App(){

    const {parsedResources} = useContext(ResourceContext);
    const [hasLoaded, setHasLoaded] = useState(false);

    //if hasLoaded then update the lastVisitTime constantly, so you don't get offline progression
    useEffect(() => {
        if(hasLoaded)
        {
            localStorage.setItem('lastVisitTime', new Date().getTime().toString());
        }
    });

    const handleSetHasLoaded = ()=>{
        saveResourceCookies(parsedResources);
        setHasLoaded(true);
    }


    return(
            <div className="parent-container">
                <div className="header">
                    <h1 className="MainLayoutText">IdleGame</h1>
                </div>

                <div className="sidebar" >
                    <ShowBank/>
                    <HandleSkillCategory/>
                    <HandleDeleteCookies/>
                </div>

                <div className="main">
                    <div className="child-container">
                        <ResourceHandler/>
                        <PlayerControlComponent />
                    </div>
                    {!hasLoaded &&(<TimeCalculation handleSetHasLoaded={handleSetHasLoaded}/>)}
                </div>

            </div>
        );
}

export default App;