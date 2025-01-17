import { getCookie } from "../utils/cookieManage"

const getLogin = async (code) => {
  let res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/local-login?code=' + code);

  if (!res.ok) {
    let message = await res.text();
    throw new Error(message);
  }

  return res.json();
}

const patchLogin = async () => {
  let res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/login', {
    method: 'PATCH',
    headers: {
      'authorization': 'Bearer ' + getCookie('refreshToken')
    }
  });

  if (!res.ok) {
    let message = await res.text();
    throw new Error(message);
  }

  return res.json();
}

const getUserInfo = async () => {
  let res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/info', {
    headers: {
      'authorization': 'Bearer ' + getCookie('accessToken')
    }
  });

  if (!res.ok) {
    let message = await res.json();
    throw new Error(message);
  }

  return await res.json();
}

const putUserInfo = async (data) => {
  let res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/info', {
    method: 'PUT',
    headers: {
      'authorization': 'Bearer ' + getCookie('accessToken')
    },
    body: data
  });

  if (!res.ok) {
    let message = await res.text();
    throw new Error(message);
  }

  return res.text();
}

const postUserInfo = async (data) => {
  let res = await fetch(process.env.REACT_APP_API_URL + '/api/auth/info', {
    method: 'POST',
    headers: {
      'authorization': 'Bearer ' + getCookie('accessToken')
    },
    body: data
  });

  if (!res.ok) {
    let message = await res.text();
    throw new Error(message);
  }

  return res.text();
}

export { getLogin, patchLogin, getUserInfo, putUserInfo, postUserInfo };