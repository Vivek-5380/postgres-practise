const Express = require('express');
const app = Express();
const studentRouter = require('./src/routes');
const port = 3000;

app.use(Express.json());

app.get("/" , (req , res) => {
    res.send("Hello!"); 
});

app.use("/api" , studentRouter);

app.listen(port , 
    () => console.log(`The server is running on Port: ${port}`)
);


