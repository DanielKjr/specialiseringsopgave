import React, {useContext, useEffect} from "react";
import {SaveResourceCookies} from "../Storage/CookiesForm";
import ResourceGather from "../Functionality/ResourceGather";
import "../../Styles/MainView.css";
import {ResourceContext} from "../Storage/ResourceProvider";
import DisplayBank from "./DisplayBank";
import HandleSkillItem from "../Functionality/HandleSkillItem";



function GameFlowComponent() {

    const {
        currentResourceCategory,
        currentResourceItem,
        parsedResources,
    } = useContext(ResourceContext);

    function HandleSave() {
        SaveResourceCookies(parsedResources);
        localStorage.setItem('lastResourceCategory', currentResourceCategory);
        localStorage.setItem('lastResourceItem', currentResourceItem);
        localStorage.setItem('lastTimeVisited', new Date().getTime().toString());
    }

    //save every time any of these things change. To avoid it doing offline progress while you are there
    useEffect(() => {
        HandleSave();
    }, [currentResourceCategory, currentResourceItem, parsedResources])

    return currentResourceCategory !== "Bank" ?
        <>
            <ResourceGather/>
            <div className="skill-container">
                <HandleSkillItem/>
            </div>
            <button onClick={HandleSave}>Save Progress</button>
        </>
     :
        <div className="bank-container">
            <DisplayBank/>
        </div>
}

export default GameFlowComponent;

