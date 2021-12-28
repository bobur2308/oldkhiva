const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv')
const homeRoutes = require('./routes/homeRoutes')
const connectDB= require('./config/db')

connectDB()

dotenv.config()


app.use(express.static(path.join(__dirname,'public')))





// body pares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// initialize template engine hbs
app.engine('.hbs', exphbs.engine({extname:'.hbs'}))
app.set('view engine', '.hbs')

app.use('/', homeRoutes)


app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})
