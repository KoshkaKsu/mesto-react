import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name='profile-edit'
            title='Редактировать профиль'
            buttonText='Сохранить'
        >
            <input type="text" className="popup__profile popup__profile_name_name popup__form-input"
                name="name" id="name" placeholder="Имя" minLength="2" maxLength="40" 
                required />
            <span className='popup__input-error name-error'></span>
            <input type="text" className="popup__profile popup__profile_name_job popup__form-input" 
                name="job" placeholder="Должность" id="job" minLength="2" 
                maxLength="400" required />
            <span className='popup__input-error job-error'></span>
            </PopupWithForm>
        )
}

export default EditProfilePopup;