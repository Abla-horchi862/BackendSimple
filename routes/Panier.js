const panier = require("../controllers/panier.controller");

module.exports = function(app, limit){

    // Get All paniers
    app.get("/api/panier", panier.findAllPanier, limit);
    // Get paniers by Id
    app.get("/api/panier/:panierId", panier.findById, limit);
    // delete offres
    app.delete("/api/panier/:panierId", panier.deletePanier, limit);
    //Ajouter panier
    app.post("/api/panier/addpanier", panier.created, limit);
}