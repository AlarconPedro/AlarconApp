export const Contato = () => {
    return(
        <>
            <div className="background background_h1 border border-secondary">
                <h1 className="rounded-pill col-sm-3 text-center margin">Contato</h1>
            </div>
            <div className="w-100"> 
                <div className="col col-md-6 contato">
                    <div className="container-fluid border border-secondary border-2 rounded column bordas">
                        <div class="perfil row col col-md-12">    
                           <img src="images/Perfil.jpg" alt="Perfil" className="border border-secondary border-2" />
                           <div className="perfil col col col-md-8,">
                               <h3>Dados :</h3>
                               <h5>Nome: Pedro Henrique Alarcon</h5>
                               <h5>Idade: 19 anos 6 meses e 27 dias</h5>
                               <h5>Sexo: Masculino</h5>
                               <h5>Estudo: Ensino Médio Completo | Superior Incompleto</h5>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container col col-md-12 border border-secondary rounded bordas border-2">
                <div className="input-group col col 12">
                    <div class="wd col col-md-6">
                        <label for="exampleFormControlInput1" class="form-label">Nome :</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite seu nome..."></input>
                    </div>
                    <div class="col col-md-5,">
                        <label for="exampleFormControlInput1" class="form-label">Email :</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@exemplo.com"></input>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Texto para envio :</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </>
    )
}