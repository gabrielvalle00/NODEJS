const http =  require ('http');

http.createServer (function (req, res){
    res.write ('estou alterando o javascript! ');
    res.end ();
}).listen(7000);
