import { useEffect, useState } from "react";
import Productlist from "./Productlist";
import { Useapi } from "./Useapi";
import Nav from "./Component/Nav";

function App()
{
    // const[Products,setProducts]=useState('')
    const[url,seturl]=useState(`http://localhost:3000/products`)
    const {product:products,loading:load}=Useapi(url);
    console.log(load)
    // useEffect(()=>{
    //     fetch(url)
    //     .then(d=>d.json())
    //     // .then(res=>console.log(res))
    //     .then(res=>setProducts(res));

    // },[url])
    return(
        <>
       
        <p id="x">My Ebooks</p>
       
        <div id="btn1"></div>
        <button className="btn btn-success" onClick={()=>seturl(`http://localhost:3000/products`)}>All</button>
        <button className="btn btn-danger" onClick={()=>seturl(`http://localhost:3000/products?category=laptop`)}>Laptop</button>
        <button className="btn btn-warning"onClick={()=>seturl(`http://localhost:3000/products?category=mobile`)}>Mobile</button>
        <button className="btn btn-primary"onClick={()=>seturl(`http://localhost:3000/products?category=watch`)}>Watch</button>
        <button className="btn btn-secondary"onClick={()=>seturl(`http://localhost:3000/products?category=tv`)}>TV</button>
         {
            load && <div class="spinner-border text-danger" id="sp"></div>
        }
        <Productlist product1={products}/>
       
        </>
    )
}
export default App;
