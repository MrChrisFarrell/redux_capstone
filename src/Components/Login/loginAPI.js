import axios from "axios";

export function fetchToken(loginInfo) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.post('http://127.0.0.1:8000/auth/jwt/create/', loginInfo)), 100)
    );
  }

  export function fetchUser(token) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(axios.get(`http://127.0.0.1:8000/auth/users/me/`, {
        headers: {
          Authorization: 'Bearer ' + token.access
        }
      })), 100)
    );
  }

  export function fetchUserProfile(fetchProfileData){
      return new Promise((resolve)=>
        setTimeout(()=> resolve(axios.get(`http://127.0.0.1:8000/employee/1/?user=${fetchProfileData.user.id}`, {
            headers: {
                Authorization: 'Bearer ' + fetchProfileData.token.access
            }
        })), 100)
    );
  }