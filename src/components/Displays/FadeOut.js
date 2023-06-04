import {useEffect, useState} from "react";
import "../../Styles/Fadeout.css";

//Was supposed to be used to display and fade out an image when you get resources.
//However, as the opacity was troublesome to reset it only works once currently.
const Fadeout = ({image}) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setFadeOut(true);
    }, [image])
    const handleTransitionEnd = () => {
        setFadeOut(false);
    }
    const handleImageLoad = () => {
        setFadeOut(true);
    }

    return(
        <img src = {image}
        alt="not found"
        className={`fadeout-image ${fadeOut ? 'fadeout' : ''}`}
             onLoad={handleImageLoad}
             onTransitionEnd={handleTransitionEnd}
        />
    );
}

export default Fadeout;