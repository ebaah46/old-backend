const dataController = require('../controllers').Data
const bodyParser = require('body-parser');
const bodyJson = bodyParser.json();
module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send({
        "message": "All data for Oxygen and MQ sensors will be sent here"
    }));
    app.get('/old', (req, res) => res.status(200).send({
        message: 'Bienvenguta!!! You\'re at the OLD System API!',
    }));

    app.post('/old/data', bodyJson, dataController.create);

    app.get('/old/data', dataController.list);

    app.get('/old/data/dangerous', dataController.listHarmful);

    app.param('now', (req, res, next, now) => {
        console.log(now);
        next();
    });

    app.get('/old/data/:now', dataController.listByDate);
};