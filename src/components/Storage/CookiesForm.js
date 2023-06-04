import Cookies from "js-cookie";
import React, {useState} from "react";
import "../../Styles/PopUp.css"

//Provides a button to clear cookies, which is equal to deleting the saved data.
export default function HandleDeleteCookies(){
    const [confirmation, setConfirmation] = useState(false);
    function DeleteCookies(){
        Cookies.remove('userName');
        Cookies.remove('resources');
        localStorage.clear();
        window.location.reload();
    }

    function Confirmation()
    {
        setConfirmation(!confirmation);
    }

    return(
        <>
            <button  onClick={Confirmation}>Clear Cookies</button>
            {confirmation && (
                <div className="popup">
                    <div className="popup-text">
                        <h1>You are about to delete all saved data.</h1>
                        <h1>Are you sure?</h1>
                        <button onClick={DeleteCookies}>Delete</button>
                        <button onClick={Confirmation}>Go back</button>
                    </div>
                </div>
            )};
        </>
    );
}


export function SetCookieProps(){
    return { userName: getNameCookie(), resources: getResourceCookie()};
}

export function saveNameCookie(name){
    Cookies.set('userName', name.value);
}
export function saveResourceCookies(resources){
    Cookies.set('resources', JSON.stringify(resources));
}

export function getNameCookie(){
    if(Cookies.get('userName') !== undefined)
        return Cookies.get('userName');
}

export function getResourceCookie(){
        return Cookies.get('resources');
}

//Used to figure out if storage was exceeded
export function getCookieSize(){
    let cookieString = document.cookie;
    let cookieSize = cookieString.length * 2;
    return cookieSize;
}
export function getCookies(){
    return Cookies.get();
}

export function cookiesExist(){
    return Object.keys(Cookies.get()).length === 2;
}
