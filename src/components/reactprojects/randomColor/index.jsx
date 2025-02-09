import { useEffect, useState } from "react";

const RandomColor = () => {

    const [typeColor, setTypeColor] = useState("HEX");
    const [color , setColor] = useState("#000000");

    function pickRandomNumber(length){

        return Math.floor(Math.random()*length);
        
    }   

    function createRandomHexColor(){
        let colour = "#";
        let HEXcolor = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        for(let i=0;i<6;i++){
            colour += HEXcolor[pickRandomNumber(HEXcolor.length)];
        }
        console.log(colour);
        setColor(colour)
    }
    function createRandomRgbColor(){
        const r =  pickRandomNumber(256);
        const g =  pickRandomNumber(256);
        const b =  pickRandomNumber(256);
        setColor(`rgb(${r},${g},${b})`);
    }

  

    useEffect(() => {
        if (typeColor === "HEX") {
            createRandomHexColor();
        } else {
            createRandomRgbColor();
        }
    }, [typeColor]); 
    

    return(
        <div style={{
            height:"100vh",
            width :"100vw",
            background : color,
        }}>
            <button className="btn btn-primary mt-5" onClick={()=>setTypeColor("HEX")}>Create HEX color</button>&nbsp;
            <button className="btn btn-primary mt-5" onClick={()=>setTypeColor("RGB")}>Create RGB COlor</button>&nbsp;
            <button className="btn btn-primary mt-5" onClick={() =>
             typeColor === "HEX"
             ? createRandomHexColor()
             : createRandomRgbColor()
            }>Create Random Color</button>
            <div className="mt-5 text-white">
                <h3>{color}</h3>
                <h3>{typeColor === "HEX" ?'Hex colours generating ':'rgb colours generating'}</h3>
            </div>  
        </div>
    )
}

export default RandomColor;