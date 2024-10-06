const { app }  = require('mavro');


app.get('/', function(req, res){
    res.json({
        message: 'Hello world!'
    })
})

app.listen(1337);