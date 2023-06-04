import {useFormInput} from "../Hooks/useFormInput";
import { saveNameCookie, saveResourceCookies} from "../Storage/CookiesForm";
import resources from "../../Constants/Resources";
import "../../Styles/WelcomeScreen.css";

export default function NameForm(){
    const nameProp = useFormInput("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        saveNameCookie(nameProp);
        saveResourceCookies(resources);
        window.location.reload();

    }

    return(
        <>
            <form className="welcome-text" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input {...nameProp}/>
                </label>
                <button type="submit">Submit</button>
            </form>

        </>
    );
}