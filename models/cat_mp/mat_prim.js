const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const Mat_prima = new Schema(
    {
        id: Schema.Types.ObjectId,
        descripcion: { type: String, required: true, enum:['Tubo','Pintura','Textil']},
        especificacion: String
    },
    {
        timestamps: true
    }
);


MongooseAutoIncrementID.initialise("counters");

Mat_prima.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "mat_prima",
    field: "clave",
    incrementBy: 1,
    startAt: 100,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('mat_prima', Mat_prima)