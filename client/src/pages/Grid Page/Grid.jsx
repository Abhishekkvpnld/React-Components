import { useState } from "react";
import Cell from "../../components/Cell/Cell";
import "./grid.css";

const Grid = () => {

    const [order, setOrder] = useState([]);

    const config = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]

    const activateCell = (i) => {

    }

    return (
        <div className="grid-div">

            <h2>Grid Component</h2>

            <div className="grid_section" style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}>
                {
                    config.flat(1).map((value, index) => {
                        return value ? (
                            <Cell filled={false} key={index} onClick={() => activateCell(index)} />
                        ) : (
                            <span></span>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Grid;