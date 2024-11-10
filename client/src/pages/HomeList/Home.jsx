import { useNavigate } from "react-router-dom"
import "./home.css"
import { data } from "../../utils/data"
import Box from "../../components/HomePageBox/Box"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home'>
            <h1>Components</h1>
            <div>
                {
                    data?.map((item, index) => (
                        <Box key={index} onClick={() => navigate(item?.site)} title={item?.title} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home