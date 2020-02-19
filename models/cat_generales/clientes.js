const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const clientesSchema = new Schema(
  {
    id_cliente: Schema.Types.ObjectId,
    descripcion: { type: String, required: true },
    vendedor: { type: Schema.ObjectId, ref: "vendedor" },
    datos_cliente: {
      nombre_comercial: String,
      contacto: String,
      celular: { type: Number, max: 10 },
      telefono: Number,
      correo: String,
      dom_entrega: { type: Map, of: String }
    },
    precio: { type: String, enum: ["plz1", "plz2", "plz3"] },
    tipo_cliente: { type: String, enum: ["Extranjero", "Foraneo", "Local"] },
    ubi_cliente: {
      calle: String,
      colonia: String,
      num_ext: Number,
      num_int: Number,
      municipio: { 
        estado: String,
        municipio: String
       }
    },
    datos_fiscales: {
      rfc: { type: Number},
      calle: String,
      colonia: String,
      codigo_postal: { type: String, max: 5 },
      num_ext: Number,
      num_int: Number,
      municipio: { 
        estado: String,
        municipio: String
      }
    },
    datos_credito: {
      cfdi: String,
      banco: {
        type: String,
        enum: [
          "Santander",
          "City Banamex",
          "BBVA",
          "HSBC",
          "Banorte",
          "Scotiabank",
          "Inbursa"
        ]
      },
      ref_bancaria: Number,
      forma_pago: {
        type: String,

      },
      metodo_pago: {
        type: String,

      },
      plazo_credito: { type: String },
      limite_credito: { type: String }
    }
  },
  {
    timestamps: true
  }
);

MongooseAutoIncrementID.initialise("counters");

clientesSchema.plugin(MongooseAutoIncrementID.plugin, {
  modelName: "cliente",
  field: "clave",
  incrementBy: 1,
  startAt: 10001,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("cliente", clientesSchema);