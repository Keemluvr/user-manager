const UserModel = require('../models/UserModel')

module.exports = {
    // Cria
    create: (req, res) => {
        let user = new UserModel({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            team: req.body.team,
        });

        user.save()
            .then( result => {
                res.json({ success: true, result: result })
            })
            .catch( err => {
                res.json({ success: false, result: err })
            });
    },

    // Atualiza
    update: (req, res) => {
        UserModel.findOneAndUpdate(req.body._id, req.body)
            .then( user => {
                if(!user) res.json({ success: false, result: "User does not exist" })
                res.json({ success: true, result: user })
            })
    },

    // Recuperar
    retrieve: (req, res) => {
        UserModel.find()
            .then( result => {
                if(!result) res.json({ success: false, result: "No user was found with the ID" })

                res.json({ success: true, result: result })
            })
            .catch( err => res.json({ success: false, result: err }))
    },

    // Deletar
    delete: (req, res) => {
        UserModel.remove({_id:req.body._id})
            .then(result => {
                res.json({ success: true, result: result })
            })
            .catch( err => {
                res.json({ success: false, result: err })
            })
    }
}