const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const cors = require('cors')


const signupRoutes = require('./routes/signupRoutes')
const loginRoutes = require('./routes/loginRoutes')
const verifyRoutes = require('./routes/verifyRoutes');

const secure = require('./middleware/secure');

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/signup',signupRoutes)
app.use('/login',loginRoutes)

app.use('/verify',secure, verifyRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const dbPassword = process.env.DB_PASSWORD
const dbUrl = process.env.DB_URL
const dbWithPassword = dbUrl.replace('<db_password>',dbPassword)
main().then(()=> console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbWithPassword);
}