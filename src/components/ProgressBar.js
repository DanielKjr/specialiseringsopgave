import React, {useState} from "react";
import '../Styles/Progressbar.css';


// function ProgressBar(props){
//     const [progress, setProgress] = useState(props.progress);
//
//     const containerStyle= {
//         width: props.width,
//         height: props.height,
//         backgroundColor: props.backgroundColor,
//         borderRadius: props.borderRadius
//     };
//
//     const progressBarStyle = {
//         height: '100%',
//         backgroundColor: props.progressBarcolor,
//         width: `${progress}`,
//         borderRadius: props.borderRadius
//     };
//
//
//     React.useEffect(() => {
//         setProgress(props.progress);
//     },[props.progress]);
//
//
//     return(
//         <>
//         <div className="Progress-bar-container" style={containerStyle}></div>
//         <div className="Progress-bar" style={progressBarStyle}></div>
//         </>
//     );
// }

function ProgressBar({ progress }) {
    return (
        <div className="progressBar">
            <div className="progress" style={{ width: `${progress}%` }}>
                <span className="sr-only">{`${progress}% Complete`}</span>
            </div>
        </div>
    );
}
export default ProgressBar;