const http = new easyHTTP;

// Get Users
//  http.get('https://jsonplaceholder.typicode.com/users')
//   .then (data => console.log(data))
//   .catch (err => console.log(err))

const user = {
  name: 'John Doe',
  username: 'JohnDoe',
  email: 'johndoe@gmail.com'
}

// Create POST
// http.post('https://jsonplaceholder.typicode.com/users', user)
//   .then (user => console.log(user))
//   .catch (err => console.log(err))

// Create PUT
// http.put('https://jsonplaceholder.typicode.com/users/3', user)
//   .then (user => console.log(user))
//   .catch (err => console.log(err))

// Delete 
http.delete('https://jsonplaceholder.typicode.com/users/3')
  .then (data => console.log(data))
  .catch (err => console.log(err))