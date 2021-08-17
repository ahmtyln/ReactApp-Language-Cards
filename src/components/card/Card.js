import React, { useState } from "react";
import "./Card.css";
import categories from "../../helper/data"
import Item from '../Item/item';

const Card = () => {

  
    return( 
        <div className="cards">
            {categories.map((card,index) => {
                return <Item card={card}
                        key={index}/>
            })}
        </div>      
    )
}

export default Card;
















// function Card() {

//     const [showImage, setShowImage] = useState(true);

//     return (
//         <div className="container-card">
//             <div className="language">
//                 <h3>Languages</h3>
//             </div>
//             <div className="cards">
//                 {categories.map((categorie, index) => {
//                     return (<div className="card-div" onClick={(e) => setShowImage(!showImage)}>

//                         {showImage ? (
//                             <> <div key={index}>
//                                 <img src={categorie.img} alt={categorie.name} />
//                                 <p>{categorie.name}</p>
//                             </div>

//                             </>
//                         )
//                             :
//                             (
//                                 <>
//                                     <p>{categorie.options.map((option,i) => {
//                                         return (<li>{option}</li>
//                                         )
//                                     })}</p>
//                                 </>)}
//                     </div>
//                     )
//                 })}

//             </div>
//         </div >
//     )
// }



// export default Card;
