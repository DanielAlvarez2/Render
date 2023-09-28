let http = require('http')
http.createServer(function (req, res){
    console.log('Server Started')
    res.write('Render Server Working')
    res.end()
}).listen(process.env.PORT || 3000)