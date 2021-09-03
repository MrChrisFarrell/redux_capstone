import axios from "axios";

export function fetchToken(loginInfo) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.post('http://127.0.0.1:8000/auth/jwt/create/', loginInfo)), 100)
    );
  }

  export function fetchUser(userId, token) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.post(`http://127.0.0.1:8000/employee/1/?user=${userId}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })), 100)
    );
  }