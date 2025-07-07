import { useEffect, useState } from "react";

export const Useapi = (url) => {

    const [product, setProducts] = useState([])
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true)
        fetch(url)
            .then(d => d.json())
            // .then(res=>console.log(res))
            .then(res => setProducts(res))
            
            .finally(() =>
                setloading(false));
    }, [url])
    return { product, loading }
}
