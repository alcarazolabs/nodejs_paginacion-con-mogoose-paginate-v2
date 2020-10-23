const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const personaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    fecharegistro:{
        type: Date,
        default: Date.now
    }
});
//establecer plugin de paginacion al modelo
personaSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Persona', personaSchema)