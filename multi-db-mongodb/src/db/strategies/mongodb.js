const ICrud = require("./interfaces/interfaceCrud");
const Mongoose = require("mongoose");

const STATUS = {
  0: "Disconectado",
  1: "Conectado",
  2: "Conectando",
  3: "Disconectando",
};
class MongoDB extends ICrud {
  constructor() {
    super();
    (this._herois = null), (this._driver = null);
  }
  async isConnected() {
    const state = STATUS[this._driver.readyState];
    if (state === "Conectado") return state;

    if (state !== "Conectando") return state;

    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return STATUS[this._driver.readyState];
  }
  connect() {
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
    this._driver = connection;
    connection.once("open", () => console.log("Database rodando!"));

    this.defineModel();
  }
  defineModel() {
    const heroisSchema = new Mongoose.Schema({
      nome: {
        type: String,
        required: true,
      },
      poder: {
        type: String,
        required: true,
      },
      insertedAt: {
        type: Date,
        default: new Date(),
      },
    });
    this._herois =
      Mongoose.models.herois || Mongoose.model("herois", heroisSchema);
  }
  async create(item) {
    return await this._herois.create(item);
  }
  async read(item, skip = 0, limit = 10) {
    return this._herois.find(item).limit(limit).skip(skip);
  }
  async update(id, item) {
    return await this._herois.updateOne({ _id: id }, { $set: item });
  }
  async delete(id){
     return await this._herois.deleteOne({_id: id})
  }
}
module.exports = MongoDB;
