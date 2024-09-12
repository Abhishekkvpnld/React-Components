import "./dropDown.css";
import { CiStar } from "react-icons/ci";  // Empty star icon
import { TbStarFilled } from "react-icons/tb";  // Filled star icon

const DropDown = ({
    currency,
    currencies,
    handleFavorites,
    favorite,
    setCurrency
}) => {

    // Check if the current currency is marked as favorite
    const isFavorite = (curr) => favorite.includes(curr);

    return (
        <div className="drop-down">
            <div className="select-div">
                <select
                    name="currency-select"
                    id="currency-select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                >
                    {/* Map over favorite currencies */}
                    {favorite?.map((curr, index) => (
                        <option
                            className="currency-option"
                            style={{ backgroundColor: "rgb(209, 215, 217)" }}
                            value={curr}
                            key={index}
                        >
                            {curr}
                        </option>
                    ))}

                    {/* Separator or Divider */}
                    <option disabled>──────────</option>

                    {/* Map over non-favorite currencies */}
                    {currencies?.filter((curr) => !favorite.includes(curr))
                        .map((curr, index) => (
                            <option
                                className="currency-option"
                                value={curr}
                                key={index}
                            >
                                {curr}
                            </option>
                        ))
                    }
                </select>

                {/* Favorite toggle button */}
                <button onClick={() => handleFavorites(currency)} className="fav-btn">
                    {
                        isFavorite(currency)
                            ? <TbStarFilled style={{ color: "goldenrod" }} />
                            : <CiStar />
                    }
                </button>
            </div>
        </div>
    );
}

export default DropDown;
