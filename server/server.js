var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, e => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    console.log('invalid id');
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      console.log('todo id not found');
      return res.status(404).send()
    }
    return res.status(200).send({todo});
  }, (e) => {
    console.log('error');
    res.status(400).send();
  });


  //valid id using is valid
    // 404 - send back empty send

  // findById look for matching document
    //success
      // if todo -send back
      //if notodo - send back 404 with empty body
    //error
      //400 - send empty body back


});

app.listen(3000, () => {
  console.log('started on port 3000');
});

module.exports = {app};
