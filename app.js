let express = require('express');
let db = require('./db');


let app = express();

app.use(express.json());


app.get('/api/students', (req, res)=>{
    db.getDbStudents()
    .then(students=>{
        res.send(students)
    })

})

app.post('/api/students', (req, res)=>{
    let student = req.body;
    db.getDbStudents()
    .then(students=>{
        students.push(student);
        db.insertDbStudents(students)
        .then(data=>{
            res.send(data)
        })
    })
  

})



app.listen(8000, ()=>{
    console.log("server run success")
})