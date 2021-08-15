import React, { useState } from "react";
import "./Card.css";
import categories from "../../helper/data"

function Card() {

    const [showImage, setShowImage] = useState(true);

    return (
        <div className="container-card">
            <div className="language">
                <h3>Languages</h3>
            </div>
            <div className="cards" onClick={() => setShowImage(!showImage)}>
                {showImage ? (
                    <>
                        {
                            categories.map((categorie) => {
                                return (
                                    <div className="card-div">
                                        <img src={categorie.img} alt={categorie.name} />
                                        <p>{categorie.name}</p>
                                    </div>
                                );
                            })}
                    </>
                ) : (
                    <>
                        {categories.map((categorie) => {
                            return (
                                <div className="card-div">
                                    <p>{categorie.options.map((option)=>{
                                        return(<li>{option}</li>
                                            )
                                        })}</p>
                                </div>
                            );
                        })}
                 </>   )}
            </div>
        </div>
    )
}



export default Card;
