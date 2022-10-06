const { readFile, writeFile } = require('fs');

// using call back as err or result
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        // console.log(first,second);
        writeFile('./content/result.txt',`not sync here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    
    })

})
 