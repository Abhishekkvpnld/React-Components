import { useEffect, useState } from "react";
import ProgressBarComponent from "../../components/ProgressBar/ProgressBarComponent";
import "./progressBar.css";

const ProgressBar = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((prev) => prev + 1);
        }, 50);

        if (value === 100) {
            clearInterval(interval)
        }
        return () => clearInterval(interval); // Ensure cleanup when component unmounts
    }, [value]);

    return (
        <div className="progressBar_div">
            <h2>Progress Bar</h2>
            <ProgressBarComponent value={value} />
            <span>Loading...</span>
        </div>
    )
}

export default ProgressBar;