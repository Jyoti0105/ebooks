import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Useapi } from "../Useapi";

function ProductDetail()
{
    const param =useParams();
    console.log(param);

    const {product:prod,loding:load}=Useapi(`http://localhost:3000/products/${param.id}`)
    console.log(prod)
    console.log(load)
    const nevigate=useNavigate()
    return(
<>
{
    load && <div class="spinner-border text-danger" id="sp"></div>
}
<div className="card" style={{width:"400PX"}} id="card">
             
                <img className="card-img-top" src={prod.img1} alt="Card image" id="img1"  />
                <div className="card-body">
                    <h4 className="card-title">{prod.id}</h4>
                    <p className="card-text">{prod.name}</p>
                    <p className="card-text">{prod.price}</p>
                    <p className="card-text">{prod.category}</p>
                    <p className="card-text">{prod.description}</p>
                     <a href="#" className="btn btn-primary">AddtoCard</a>
                    
                    <button className="btn btn-button" onClick={()=>{
                        setTimeout(() => {
                                 nevigate('/product')
                        }, 2000);
                   
                    }}
                    >GoBack</button>
                </div>
            </div>
</>
    )
}
export default ProductDetail;