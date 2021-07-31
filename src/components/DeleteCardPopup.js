import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {
    return (
        <PopupWithForm
        isOpen={props.isOpen}
        onClose={props.onClose}
        name='delete'
        title='Вы уверены?'
        buttonText='Да'
       >
        </PopupWithForm>
    );
}

export default DeleteCardPopup;