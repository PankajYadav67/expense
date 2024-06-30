import 'dotenv/config';
import { handleApiError } from '../../helperFunctions';
const url = process.env.BACKEND_URL;
import axios from 'axios';

const AddIncome = async (data) => {
  const requestBody = {
    userId: '2',
    transaction: {
      category: {
        name: 'laptop',
        source: 'Amazon'
      },
      typeOfTransaction: 'CR',
      detailedType: 'Credit',
      description: 'word payment',
      mode: 'G-pay',
      amount: '37500'
    }
  };
  try {
    const response = await axios.post(`${url}/addIncome`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in add Income', error);
    return handleApiError(error);
  }
};

const GetIncome = async (data) => {
  const requestBody = {
    userId: '2'
  };
  try {
    const response = await axios.get(`${url}/getIncome`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in get Income', error);
    return handleApiError(error);
  }
};

const UpdateIncome = async (data) => {
  const requestBody = {
    userId: '2',
    transaction: {
      category: {
        name: 'laptop',
        source: 'Amazon'
      },
      typeOfTransaction: 'CR',
      detailedType: 'Credit',
      description: 'word payment',
      mode: 'G-pay',
      amount: '37500'
    }
  };
  try {
    const response = await axios.patch(`${url}/updateIncome`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in update Income', error);
    return handleApiError(error);
  }
};

const DeleteIncome = async (data) => {
  const requestBody = {
    id: 'aK5V60GWyvq6O5eKzMeYo'
  };
  try {
    const response = await axios.delete(`${url}/deleteIncome`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in delete Income', error);
    return handleApiError(error);
  }
};

export { AddIncome, GetIncome, UpdateIncome, DeleteIncome };
