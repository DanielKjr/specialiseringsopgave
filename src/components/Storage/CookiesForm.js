import Cookies from "js-cookie";
import React, {useState} from "react";
import "../../Styles/PopUp.css"


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

            )}
        </>
    );
}


export function SetCookieProps(){
    return { userName: GetNameCookie(), resources: GetResourceCookie()};
}

export function SaveNameCookie(name){
    Cookies.set('userName', name.value);
}
export function SaveResourceCookies(resources){
    Cookies.set('resources', JSON.stringify(resources));
}

export function GetNameCookie(){
    if(Cookies.get('userName') !== undefined)
        return Cookies.get('userName');
}

export function GetResourceCookie(){
        return Cookies.get('resources');
}

//Used to figure out if storage was exceeded
export function GetCookieSize(){
    let cookieString = document.cookie;
    let cookieSize = cookieString.length * 2;
    return cookieSize;
}
export function GetCookies(){
    return Cookies.get();
}

export function CookiesExist(){
    return Object.keys(Cookies.get()).length === 2;
}
