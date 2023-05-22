import React, {useContext, useEffect, useState} from "react";
import HandleDeleteCookies, {SaveResourceCookies} from "../components/Storage/CookiesForm";
import UserComponent from "../components/Displays/UserComponent";
import "../Styles/App.css"
import "../Styles/MainView.css";
import DisplaySidebar from "../components/Displays/MainDisplay";
import ShowBank from "../components/Displays/ShowBank";
import TimeCalculation from "../Hooks/TimeCalculation";
import {ResourceContext} from "../components/Storage/ResourceProvider";



function App(){

    const {parsedResources} = useContext(ResourceContext);
    const [hasLoaded, setHasLoaded] = useState(false);
    const HandleSetHasLoaded = ()=>{
        SaveResourceCookies(parsedResources);
        setHasLoaded(true);
    }

    //if hasLoaded then update the lastVisitTime constantly, so you don't get offline progression
    useEffect(() => {
        if(hasLoaded)
        {
            localStorage.setItem('lastVisitTime', new Date().getTime().toString());
        }
    });




    return(
            <div className="parent-container">
                <div className="header">
                    <h1 className="MainLayoutText">IdleGame</h1>
                </div>

                <div className="sidebar" >
                    <ShowBank/>
                    <DisplaySidebar/>
                    <HandleDeleteCookies/>
                </div>

                <div className="child-container">
                    <div className="content">
                        <UserComponent />
                    </div>
                    {!hasLoaded &&(<TimeCalculation HandleSetHasLoaded={HandleSetHasLoaded}/>)}
                </div>
            </div>
        );
}

export default App;