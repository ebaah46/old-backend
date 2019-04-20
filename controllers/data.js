const Data = require('../models').Data
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {
    create(req, res) {
        // let oxy = JSON.parse(req.body.oxyVal);
        // let mqState = JSON.parse(req.body.mqState);
        let today = new Date();
        today = today.getUTCFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        //  today = JSON.parse(req.body.mqState);
        return Data
            .create({
                oxyVal: req.body.oxyVal,
                mqState: req.body.mqState,
                now: today
            })
            .then(data => res.status(201).send(data))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Data
            .findAll()
            .then((data) => {
                res.status(200).send(data)
                console.log("Sending response " + data)
            })
            .catch((error) => {
                console.log("Yawa pai")
                res.status(400).send(error)
            })
    },
    listHarmful(req, res) {
        return Data
            .findAll(
                {
                    where: {
                        [Op.or]: {
                            mqState: 1,
                            oxyVal: {
                                [Op.lt]: 18
                            },
                        }
                    }
                }
            )
            .then((data) => {
                res.status(200).send(data)
                console.log("Sending response " + data)
            })
            .catch((error) => {
                console.log("Yawa pai")
                res.status(400).send(error)
            })
    },
    listByDate(req, res) {
        return Data
            .findAll({
                where: {
                    now: req.params.now
                }
            })
            .then((data) => {
                res.status(200).send(data)
                console.log("Sending response " + data)
            })
            .catch((error) => {
                console.log("Yawa pai")
                res.status(400).send(error)
            })
    }
};



