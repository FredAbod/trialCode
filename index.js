const express = require('express');
const mongoose = require('mongoose');
const port = 2300;
const app = express();

const router = require('./routes/blog');
mongoose
.connect('mongodb://localhost:27017/creamApp')
.then(()=>{
console.log('connected to db');

})
.catch((err) =>{
console.log(err);
});

app.use(express.json());


  // app.delete('/creams/:id', async (req, res) => {
  //   const get_CreamBlog = await data.findByIdAndDelete({ _id: req.params.id });
  //   //   console.log(get_blog);
  //   return res.status(200).json({ message: 'deleted successfully' });
  // });

app.listen(port,() =>{
console.log(`Server is running on ${port}`);
});