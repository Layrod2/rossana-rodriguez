const express = require('express');
const path = require('path');

// Execute
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middewares

// Routes
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname + '/static/index.html'))
});

// Static files
app.use(express.static(path.join(__dirname, '/static')));


app.listen(app.get('port'), function() {
  console.log('Server on port ' + app.get('port'));
})
