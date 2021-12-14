const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/current-time', function(request, response) {
    response.send('<h1>' + new Date().toISOString() + '</h1>');
});

app.get('/', function(request, response) {
    response.send(`
        <form action="/store-user" method="POST">
            <label>Your name</label>
            <input type="text" name="username"></input>
            <button>Submit</button>
        </form>
    `);
})

app.post('/store-user', function(request, reponse) {
    const username = request.body.username;
    console.log(username);
    response.send('<h1>Username Stored !</h1>');
})

app.listen(3000);