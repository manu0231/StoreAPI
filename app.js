require('dotenv').config()
require('express-async-errors')
//express
const express = require('express')
const app = express()

// rest of packages
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors');
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');


//database
const connectDB = require('./db/connect')


//Routers
const productRoute = require('./routes/products')
const authRoute = require('./routes/authRoutes')
const userRoute = require('./routes/userRoutes')
const reviewRoute = require('./routes/reviewRoute')
const orderRoute = require('./routes/orderRoute')

//middleware
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware')
const notfound = require('./middleware/notfoundMiddleware')


app.set('trust proxy', 1);
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
}))
app.use(mongoSanitize())
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser(process.env.JWT_SECRET))

app.use(express.static('./public'));

//router

app.use('/api/v1/products', productRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/order', orderRoute)

app.use(notfound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`))

    } catch (error) {
        console.log(error)
    }
}

start()