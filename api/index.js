const express = require('express');
const Dropbox = require('dropbox').Dropbox;
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet')
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

const dbx = new Dropbox({ accessToken: process.env.TOKEN });

app.use(bodyParser.json());

app.use(helmet())
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' https://for-fun-gules.vercel.app");
	res.setHeader('Access-Control-Allow-Origin', "*");
  next();
});
// app.post('/upload', (req, res) => {


// 	const dataToSend = req.body.data;
// 	const finger = req.body.finger

//   dbx.filesUpload({ path: `/${finger}.txt`, contents: dataToSend })
//     .then(response => {
//       console.log('Файл успешно загружен в Dropbox:', response);
//       res.send('Файл успешно загружен в Dropbox');
//     })
//     .catch(error => {
//       console.error('Ошибка при загрузке файла в Dropbox:', error);
//       res.status(500).send('Произошла ошибка при загрузке файла в Dropbox', error);
//     });
// });

app.get('/a', (req, res) => {
	res.json({message: "Hello from Express JS"})
})

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;