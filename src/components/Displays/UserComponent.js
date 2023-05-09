import React,{ useContext} from "react";
import {SaveResourceCookies} from "../Storage/CookiesForm";
import ResourceGather from "./ResourceGather";
import {DisplaySkillItems} from "./SkillDisplay";
import "../../Styles/MainView.css";
import {ResourceContext} from "../Storage/ResourceProvider";


function UserComponent() {

    const {
        currentResourceCategory,
        parsedResources,
    } = useContext(ResourceContext);


    function handleSave() {
        SaveResourceCookies(parsedResources);
    }



    return (

            <div  >
            {/*    <h1>{userName}</h1>*/}
            {/*    /!*temporary for debug purposes*!/*/}
                <h1>Debug:{JSON.stringify(parsedResources[currentResourceCategory])}</h1>

                <ResourceGather/>

                <div className="content">
                    <DisplaySkillItems/>

                </div>


                <button onClick={handleSave}>Save Progress</button>


            </div>





    );
}

export default UserComponent;

