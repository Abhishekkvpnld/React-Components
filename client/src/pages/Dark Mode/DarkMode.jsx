import "./darkMode.css";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const DarkMode = () => {

    const { toggle, toggleFunc } = useContext(ThemeContext);

    return (
        <div className="darkMode" style={{ backgroundColor: `${toggle ? "black" : "white"}` }}>
            <div className="darkmode_div" style={{ backgroundColor: `${toggle ? "black" : ""}`, color: `${toggle ? "white" : "black"}`, borderColor: `${toggle ? "white" : "black"}` }}>
                <div className="title_div">
                    <h2 style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere recusandae voluptates.</h2>
                    <span title={!toggle ? "Dark Mode" : "Light Mode"} style={{ backgroundColor: `${toggle ? "green" : "red"}`, color: `${toggle ? "white" : "white"}` }} onClick={toggleFunc}>{toggle ? <MdDarkMode /> : <MdLightMode />} </span>
                </div>


                <div className="content">

                    <h3 style={{ textDecoration: "underline", color: `${toggle ? "red" : "black"}` }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                    <p style={{ color: `${toggle ? "white" : "black"}` }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repudiandae cupiditate consequuntur vel rerum voluptatibus. At, ipsum tempore. Necessitatibus ipsam in corrupti repellendus sequi, ratione odio quibusdam optio suscipit praesentium tenetur recusandae mollitia nulla nisi, assumenda aliquam adipisci deleniti repudiandae dignissimos est omnis voluptate architecto? Tempore tenetur architecto neque fugit reiciendis ipsum autem deleniti, saepe, illo, esse eos perspiciatis alias rerum eaque nesciunt voluptas iste quia soluta corrupti? Voluptatem necessitatibus asperiores quod iusto eveniet ad debitis adipisci atque doloremque? Cum quia labore perspiciatis quisquam reiciendis velit alias quaerat a enim nostrum molestiae beatae eligendi veritatis quidem fuga, atque soluta id, aliquid, illo assumenda optio facere voluptatem totam molestias. Accusamus magnam tempore distinctio voluptates veritatis nihil vero porro minus nostrum! Distinctio aliquid, rerum illum saepe excepturi unde vero explicabo sed, at, nostrum laborum accusantium. Autem, consequatur similique tenetur aliquid sequi iusto ex quam voluptatum molestiae aperiam ratione pariatur fuga necessitatibus quo eos sit placeat nulla assumenda esse consequuntur amet adipisci deserunt. Itaque ea laborum in sequi cupiditate, distinctio rem dicta consequuntur? Odit, esse reiciendis quos libero nobis expedita iste, vel nisi aspernatur nam corrupti non amet, modi et magnam quaerat sit natus id pariatur! Ullam laboriosam quasi commodi maxime dolor maiores?

                    </p>
                </div>

            </div>
        </div>
    )
}

export default DarkMode;