const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const vendedoresSchema = new Schema(
  {
    id_cliente: Schema.Types.ObjectId,
    nombre: { type: String, required: true },
    comision: String
  },
  {
    timestamps: true
  }
);

MongooseAutoIncrementID.initialise("counters");

vendedoresSchema.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "vendedor",
  field: "clave",
  incrementBy: 1,
  startAt: 10001,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("vendedor", vendedoresSchema);
