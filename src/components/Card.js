import React from 'react';

function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="grid-item">
            <img src={props.card.link} alt={props.card.name} onClick={handleCardClick} className="grid-item__photo" />
                <div className="grid-item__description">
                    <h2 className="grid-item__name">{props.card.name}</h2> 
                    <div className="grid-item_group">
                        <button type="button" className="grid-item__like"></button>
                        <span className="grid-item__like-info">1</span>
                    </div>
                </div>
           <button type="button" className="grid-item__delete"></button>
        </li>
    )
}

export default Card;