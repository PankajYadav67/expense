const { handleApiError } = require('../../helperFunctions');

const url = 'http://localhost:8080/api/v1/';

const addIncome = async (data) => {
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

const getIncome = async (data) => {
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

const updateIncome = async (data) => {
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

const deleteIncome = async (data) => {
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

export { addIncome, getIncome, updateIncome, deleteIncome };
