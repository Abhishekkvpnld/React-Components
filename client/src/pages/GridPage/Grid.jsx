import { useState } from "react";
import Cell from "../../components/Cell/Cell";
import "./grid.css";

const Grid = () => {

    const [order, setOrder] = useState([]);
    const [isDeativating, setIsDeactivating] = useState(false);

    const config = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]

    const deactivateCells = () => {
        setIsDeactivating(true);
        const timer = setInterval(() => {
            setOrder((originOrder) => {
                const newOrder = originOrder.slice();
                newOrder.pop();

                if (newOrder.length === 0) {
                    clearInterval(timer);
                    setIsDeactivating(false);
                }

                return newOrder;
            })
        }, 300);
    }

    const activateCell = (i) => {
        const newOrder = [...order, i];
        setOrder(newOrder);

        //Deactivation
        if (newOrder.length === config.flat(1).filter(Boolean).length) {
            deactivateCells()
        }
    };

    return (
        <div className="grid-div">

            <h2>Grid Component</h2>

            <div className="grid_section" style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}>
                {
                    config.flat(1).map((value, index) => {

                        return value ? (
                            <Cell
                                filled={order.includes(index)}
                                key={index}
                                label={`cell ${index}`}
                                onClick={() => activateCell(index)}
                                isDisable={order.includes(index) || isDeativating}
                            />
                        ) : (
                            <span key={index}></span>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Grid;