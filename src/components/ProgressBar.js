import React from "react";
import '../Styles/Progressbar.css';

function ProgressBar({ progress }) {
    return (
        <div className="progressBar">
            <div className="progress" style={{ width: `${progress}%` }}>
                <span className="sr-only">{`${progress}%`}</span>
            </div>
        </div>
    );
}
export default ProgressBar;