const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const axios = require('axios');
const express = require('express')
const router = express.Router()

module.exports = router

router.get("/list", async (req, res) => {
    
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const products = response.data.products;
  
      return res.status(200).send(products) 
  
      
    } catch (error) {
      res.status(500).send({ message: 'Error fetching users.' });
    }
  });