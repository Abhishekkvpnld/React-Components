import "./box.css";

const Box = ({ onClick, title }) => {
    return (
        <div onClick={onClick} className="box-div">
             <h3>{title}</h3>
            <button>Demo</button>
        </div>
    )
}

export default Box