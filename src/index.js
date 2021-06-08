const express = require('express');
const app = express();
const env = require('./config/environment')

app.set('view engine', 'ejs')
app.use('/', require('./routes'))
app.listen(env.port, () => console.log('Server running on port', env.port))
