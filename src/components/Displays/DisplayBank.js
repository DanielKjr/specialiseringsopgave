import {useCallback, useContext, useEffect, useState} from "react";
import "../../Styles/SkillDisplay.css";
import "../../Styles/App.css";
import "../../Styles/Bank.css";
import {ResourceContext} from "../Storage/ResourceProvider";

//Displays the content of the players Bank similarly to how skill items are displayed.
function DisplayBank(){
    const {
        bank
    } = useContext(ResourceContext);

    const [keyValues, setKeyValues] = useState(Object.values(JSON.parse(bank)));

    useEffect(() =>{
        setKeyValues(Object.values(JSON.parse(bank)));
    }, [ bank])

    const renderBank = useCallback(() => {
            let count = 0;
            const bankItems = keyValues.map((key, i) => {
                const sprites = [];
                const amounts = [];
                for (const property in key) {
                    if (key.hasOwnProperty(property) && property !== 'amount') {
                        sprites.push(key[property].sprite);
                        amounts.push(key[property].amount);
                        if (key[property].amount >= 1) {
                            count++;
                        }
                    }
                }
                return (
                    <div key={`Bank-${i}`}>
                        <div>
                            {sprites.map((sprite, j) => (
                                amounts[j] >= 1 && (
                                    <div key={`Bank-${i}-img-${j}`} className="bank-item">
                                        <img
                                            className="bank-item"
                                            src={`./ResourceSprites/${sprite}.png`}
                                            alt={`./ResourceSprites/${sprite}.png not found`}
                                        />
                                        <span className="tooltipText">{sprite}</span>
                                        <div className="bank-text">
                                            {amounts[j]}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                );
            }, [bank]);

            return count > 0 ?
                <div className="bank-container">{bankItems}</div>
             :
                        <h1>Bank is empty</h1>

    }, [keyValues]);


    return(
        <div className="bank-container"> {renderBank()}</div>
    );
}



export default DisplayBank;