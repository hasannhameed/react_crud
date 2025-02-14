import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

const Starrating = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleMouseEnter(getCurrentIndex)
    {
        setRating(getCurrentIndex);
    }  
    function handleMouseLeave(){
        setHover(rating);
    }
    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }


    return(
        <div className="star-rating">
            { [...Array(noOfStars)].map((_,index) => {
                index+=1;
                return(
                    
                        <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                )
                
            })
         }
         <h1>hello</h1>
        </div>
    )
}

export default Starrating;