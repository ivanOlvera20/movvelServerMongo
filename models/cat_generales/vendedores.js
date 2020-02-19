const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const root = "%"
const clave ="VD-"

const vendedoresSchema = new Schema(
  {
    id_cliente: Schema.Types.ObjectId,
    clave: {type: Number, set: v => `${clave}${v}`},
    nombre: { type: String, required: true },
    comision: {
      type: String,
      set: v => `${v}${root}`
    }
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
