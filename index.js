// app.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse form data (for login and signup forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files (for HTML, CSS, JS files)
app.use(express.static(path.join(__dirname, 'public')));

// Route for Login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route for Signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Route for Welcome page after login/signup
app.post('/welcome', (req, res) => {
    const { username, password } = req.body;

    // For simplicity, we're skipping authentication logic here.
    // In a real app, you would validate user credentials from a database.
    if (username && password) {
        res.send(`<h1>Welcome, ${username}!</h1><p>You've successfully logged in.</p><a href="/login">Log out</a>`);
    } else {
        res.send('Invalid credentials');
    }
});

// Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
