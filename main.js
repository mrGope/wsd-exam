const express = require("express")
const app = express();
const port = 3004;

const mysql=require("./connection").con
//configuration
app.set("view engine","hbs");
app.set("views", "./view");
app.use(express.static(__dirname+"./public"))
//Routing
app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/add", (req, res) => {
    res.render("add")

});
app.get("/search", (req, res) => {
    res.render("search")

});
app.get("/update", (req, res) => {
    res.render("update")

});

app.get("/delete", (req, res) => {
    res.render("delete")

});


app.get("/view", (req, res) => {
    let qry = "select * from SPRING ";
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            res.render("view", { data: results });
        }

    });

});


app.get("/addstudent", (req, res) => {
    // fetching data from form
    const {emid,name, phone, email,sal,gender} = req.query

    // Sanitization XSS...
    let qry = "select * from SPRING where Emp_ID=?";
    mysql.query(qry, [emid], (err, results) => {
        if (err)
            throw err
        else {

            if (results.length > 0) {
                res.render("add", { checkmesg: true })
            } else {

                // insert query
                let qry2 = "insert into SPRING values(?,?,?,?,?,?)";
                mysql.query(qry2, [emid,name,phone,email,sal,gender], (err, results) => {
                    if (results.affectedRows > 0) {
                        res.render("add", { mesg: true })
                    }
                    else
                    console.log("fail")
                })
            }
        }
    })
});


app.get("/searchstudent", (req, res) => {
    // fetch data from the form


    const { emid1 } = req.query;

    let qry = "select * from SPRING where Emp_Salary>120000";
    mysql.query(qry, [emid1], (err, results) => {
        if (err) throw err
        else {
            if (results.length > 0) {
                res.render("search", { mesg1: true, mesg2: false ,data: results })
               
            } else {

                res.render("search", { mesg1: false, mesg2: true })

            }

        }
    });
})


app.get("/removestudent", (req, res) => {

    // fetch data from the form


    const { emid2 } = req.query;

    let qry = "delete from SPRING where Emp_ID=?";
    mysql.query(qry, [emid2], (err, results) => {
        if (err) throw err
        else {
            if (results.affectedRows > 0) {
                res.render("delete", { mesg1: true, mesg2: false })
            } else {

                res.render("delete", { mesg1: false, mesg2: true })

            }

        }
    });
});


app.listen(port,(err)=>{
    if(err)
        throw err
    else
        console.group("Server running at %d port",port);
});