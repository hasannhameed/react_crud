import { useEffect, useState } from "react";
import './style.css';

const LoadMore = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [btndisable, setBtnDisable] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);

            if (!response.ok) {
                alert("Response Error");
                return;
            }

            const data = await response.json();
            if (data && data.products) {
                setProducts((prev) => [...prev, ...data.products]);
                setLoading(false);
            }

            console.log(data);
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [count]);

    useEffect(() => {
        setBtnDisable(count >= 5); // Disable button after fetching 100 products
    }, [count]);

    if (loading) {
        return <span className="loader"></span>;
    }

    return (
        <div className="loader-div container text-white">
            <div className="row">
                {products.length > 0 ? products.map((item, index) => (
                    <div className="col-sm-3 border " key={index} id={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                )) : null}
            </div>
            {!btndisable && (
                <button 
                    className="btn btn-danger w-100 mt-3"
                    onClick={() => setCount(count + 1)}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default LoadMore;
