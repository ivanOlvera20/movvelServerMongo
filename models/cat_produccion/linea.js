const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

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
MongooseAutoIncrementID.initialise("counters");

lineaSchema.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "linea",
  field: "clave",
  incrementBy: 1,
  startAt: 100,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("linea", lineaSchema);
