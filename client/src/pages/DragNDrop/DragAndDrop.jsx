import { useState } from "react";
import "./dragDrop.css";
import { dragItems } from "../../utils/dragItems";

const DragAndDrop = () => {
    const [tasks, setTasks] = useState(dragItems);
    const [dropIndicator, setDropIndicator] = useState('');

    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData("text/plain", taskId.toString());
    };

    const handleDragEnd = (e) => {
        e.dataTransfer.clearData();
        setDropIndicator(''); // Reset drop indicator after dragging ends
    };

    const handleDrop = (e, status) => {
        e.preventDefault();
        const taskId = parseInt(e.dataTransfer.getData("text/plain"));
        setTasks((prev) => {
            return prev.map((task) => {
                if (task.id === taskId) {
                    return { ...task, status };
                }
                return task;
            });
        });
        setDropIndicator(''); // Reset drop indicator after dropping
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDropIndicator(e.currentTarget.id);
    };

    const renderTasks = (status) => {
        return tasks
            .filter((item) => item.status === status)
            .map((task, index) => {
                return (
                    <div
                        className={`drag-component ${dropIndicator === task.id ? 'highlight' : ''}`}
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id)}
                        onDragEnd={(e) => handleDragEnd(e)}
                    >
                        {task.title}
                    </div>
                );
            });
    };

    return (
        <div className="dragContainer">
            <h1>Drag N Drop</h1>

            <div className="drag-component-section">
                <div
                    id="todo"
                    className="drag-component-area"
                    onDrop={(e) => handleDrop(e, "todo")}
                    onDragOver={handleDragOver}
                >
                    <h2>To Do</h2>
                    {renderTasks("todo")}
                </div>
            </div>

            <div className="drag-area">
                <div
                    id="pending"
                    className="drag-section"
                    onDrop={(e) => handleDrop(e, "pending")}
                    onDragOver={handleDragOver}
                >
                    <h2>Pending</h2>
                    {renderTasks("pending")}
                </div>

                <div
                    id="completed"
                    className="drag-section"
                    onDrop={(e) => handleDrop(e, "completed")}
                    onDragOver={handleDragOver}
                >
                    <h2>Completed</h2>
                    {renderTasks("completed")}
                </div>
            </div>
        </div>
    );
};

export default DragAndDrop;
