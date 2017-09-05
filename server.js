/**
 * This file creates a little express server for the angular cli app.
 * The dist folder can be uploaded to any kind of server but this utility allows to run
 * it using nodejs
 */
const path = require('path');
const morgan = require('morgan');

const express = require('express');
const compression = require('compression');

const app = express();

// Load zone.js for the server.
require('zone.js/dist/zone-node');

// Import renderModuleFactory from @angular/platform-server.
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const AppServerModuleNgFactory = require('./dist-server/main.37ce8546b5250fbc6c8b.bundle').AppServerModuleNgFactory;

// Load the index.html file.
var index = require('fs').readFileSync('./src/index.html', 'utf8');

//gzip output
app.use(compression());

//Run the app serving the static files in the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

//Logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  // Render to HTML and log it to the console.
  renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/home'}).then(html => res.send(html));
});

app.get('/about', (req, res) => {
  // Render to HTML and log it to the console.
  renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/about'}).then(html => res.send(html));
});

app.get('*', (req, res) => {
  // Render to HTML and log it to the console.
  renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/'}).then(html => res.send(html));
});

const port = process.env.PORT || 8080;

//Start the app
app.listen(port, () => console.log(`App listening on port ${port}`));


