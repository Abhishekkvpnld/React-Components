import { Link, useLocation } from "react-router-dom";

const BreadCrump = () => {

    const { pathname } = useLocation();
    const pathNames = pathname?.split("/").filter(i => i);
    let breadcrumpPath = '';
 

    return (
        <div style={{ cursor: "pointer", padding: "10px", marginLeft: "10px" }}>
            {pathNames.length > 0 && <Link to={"/"} style={{textDecoration:"none",color:"blue"}}>Home</Link>}
            {
                pathNames?.map((path, index) => {
                    breadcrumpPath += `/${path}`;
                    const isLast = index === pathNames.length - 1

                    return isLast ? (
                        <span style={{color:"gray",textDecoration:"none"}} key={index}>/{path}</span>
                    ) : (
                        <span style={{textDecoration:"none"}} key={breadcrumpPath}>
                            / <Link style={{textDecoration:"none"}} to={breadcrumpPath}>{path}</Link>
                        </span>
                    )
                })
            }
        </div >
    )
}

export default BreadCrump;