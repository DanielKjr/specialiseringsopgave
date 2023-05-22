import {useCallback, useContext} from "react";
import {ResourceContext} from "../Storage/ResourceProvider";
import "../../Styles/SkillDisplay.css";


function ShowBank(){
    const {methods} = useContext(ResourceContext);


    //TODO check/figure out why the try catch
    const renderBank = useCallback(() => {
        try{
            return (
                <div
                     onClick={() =>  methods.HandleSetCurrentResourceCategory("Bank")}
                     className="skill"                    >
                    <div key={`Bank`} >
                        <img
                            className="skill-image"
                            src={`./SkillSprites/Bank.png`}
                            alt='Missing img'/>
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

    return(
        <div className="sidebar">
            {renderBank()}
        </div>
    );
}

export default ShowBank;