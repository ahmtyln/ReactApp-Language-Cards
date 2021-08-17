import React, { useState } from "react";

function Item(props){
    
    const [showLogo, setShowLogo] = useState(true);
  
    return(
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
            {showLogo ?  
                <>        
                <img className="card-logo" src={props.card.img} alt="" />
                <h3 className="card-title" >{props.card.name}</h3>
                </>
                : 
                <ul className="list">
                    {props.card.options.map((element,i)=>{
                        return <li key={i}>
                            {element}
                        </li>
                    })
                    }
                </ul>
            }
        </div>
    )
}

export default Item;