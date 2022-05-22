import axios from 'axios';

// TODO: add apis accordingly
export async function createUser() {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1`);

  return response.data;
}

export async function isUserLoggedIn() {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1`);

  return response.data;
}

export async function logout() {
  const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/api/v1`);

  return response.data;
}
