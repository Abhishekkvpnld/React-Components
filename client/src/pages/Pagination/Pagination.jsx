import { useEffect, useState } from "react";
import "./pagination.css";


const Pagination = () => {

    const [products, setProducts] = useState([]);


    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchData()
    }, []);

    console.log("data",products)

    return (
        <div className="pagination_div">

            <div className="pagination_section">

                <div className="pagination_items">

                    <div className="pagination_title">
                        <h2>Products</h2>
                    </div>

                    <div className="pagination_products">
                        <span>Products</span>
                    </div>
                </div>

                <div className="pagination_footer">
                    <button>Next</button>
                </div>

            </div>

        </div>
    )
}

export default Pagination