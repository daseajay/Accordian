import { useState } from "react";
import data from './data'
import "./acco.css"
export default function Acco() {

  const [selected, setSelected] = useState(null);

  const handalSingal = (e) =>{
    setSelected(e === selected ?null: e);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div className="item" key={index}>
              <div className="title" onClick={()=>handalSingal(item.id)}>
                <h3>{item.question}</h3>
                <span>+</span> 
              </div>
                {
                  selected === item.id ?<div className="content">
                    {item.answer}
                  </div> : null 
                }
            </div>
          ))
        ) : (
          <div>data note found</div>
        )}
      </div>
    </div>
  );
}
