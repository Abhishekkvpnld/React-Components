import "./cell.css";

const Cell = ({ onClick, filled, isDisable, label }) => {
    return (
        <button
            disabled={isDisable}
            onClick={onClick}
            className={filled ? "cell active-cell" : "cell"}
            aria-label={label}
        >

        </button>
    )
}

export default Cell;