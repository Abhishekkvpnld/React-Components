import { useEffect, useState } from "react";
import "./progressBarComponent.css";

const ProgressBarComponent = ({ value = 0 }) => {

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage(Math.min(100, value));
    }, [value]);

    return (
        <div className="progress">
            <span style={{ color: `${percentage > 48 ? "white" : "black"}` }}>{percentage.toFixed()}%</span>
            <div
                style={{ width: `${percentage}%` }}
                // style={{
                //     transform: `scaleX(${percentage / 100})`,
                //     transformOrigin: "left"
                // }}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percentage}
            />
        </div>
    )
}

export default ProgressBarComponent;