import * as mongoose from 'mongoose'

const negociosSchema  = new mongoose.Schema({

    nome: { type: String },
    descricao: { type: String },
    ativo: { type: Boolean }
    
},{ collection: 'negocios' });

export default negociosSchema;