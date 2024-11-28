import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BreadCrumpsProductDetails = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res);
            })
    }, []);

    return (
        <div style={{ width: "100vw", marginTop: "10px", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
            <h2>Product Details</h2>
            {
                product ? (
                    <div style={{textAlign:"center", width: "60%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <h1>{product?.title}</h1>
                        <img src={product.thumbnail} alt="img" />
                        <div style={{display:"flex"}}><h4>price: ₹ {product.price}</h4> <span style={{color:"red",marginLeft:"8px"}}>{product.availabilityStatus}</span></div>
                        <p style={{marginTop:"5px"}}>{product.description}</p>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }

        </div>
    )
}

export default BreadCrumpsProductDetails;