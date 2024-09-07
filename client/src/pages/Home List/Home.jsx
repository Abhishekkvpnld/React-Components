import {useNavigate } from "react-router-dom"
import "./home.css"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home'>
            <h1>Components</h1>
            <ul>
                <li onClick={()=>navigate("/dragNdrop")}>Drag N Drop</li>
                <li onClick={()=>navigate("/stepper")}>Stepper</li>
                <li onClick={()=>navigate("/quiz")}>Progressbar</li>
            </ul>
        </div>
    )
}

export default Home