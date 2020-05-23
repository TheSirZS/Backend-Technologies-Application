const server = require('./server')
const { PORT, MONGO_URI } = require('./config')
const mongoose = require('mongoose')

mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then(() => {
    server.listen(PORT, () => {
        console.log('Backend server is running on port: ' + PORT)
    })
}).catch(console.log)