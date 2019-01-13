function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    // When inside a function, this pertains to the functions scope
    // By making a var and setting it to this before the function, we can get around this
    if (self.http.status === 200) {
      // if we do just return self.http.responseText;, then it won't work, needs to be asyncronous to actually work, otherwise you don't get the response in time
      // Which means, we need to make it a callback
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request
