import React, {useContext} from "react";
import {SaveResourceCookies} from "../Storage/CookiesForm";
import ResourceGather from "../Functionality/ResourceGather";
import {DisplaySkillItems} from "./SkillDisplay";
import "../../Styles/MainView.css";
import {ResourceContext} from "../Storage/ResourceProvider";
import DisplayBank from "./DisplayBank";


function UserComponent() {

    const {
        currentResourceCategory,
        parsedResources,
    } = useContext(ResourceContext);


    function handleSave() {
        SaveResourceCookies(parsedResources);
    }


    if (currentResourceCategory !== "Bank") {
        return (
            < >
                {/*    <h1>{userName}</h1>*/}
                {/*    /!*temporary for debug purposes*!/*/}
                {/*<h1>Debug:{JSON.stringify(parsedResources[currentResourceCategory])}</h1>*/}


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

