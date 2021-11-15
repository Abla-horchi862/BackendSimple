const nodemysql = require('../models');
const { panier } = require('../models');
const Panier = nodemysql.panier;
const config = require("../config/authJwt.js");
const randtoken = require('rand-token');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


exports.findAllPanier = (req, res, next) => {
    Panier.findAll().then(panier => {
        return res.json(panier)
    })
        .catch(err => {
            res.send('error: ' + err)
        })
};
// Get Panier by Id
exports.findById = (req, res, next) => {
    Panier.findOne({
        where: {
            panier_id: req.params.PanierId
        },

    })
        .then(panier => {
            if (panier) {
                res.json(panier)
            } else {
                res.send('panier does not exist')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
};
// delete Panier
exports.deletePanier = (req, res, next) => {
    Panier.destroy({
        where: {
            panier_id: req.params.panierId
        }
    })
        .then(() => {
            res.json('Panier Deleted!')
        })
        .catch(err => {
            res.send('error: ' + err)
        })
};


//Ajouter panier
exports.created = (req, res) => {
    const panierData = (req.body)
    Panier.create(panierData)
      .then(() => {
        return res.json("panier ajouter avec success")
      })
      .catch(err => {
        res.send('error: ' + err.message)
      })
  };