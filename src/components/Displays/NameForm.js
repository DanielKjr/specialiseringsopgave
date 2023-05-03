import {useFormInput} from "../../Hooks/useFormInput";
import {SaveNameCookie, SaveResourceCookies} from "../Storage/CookiesForm";
import resources from "../../services/resources";

export default function NameForm(){
    const nameProp = useFormInput("");

    const handleSubmit =async (event) =>{
        event.preventDefault();
        SaveNameCookie(nameProp);
        SaveResourceCookies(resources);
        window.location.reload();
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input {...nameProp}/>
                </label>
                <button type="submit">Submit</button>
            </form>

        </>
    );
}