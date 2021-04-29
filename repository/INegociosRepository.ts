interface INegociosRepository {
  getAll() : Promise<any>;
  getByAtivo(ativo : Boolean) : Promise<any>;
  create(novoNegocio : any) : Promise<any>;
  getById(id : string) : Promise<any>;
  deleteById(id : string) : Promise<any>;
  updateById(id: String, negocioAtualizado : any) : Promise<any>;

}

export default INegociosRepository;