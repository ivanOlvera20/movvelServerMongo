const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");


const dom_entrega = Schema(
  {
    calle: String,
    colonia: String,
    num_ext: Number,
    num_int: Number,
    estado: String,
    municipio: String,
  }
)


const clientesSchema = new Schema(
  {
    id_cliente: Schema.Types.ObjectId,
    clave: String,
    descripcion: { type: String, required: true },
    vendedor: { type: Schema.ObjectId, ref: "vendedor" },
    datos_cliente: {
      nombre_comercial: String,
      contacto: String,
      celular: { type: Number},
      telefono: Number,
      correo: String,
      dom_entrega: [dom_entrega]
    },
    precio: { type: String, enum: ["plz1", "plz2", "plz3"] },
    tipo_cliente: { type: String, enum: ["Extranjero", "Foraneo", "Local"] },
    ubi_cliente: {
      calle: String,
      colonia: String,
      num_ext: Number,
      num_int: Number,
      estado: String,
      municipio: String
    },
    datos_fiscales: {
      rfc: { type: Number},
      calle: String,
      colonia: String,
      codigo_postal: { type: String},
      num_ext: Number,
      num_int: Number,
      estado: String,
      municipio: String,
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
  field: "Id",
  incrementBy: 1,
  startAt: 1,
  unique: true,
  nextCount: false,
  resetCount: false
});

module.exports = model("cliente", clientesSchema);