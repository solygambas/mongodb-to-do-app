module.exports = {
  connectionString: process.env.MONGODB,
  connectionAuth: "Basic " + process.env.PASSWORD,
};
