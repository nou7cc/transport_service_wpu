// inital things to server
  const express = require('express')
  const bodyParser = require('body-parser')
  const mysql = require("mysql");
  const server = express();
  server.use(bodyParser.json());


//get the DB connection

  const db = mysql.createConnection({

      host: "localhost",
      user: "root",
      password: "",
      database: "wpu(2)",

  });
  db.connect(function (error) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
       console.log("successfully Connected to DB");
      }
    });
// give port to connect
  server.listen(3000,function check(error) {
    if (error) 
    {
    console.log("Error....dddd!!!!");
    }

    else 
    {
        console.log("Started....!!!! 3000");

    }
  });



// homePage : get trips
  server.get("/trips", (req, res) => {
      var sql = "SELECT * FROM trips";
      db.query(sql, function (error, result) {
        if (error) {
         console.log("Error Connecting to DB");
        } else {
         res.send({ status: true, data: result });
        }
      });
   });
// admin  : get all trips
  server.get("/admin/get_trips", (req, res) => {
    var sql = "SELECT * FROM trips";
    db.query(sql, function (error, result) {
      if (error) {
      console.log("Error Connecting to DB");
      } else {
      res.send({ status: true, data: result });
      }
    });
  });
// admin : get spicfic trips
  server.get("/admin/trips/:id", (req, res) => {
    var studentid = req.params.id;
    var sql = "SELECT * FROM trips WHERE id=" + studentid;
    db.query(sql, function (error, result) {
        if (error) {
        console.log("Error Connecting to DB");
        } else {
         res.send({ status: true, data: result });
        }
      });
  });
// admin : update spicfic trips
  server.put("/admin/trips/update/:id", (req, res) => {
      let sql =
        "UPDATE trips SET trip_time='" +
        req.body.trip_time +
        "', trffic='" +
        req.body.traffic +
        "',bus_number='" +
        req.body.bus_number +
        "'  WHERE id=" +
        req.params.id;
  
      let a = db.query(sql, (error, result) => {
        if (error) {
          res.send({ status: false, message: "trip Updated Failed" });
        } else {
          res.send({ status: true, message: "trip Updated successfully" });
        }
      });
  });
// admin : delete spicfic trip
  server.delete("/admin/trips/delete/:id", (req, res) => {
    let sql = "DELETE FROM trip WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "TRIP Deleted Failed" });
      } else {
        res.send({ status: true, message: "TRIP Deleted successfully" });
      }
    });
  });
// admin : create spicfic trip
  server.post("/admin/trips/add", (req, res) => {
      let details = {
        // trip_name: req.body.trip_name,
        trip_time: req.body.trip_time,
      };
      let sql = "INSERT INTO trips SET ?";
      db.query(sql, details, (error) => {
        if (error) {
          res.send({ status: false, message: "TRIP created Failed" });
        } else {
          res.send({ status: true, message: "TRIP created successfully" });
        }
      });
    });
// admin : get all empolyees
  server.get("/admin/employees", (req, res) => {
    var sql = "SELECT * FROM employees";
    db.query(sql, function (error, result) {
      if (error) {
      console.log("Error Connecting to DB");
      } else {
      res.send({ status: true, data: result });
      }
    });
  });
// admin : get spicfic employee
server.get("/admin/employees/:id", (req, res) => {
  var studentid = req.params.id;
  var sql = "SELECT * FROM employees WHERE id=" + studentid;
  db.query(sql, function (error, result) {
     if (error) {
     console.log("Error Connecting to DB");
      } else {
      res.send({ status: true, data: result });
      }
    });
});
// admin : create spicfic employee
  server.post("/admin/empolyees/add", (req, res) => {
    let details = {
      // trip_time: req.body.trip_time,
    };
    let sql = "INSERT INTO employees SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "EMPLOYEE created Failed" });
      } else {
        res.send({ status: true, message: "EMPLOYEE created successfully" });
      }
    });
  });
