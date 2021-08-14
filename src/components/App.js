import React from "react";
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import DeleteCardPopup from "./DeleteCardPopup";

import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [deletedCard, setDeletedCard] = React.useState({});
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isEditAvatarPopup, setIsEditAvatarPopup] = React.useState(false);
  const [isEditProfilePopup, setIsEditProfilePopup] = React.useState(false);
  const [isAddPlacePopup, setIsAddPlacePopup] = React.useState(false);
  const [isDeleteCardPopup, setIsDeleteCardPopup] = React.useState(false);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, cards]) => {
            setCurrentUser(userData);
            setCards(cards);
        })
        .catch((err) => console.log(`${err}`))
}, [])

function handleCardClick(card) {
  setSelectedCard(card)
}

function handleEditAvatarClick() {
  setIsEditAvatarPopup(true);
}

function handleEditProfileClick() {
  setIsEditProfilePopup(true);
}

function handleAddPlaceClick() {
  setIsAddPlacePopup(true);
}

function handleCardDeleteClick(card) {
  setDeletedCard(card);
  setIsDeleteCardPopup(true);
}

function handleUpdateUser(obj) {
  api.editUserInfo(obj)
      .then((data) => {
          setCurrentUser(data);
          closeAllPopups();
      })
      .catch((err) => {
          console.log(err)
      })
}

function handleUpdateAvatar(newAvatarLink) {
  api.updateAvatar(newAvatarLink)
      .then((data) => {
          setCurrentUser(data);
          closeAllPopups();
      })
      .catch((err) => {
          console.log(err)
      })
}

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  })
      .catch((err) => {
          console.log(err)
      })
}

function handleCardDelete() {
  const isOwn = deletedCard.owner._id === currentUser._id
  api.deleteCard(deletedCard._id, isOwn)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== deletedCard._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
          console.log(err)
      })
}

function handleAddPlaceSubmit(data) {
  api.addCard(data)
      .then((newCard) => {
          setCards([newCard, ...cards]);
          closeAllPopups();
      })
      .catch((err) => {
          console.log(err)
      })
}

function closeAllPopups() {
  setSelectedCard(null)
  setIsEditAvatarPopup(false)
  setIsEditProfilePopup(false)
  setIsAddPlacePopup(false)
  setIsDeleteCardPopup(false)
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <div className="container">
        <Header/>
        <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDeleteClick}
        />
        <Footer />
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups}/>
        <EditAvatarPopup isOpen={isEditAvatarPopup} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <EditProfilePopup isOpen={isEditProfilePopup} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopup} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
        <DeleteCardPopup isOpen={isDeleteCardPopup} onClose={closeAllPopups} onCardDelete={handleCardDelete} />
      </div>
    </div>
    </ CurrentUserContext.Provider>
  )
}

export default App;
