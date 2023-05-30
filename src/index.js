import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./pages/App";
import {ResourceProvider} from "./components/Storage/ResourceProvider";
import {CookieProvider} from "./components/Storage/CookiesProvider";
import {CookiesExist} from "./components/Storage/CookiesForm";
import WelcomeScreenComponent from "./pages/WelcomeScreenComponent";

//Purpose of this component is essentially to clear the local storage if any of the components down the line throws an error, as there'd be no way to do so otherwise.
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
        this.setState({hasError: true});
        localStorage.clear();
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return(
                <>
                    <h1 style={{zIndex: 1}}>There was an error in one of the components, local storage will now be cleared.</h1>
                    <button onClick={() => window.location.reload()}>Refresh</button>
                </>
            );
        }
        return this.props.children;
    }
}


const root = ReactDOM.createRoot(document.getElementById('root'));


if (CookiesExist()) {
    if (localStorage.getItem('lastVisitTime') === null) {
        localStorage.setItem('lastVisitTime', new Date().getTime().toString());
    }


    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                <CookieProvider>
                    <ResourceProvider>
                        <App/>
                    </ResourceProvider>
                </CookieProvider>
            </ErrorBoundary>
        </React.StrictMode>
    );
} else {
    root.render(
        <WelcomeScreenComponent/>
    );
}




