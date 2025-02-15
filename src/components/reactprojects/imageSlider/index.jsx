import { useState, useEffect } from "react";
import './style.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url }) => {
    const [imgsarr, setImgArr] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const setIndex = (index) => {
        setCurrentSlide(index);
    }

    const handlePrevius = () =>{
        setCurrentSlide(currentSlide == 0 ? imgsarr.length-1:currentSlide-1)
    }

    const handleNest = () =>{
        setCurrentSlide(currentSlide == imgsarr.length-1 ? 0: currentSlide+1)
    }

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            setImgArr(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!url) return;
        fetchData();
    }, [url]);

    if (loading) {
        return <div className="alert alert-warning">Loading....</div>;
    }

    if (error) {
        return <div className="alert alert-danger">{`Error: ${error}`}</div>;
    }

    return (
        <div className="bg-secondary-subtle">
        <div className="container  col-sm-6 m-auto bg-warning mt-5">
        <BsArrowLeftCircleFill
        className="arrow-left arrow"
        onClick={handlePrevius}
        
        />
            
            {imgsarr.length > 0 ? (
                imgsarr.map((item, index) => (
                    <img 
                        key={ index} 
                        src={item.download_url} 
                        alt={item.url} 
                        
                        className={
                            currentSlide === index 
                            ? "current-image" 
                            : "hide-current-image"
                        }
                        />
                ))
            ) : (
                <h2>No images available</h2>
            )}
            
            <BsArrowRightCircleFill
        className="arrow-right arrow"
        onClick={handleNest}
        />
        </div>
        <p>
                {imgsarr.map((item,index)=>(
                    <button key={index} 
                    className={
                    currentSlide === index
                    ? "current-indicator"
                    : "inactive-indicator"}
                    onClick={()=>setIndex(index)}
                    ></button>
                ))}
            </p>
        </div>

    );
};

export default ImageSlider;
