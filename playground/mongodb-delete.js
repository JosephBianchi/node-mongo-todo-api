const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongoDB server');
  }
  console.log('connected to mongoDB server');

  // deleteMany
  // db.collection('todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result.result);
  // });
  // //deleteOne
  // db.collection('todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').deleteMany({name: 'steven'}).then((result) => {
    console.log(result.result);
  }, (err) => {
    console.log(err);
  });

  db.collection('users').deleteOne({name: 'joe'}).then((result) => {
    console.log(result);
  }, (error) => {
    console.log(error);
  });

  db.collection('users').findOneAndDelete({email: 'joe@gmail.com'}).then(result => {
    console.log(result);
  }, error => {
    console.log(error);
  });

  // db.close();
});
