const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongoDB server');
  }
  console.log('connected to mongoDB server');

  // db.collection('todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new doc into users (name, age, location)

  db.collection('users').insertOne({
    name: 'steven',
    age: 36,
    location: 'Toronto'
  }, (err, result) => {
    if (err) {
      return console.log('unable to insert user', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  })

  db.close();
});
