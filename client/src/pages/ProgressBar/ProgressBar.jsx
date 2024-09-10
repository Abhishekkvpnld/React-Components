import ProgressBarComponent from "../../components/ProgressBar/ProgressBarComponent";
import "./progressBar.css";

const ProgressBar = () => {
    return (
        <div className="progressBar_div">
            <h2>Progress Bar</h2>
            <ProgressBarComponent/>
            <span>Loading...</span>
        </div>
    )
}

export default ProgressBar;