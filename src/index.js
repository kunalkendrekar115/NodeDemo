
const express = require('express')

const app = express()



app.get('/', (req, res) => res.send('Hello  my name is  kunal kendrekar'))


app.listen(process.env.PORT || 3000, () => console.log('Listning on Port '+process.env.PORT))