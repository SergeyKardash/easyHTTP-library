const http = new easyHTTP;

// Get Posts
// http.get ('https://jsonplaceholder.typicode.com/posts', function (err, posts){
//   if (err) {
//     console.log (err)
//   } else {
//     console.log ( posts)
//   }
// });

// Get single post
// http.get ('https://jsonplaceholder.typicode.com/posts/1', function (err, posts){
//   if (err) {
//     console.log (err)
//   } else {
//     console.log ( posts)
//   }
// });

//  Post Request
  // Create Data
  const data = {
    title: 'Custom Post',
    body: 'This is custom post'
  }

  // http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, posts){
  //     if (err) {
  //       console.log (err)
  //     } else {
  //       console.log ( posts)
  //     }
  //   })

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, posts){
//   if (err) {
//     console.log (err)
//   } else {
//     console.log ( posts)
//   }
// })

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/51', function (err, posts){
  if (err) {
    console.log (err)
  } else {
    console.log ( posts)
  }
})