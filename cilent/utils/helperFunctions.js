// errorHandling.js

function handleApiError(error) {
  console.error('Error in API request:', error);

  let errorMessage = 'An error occurred. Please try again later.';

  if (error.response) {
    console.error('Server responded with an error:', error.response.data);
    errorMessage = 'Server error. Please try again later.';
  } else if (error.request) {
    console.error('No response received from the server.');
    errorMessage =
      'No response from the server. Please check your internet connection.';
  }

  return {
    success: false,
    message: errorMessage
  };
}

export { handleApiError };
