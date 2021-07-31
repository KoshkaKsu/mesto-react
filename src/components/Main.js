import React from 'react';

function Main(props) {
    

    return (
            <main className="content">

            <section className="profile">
                <div className="profile__info-block">
                    <div className="profile__edit-button-avatar" onClick={props.onEditAvatar}></div>
                    <img className="profile__avatar" src="#" alt="Аватар" />
                </div>
            <div className="profile__info">
                <div className="profile__description">
                  <h1 className="profile__name">aaa</h1>
                  <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__job">ttt</p>
            </div>
            <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>


            </main>
    );
}

export default Main;