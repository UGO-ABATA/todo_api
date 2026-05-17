const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router= require("./routes/todoRoutes");
const live_url =  
  "mongodb+srv://ZOM_30:Onyebuchi2012@cluster0.7nby8av.mongodb.net/userDB?appName=Cluster0";
const local_url = "mongodb://localhost:27017/userDB";

mongoose
  .connect(local_url) 
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get('/', (req , res)=> {
    res.send('Hello World!');
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

