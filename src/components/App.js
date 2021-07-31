import React from "react";
import '../index.css';
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
  const [isPopUpEditProfileOpen, setIsPopUpEditProfileOpen] = React.useState(false);
  const [isProfileAvatarPopupOpen, setIsProfileAvatarPopupOpen] = React.useState(false);
  const [isPopUpAddCard, setIsPopUpAddCardPopupOpen] = React.useState(false);

function handleEditProfileClick() {
    setIsPopUpEditProfileOpen(true);
}

function handleEditAvatarClick() {
    setIsProfileAvatarPopupOpen(true);
}

function handleAddPlaceClick() {
    setIsPopUpAddCardPopupOpen(true);
}

function closeAllPopups() {
  setSelectedCard(null)
  setIsPopUpEditProfileOpen(false)
  setIsPopUpAddCardPopupOpen(false)
  setIsProfileAvatarPopupOpen(false)
}

  return (
    <div className="root">
      <div className="container">
        <Header/>
        <Main
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
              />
        <Footer />
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups}/>
        <EditProfilePopup isOpen={isPopUpEditProfileOpen} onClose={closeAllPopups} />
        <AddCardPopup isOpen={isPopUpAddCard} onClose={closeAllPopups} />
        <EditAvatarPopup isOpen={isProfileAvatarPopupOpen} onClose={closeAllPopups} />
        <DeleteCardPopup/>
      </div>
    </div>
  )
}

export default App;
