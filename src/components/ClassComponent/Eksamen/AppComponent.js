import React, {Component} from "react";
import {CookieProvider} from "../../Storage/CookiesProvider";
import {ResourceProvider} from "../../Storage/ResourceProvider";
import App from "../../pages/App";
import {cookiesExist} from "../../Storage/CookiesForm";
import WelcomeScreenComponent from "../../pages/WelcomeScreenComponent";

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
         if(cookiesExist())
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