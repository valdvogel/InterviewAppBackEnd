const Post = require('../models/post.model');
const axios = require('axios');

exports.info = async function (req, res) {
    let users;
    let posts;
    let response = [];

    try {
      users = await axios.get('https://jsonplaceholder.typicode.com/users');
      posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.data.forEach( p => {
        const u = users.data.find(o => o.id === p.userId);
        response.push({
            id: p.id,
            title: p.title,
            author: u.name,
            body: p.body
        });
      });
    } catch (error) {
      console.error(error)
    }
  
  res.send(response);
};

