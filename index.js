const axios = require('axios');
// this changes the axios default config
axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.API_KEY;
axios.defaults.headers.common['Something'] = "SomeValue";