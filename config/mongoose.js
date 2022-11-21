const mongoose = require("mongoose");

mongoose.connect(
  // "mongodb+srv://Shahrukh072:yRutey4bzp1CRc9l@cluster0.vazyrsm.mongodb.net/dec21DB?retryWrites=true&w=majority"
  //  || "mongodb://127.0.0.1/dec21DB"
  process.env.MONGODB_URI 
,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);
//yRutey4bzp1CRc9l
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error connecting to DB", err);
});

db.once("open", () => {
  console.log("Successfully connected to DB");
});

module.exports = db;