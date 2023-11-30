const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3001;

// Connection URI
const uri = 'mongodb+srv://admin:collection@mallik.45xezwx.mongodb.net/';
const dbName = 'mallik';
const collectionName = 'users';
app.use(cors());
app.use(express.json());

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle registration form submission
// Remove the app.route('/register') block
// Keep only the app.post('/register', ...) block

app.post('/register', async (req, res) => {
    try {
        // Your registration logic here
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const user = {
            username: req.body.username,
            gmail: req.body.gmail,
            age: req.body.age,
            contact: req.body.contact,
            DOB: req.body.DOB,
            password: req.body.password, // Note: In a real application, you should hash the password before storing it.
        };

        await collection.insertOne(user);
        client.close();

        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });