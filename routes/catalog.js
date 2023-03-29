module.exports = (app) => {
  app.get('/api/catalog', (req, res) => {
    res.send('Hi there');
  });
};
