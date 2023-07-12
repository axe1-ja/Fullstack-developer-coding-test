const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; 

const axios = require('axios');

app.use(cors({origin: 'http://localhost:5173'}))

async function getImageApiData(search) {
    return axios.get('https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q='+search+'&image_type=photo&pretty=tr')
    .then(response => {
        return response.data;
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(500);
    });
}

//api
app.get('/api/images', async (req, res) => {
    
    const jsonData = await getImageApiData(req.query.search)
    res.json(jsonData);
    return; 
    
  });


app.use((req, res) => {
    res.status(404).send('Page not found');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
