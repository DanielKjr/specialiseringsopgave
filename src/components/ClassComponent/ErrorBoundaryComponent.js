import React from "react";


//Purpose of this component is essentially to clear the local storage if any of the components down the line throws an error, as there'd be no way to do so otherwise.
class ErrorBoundaryComponent extends React.Component {
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

export default ErrorBoundaryComponent;
