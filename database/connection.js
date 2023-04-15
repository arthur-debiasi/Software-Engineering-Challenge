import { connect } from 'mongoose'

  const options = {
  user: 'searchEngine',
  pass: '6mSpmi7Zk4SApKUF',
  dbName: 'MyMongoDB',
};

connect('mongodb://localhost:27017/', options);