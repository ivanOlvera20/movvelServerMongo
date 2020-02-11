const { Schema, model } = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");


const vendedoresSchema = new Schema(
  {
    id_cliente: Schema.Types.ObjectId,
    clave: {type: String, required: true, unique:true},
    nombre: { type: String, required: true },
    comision: String
  },
  {
    timestamps: true
  }
);

/* vendedoresSchema.plugin(autoIncrement.plugin, {
  model: "vendedor",
  field: "clave",
  startAt: "VD" + 1,
  incrementBy: 1
}); */

module.exports = model("vendedor", vendedoresSchema);



