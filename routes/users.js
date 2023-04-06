module.exports = (app) => {
  app.get('/api/users', (req, res) => {
    return res.send('hi there');
  });
};
