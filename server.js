const express = require('express');
const cors=require('cors')
const app = express();
const PORT = require('./utils/config');
const mailrouter = require('./Controller/Mailrouter');
// const mailrouter=require('./Control

app.use(cors());

app.use(express.json());

app.use('/api/sendmail/',mailrouter)

app.listen(PORT,  ()=> {
    console.log(`Server listening to the ${PORT}`)
})

    
