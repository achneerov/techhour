import express from 'express';
import bodyParser from 'body-parser/json';

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/message',(req,res) => {
    body = req.body

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});