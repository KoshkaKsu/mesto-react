import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <template class= "photo-template" id="photo-template">
            <li class="grid-item">
            <img src={props.card.link} alt={props.card.name} onClick={handleClick} class="grid-item__photo" />
                <div class="grid-item__description">
                    <h2 class="grid-item__name">{props.card.name}</h2> 
                    <div class="grid-item_group">
                        <button type="button" class="grid-item__like"></button>
                        <span class="grid-item__like-info">1</span>
                    </div>
                </div>
           <button type="button" class="grid-item__delete"></button>
        </li>
        </template>
    )
}

export default Card