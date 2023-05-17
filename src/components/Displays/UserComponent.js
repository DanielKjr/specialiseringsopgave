import React, {useContext, useEffect, useState} from "react";
import {SaveResourceCookies} from "../Storage/CookiesForm";
import ResourceGather from "../Functionality/ResourceGather";
import {DisplaySkillItems} from "./SkillDisplay";
import "../../Styles/MainView.css";
import {ResourceContext} from "../Storage/ResourceProvider";
import DisplayBank from "./DisplayBank";



function UserComponent() {


    const {
        currentResourceCategory,
        currentResourceItem,
        parsedResources,
    } = useContext(ResourceContext);


    function handleSave() {
        SaveResourceCookies(parsedResources);
        localStorage.setItem('lastResourceCategory', currentResourceCategory);
        localStorage.setItem('lastResourceItem', currentResourceItem);
        localStorage.setItem('lastTimeVisited', new Date().getTime().toString());
    }
    // useEffect(() => {
    //     const handleUnload = (event) => {
    //         // Check if the unload event was triggered by a page refresh
    //         if (event.type === 'beforeunload' && performance.getEntriesByType('navigation')[0].type === 'reload') {
    //             handleSave();
    //         }
    //         handleSave();
    //     };
    //
    //     window.addEventListener('beforeunload', handleUnload);
    //     return () => {
    //         window.removeEventListener('beforeunload', handleUnload);
    //     };
    // })

    if (currentResourceCategory !== "Bank") {
        return (
            < >
                <ResourceGather/>
                <div className="skill-container">
                    <DisplaySkillItems/>
                </div>
                <button onClick={handleSave}>Save Progress</button>


            </>


        );
    }
    else{
        return(
            <>
                <div className="bank-container">
                    <DisplayBank/>
                </div>
            </>

        );
    }

}

export default UserComponent;

