const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const TOKEN = 'test123'

const PORT = 4000

app.use('/login', (_req, res) => {
    res.send({
        token: TOKEN,
    })
})

app.listen(PORT, () => console.log(`API is running on http://localhost:${PORT}/login`))
