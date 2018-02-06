const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongoDB server');
  }
  console.log('connected to mongoDB server');

  // db.collection('todos').findOneAndUpdate({
  //   _id: new ObjectID("5a66a58c451a12f2096f5d0e")
  // }, {
  //   $set: {
  //     completed: true
  // }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').findOneAndUpdate({
    _id: new ObjectID("5a79df0289626d39dec808fa")
  }, {
    $set: {
      name: 'stace',
    },
    $inc: {
      age: -5
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  }, err => {
    console.log(err);
  });

  // db.close();
});