// admin : update spicfic employee
  server.put("/admin/employees/update/:id", (req, res) => {
      let sql =
        "UPDATE employees SET stname='" +
        req.body.stname +
        "', course='" +
        req.body.course +
        "',fee='" +
        req.body.fee +
        "'  WHERE id=" +
        req.params.id;
    
      let a = db.query(sql, (error, result) => {
        if (error) {
          res.send({ status: false, message: "EMPLOYEE Updated Failed" });
        } else {
          res.send({ status: true, message: "EMPLOYEE Updated successfully" });
        }
      });
    });
// admin : delete spicfic employee
  server.delete("/admin/employees/delete/:id", (req, res) => {
    let sql = "DELETE FROM employees WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "EMPOLYEE Deleted Failed" });
      } else {
        res.send({ status: true, message: "EMPLOYEE Deleted successfully" });
      }
    });
  });
  // admin : get all persons who use transport service
  server.get("/admin/employees/persons", (req, res) => {
    var sql = "SELECT * FROM persons";
    db.query(sql, function (error, result) {
      if (error) {
      console.log("Error Connecting to DB");
      } else {
      res.send({ status: true, data: result });
      }
    });
  });
// admin : get all users
server.get("/admin/users", (req, res) => {
  var sql = "SELECT * FROM users";
  db.query(sql, function (error, result) {
    if (error) {
    console.log("Error Connecting to DB");
    } else {
    res.send({ status: true, data: result });
    }
  });
});
// admin : get spicfic user
server.get("/admin/users/:id", (req, res) => {
  var studentid = req.params.id;
  var sql = "SELECT * FROM users WHERE id=" + studentid;
  db.query(sql, function (error, result) {
      if (error) {
      console.log("Error Connecting to DB");
      } else {
       res.send({ status: true, data: result });
      }
    });
});
// admin : create spicfic user
  server.post("/admin/users/add", (req, res) => {
    let details = {
      // trip_time: req.body.trip_time,
    };
    let sql = "INSERT INTO users SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "USER created Failed" });
      } else {
        res.send({ status: true, message: "USER created successfully" });
      }
    });
  });
// admin : update spicfic user
  server.put("/admin/users/update/:id", (req, res) => {
      let sql =
        "UPDATE users SET stname='" +
        req.body.name +
        "', course='" +
        req.body.course +
        "',fee='" +
        req.body.fee +
        "'  WHERE id=" +
        req.params.id;
    
      let a = db.query(sql, (error, result) => {
        if (error) {
          res.send({ status: false, message: "USER Updated Failed" });
        } else {
          res.send({ status: true, message: "USER Updated successfully" });
        }
      });
    });
// admin : delete spicfic user
  server.delete("/admin/users/delete/:id", (req, res) => {
    let sql = "DELETE FROM users WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "USER Deleted Failed" });
      } else {
        res.send({ status: true, message: "USER Deleted successfully" });
      }
    });
  });
// admin : get reservation to spicfic trip
server.get("/admin/getTrips/:id/reservations", (req, res) => {
  var resrve_id = req.params.id;
  var sql = "SELECT * FROM reservations WHERE trip_id=" + resrve_id;
  db.query(sql, function (error, result) {
      if (error) {
      console.log("Error Connecting to DB");
      } else {
       res.send({ status: true, data: result });
      }
    });
});


// admin : transformation reservation from spicfic trip
server.put("localhost:5000/admin/getTrips/:trip_id/reservations/transformation/:reserve_id", (req, res) => {
  var trip = req.params.trip_id;
  var reserve = req.params.reserve_id;
  let sql =
    "UPDATE reservations SET trip_id='" +reserve +"'WHERE id=" +trip;
  let a = db.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "USER Updated Failed" });
    } else {
      res.send({ status: true, message: "USER Updated successfully" });
    }
  });
});

// admin : get users from black list
server.get("/admin/blackList", (req, res) => {
  var sql = "SELECT * FROM blackList";
  db.query(sql, function (error, result) {
    if (error) {
    console.log("Error Connecting to DB");
    } else {
    res.send({ status: true, data: result });
    }
  });
});



