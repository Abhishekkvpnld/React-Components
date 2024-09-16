import { useState } from "react";
import "./selectableGridComponent.css";

const SelectableGridComponent = ({ rows = 10, column = 10 }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [selectedBoxes, setSelectedBoxes] = useState([]);

    const handleMouseDown = (boxNumber) => {
        setIsMouseDown(true);
        setSelectedBoxes([boxNumber]);
    };

    const handleMouseEnter = (boxNumber) => {
        if (isMouseDown) {
            const startBox = selectedBoxes[0];
            const endBox = boxNumber;

            const startRow = Math.floor((startBox - 1) / column);
            const startColumn = (startBox - 1) % column;

            const endRow = Math.floor((endBox - 1) / column);
            const endColumn = (endBox - 1) % column;

            const minRow = Math.min(startRow, endRow);
            const maxRow = Math.max(startRow, endRow);

            const minCols = Math.min(startColumn, endColumn);
            const maxCols = Math.max(startColumn, endColumn);

            const selected = [];
            for (let row = minRow; row <= maxRow; row++) {
                for (let col = minCols; col <= maxCols; col++) {
                    selected.push(row * column + col + 1); // Corrected calculation
                }
            }

            setSelectedBoxes(selected);  // Updating the selected boxes
            console.log(selected);  // Debugging output
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    return (
        <div
            className="grid-component"
            style={{ "--rows": rows, "--cols": column }}
            onMouseUp={handleMouseUp}
        >
            {[...Array(rows * column).keys()].map((_, i) => (
                <div
                    className={`grid-box ${selectedBoxes.includes(i + 1) ? "selected" : ""}`}
                    key={i}
                    onMouseDown={() => handleMouseDown(i + 1)}
                    onMouseEnter={() => handleMouseEnter(i + 1)}
                >
                    {i + 1}
                </div>
            ))}
        </div>
    );
};

export default SelectableGridComponent;
