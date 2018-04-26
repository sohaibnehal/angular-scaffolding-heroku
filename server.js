const express = require('express');
const app = express();
const path = require('path');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 5000);
