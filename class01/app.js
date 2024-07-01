//Node ky sath builtin chezein usmy Http  ata h
//require sy node samjhtaa hai is file ko yeh chezein lakar deni hai
const http = require("http")

const server = http.createServer((req,res) =>{
    // console.log(req)
    // console.log(req.url)
   res.write("hisham");
   res.end();
})
//listen ky andar btaty hai server konsi port pe chalega
//port koi asa adress jahan pe apka server run hota h
//nodejs ik hi request ik time pe krta h
server.listen(3000)





























