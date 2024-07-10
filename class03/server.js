//require sy node samjhtaa hai is file ko yeh chezein lakar deni hai
const http = require("http")
const fs =require("fs")
const path = require("path")
// current working directory
const filePath = path.join(process.cwd(),"data.txt")

//request
//response
// request 
// else if 
const server = http.createServer((req,res) =>{
if(req.url === "/"){
    res.write("Hello");
res.end();
}
else if (req.url === "/form"){
    res.setHeader("Content-Type","text/html")
    res.write("<form method='POST' action='/submit'> <input name='data' /> <button>Submit</button> </form>");
    res.end();
}
else if (req.url === "/submit"){
    let data= "";
    req.on("data", chunk => data+=chunk)
    req.on("end",() => {
        fs.writeFile(filePath, data,() =>{
            res.write("DataRecived");
            res.end()
        })
    })
    
}
else{
    res.write("404 - Notfound")
    res.end()
}
})

server.listen(3000)
//3000 to 9000