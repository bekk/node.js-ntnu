var fs = require('fs');

var slides = fs.readFileSync('./slides.html');
var title = 'Node.js for Frontend';

document.querySelector('.slides').innerHTML = slides;
document.querySelector('title').text = title;
