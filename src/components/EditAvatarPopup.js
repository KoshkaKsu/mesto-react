import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    return (
        <PopupWithForm
        isOpen={props.isOpen}
        onClose={props.onClose}
        name='avatar-edit'
        title='Обновить аватар'
        buttonText='Сохранить'
       >
        <input type="url" className="popup__profile popup__form-input" name="link" id="avatar" minLength="2" placeholder="Ссылка на картинку" required />
        <span className='popup__input-error avatar-error' id='avatar-error'></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
