module.exports = {
  development: {
    port: '3000',
    db: 'mongodb://mongo:27017/petshop_dev'
  },
  production: {
    port: '3000',
    db: 'mongodb://mongo:27017/petshop'
  },
  test: {
    port: '3000',
    db: 'mongodb://mongo:27017/petshop_test'
  }
};
