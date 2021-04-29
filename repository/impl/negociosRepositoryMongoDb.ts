import * as mongoose from 'mongoose'
import NegociosSchema from '../../model/negociosSchema'
import INegociosRepository from '../INegociosRepository';
import {Model, Document, Query} from 'mongoose'
import { injectable } from 'inversify';

@injectable()
class NegociosRepositoryMongoDb implements INegociosRepository {
  
  private _model : Model<Document<any>>;

  constructor(){
      this._model = mongoose.model('negocios',NegociosSchema)
  }

  async getAll(): Promise<any> {
    return await this._model.find({});
  }
  async getByAtivo(ativo: Boolean): Promise<any> {
    return await this._model.find({ 'ativo': ativo});
  }
  async create(novoNegocio: any): Promise<any> {
    return await this._model.create(novoNegocio);
  }
  async getById(id: string): Promise<any> {
    return await this._model.findById(id);
  }
  async deleteById(id: string): Promise<any> {
    return await this._model.findByIdAndDelete(id);
  }
  async updateById(id: String, negocioAtualizado: any): Promise<any> {
    return await this._model.findByIdAndUpdate(id,negocioAtualizado,{new: true});
  }

}

export default NegociosRepositoryMongoDb;