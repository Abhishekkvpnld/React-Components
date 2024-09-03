import { useState } from "react";
import "./dragDrop.css";
import { dragItems } from "../../utils/dragItems";


const DragAndDrop = () => {

    const [tasks, setTasks] = useState(dragItems);

    return (
        <div className="dragContainer">


<h1>Drag N Drop</h1>


            <div className="drag-component-section">
                <div className="drag-component">

                </div>
            </div>


            <div className="drag-area">

                <div className="drag-section">
                    <h2>Pending</h2>
                </div>

                <div className="drag-section">
                    <h2>Completed</h2>
                </div>

            </div>

        </div>
    )
}

export default DragAndDrop