function easyHTTP () {
  this.http = new XMLHttpRequest();
}

// Make an HTTP Get Request
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

   let self = this
  this.http.onload = function (){
    if (self.http.status === 200) {
      callback (null, self.http.responseText);
    } else {
      callback ('Error:'+ self.http.status)
    }
  }

  this.http.send()
}
// Make an HTTP Post Request

// Make an HTTP Put Request

// Make an HTTP Delete Request