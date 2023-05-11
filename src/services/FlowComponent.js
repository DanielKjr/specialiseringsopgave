import React, {Component} from "react";
import {CookieProvider} from "../components/Storage/CookiesProvider";
import {ResourceProvider} from "../components/Storage/ResourceProvider";
import App from "../pages/App";
import {CookiesExist} from "../components/Storage/CookiesForm";
import WelcomeScreenComponent from "../pages/WelcomeScreenComponent";

//Not sure if this should be used for anything yet
class FlowComponent extends Component{


     componentDidMount() {

    }

    componentWillUnmount() {

    }


    render(){
         if(CookiesExist())
         {
             return(
                 <React.StrictMode>
                     <CookieProvider>
                         <ResourceProvider>
                             <App/>
                         </ResourceProvider>
                     </CookieProvider>
                 </React.StrictMode>
             );
         }
         else{
             return(
                 <WelcomeScreenComponent/>
             );


         }
    }


}

export default FlowComponent;