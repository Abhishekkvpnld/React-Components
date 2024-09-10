import "./progressBarComponent.css";

const ProgressBarComponent = ({ value = 0 }) => {
    return (
        <div className="progress">
            <span>{value.toFixed()}%</span>
        </div>
    )
}

export default ProgressBarComponent;