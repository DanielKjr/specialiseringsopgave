import React from "react";
import HandleDeleteCookies from "../components/Storage/CookiesForm";
import UserComponent from "../components/Displays/UserComponent";
import {CookieProvider} from "../components/Storage/CookiesProvider";
import "../Styles/App.css"
import "../Styles/MainView.css";
import DisplaySidebar from "../components/Displays/SkillDisplay";



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
                        <div className="content">
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