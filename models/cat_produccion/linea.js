const { Schema, model } = require("mongoose");

const lineaSchema = new Schema(
  {
    id_linea: Schema.Types.ObjectId,
    descripcion: { type: String, required: true },
    familia: { type: Schema.ObjectId, ref: "familia" }
  },
  {
    timestamps: true
  }
);


module.exports = model("linea", lineaSchema);
