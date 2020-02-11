const { Schema, model } = require("mongoose");
const { appConfig } = require("../../config");


const productoSchema = Schema(
  {
    id_producto: Schema.Types.ObjectId,
    codigo: {type: Number, required: true} ,
    description: {type: String, required: true},
    familia: { type: Schema.ObjectId, ref: 'familia' },
    linea: { type: Schema.ObjectId, ref: 'linea' },
    modelo: { type: Schema.ObjectId, ref: 'modelo' },
    plz1: Number,
    plz2: Number,
    plz3: Number,
    imgUrl: String,
    materiales_consumo: {type: Map, of: String} 
  },
  {
    timestamps: true
  }
);

productoSchema.methods.setImgUrl = function setImgUrl(filename) {
  const { host, port } = appConfig;
  this.imgUrl = `${host}:${port}/public/${filename}`;
};

module.exports = model("Producto", productoSchema);
