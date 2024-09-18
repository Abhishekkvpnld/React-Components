import "./box.css";

const Box = ({ onClick, title }) => {
    return (
        <div className="box-div">
            <h3>{title}</h3>
            <button onClick={onClick}>Demo</button>
        </div>
    )
}

export default Box