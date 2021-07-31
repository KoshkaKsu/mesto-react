import React from "react";
import PopupWithForm from './PopupWithForm';

function AddCardPopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='card-add'
            title='Новое место'
            buttonText='Создать'
            >
            <input type="text" className="popup__profile popup__profile_name_title popup__form-input" name="title" id="title" placeholder="Название" minLength="2" maxLength="30" required />
            <span className='popup__input-error title-error' id='title-input-error'></span>
            <input type="url" className="popup__profile popup__profile_name_photo popup__form-input" name="link" id="link" placeholder="Ссылка на фото" required />
            <span className='popup__input-error link-error' id='link-input-error'></span>
        </PopupWithForm>
    );
}

export default AddCardPopup;