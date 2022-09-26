const express = require( "express" );
const app = express();
const port = 8080; // default port to listen

app.get("/test", (_req, res) =>  {
    res.status(200).send("Hello world")
  })
module.exports = app;
// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );