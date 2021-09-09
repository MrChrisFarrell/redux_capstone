import axios from "axios";

export function fetchCompanies(token) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.get(`http://127.0.0.1:8000/complatlong/`, {
        headers: {
          Authorization: 'Bearer ' + token.access
        }
      })), 100)
    );
  }

export function fetchPromotions(token) {
    return new Promise((resolve) =>
        setTimeout(() => resolve(axios.get(`http://127.0.0.1:8000/promotion/`, {
            headers: {
                Authorization: 'Bearer ' + token.access
            }
        })), 100)
    );
}