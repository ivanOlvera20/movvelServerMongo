const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");
const { appConfig } = require("../../config"); 

const material = Schema(
  {
    material: String,
    magnitud: Number
  }
)

const productoSchema = Schema(
  {
    id_producto: Schema.Types.ObjectId,
    descripcion: String,
    familia: { type: Schema.ObjectId, ref: 'familia' },
    linea: { type: Schema.ObjectId, ref: 'linea' },
    modelo: { type: Schema.ObjectId, ref: 'modelo' },
    plz1: Number,
    plz2: Number,
    plz3: Number,
    imgUrl: String,
    materiales_consumo: [material]
  },
  {
    timestamps: true
  }
);

productoSchema.methods.setImgUrl = function setImgUrl(filename) {
  const { host, port } = appConfig
  this.imgUrl = `${host}:${port}/public/${filename}`
}


productoSchema.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "producto",
  field: "clave",
  incrementBy: 1,
  startAt: 100,
  unique: true,
  nextCount: false,
  resetCount: false
});



module.exports = model("producto", productoSchema);
