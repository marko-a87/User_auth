//Shows error when page is not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//Shows error to console
const logHandler = (err, req, res, next) => {
  console.log(err.message);
  next(err);
};

//Shows error as json on the local host server
const errorHandler = (err, req, res, next) => {
  res.status(400).json({ Error: err.message });
  console.log("THIS RAN");
};

export { errorHandler, logHandler, notFound };
