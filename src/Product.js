import { Link } from "react-router-dom";
function Product(props) {
    return (
        <>
            {/* <p>Product</p> */}
            <div className="card" style={{width:"400PX"}} id="card">
             
                <img className="card-img-top" src={props.img1} alt="Card image" id="img1"  />
                <div className="card-body">
                    <h4 className="card-title">{props.id}</h4>
                    <p className="card-text">{props.name}</p>
                    <p className="card-text">{props.price}</p>
                    <p className="card-text">{props.category}</p>
                    <p className="card-text">{props.description}</p>

                    <a href="#" className="btn btn-primary">AddtoCard</a>
                    <Link to={`/readme/${props.id}`}>ReadMore</Link>
                </div>
            </div>
        </>
    )
}
export default Product;