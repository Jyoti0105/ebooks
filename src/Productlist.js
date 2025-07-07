import Product from "./Product";

function Productlist(props)
{
    const p=props.product1;
    console.log(p);
    return(
        <>
        <p id="x">My ProductList</p>
        
        {/* <Product {...p[0]}/>
          <Product {...p[1]}/> */}

          {
            p && p.map((p1,idx)=>
            {
                console.log(idx);
                return(<Product {...p1} key={idx}/>)
            })
          }
        </>
    )
}
export default Productlist;