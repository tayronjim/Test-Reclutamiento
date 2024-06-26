const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const axios = require('axios');
const express = require('express')
const router = express.Router()

module.exports = router

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password  = req.body.password;
  
  try {
    const response = await axios.post('https://dummyjson.com/users/login',{
        username: username,
        password: password
      });
    const user = response.data;

    role_res = await getrole(user.token)
    
    if(role_res.status==200){
        user.role = role_res.value
    }

    return res.status(200).send(user) 

    
  } catch (error) {
    res.status(500).send({ message: 'Error fetching users.' });
  }
}); 

router.get("/list", async (req, res) => {
    
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const users = response.data.users;
  
      return res.status(200).send(users) 
  
      
    } catch (error) {
      res.status(500).send({ message: 'Error fetching users.' });
    }
  });

  router.post("/getrole", async (req, res) => {
    const token = req.body.token 

    role_res = await getrole(token)

    return res.status(role_res.status).send(role_res.value) 
  
  }); 

  async function getrole(token){
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
    
    try {
      const response = await axios.get('https://dummyjson.com/user/me',config);
      const role = response.data.role;
        res = {status:200, value:role}
      return res
  
      
    } catch (error) {
        res = {status:500, value:{ message: 'Error fetching users.' }}
      return res
      
    }
  }