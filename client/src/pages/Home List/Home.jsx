import { useNavigate } from "react-router-dom"
import "./home.css"
import { data } from "../../utils/data"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home'>
            <h1>Components</h1>
            <ul>
                {
                    data?.map((item, index) => (
                        <li key={index} onClick={() => navigate(item?.site)}>{item?.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home