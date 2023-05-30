import {useEffect, useState} from "react";
import "../Styles/Fadeout.css";

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