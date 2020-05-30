const BaseRoute = require("./base/baseRoute");

class HeroRRoutes extends BaseRoute {
  constructor(db) {
    super();
    this.db = db;
  }
  list() {
    return {
      path: "/herois",
      method: "GET",
      handler: (request, headers) => {
        try {
          const { skip, limit, name } = request.query;
          let query = {};

          if (name) {
            query.nome = name;
          }
          if (isNaN(skip) && skip) throw Error("O tipo skip é incorreto");
          if (isNaN(limit) && limit) throw Error("O tipo limit é incorreto");
          
          return this.db.read(query, parseInt(skip), parseInt(limit));
        } catch (e) {
          console.log("ERRO", e);
          return "Erro interno no servidor";
        }
      },
    };
  }
}
module.exports = HeroRRoutes;
