import React from "react";
import HandleDeleteCookies from "../components/Storage/CookiesForm";
import UserComponent from "../components/Displays/UserComponent";
import {CookieProvider} from "../components/Storage/CookiesProvider";
import "../Styles/App.css"
import "../Styles/MainView.css";
import DisplaySidebar from "../components/Displays/SkillDisplay";
import ShowBank from "../components/Functionality/ShowBank";



function App(){


        return(
            <div className="parent-container">
                <div className="header">
                    <h1 className="MainLayoutText">IdleGame</h1>
                </div>

                <div className="sidebar" >
                    <ShowBank/>
                    <DisplaySidebar/>
                </div>
                <div className="child-container">

                        <div className="content">
                            <UserComponent />
                        </div>
                </div>


                <div >
                    <HandleDeleteCookies/>
                </div>




            </div>

        );




}

export default App;