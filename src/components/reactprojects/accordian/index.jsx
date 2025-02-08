import Data from "./data";
import { useState } from "react";
import './style.css'; 

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id === selected ? null : id);
  };

  return (
    <div className="accordion-wrapper ">
      <div className="accordion">
      <button className="btn btn-primary mb-2">Enable multiple Select</button>
        {Data && Data.length > 0 ? (
          Data.map((dataItem) => (
            <div key={dataItem.id} className="accordion-item">
              <div className="accordion-header" onClick={() => handleClick(dataItem.id)}>
                <h2 className="accordion-question">{dataItem.question}</h2>
                <span className="accordion-toggle">{selected === dataItem.id ? '-' : '+'}</span>
              </div>
              {selected === dataItem.id && (
                <div className="accordion-answer">
                  <p>{dataItem.answer}</p>
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
