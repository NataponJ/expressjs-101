const express = require('express');
const PORT = 8080;
var app = express();
app.get('/', (req, res) => {
    res.send('localhost is running!!')
})
app.get('/hello', (req, res) => {
    res.send('Hello Express')
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});