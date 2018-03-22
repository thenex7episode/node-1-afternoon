const express = require ('express')
const bodyParser = require ('body-parser')
const messagesObj = require ('./controller/messages_controller')

const app = express()

app.use(bodyParser.json())
app.use(express.static('../public/build'))

const messagesBaseUrl = '/api/messages';
app.post( messagesBaseUrl, messagesObj.create);
app.get(messagesBaseUrl, messagesObj.read);
app.put(`${messagesBaseUrl}/:id`, messagesObj.update );
app.delete(`${messagesBaseUrl}/:id`, messagesObj.delete)

const PORT = 3000
app.listen(PORT, () => {console.log(`Server listening on port ${PORT}.`)})