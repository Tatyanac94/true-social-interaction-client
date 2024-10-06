const errorHandler = (error) => {
    console.error('Error:', error);
  
    if (error.response) {
      return { message: error.response.data.message || 'An error occurred!', status: error.response.status };
    } else if (error.request) {
      return { message: 'No response from the server. Please try again later.', status: 500 };
    } else {
      return { message: error.message || 'An unexpected error occurred!', status: 500 };
    }
  };
  
  export default errorHandler;
  