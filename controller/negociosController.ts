import NegociosServices from '../services/negociosServices'
import { BaseHttpController, controller, httpDelete, httpGet, httpPatch, httpPost, queryParam, requestBody, requestParam } from 'inversify-express-utils';
import { inject } from 'inversify';

@controller('/api/v1/negocios')
class NegociosController extends BaseHttpController{

    private service : NegociosServices;

    constructor(@inject('NegociosServices') _service : NegociosServices){
        super();
        this.service = _service;
    }

    @httpGet('')
    async get(@queryParam('ativo') ativo: Boolean){

        //FILTER BY ATIVO
        if(ativo != undefined){
            return await this.service.getByAtivo(ativo)
            .then(negocio => this.ok({data : negocio}))
            .catch(error => console.error.bind(console,`Error ${error}`));
        }
        //GET ALL
        return await this.service.get()
            .then(negocio => this.ok({data : negocio}))
            .catch(error => console.error.bind(console,`Error ${error}`));
    }

    @httpPost('')
    async post(@requestBody() novoNegocio : any){
        
        return await this.service.create(novoNegocio)
        .then(negocio => this.created(`/api/v1/negocios/${negocio._id}`,{data : negocio}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    @httpGet('/:id')
    async getById(@requestParam('id') id : string){
       
        return await this.service.getById(id)
        .then(negocio => this.ok({data : negocio}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    @httpDelete('/:id')
    async deleteById(@requestParam('id') id : string){

        return await this.service.deleteById(id)
        .then(() => this.ok({message : "Deletado com sucesso"}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

    @httpPatch('/:id')
    async patchById(@requestParam('id') id : string, @requestBody() negocioAtualizado : any){
        
        console.log('negocioAtualizado', negocioAtualizado);

        return await this.service.patchById(id,negocioAtualizado)
        .then(negocio => this.ok({data : negocio}))
        .catch(error => console.error.bind(console,`Error ${error}`));
    }

}

export default NegociosController;