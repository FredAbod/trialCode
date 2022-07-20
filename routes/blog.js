const express = require('express');
const router = express.Router();
const data = require('../models/blog');

router.get('/', (req, res) => {
    res.send('Home page ');
  });
  
  router.get('/creams', async (req, res) => {
      const all_datas = await data.find();
      res.status(200).json(all_datas);
    });
    
  
  router.post('/cream', async(req, res) =>{
      const Created_cream = new data({
          name: 'Cleanser',
          age: 2,
          WhiteColour: true,
          email: 'Cleanser.data@gmail.com',
      })
      const Saved_cream = await Created_cream.save();
      res.send(Saved_cream);
  });
  
  router.post('/data', async (req, res) => {
   const {name, age, WhiteColour, email } = req.body;
  });
  
    router.get('/creams/:id', async (req, res) => {
      const get_CreamBlog = await data.findById({ _id: req.params.id });
      //   console.log(get_blog);
      return res.status(200).json(get_CreamBlog);
    });

    module.exports = router;