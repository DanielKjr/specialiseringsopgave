import React, {useCallback, useContext, useEffect, useState} from "react";
import {CookiesContext} from "../Storage/CookiesProvider";
import {SaveResourceCookies} from "../Storage/CookiesForm";
import Enums from "../../assets/Enums"
import ResourceGather from "./ResourceGather";
import DisplaySidebar, {DisplaySkillItems} from "./SkillDisplay";
// import "./SkillDisplay.css";
import "./MainView.css";
import {UserContext} from "../Storage/UserProvider";


function UserComponent(props) {

    const {
        currentResourceCategory,
        currentResourceItem,
        parsedResources,
    } = useContext(UserContext);
    let amount = 1;
    const [valuesChanged, setValuesChanged] = useState(true);


    function handleSave() {
        SaveResourceCookies(parsedResources);
    }


    // function HandleSetCurrentResourceCategory(category) {
    //     setCurrentResourceCategory(category);
    //     setCurrentResourceItem(Object.keys(parsedResources[category])[0]);
    //     setValuesChanged(true);
    // }
    //
    // function HandleSetCurrentResourceItem(item) {
    //     setCurrentResourceItem(item);
    //     setValuesChanged(true);
    // }

    // useEffect(() => {
    //     if(valuesChanged)
    //         props.setGameInfo(resources, currentResourceCategory, currentResourceItem, parsedResources, amount);
    //         setValuesChanged(false);
    // }, [valuesChanged])

    return (
        <>
            <div  >
            {/*    <h1>{userName}</h1>*/}
            {/*    /!*temporary for debug purposes*!/*/}
                <h1>Debug:{JSON.stringify(parsedResources[currentResourceCategory])}</h1>

                <ResourceGather

                />

                <div className="content">
                    <DisplaySkillItems/>

                </div>


                <button onClick={handleSave}>Save Progress</button>


            </div>
        </>




    );
}

export default UserComponent;

