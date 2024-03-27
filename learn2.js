const fs = require('fs')
const http = require('http')
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const path = require('path')
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'html')))
app.use(express.static(path.join(__dirname, 'css')))
app.use(express.static(path.join(__dirname, 'js')))
app.use(express.static(path.join(__dirname, 'images')))

app.get('/', (_, resp) => {
    resp.sendFile(path.join(__dirname, 'html', 'index.html'))
})

// const fileread = fs.readFileSync('index.html')
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'text/html' })
//     res.end(fileread)

// })
// app.get('/posttest', async (req, res) => {
//     let response = {
//         title: "name"
//     };
//     res.json(response);


// });


app.post('/submitf', async (req, res) => {
    const { name, email, address, phone, message } = req.body;

    // Create an object containing the data you want to insert into MongoDB
    const data = {
        name: name,
        email: email,
        address: address,
        phone: phone,
        message: message
    };  
    console.log(data)
    const uri = "mongodb://localhost:27017";
const dbName = "your-database-name";

async function insertData(data) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection("your-collection-name");
    const result = await collection.insertOne(data);

    console.log(`Data inserted with ID: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
insertData(data);
});



// Replace these with your connection URI and database name






app.listen(port, 'localhost', () => {

    console.log(`http://localhost:3000/ port is  ${port}`)

})