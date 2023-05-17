import React, {useContext, useEffect, useState} from "react";
import HandleDeleteCookies, {SaveResourceCookies} from "../components/Storage/CookiesForm";
import UserComponent from "../components/Displays/UserComponent";
import "../Styles/App.css"
import "../Styles/MainView.css";
import DisplaySidebar from "../components/Displays/SkillDisplay";
import ShowBank from "../components/Functionality/ShowBank";
import TimeCalculation from "../Hooks/TimeCalculation";
import {ResourceContext} from "../components/Storage/ResourceProvider";



function App(){

    const {parsedResources, currentResourceItem,currentResourceCategory} = useContext(ResourceContext);
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
    },[hasLoaded, parsedResources, currentResourceCategory, currentResourceItem]);




    return(
            <div className="parent-container">
                <div className="header">
                    <h1 className="MainLayoutText">IdleGame</h1>
                </div>

                <div className="sidebar" >
                    <ShowBank/>
                    <DisplaySidebar/>
                </div>

                <div className="child-container">
                    <div className="content">
                        <UserComponent />
                    </div>
                    {!hasLoaded &&(<TimeCalculation HandleSetHasLoaded={HandleSetHasLoaded}/>)}
                </div>

                <div >
                    <HandleDeleteCookies/>
                </div>

            </div>
        );
}

export default App;