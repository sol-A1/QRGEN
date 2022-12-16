const express = require('express');
const qr = require('qrcode');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/generate', (req, res) => {
  console.log('Received request:', req.body);

  const text = req.body.text;

  qr.toDataURL(text, (err, url) => {
    if (err) {
      res.send('Error generating QR code');
    } else {
      res.send(`<img src="${url}"/>`);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
