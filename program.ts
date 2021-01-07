import StartUp from './startup';

let port = process.env.PORT || '8080'

StartUp.app.listen(port, function(){
    console.log(`Servidor executando na porta ${port}`);
})