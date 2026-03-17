const express = require('express');
const app = express();
const port = 3000;
const signalsController = require('./controllers/signals');
app.use(express.json());
app.get('/signals', signalsController.getSignals);
app.post('/signals', signalsController.createSignal);
app.listen(port, () => console.log(`Server started on port ${port}`));