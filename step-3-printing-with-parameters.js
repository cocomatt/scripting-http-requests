function getAndPrintHTML (options) {
  var https = require('https');
  var receivedData = "";

  /* Calls the get method, passes the options needed to get the
  data and gives the callback function the response. */
  https.get(options, function (response) {

    response.setEncoding('utf-8');

    // Shows the chunks of data as they are streaming.
    response.on('data', function(data) {
      receivedData += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      console.log("Received Data ---> " + receivedData + "\n")
    });
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions));