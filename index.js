const app = (require('express'))();
const cors = require('cors');

const data = require('./data/data.json');

const port = process.env.PORT || 8089;

app.use(cors());

app.get('/', (req, res) => {
    res.send(data);
});

app.listen(port, () => console.log(`API Running on port ${port}`));