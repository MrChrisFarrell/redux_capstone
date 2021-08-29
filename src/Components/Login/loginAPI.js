import axios from "axios";

export function fetchToken(username, password) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.post('http://127.0.0.1:8000/auth/jwt/create/', {'username': username, 'password': password})), 500)
    );
  }