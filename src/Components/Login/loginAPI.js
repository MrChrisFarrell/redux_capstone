import axios from "axios";

export function fetchToken(loginInfo) {
    debugger;
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.post('http://127.0.0.1:8000/auth/jwt/create/', loginInfo)), 500)
    );
  }