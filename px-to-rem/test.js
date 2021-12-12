const postcss = require('postcss');
const px2rem = require('./src/index');

postcss([px2rem({
    base: 100
})]).process('a { font-size: 20px; }').then(result => {
    console.log(result.css);
});