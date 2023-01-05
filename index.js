let express = require("express")
let routes = require("./routes")
let app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routes)

app.listen(3010,function(){console.log("Connected to Sever!!!!!")})