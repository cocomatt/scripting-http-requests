var getHTML = require('./http-functions');

function reverse(aString) {
  if (aString.length === 0) {
    return;
  } else {
    return reverse(aString.substr(1)) + aString.charAt(0);
  }
}

function printReverse (html) {
  console.log(reverse(html));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

console.log(getHTML(requestOptions, printReverse));
