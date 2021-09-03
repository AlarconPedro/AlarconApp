export const Sobre = () => {
    return (
        <>  
            <div className="background background_h1 border border-secondary">
                <h1 className="rounded-pill col-md-6 text-center margin">Minhas experiências</h1>
            </div>
            <div className="container-fluid border border-secondary border-2 rounded column bordas">
                <h3>Sobre :</h3>
                <p>Me chamo Pedro Henrique Alarcon, este é meu site pessoal aonde criei com intuíto de mostrar minhas experiências no mercado de trabalho,
                e ao mesmo tempo mostrar meus gostos e preferências.</p>
                <p>Atualmente tenho interesse em ingressar na área de desenvolvimento, explorando novas tecnologias e tendências do mercado.
                </p>
            </div>
            <div className="background">
            {/* <Imagem titulo="Background" imagem="images/code2.jpg"></Imagem> */}
                <div className="container bordas">
                    <div class="row">
                        <h1 className="text-center">Experiências :</h1>
                        <div class="col-sm-4">
                            <div class="card border-dark border-3">
                                <div class="card-body">
                                    <h5 class="card-title">Suporte Técnico</h5>
                                    <p class="card-text">2 anos e meio de experiência trabalhando como suporte técnico.</p>
                                    <p>2015 - 2017</p>
                                    <a href="./Curriculo/index.jsx" class="btn btn-primary">Mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card border-dark border-3">
                                <div class="card-body">
                                    <h5 class="card-title">Estágio em T.I</h5>
                                    <p class="card-text">1 ano de eperiência no setor de T.I</p>
                                    <p>2017 - 2018</p>
                                    <a href="./Curriculo/index.jsx" class="btn btn-primary">Mais</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card border-dark border-3">
                                <div class="card-body">
                                    <h5 class="card-title">Trabalho no Setor de T.I</h5>
                                    <p class="card-text">Experiência profissional na área de T.I como auxiliar.</p>
                                    <p>2020 - Atualmente</p>
                                    <a href="./Curriculo/index.jsx" class="btn btn-primary">Mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row w-100">            
                <div className="container col col-md-3 border border-secondary rounded bordas border-2">
                    <h3>Estágios:</h3>
                    <p>Meu primeiro estágio foi na Câmara Municipal de Umuarama. E para mim foi uma experiência muito boa, 
                    seja para desenvolvimento pessoal em relação a contato com mais pessoas, ou até mesmo no fato de responsabildiades maiores por se tratar de um orgão público.
                    para mim foi um dos empregos mais importantes da minha vida.</p>
                    <p>Muitas coisas que aprendi lá eu levo para vida até hoje foi um estágio que me mostrou ver o mundo de uma outra forma e entender como muitas coisas funcionam.</p>
                    <p>Após esse estágio eu tive mais 3 estágios, que foi 3 meses de estagiário no Alfa Integral de Umuarama, após esse foi um estágio de 1 mês na Casa do Empreendedor,
                    e por último foram 3 meses como atendente de telemarketing para a vivo.</p>
                    <img src="images/code1.jpg" alt="Games" className="imagens"/>
                </div>
                <div className="container col col-md-3 border border-secondary rounded bordas border-2">
                    <h3>Experiências:</h3>
                    <p>Meu primeiro emprego foi como suporte técnico em uma empresa de Umuarama que trabalhava com streaming online, o nome dessa empresa é Audio In.</p>
                    <p>Nessa empresa foi a onde eu tive meu primeiro contato com programação de uma forma bem generalizada, foi aonde conheci o HTML e o CSS, e logo após
                    já comecei a ter contato com linguagens bem mais avançadas, mas nada muito aprofundado, por que também eu aprendi tudo sozinho.</p>
                    <p>Nessa empresa eu fiquei durante 2 anos e meio até receber a proposta de trabalhar na câmara como estagiário como tempo integral, 
                    tendo em vista que nesa empresa eu trabalhava somente meio período.</p>
                    <br />
                    <br />
                    <img src="images/php.jpg" alt="Games" className="imagens"/>
                </div>
                <div className="container col col-md-3 border border-secondary rounded bordas border-2">
                    <h3>CLT:</h3>
                    <p>Meu primeiro emprego com CLT é o que eu estou atualmente, trabalho na empresa Alimentos Zaeli LTDA.</p>
                    <p>Industria de alimentos localizada em Umuarama - PR, estou trabalhando nela desde Abril de 2020 até atualmente.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src="images/php_back.png" alt="Games" className="imagens"/>
                </div>
            </div>

        </> 
    )
}