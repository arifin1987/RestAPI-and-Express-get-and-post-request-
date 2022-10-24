let express = require('express');
let fs = require('fs')


let app = express();

app.use(express.json());


app.get('/api/students', (req, res)=>{
fs.readFile('./db.json', 'utf-8', (err, data)=>{
    let students = JSON.parse(data);
    
    res.send(students);
})
})

app.post('/api/students', (req, res)=>{
   let student = req.body;
   fs.readFile('./db.json','utf-8', (err, data)=>{
    let students = JSON.parse(data);
    students.push(student);
    fs.writeFile('./db.json', JSON.stringify(students),(err)=>{
        res.send(student);
    })
   })

})



app.listen(8000, ()=>{
    console.log("server run success")
})