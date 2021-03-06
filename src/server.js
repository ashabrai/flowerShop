import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(__dirname));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'build', 'index.html'));
});

app.listen(port);

