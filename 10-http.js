const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(` <h1 style="background:
     linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;"><center>Welcome to our HomePage </center></h1>`);
    // res.end();
  }else
  if(req.url === '/about'){
    res.end(`<h3 style="color:blue;"><center>Welcome to our About page</center></h3>`);
    // req.end();
  }else{

  res.end(
    `<h1 style="color:Tomato;"><center>Oops!</center></h1>
    <p><center>we can't find path you entered</center> </p>`
  )
  }
});

server.listen(5000);