import * as path from 'path';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../dist/index.html')));
app.get('/route2', (req, res) => res.sendFile(path.join(__dirname, '../dist/route2.html')));

app.listen(port, () => console.log(`Example App listening on port ${port}`));
