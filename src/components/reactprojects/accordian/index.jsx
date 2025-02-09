import Data from "./data";
import { useState } from "react";
import "./style.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelector, setEnableMultiSelector] = useState(false);
  const [multiselector, setMultiselector] = useState([]);

  const handleSingleClick = (id) => {
    setSelected(id === selected ? null : id);
    console.log("single click");
    };

  const handleMultiClick = (id) => {

    console.log("double click");
    console.log(multiselector);
    let copyselected = [...multiselector];  
    const findindex = copyselected.indexOf(id);
    console.log(findindex);
    
    if (findindex === -1) copyselected.push(id);
    else copyselected.splice(findindex, 1);

    setMultiselector(copyselected);
  };

  return (
    <div className="accordion-wrapper">
      <div className="accordion">
        <button 
          onClick={() => setEnableMultiSelector(!enableMultiSelector)} 
          className="btn btn-primary mb-2"
        >
          Enable multiple Select
        </button>

        {Data && Data.length > 0 ? (
          Data.map((dataItem) => (
            <div key={dataItem.id} className="accordion-item">
              <div className="accordion-header"
                   onClick={() => enableMultiSelector 
                    ? handleMultiClick(dataItem.id) 
                    : handleSingleClick(dataItem.id)}
              >
                <h2 className="accordion-question">{dataItem.question}</h2>
                <span className="accordion-toggle">
                  {selected === dataItem.id ? "-" : "+"}
                </span>
              </div>
              
              {/* Single selection rendering */}
              {!enableMultiSelector && selected === dataItem.id && (
                <div className="accordion-answer">
                  <div className="acc-content">{dataItem.answer}</div>
                </div>
              )}

              {/* Multi-selection rendering */}
              {enableMultiSelector && multiselector.includes(dataItem.id) && (
                <div className="accordion-answer">
                  <div className="acc-content">{dataItem.answer}</div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-data">
            <h2>No data found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
