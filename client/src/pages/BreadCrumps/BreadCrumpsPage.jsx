import { useEffect, useState } from "react";
import "./breadCrumps.css"


const BreadCrumpsPage = () => {

    const [newProducts, setNewProducts] = useState([]);

    console.log(newProducts, '🔥🔥🔥🔥')

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((res) => {
                const slicedProducts = res.products.slice(0, 10);
                setNewProducts(slicedProducts)
            })
    }, []);

    return (
        <div style={{ width: "100vw",marginTop:"10px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            <h2>🔥Products</h2>

            <div
                className="product-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)", // Three items per row
                    gap: "16px", // Space between grid items
                    padding: "16px",
                }}
            >
                {newProducts?.map((item) => (
                    <div
                        key={item?.id}
                        className="product-card"
                        style={{
                            padding: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "#fff",
                            textAlign: "center",
                            cursor:'pointer'
                        }}
                    >
                        <img
                            src={item?.thumbnail}
                            alt="img"
                            style={{
                                width: "100%",
                                height: "150px",
                                objectFit: "cover",
                                borderRadius: "4px",
                                marginBottom: "12px",
                            }}
                        />
                        <h3 style={{ fontSize: "18px", fontWeight: "600", margin: "8px 0" }}>
                            {item?.title}
                        </h3>
                        <h6 style={{ fontSize: "16px", fontWeight: "500", color: "#555" }}>
                            ₹{item?.price}
                        </h6>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BreadCrumpsPage;