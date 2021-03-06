const LOCAL_MONGODB = "mongodb://localhost:27017/bookdb";
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var BOOK_REPO = "books";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";

app.use(express.static(distDir));



// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_MONGODB, function (err, client) {
  if (err) {
	console.log("Mongodb initial failed.")
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");
  
  // Initial sample data
  var data = [{
	  "title": "The Outsider",
	  "author": "Stephen King",
	  "genre" : "Thrill",
	  "isbn": "978-1501180989",
	  "price": "25.00",
	  "rank": "4"
	 }, 
	 {
	  "title": "The Last of the Mohicans",
	  "author": "James Fenimore Cooper",
	  "genre" : "Historical novel",
	  "isbn": "",
	  "price": "10.00",
	  "rank": "4"
	 },
	 {
	  "title": "The Load Of Rings",
	  "author": "J. R. R. Tolkien",
	  "genre": "Fantasy",
	  "isbn": "",
	  "price": "40.00",
	  "rank": "5"
	}];
  db.collection(BOOK_REPO).find({}, function(err, books){
    if(!books) {
      db.collection(BOOK_REPO).insert(data);
    }
  });
  
  

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// CRUD API

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/books"
 *    GET: list all books
 *    @TODO : POST: creates a new book
 */

app.get("/api/books", function(req, res) {
  db.collection(BOOK_REPO).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get books.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/books", function(req, res) {
  var book = req.body;

  if (!req.body.title || !req.body.author) {
    handleError(res, "Invalid data", "Title and author are required.", 400);
  } else {
    book._id = new ObjectID();
    db.collection(BOOK_REPO).insertOne(book, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new book.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

/*  "/api/books/:id"
 *    GET: find book by id
 *    PUT: update book by id
 *    DELETE: deletes book by id
 */

app.get("/api/books/:id", function(req, res) {
  db.collection(BOOK_REPO).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "No such book availabe");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/books/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(BOOK_REPO).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Can't update the book");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/books/:id", function(req, res) {
  db.collection(BOOK_REPO).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Can't delete the book");
    } else {
      res.status(200).json(req.params.id);s
    }
  });
});
