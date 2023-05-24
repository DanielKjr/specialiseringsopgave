import {useContext} from "react";
import {ResourceContext} from "../Storage/ResourceProvider";
import "../../Styles/SkillDisplay.css";


function ShowBank() {
    const {methods} = useContext(ResourceContext);

    return (
        <div
            onClick={() => methods.HandleSetCurrentResourceCategory("Bank")}
            className="skill">
            <div key={`Bank`}>
                <img
                    className="skill-image"
                    src={`./SkillSprites/Bank.png`}
                    alt='Missing img'/>
                <div className="skill-text">Bank</div>
            </div>
        </div>
    );
}

export default ShowBank;