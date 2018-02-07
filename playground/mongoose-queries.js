const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')


// var id = '5a7b4c75613c60e307ed2d3311';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('todo by id', todo);
// }).catch((e) => console.log(e));

User.findById('5a79f250af2b9b14073d8360').then(user => {
  if (!user) {
    return console.log('id not found');
  }
  console.log('user by id', user);
}).catch(e => console.log(e));
