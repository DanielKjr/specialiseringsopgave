import React, {Component} from "react";
import {CookieProvider} from "../components/Storage/CookiesProvider";
import {ResourceProvider} from "../components/Storage/ResourceProvider";
import App from "./App";
import {CookiesExist} from "../components/Storage/CookiesForm";
import WelcomeScreenComponent from "./WelcomeScreenComponent";

//Not sure if this should be used for anything yet
class AppComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {nameProp: "For Display purposes"};
    }
     componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentDidCatch(error, errorInfo) {

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

export default AppComponent;