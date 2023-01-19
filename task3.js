var fs = require("fs");

const data = "Hello Node";

fs.writeFile('welcome.txt', data, (err) => {
    
    if(err) {
        throw err;
    }

    console.log("New Text File Successfully.");
})
fs.readFile('welcome.txt',function(err,data){
    if(err){
       console.log(err);
    }
    console.log(data.toString());
});


