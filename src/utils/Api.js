class Api {
    constructor({ address, token }) {
        this._url = address;
        this._token = token;
    }

_getResponseData(res) {
    if(!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

getUserInfo() {
  return fetch(`${this._url}/users/me`, {
    headers: {
      authorization: this._token,
    },
  })
  .then(this._getResponseData)
}

getInitialCards() {
  return fetch(`${this._url}/cards`, {
    headers: {
      authorization: this._token,
    },
  })
  .then(this._getResponseData)
}

updateAvatar(newAvatarLink) {
  return fetch(`${this._url}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    avatar: newAvatarLink.avatar,
    })
  })
    .then(this._getResponseData)
}

editUserInfo(obj) {
  return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      })
  })
  .then(this._getResponseData);
}

addCard(data) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link,
  })
})
  .then(this._getResponseData);
}

setLike(id) {
  return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(this._getResponseData);
}

unLike(id) {
  return fetch(`${this._url}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: {
        authorization: this._token
    }
  })
    .then(this._getResponseData);
}

deleteCard(id) {
  return fetch(`${this._url}/cards/${id}`, {
    method: "DELETE",
    headers: {
      authorization: this._token
    }
  })
    .then(this._getResponseData);
}

changeLikeCardStatus(id, isLiked) {
  if (isLiked) {
    return this.setLike(id);
  } else {
        return this.unLike(id);
  }
}
}

const config = {
  address: "https://mesto.nomoreparties.co/v1/cohort-24",
  token: "f12d97c5-3bd7-4a64-bc24-17e685180ee0"
};
const api = new Api(config);
export default api;