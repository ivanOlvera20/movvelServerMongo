const { Schema, model } = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const clientesSchema = new Schema(
  {
    id_cliente: Schema.Types.ObjectId,
    descripcion: { type: String, required: true },
    vendedor: { type: Schema.ObjectId, ref: "Vendedores" },
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
      rfc: { type: Number, max: 13 },
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
        enum: [
          "TDC",
          "Efectivo",
          "Cheque",
          "Transferencia",
          "Deposito Bancario"
        ]
      },
      metodo_pago: {
        type: String,
        enum: ["Pago en parcialidades o diferido", "Pago en una exhibición"]
      },
      plazo_credito: { type: String },
      limite_credito: { type: String }
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Clientes", modeloSchema);

clientesSchema.plugin(autoIncrement.plugin, {
  model: "Clientes",
  field: "clave",
  startAt: "CL" + 1,
  incrementBy: 1
});
