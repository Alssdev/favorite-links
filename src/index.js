<<<<<<< HEAD
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')

// intialiaztions
const app = express()

// settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views')) // here are views
=======
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// intialiaztions
const app = express();

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); // here are views
>>>>>>> 1f2f56e... Creación de la Estructura princiapl del proyecto
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs', // files' extentions
    helpers: require('./lib/handlerbars'),
  })
<<<<<<< HEAD
)
app.set('view-engin', '.hbs')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false })) // accept only simple data
app.use(express.json)

// global variables
app.use((request, response, next) => {
  next()
})

// routes
app.use(require('./routes/index'))
app.use(require('./routes/authentication'))
app.use('/links', require('./routes/links'))

// public files
app.use(express.static(path.join(__dirname, 'public')))

// starting server
app.listen(app.get('port'))
console.log(`Server on port ${app.get('port')}`)
=======
);
app.set('view-engin', '.hbs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // accept only simple data
app.use(express.json());

// global variables
app.use((req, res, next) => {
  next();
});

// routes
app.use(require('./routes/index'));
app.use('/links', require('./routes/links'));
app.get('/', (req, res) => {
  res.send('Hello World');
});
// public files
app.use(express.static(path.join(__dirname, 'public')));

// starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
>>>>>>> 1f2f56e... Creación de la Estructura princiapl del proyecto