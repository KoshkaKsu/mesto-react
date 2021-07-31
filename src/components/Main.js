import React from 'react';
import Card from "./Card";
import api from "../utils/Api";

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUserInfo(),
            api.getInitialCards()
        ])
            .then(([userData, cards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
            <main className="content">
                <section className="profile">
                    <div className="profile__info-block">
                        <div className="profile__edit-button-avatar" onClick={props.onEditAvatar}></div>
                        <img className="profile__avatar" src={userAvatar} style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар" />
                    </div>
                    <div className="profile__info">
                        <div className="profile__description">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
                </section>
                <section className="photos">
                    <ul className="elements">
                    {cards.map((card => (
                        <Card onCardClick={props.onCardClick} key={card._id} card={card} />)))
                    }
                    </ul>
                </section>
            </main>
    );
}

export default Main;