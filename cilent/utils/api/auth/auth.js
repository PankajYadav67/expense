import { handleApiError } from '../../helperFunctions';
import 'dotenv/config';
const url = 'http://localhost:8080/api/v1/';
import axios from 'axios';

const SignUpAPI = async (data) => {
  const requestBody = {
    username: 'example3',
    name: 'example',
    email: 'example3@gmail.com',
    password: 'example@123'
  };
  try {
    const response = await axios.post(`${url}/signUp`, data);
    return {
      res: response.data
    };
  } catch (error) {
    console.log('error in signUp', error);
    return handleApiError(error);
  }
};

const LoginAPI = async (data) => {
  const requestBody = {
    email: 'example3@gmail.com',
    password: 'example@123'
  };
  try {
    const res = await axios.post(`${url}/login`, data);
    return {
      response: res.data
    };
  } catch (error) {
    console.log('error in login', error);
    return handleApiError(error);
  }
};

export { LoginAPI, SignUpAPI };
