import React from "react";
import '../../Styles/Progressbar.css';

function ProgressBar({ progress, item }) {
    return (
        <div className="progressBar">
            <div className="progress" style={{ width: `${progress}%` }}>
                <span className="sr-only">{`${progress}%${item}`}</span>
            </div>
        </div>
    );
}
export default ProgressBar;