function getAndPrintHTMLChunks () {
  var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Calls the get method, passes the options needed to get the
  data and gives the callback function the response. */
  https.get(requestOptions, function (response) {
    response.setEncoding('utf-8');

    // Shows the chunks of data as they are streaming.
    response.on('data', function(data) {
      console.log("Chunk ---> " + data + "\n")
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

console.log(getAndPrintHTMLChunks());