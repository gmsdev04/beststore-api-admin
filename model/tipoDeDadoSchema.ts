import * as mongoose from 'mongoose'

const TipoDeDadoSchema  = new mongoose.Schema({

    nome: { type: String },
    alias: { type: String}
    
},{ collection: 'tiposDeDados' });

export default TipoDeDadoSchema;