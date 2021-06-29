const express = require('express');
let app = express();

// Middlewares
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

// Routers
const itemRouter = require('./routes/item-routes');
const categoryRouter = require('./routes/category-routes')
const donatersRouter = require('./routes/donater-routes')
const beneficiersRouter = require('./routes/beneficier-routes')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/items', itemRouter);
app.use('/category', categoryRouter);
app.use('/donaters', donatersRouter)
app.use('/beneficiers', beneficiersRouter)
//app.use('/admin', adminRoute)...eklenecek

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, ()=>{
   console.log("listening on 3000"); });

