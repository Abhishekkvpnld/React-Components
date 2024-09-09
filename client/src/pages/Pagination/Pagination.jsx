import { useEffect, useState } from "react";
import "./pagination.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";




const Pagination = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products?limits=100');
        const data = await response.json();
        if (data && data.products) {
            setProducts(data.products);
        } // Set the actual products array
    };

    useEffect(() => {
        fetchData();
    }, [page]);


    return (
        <div className="pagination_div">

            <div className="pagination_section">

                <div className="pagination_items">

                    <div className="pagination_title">
                        <h2>Products</h2>
                    </div>
                    {
                        products?.length > 0 && (

                            <div className="pagination_products">
                                {
                                    products.slice(page * 10 - 10, page * 10).map((product, index) => (
                                        <ProductCard key={index} product={product} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>

                <div className="pagination_footer">

                    <span onClick={() => setPage(prev => prev - 1)} className={page > 1 ? "navBtn" : "disableBtn"}><IoMdArrowDropleftCircle /></span>
                    {
                        [...Array(products.length / 10)].map((_, index) => (
                            <span onClick={() => setPage(index + 1)} className="navBtn" key={index}>{index + 1}</span>
                        ))
                    }
                    <span onClick={() => setPage(prev => prev + 1)} className={page < products.length / 10 ? "navBtn" : "disableBtn"}><IoMdArrowDroprightCircle /></span>

                </div>

            </div>

        </div>
    )
}

export default Pagination;
