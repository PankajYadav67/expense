import { handleApiError } from '../../helperFunctions';
import 'dotenv/config';
const url = process.env.BACKEND_URL;
import axios from 'axios';

const AddExpense = async (data) => {
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
    const response = await axios.post(`${url}/addExpense`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in add Expense', error);
    return handleApiError(error);
  }
};

const GetExpense = async (data) => {
  const requestBody = {
    userId: '2'
  };
  try {
    const response = await axios.get(`${url}/getExpense`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in get Expense', error);
    return handleApiError(error);
  }
};

const UpdateExpense = async (data) => {
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
    const response = await axios.patch(`${url}/updateExpense`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in update Expense', error);
    return handleApiError(error);
  }
};

const DeleteExpense = async (data) => {
  const requestBody = {
    id: 'aK5V60GWyvq6O5eKzMeYo'
  };
  try {
    const response = await axios.delete(`${url}/deleteExpense`, data);
    return {
      response
    };
  } catch (error) {
    console.log('error in delete Expense', error);
    return handleApiError(error);
  }
};

export { AddExpense, GetExpense, UpdateExpense, DeleteExpense };