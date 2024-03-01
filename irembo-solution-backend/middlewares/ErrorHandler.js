// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); 
  
    if (err.name === 'ValidationError') {
      return res.status(422).json({ error: 'Validation error', details: err.errors });
    }
  
    // Generic error response for unhandled errors
    res.status(500).json({ error: 'Internal Server Error' });
  };

  module.exports =  errorHandler;
  