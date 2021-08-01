import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from "./EditProfilePopup";
import AddCardPopup from "./AddCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";
import DeleteCardPopup from "./DeleteCardPopup";

function App() {

  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isEditAvatarPopup, setIsEditAvatarPopup] = React.useState(false);
  const [isEditProfilePopup, setIsEditProfilePopup] = React.useState(false);
  const [isAddCardPopup, setIsAddCardPopup] = React.useState(false);

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
  setIsAddCardPopup(true);
}

function closeAllPopups() {
  setSelectedCard(null)
  setIsEditAvatarPopup(false)
  setIsEditProfilePopup(false)
  setIsAddCardPopup(false)
}

  return (
    <div className="root">
      <div className="container">
        <Header/>
        <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups}/>
        <EditAvatarPopup isOpen={isEditAvatarPopup} onClose={closeAllPopups} />
        <EditProfilePopup isOpen={isEditProfilePopup} onClose={closeAllPopups} />
        <AddCardPopup isOpen={isAddCardPopup} onClose={closeAllPopups} />
        <DeleteCardPopup/>
      </div>
    </div>
  )
}

export default App;
