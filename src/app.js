const express = require('express');
const path = require('path');


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

const genreApiRoutes = require('./routes/apis/genreApiRoutes');
const movieApiRoutes = require('./routes/apis/movieApiRoutes');
const actorApiRoutes = require('./routes/apis/actorApiRoutes');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);
app.use('/movies', moviesRoutes);
app.use('/genres', genresRoutes);
app.use('/actors', actorsRoutes);

app.use(genreApiRoutes);
app.use(movieApiRoutes);
app.use(actorApiRoutes)



app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
