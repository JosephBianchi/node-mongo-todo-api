const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongoDB server');
  }
  console.log('connected to mongoDB server');

  // db.collection('todos').find({completed: true}).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('todos').find({text: 'Cook dinner'}).count().then((count) => {
    console.log(`todos count: ${count}`);
  }, (err) => {
    console.log('unable to fetch todos', err);
  });

  // db.close();
});
