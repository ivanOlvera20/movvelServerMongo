const { Schema, model } = require('mongoose')

const familiaSchema = new Schema(
    {
        id_familia: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    }, {
    timestamps: true
});

module.exports = model('familia', familiaSchema)
