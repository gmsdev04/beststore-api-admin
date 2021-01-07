import * as mongoose from 'mongoose'
import NegociosSchema from '../model/negociosSchema'

export default mongoose.model('negocios',NegociosSchema)


