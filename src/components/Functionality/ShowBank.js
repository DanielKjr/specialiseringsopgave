import {useCallback, useContext, useEffect} from "react";
import {ResourceContext} from "../Storage/ResourceProvider";
import "../../Styles/SkillDisplay.css";
import Enums from "../../assets/Enums";

function ShowBank(){
    const {bank, HandleSetCurrentResourceCategory} = useContext(ResourceContext);


    const renderBank = useCallback(() => {
        try{
            return (
                <div
                     onClick={() =>  HandleSetCurrentResourceCategory("Bank")}
                     className="skill"                    >
                    <div key={`Bank`} >
                        <img
                            className="skill-image"
                            src={`./SkillSprites/Bank.png`}
                            alt='Missing img'

                        />
                        <div className="skill-text" >Bank</div>
                    </div>

                </div>

            );
        }
        catch (error){
            return (
                <div></div>
            );
        }

    });

    useEffect(() => {

    })

    return(
        <div className="sidebar">
            {renderBank()}
        </div>
    );
}

export default ShowBank;