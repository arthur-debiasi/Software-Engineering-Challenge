const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://searchEngine:6mSpmi7Zk4SApKUF@mymongodb.eydzyig.mongodb.net/test'
    )
    console.log('DB connectado!');
  } catch (error) {
    console.error(error);
  }
}