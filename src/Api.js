class Api {
    constructor(options) {
        this._url = options.addres;
        this._token = options.token;
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

//Получил с сервера карточки
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
        },
        body: JSON.stringify({
          avatar: newAvatarLink,
        })
    })
        .then(this._getResponseData)
  }

  editUserInfo(obj) {
    return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: {
          authorization: this._token,
        },
        body: JSON.stringify({
            name: obj.name,
            about: obj.job
        })
    })
        .then(this._getResponseData);
}

addCard(name, link) {
  return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers: {
      authorization: this._token,
    },
    body: JSON.stringify({
      name: name,
      link: link
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
}

const api = new Api({
  url: `https://mesto.nomoreparties.co/v1/cohort-24`,
  headers: {
      authorization: '22c6286b-d5fa-40bf-b483-a71816fa51e0',
      'Content-Type': 'application/json',
  }
});
export default api;