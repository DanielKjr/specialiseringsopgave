import React, {useContext, useState} from "react";
import WelcomeScreenComponent from "./WelcomeScreenComponent";
import HandleDeleteCookies, {CookiesExist} from "../Storage/CookiesForm";
import UserComponent from "./UserComponent";
import {CookieProvider} from "../Storage/CookiesProvider";
import "./App.css"
import "./MainView.css";
import DisplaySidebar from "./SkillDisplay";
import {UserContext} from "../Storage/UserProvider";


function App(){


        return(
            <div className="parent-container">
                <div className="header">
                    <h1 className="MainLayoutText">IdleGame</h1>
                </div>

                <div className="sidebar" >
                    <DisplaySidebar/>
                </div>
                <div className="child-container">
                    <CookieProvider >
                        <div >
                            <UserComponent  />
                        </div>

                    </CookieProvider>
                </div>


                <div >
                    <HandleDeleteCookies/>
                </div>




            </div>

        );




}

export default App;