import Cookies from "js-cookie";
import React from "react";



export default function HandleDeleteCookies(){
    function DeleteCookies(){
        Cookies.remove('userName');
        Cookies.remove('resources');
        window.location.reload();
    }

    return(
        <>
            <button onClick={DeleteCookies}>Clear Cookies</button>
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
