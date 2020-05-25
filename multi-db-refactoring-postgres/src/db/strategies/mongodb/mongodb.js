const ICrud = require("../interfaces/interfaceCrud");
const Mongoose = require("mongoose");

const STATUS = {
  0: "Disconectado",
  1: "Conectado",
  2: "Conectando",
  3: "Disconectando",
};
class MongoDB extends ICrud {
  constructor(connection, schema) {
    super();
    (this._schema = schema), (this._connection = connection);
  }
  async isConnected() {
    const state = STATUS[this._connection.readyState];
    if (state === "Conectado") return state;

    if (state !== "Conectando") return state;

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return STATUS[this._connection.readyState];
  }
  static connect() {
    Mongoose.connect(
      "mongodb://raufa:raufa@localhost:27017/herois",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (error) => {
        if (!error) return;
        console.log("Falha na conexão", error);
      }
    );
    const connection = Mongoose.connection;

    connection.once("open", () => console.log("Database rodando!"));
    return connection;
  }
  
  async create(item) {
    return await this._schema.create(item);
  }
  async read(item, skip = 0, limit = 10) {
    return this._schema.find(item).limit(limit).skip(skip);
  }
  async update(id, item) {
    return await this._schema.updateOne({ _id: id }, { $set: item });
  }
  async delete(id) {
    return await this._schema.deleteOne({ _id: id });
  }
}
module.exports = MongoDB;
