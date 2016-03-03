'use strict'

let displayUsers = function(response){
  console.log('displayUsers works');
  let users = response.users;
  let userListing = require('./user-info.handlebars');
    $('.content').html(userListing({users
    }));
};

let getDrinks = function(){
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/users',
    method: 'GET',
    dataType: 'json'
  }).done(function(users){
    displayUsers(users);
    console.log(users);
    console.log('getUsers work');
  });
};

$('.btn').on('click', displayUsers)
