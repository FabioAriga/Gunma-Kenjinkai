const translations = {
    pt: {
        "navbar": `
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand">
            <img src="gunmachan.png" width="auto" height="50" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="../../index.html">Início<span class="sr-only">(página atual)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kenjinkai
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="../../Kenjinkai/Bolsa.html">Bolsa</a>
                        <a class="dropdown-item" href="../../Kenjinkai/Eventos.html">Eventos</a>
                        <a class="dropdown-item" href="../../Kenjinkai/index.html">Sobre nós...</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Visite Gunma
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../../Turismo/MapaGunma/index.html">Mapa de Gunma</a>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Áreas Turísticas
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/AreasTuristicas/KusatsuOnsen.html">Kusatsu Onsen</a>
                                <a class="dropdown-item" href="../../Turismo/AreasTuristicas/IkahoOnsen.html">Ikaho Onsen</a>
                                <a class="dropdown-item" href="../../Turismo/AreasTuristicas/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Paisagens Naturais
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/PaisagensNaturais/OzeNationalPark.html">Oze National Park</a>
                                <a class="dropdown-item" href="../../Turismo/PaisagensNaturais/MonteHaruna.html">Monte Haruna</a>
                                <a class="dropdown-item" href="../../Turismo/PaisagensNaturais/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Patrimônios Históricos
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/PatrimoniosHistoricos/TomiokaSilkMill.html">Tomioka Silk Mill</a>
                                <a class="dropdown-item" href="../../Turismo/PatrimoniosHistoricos/MuseudeHistoriaNaturaldeGunma.html">Museu de História Natural de Gunma</a>
                                <a class="dropdown-item" href="../../Turismo/PatrimoniosHistoricos/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Parques
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/Parques/GunmaSafariPark.html">Gunma Safari Park</a>
                                <a class="dropdown-item" href="../../Turismo/Parques/Esqui.html">Estações de Esqui</a>
                                <a class="dropdown-item" href="../../Turismo/Parques/index.html">Veja mais...</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sabores de Gunma
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pratos Salgados
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="MizusawaUdon.html">Mizusawa Udon</a>
                                <a class="dropdown-item" href="SauceKatsudon.html">Sauce Katsudon</a>
                                <a class="dropdown-item" href="index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pratos Doces
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../PratosDoces/Yakimanju.html">Yakimanju</a>
                                <a class="dropdown-item" href="../PratosDoces/GateauRusk.html">Gateau Rusk</a>
                                <a class="dropdown-item" href="../PratosDoces/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Produto Regional
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../ProdutoRegional/Konnyaku.html">Konnyaku</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <button onclick="changeLanguage('pt')" class="btnidioma">Português</button>
            <button onclick="changeLanguage('jp')" class="btnidioma">日本語</button>
            <a class="navbar-brand">
                <img src="gunmachan.png" width="auto" height="50" alt="">
            </a>
        </div>
    </nav>
        `,
        "footer": `
            <footer>
        <div class="footerconteudo1">
            <p class="footertext">Associação Cultural Gunma Kenjin do Brasil</p>
            <div class="footerlink">
                <a href="https://www.instagram.com/gunmakenjinkaidobrasil">
                    <img src="instagram.png" width="auto" height="30" alt="">
                </a>
                <a href="https://www.facebook.com/groups/398071183552232">
                    <img src="facebook.png" width="auto" height="30" alt="">
                </a>
            </div>
        </div>
        <div class="footerconteudo2">
            <p>E-mail: contato.gunma@gmail.com</p>
            <p class="footerredes" style="padding-right: 25px;">Redes sociais</p>
        </div>
        <div class="footerconteudo3">
            <p>Telefone: +55 (11) 33418085</p>
        </div>
    </footer>
        `,
        "index":`
            <div id="carouselExampleSlidesOnly" class="carousel slide carousel-responsivo" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="gunmachan-salgdos.png" width="auto" height="575">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>Pratos Salgados típicos de Gunma</h5>
                    <p>Explore os deliciosos pratos salgados da província de Gunma, cada um oferecendo uma experiência única de sabor e tradição.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="JoshuSukiyaki.html">
                <div class="card1">
                    <img src="Joshu Sukiyaki.jpg" width="auto" height="100" alt="">
                    <div>
                        <h5 class="card-title">Joshu Sukiyaki</h5>
                        <p class="card-text">O Joshu Sukiyaki é um prato tradicional de Gunma feito com a aclamada carne Joshu-gyu, cozida com vegetais e tofu em um caldo saboroso, sendo especialmente apreciado nos meses frios por seu sabor reconfortante.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Okkirikomi.html">
                <div class="card1">
                    <img src="Okkirikomi.jpg" width="auto" height="110" alt="">
                    <div>
                        <h5 class="card-title">Okkirikomi</h5>
                        <p class="card-text">O Okkirikomi é um ensopado tradicional de Gunma, feito com macarrão largo artesanal e vegetais cozidos em caldo rico, sendo especialmente apreciado nos meses frios por seu sabor simples e reconfortante.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="MizusawaUdon.html">
                <div class="card1">
                    <img src="Mizusawa Udon.jpg" width="auto" height="85" alt="">
                    <div>
                        <h5 class="card-title">Mizusawa Udon</h5>
                        <p class="card-text">O Mizusawa Udon é um udon tradicional de Gunma, famoso por sua massa firme e elástica preparada com água pura das montanhas, sendo apreciado tanto quente quanto frio ao longo do ano.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="HimokawaUdon.html">
                <div class="card1">
                    <img src="Himokawa Udon.jpg" width="auto" height="150" alt="">
                    <div>
                        <h5 class="card-title">Himokawa Udon</h5>
                        <p class="card-text">O Himokawa Udon é um udon tradicional de Kiryu, conhecido por suas tiras extremamente largas e finas, de textura suave e elástica, servido quente ou frio ao longo de todo o ano.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="TakasakiPasta.html">
                <div class="card1">
                    <img src="Takasaki Pasta.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">Takasaki Pasta</h5>
                        <p class="card-text">Takasaki é conhecida como a “Cidade da Pasta”, onde a tradição do cultivo de trigo e a influência italiana se unem para criar massas artesanais e festivais gastronômicos apreciados o ano inteiro.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="SauceKatsudon.html">
                <div class="card1">
                    <img src="Sauce Katsudon.jpg" width="auto" height="100" alt="">
                    <div>
                        <h5 class="card-title">Sauce Katsudon</h5>
                        <p class="card-text">O Sauce Katsudon é um prato típico de Gunma em que o tonkatsu crocante é servido sobre arroz e coberto com um molho agridoce especial, oferecendo uma refeição simples, saborosa e apreciada o ano inteiro.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Torimeshi.html">
                <div class="card1">
                    <img src="Torimeshi.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">Torimeshi</h5>
                        <p class="card-text">O Torimeshi é um prato tradicional de Gunma em que arroz é cozido com frango e temperos leves, resultando em uma refeição simples, aromática e muito apreciada o ano inteiro, especialmente em bentos.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Kamameshi.html">
                <div class="card1">
                    <img src="Kamameshi.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">Kamameshi</h5>
                        <p class="card-text">O Kamameshi é um prato em que o arroz é cozido e servido em pequenas panelas de ferro junto com ingredientes como frango, vegetais e cogumelos, resultando em uma refeição aromática e especial, muito apreciada em Gunma o ano todo.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="OtaYakisoba.html">
                <div class="card1">
                    <img src="Ota Yakisoba.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">Ota Yakisoba</h5>
                        <p class="card-text">O Ota Yakisoba é um yakisoba simples e saboroso, feito com macarrão firme, repolho e molho à base de shoyu, sendo um símbolo culinário da cidade de Ota e muito apreciado em festivais ao longo do ano.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="NumataDango-jiru.html">
                <div class="card1">
                    <img src="Numata Dango-jiru.jpg" width="auto" height="82" alt="">
                    <div>
                        <h5 class="card-title">Numata Dango-jiru</h5>
                        <p class="card-text">O Dango-jiru é uma sopa caseira de Numata, feita com bolinhos de massa de trigo e vegetais em caldo quente, ideal para dias frios e muito apreciada como comida tradicional da região.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Ginhikari.html">
                <div class="card1">
                    <img src="Ginhikari.jpg" width="auto" height="98" alt="">
                    <div>
                        <h5 class="card-title">Ginhikari</h5>
                        <p class="card-text">O Ginhikari é uma truta premium de Gunma, criada em águas cristalinas e apreciada por seu sabor delicado, sendo servida em pratos como sashimi e grelhados, especialmente popular na primavera e verão.</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <nav>
        <ul class="pagination justify-content-center" id="pagination"></ul>
    </nav>
        `,
        "JoshuSukiyaki":`
            <div class="conteudo2">
        <img src="Joshu Sukiyaki.jpg" width="auto" height="212" alt="">
        <div>
            <h2>Joshu Sukiyaki – O Sabor Sofisticado das Montanhas de Gunma</h2>
            <p>O Joshu Sukiyaki é um prato tradicional que reflete a riqueza agrícola e pecuária de Gunma. Feito com carne bovina Joshu-gyu, considerada uma das mais saborosas do Japão, este sukiyaki é preparado em uma panela rasa, onde fatias finas de carne são cozidas lentamente com vegetais frescos, tofu e macarrão shirataki, tudo envolto em um caldo à base de shoyu, açúcar e saquê.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>A carne Joshu-gyu é famosa por sua maciez e marmoreio perfeito, garantindo um sabor rico e uma textura que derrete na boca. Em Gunma, o sukiyaki é mais do que uma refeição: é uma experiência gastronômica que une tradição e qualidade, sendo servido em ryokans, restaurantes especializados e até em festivais culinários.</p>
        <p>Melhor época para comer: O Joshu Sukiyaki é ideal para os meses frios (outono e inverno), quando pratos quentes e reconfortantes são mais apreciados. É também muito popular em celebrações e encontros familiares.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Carne premium</h5>
            <p class="subconteudo">O Joshu-gyu é criado em Gunma com técnicas cuidadosas para garantir sabor e qualidade superiores.</p>
            <h5>Tradição regional</h5>
            <p class="subconteudo">Gunma é conhecida como uma das regiões que mais valorizam pratos à base de carne bovina no Japão.</p>
            <h5>Acompanhamentos típicos</h5>
            <p class="subconteudo">Além da carne, o prato inclui vegetais locais, como cebolinha japonesa, cogumelos e tofu.</p>
            <h5>Modo de servir</h5>
            <p class="subconteudo">É comum cozinhar os ingredientes à mesa, tornando a refeição uma experiência social.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p>400 g de carne bovina Joshu-gyu (ou outra carne marmorizada, cortada em fatias finas)</p>
                <p>1 bloco de tofu firme</p>
                <p>200 g de shirataki (macarrão de konnyaku)</p>
                <p>1 maço de cebolinha japonesa</p>
                <p>200 g de cogumelos shiitake</p>
                <p>1 cenoura em rodelas</p>
                <p>1/2 repolho ou acelga japonesa</p>
                <p>Óleo para untar</p>
                <p style="margin-left: 20px;">Caldo:</p>
                <p>100 ml de shoyu</p>
                <p>100 ml de saquê</p>
                <p>50 ml de mirin</p>
                <p>50 g de açúcar</p>
                <p>200 ml de água</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Preparar o caldo: Misture shoyu, saquê, mirin, açúcar e água. Reserve.</p>
                <p>2. Untar a panela: Aqueça uma panela rasa com um pouco de óleo.</p>
                <p>3. Selar a carne: Coloque algumas fatias de carne e deixe dourar levemente.</p>
                <p>4. Adicionar caldo e ingredientes: Acrescente parte do caldo e os vegetais, tofu e shirataki.</p>
                <p>5. Cozinhar: Vá adicionando mais caldo conforme necessário, cozinhando tudo até os sabores se integrarem.</p>
                <p>6. Servir: Tradicionalmente, cada pessoa pega os ingredientes diretamente da panela e mergulha em ovo cru batido (opcional).</p>
            </div>
        </div>
    </div>
        `,
        "Okkirikomi":`
            <div class="conteudo2">
        <img src="Okkirikomi.jpg" width="auto" height="210" alt="">
        <div>
            <h2>Okkirikomi – O Ensopado Rústico que Aquece Gunma</h2>
            <p>O Okkirikomi é um prato tradicional de Gunma que reflete a simplicidade e o sabor da culinária caseira japonesa. Trata-se de um ensopado nutritivo feito com macarrão largo de trigo, vegetais sazonais e, às vezes, frango ou carne de porco, tudo cozido em um caldo à base de shoyu ou missô. A massa é feita à mão, sem ovos, e cortada em tiras largas, conferindo ao prato uma textura única e artesanal.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Esse prato nasceu como uma refeição camponesa, ideal para os invernos rigorosos da região. Hoje, é considerado um símbolo da hospitalidade de Gunma, servido em restaurantes locais e ryokans, especialmente em áreas rurais.</p>
        <p>Melhor época para comer: O Okkirikomi é perfeito para os meses frios (outono e inverno), quando pratos quentes e reconfortantes são mais apreciados. Também é muito popular em festivais gastronômicos regionais.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Origem humilde</h5>
            <p class="subconteudo">Criado como prato econômico, aproveitando trigo local e vegetais da estação.</p>
            <h5>Sem ovos</h5>
            <p class="subconteudo">A massa é feita apenas com farinha, água e sal, mantendo a tradição simples.</p>
            <h5>Variedade de caldos</h5>
            <p class="subconteudo">Pode ser preparado com base de shoyu ou missô, dependendo da região ou preferência.</p>
            <h5>Prato familiar</h5>
            <p class="subconteudo">É comum ser servido em grandes panelas para compartilhar à mesa.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p style="margin-left: 20px;">Massa:</p>
                <p>300 g de farinha de trigo</p>
                <p>150 ml de água</p>
                <p>1 pitada de sal</p>
                <p  style="margin-left: 20px;">Ensopado:</p>
                <p>1 litro de caldo dashi</p>
                <p>3 c. sopa de shoyu (ou missô, se preferir)</p>
                <p>1 cenoura em rodelas</p>
                <p>1 batata em cubos</p>
                <p>1/4 de repolho ou acelga japonesa</p>
                <p>100 g de frango ou carne de porco (opcional)</p>
                <p>Cogumelos (shiitake ou shimeji)</p>
                <p>Sal a gosto</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Preparar a massa: Misture farinha, água e sal até formar uma massa firme. Sove por 5 minutos, cubra e deixe descansar por 30 minutos.</p>
                <p>2. Abrir e cortar: Abra a massa com rolo até ficar com 3–4 mm de espessura. Corte em tiras largas (≈2 cm).</p>
                <p>3. Preparar o caldo: Em uma panela grande, aqueça o dashi e tempere com shoyu (ou missô).</p>
                <p>4. Adicionar ingredientes: Coloque os vegetais e a carne. Cozinhe até ficarem macios.</p>
                <p>5. Cozinhar a massa: Adicione as tiras de massa diretamente no caldo e cozinhe por 8–10 minutos, mexendo para não grudar.</p>
                <p>6. Servir: Sirva bem quente, em tigelas grandes, para compartilhar.</p>
            </div>
        </div>
    </div>
        `,
        "MizusawaUdon":`
            <div class="conteudo2">
        <img src="Mizusawa Udon.jpg" width="auto" height="185" alt="">
        <div>
            <h2>Mizusawa Udon – A Tradição Centenária das Montanhas de Gunma</h2>
            <p>O Mizusawa Udon é um dos três udons mais famosos do Japão, ao lado de Sanuki (Kagawa) e Inaniwa (Akita). Originário da região de Ikaho Onsen, em Gunma, este udon é conhecido por sua textura firme e elástica, resultado de um processo artesanal que utiliza água pura das montanhas Mizusawa e farinha de trigo local.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Tradicionalmente servido frio com molho tsuyu (à base de shoyu e dashi) ou quente em caldo leve, o Mizusawa Udon é uma experiência gastronômica simples e refinada. Muitos restaurantes especializados na área mantêm receitas transmitidas por gerações, oferecendo um prato que é ao mesmo tempo saudável e cheio de história.</p>
        <p>Melhor época para comer: O Mizusawa Udon pode ser apreciado o ano todo, mas é especialmente popular no verão, quando é servido frio para refrescar os dias quentes, e no inverno, em versões quentes e reconfortantes.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Mais de 400 anos de história</h5>
            <p class="subconteudo">O Mizusawa Udon surgiu como oferenda no templo Mizusawa, tornando-se um prato tradicional da região.</p>
            <h5>Água das montanhas</h5>
            <p class="subconteudo">A pureza da água local é considerada essencial para a qualidade da massa.</p>
            <h5>Reconhecimento nacional</h5>
            <p class="subconteudo">É listado entre os “Três Grandes Udons do Japão”.</p>
            <h5>Experiência turística</h5>
            <p class="subconteudo">Muitos visitantes de Ikaho Onsen incluem uma parada nos restaurantes especializados em Mizusawa Udon.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p style="margin-left: 20px;">Massa:</p>
                <p>300 g de farinha de trigo</p>
                <p>150 ml de água gelada</p>
                <p>1 pitada de sal</p>
                <p  style="margin-left: 20px;">Molho tsuyu (frio):</p>
                <p>200 ml de dashi</p>
                <p>50 ml de shoyu</p>
                <p>50 ml de mirin</p>
                <p>Wasabi e cebolinha picada para acompanhar</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Preparar a massa: Misture farinha, sal e água gelada aos poucos até formar uma massa firme.</p>
                <p>2. Sovar: Sove por 10 minutos, cubra e deixe descansar por 30 minutos.</p>
                <p>3. Abrir e cortar: Abra a massa com rolo até 3 mm de espessura e corte tiras de 4 mm de largura.</p>
                <p>4. Cozinhar: Ferva água abundante e cozinhe o udon por 10–12 minutos. Escorra e lave em água fria para parar o cozimento.</p>
                <p>5. Molho: Misture dashi, shoyu e mirin. Sirva o udon frio com o molho à parte, wasabi e cebolinha.</p>
            </div>
        </div>
    </div>
        `,
        "HimokawaUdon":`
            <div class="conteudo2">
        <img src="Himokawa Udon.jpg" width="auto" height="250" alt="">
        <div>
            <h2>Himokawa Udon – Fitas de Trigo Ícone de Kiryu (Gunma)</h2>
            <p>O Himokawa Udon é um udon extremamente largo e muito fino, tradicional da cidade de Kiryu, em Gunma. Em vez dos fios espessos mais comuns, o himokawa lembra tiras de tecido: pode alcançar 1,5 cm a mais de 10 cm de largura e, ainda assim, ter cerca de 1 mm de espessura, o que lhe confere uma textura suave, escorregadia e elástica — servido quente em caldo ou frio com molho para mergulhar.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>A tradição local associa o himokawa à cultura do trigo de Gunma e à evolução de pratos camponeses; historicamente, as tiras largas eram usadas no okkirikomi, um ensopado regional de massa fresca e legumes.</p>
        <p>Melhor época para comer: O ano todo. No verão, as tiras geladas servidas em zaru (com molho à base de shoyu/dashi) são refrescantes; no inverno, as versões em caldo leve são reconfortantes. Em Kiryu, várias casas especializadas servem o prato em diferentes estilos ao longo das estações.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Largura “fora da curva”</h5>
            <p class="subconteudo">É comum encontrar tiras com 10–12 cm de largura em restaurantes famosos de Kiryu, um visual que rende muitas fotos e vídeos.</p>
            <h5>Parente de outros “planos”</h5>
            <p class="subconteudo">Há quem relacione a origem do nome ao antigo Imokawa udon, citado como ancestral do kishimen; o himokawa teria seguido seu caminho próprio em Gunma.</p>
            <h5>Da panela ao feed</h5>
            <p class="subconteudo">O formato “fita” impulsionou a popularidade do prato nas redes sociais japonesas, levando foodies a rodar Kiryu em busca das versões mais largas.</p>
            <h5>Técnica e textura</h5>
            <p class="subconteudo">Apesar de largo, o macarrão é fino, cozinha rápido e costuma ser resfriado em água com gelo para ganhar firmeza e brilho antes de servir em estilo frio.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p style="margin-left: 20px;">Massa:</p>
                <p>400 g de farinha de trigo (ideal: mistura de média força; pode combinar 50% forte + 50% fraca)</p>
                <p>180–200 ml de água fria</p>
                <p>8 g de sal (dissolvido na água)</p>
                <p>Farinha extra para polvilhar</p>
                <p  style="margin-left: 20px;">Molho tsuyu (frio):</p>
                <p>300 ml de dashi</p>
                <p>75 ml de shoyu</p>
                <p>75 ml de mirin</p>
                <p>Cebolinha, gengibre ralado e/ou gergelim para acompanhar</p>
                <p  style="margin-left: 20px;">Caldo leve (quente):</p>
                <p>1,2 L de dashi</p>
                <p>60–80 ml de shoyu</p>
                <p>30–40 ml de mirin</p>
                <p>Coberturas a gosto (tempurá, cebolinha, kamaboko etc.)</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Salgar a água: Dissolva o sal na água fria (salmuera ajuda a dar c0si e elasticidade).</p>
                <p>2. Formar a massa: Acrescente a salmoura à farinha aos poucos, mexendo até obter grumos úmidos; una em bola e sove 10–12 min até ficar lisa. Cubra e descanse 1 h em temperatura ambiente.</p>
                <p>3. Abrir fino: Polvilhe a bancada e abra com rolo até ~1 mm. Dobre a folha levemente (com farinha entre as dobras) e corte tiras largas — tradicionalmente 1,5 cm a 10 cm+ de largura; em casa, 3–5 cm já funcionam bem. Desdobre com cuidado para não rasgar.</p>
                <p>4. Cozimento: Em muita água fervente, cozinhe por 3–8 min (tempo varia com largura/espessura). Mexa gentilmente para evitar que grudem. Escorra. Para o estilo frio, lave e choque em água com gelo para firmar.</p>
                <p>5. Serviço – frio (zaru/tsuke): Sirva as tiras dobradas em leque sobre esteira de bambu com o tsuyu em tigela à parte (misture dashi, shoyu e mirin; mantenha gelado). Acompanhe com cebolinha e gengibre.</p>
                <p>6. Serviço – quente: Aqueça o caldo leve, ajuste o sal e mergulhe as tiras rapidamente antes de servir em tigelas fundas, com coberturas a gosto.</p>
            </div>
        </div>
    </div>
        `,
        "TakasakiPasta":`
            <div class="conteudo2">
        <img src="Takasaki Pasta.jpg" width="auto" height="212" alt="">
        <div>
            <h2>Takasaki Pasta – A Capital Japonesa da Massa</h2>
            <p>A cidade de Takasaki, em Gunma, é conhecida como a “Cidade da Pasta” graças à sua forte tradição no cultivo de trigo e à influência da culinária italiana. Essa fama começou quando Takasaki passou a sediar eventos gastronômicos dedicados à pasta, atraindo chefs renomados e criando uma cultura local que valoriza pratos de massa com ingredientes frescos da região.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Hoje, Takasaki abriga diversos restaurantes especializados em massas artesanais, oferecendo pratos como spaghetti com molho de carne, costeleta de porco à milanesa com pasta e receitas criativas que misturam sabores japoneses e italianos. Essa fusão tornou a cidade um destino imperdível para amantes da gastronomia.</p>
        <p>Melhor época para comer: O ano todo! Porém, durante os festivais de pasta em Takasaki, realizados principalmente na primavera e no outono, você encontra menus especiais e competições culinárias.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Festival da Pasta</h5>
            <p class="subconteudo">Takasaki realiza eventos anuais que celebram a massa, com chefs locais e internacionais.</p>
            <h5>Trigo de Gunma</h5>
            <p class="subconteudo">A base da tradição vem do cultivo abundante de trigo na região, usado para udon e massas italianas.</p>
            <h5>Fusão cultural</h5>
            <p class="subconteudo">Muitos pratos combinam técnicas italianas com ingredientes japoneses, criando sabores únicos.</p>
            <h5>Destino gastronômico</h5>
            <p class="subconteudo">A cidade é considerada referência nacional quando se fala em pasta artesanal.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p>400 g de spaghetti (de preferência artesanal)</p>
                <p>300 g de carne moída (bovina ou suína)</p>
                <p>1 cebola picada</p>
                <p>2 dentes de alho picados</p>
                <p>400 g de tomate pelado</p>
                <p>2 c. sopa de azeite de oliva</p>
                <p>Sal e pimenta a gosto</p>
                <p>Queijo parmesão ralado para finalizar</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Refogar: Em uma panela, aqueça o azeite e refogue cebola e alho até dourar.</p>
                <p>2. Adicionar carne: Coloque a carne moída e cozinhe até ficar bem soltinha.</p>
                <p>3. Molho: Acrescente os tomates pelados, tempere com sal e pimenta e cozinhe por 15–20 minutos até encorpar.</p>
                <p>4. Cozinhar a massa: Em água fervente com sal, cozinhe o spaghetti até ficar al dente.</p>
                <p>5. Finalizar: Misture a massa ao molho, sirva com parmesão ralado e um fio de azeite.</p>
            </div>
        </div>
    </div>
        `,
        "SauceKatsudon":`
            <div class="conteudo2">
        <img src="Sauce Katsudon.jpg" width="auto" height="200" alt="">
        <div>
            <h2>Sauce Katsudon – O Donburi com Sabor Único de Gunma</h2>
            <p>O Sauce Katsudon é uma variação especial do tradicional katsudon japonês, muito popular em Gunma, especialmente nas cidades de Maebashi e Kiryu. Diferente do katsudon clássico, que é servido com ovo e caldo, o sauce katsudon traz uma proposta mais ousada: costeleta de porco empanada e frita (tonkatsu) colocada sobre arroz branco e coberta com um molho agridoce à base de shoyu, ketchup e Worcestershire. O resultado é um prato simples, mas cheio de sabor, que conquistou os moradores e visitantes da região.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Esse prato é considerado um símbolo da culinária ocidentalizada no Japão, refletindo a influência europeia adaptada ao paladar japonês. Em Gunma, ele é servido em restaurantes tradicionais e também em lanchonetes locais, sendo uma refeição rápida e reconfortante.</p>
        <p>Melhor época para comer: O Sauce Katsudon é apreciado o ano todo, mas é especialmente popular em festivais gastronômicos e como refeição rápida durante passeios pelas cidades de Gunma.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Origem regional</h5>
            <p class="subconteudo">Gunma é considerada um dos berços do sauce katsudon, com receitas que variam de restaurante para restaurante.</p>
            <h5>Molho especial</h5>
            <p class="subconteudo">Cada estabelecimento tem sua própria versão do molho, que pode ser mais doce ou mais ácido.</p>
            <h5>Influência ocidental</h5>
            <p class="subconteudo">O prato surgiu como adaptação do tonkatsu, incorporando molhos inspirados na culinária europeia.</p>
            <h5>Prato popular</h5>
            <p class="subconteudo">É comum encontrar sauce katsudon em menus de restaurantes familiares e cafeterias locais.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 2 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p>2 costeletas de porco (150 g cada)</p>
                <p>Sal e pimenta a gosto</p>
                <p>Farinha de trigo para empanar</p>
                <p>1 ovo batido</p>
                <p>Farinha panko (para empanar)</p>
                <p>Óleo para fritar</p>
                <p>2 porções de arroz japonês cozido</p>
                <p style="margin-left: 20px;"> Molho:</p>
                <p>3 c. sopa de molho Worcestershire</p>
                <p>2 c. sopa de ketchup</p>
                <p>1 c. sopa de shoyu</p>
                <p>1 c. sopa de açúcar</p>
                <p>1 c. chá de mostarda (opcional)</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Preparar a carne: Tempere as costeletas com sal e pimenta.</p>
                <p>2. Empanar: Passe na farinha, depois no ovo batido e, por fim, na farinha panko.</p>
                <p>3. Fritar: Aqueça óleo a 170 °C e frite as costeletas até dourarem (cerca de 5–6 minutos). Escorra em papel absorvente.</p>
                <p>4. Molho: Misture todos os ingredientes do molho em uma panela pequena e aqueça até engrossar levemente.</p>
                <p>5. Montar: Coloque o arroz em tigelas, disponha a costeleta cortada em tiras por cima e regue com o molho.</p>
                <p>6. Servir: Acompanhe com repolho fatiado ou salada simples.</p>
            </div>
        </div>
    </div>
        `,
        "Torimeshi":`
            <div class="conteudo2">
        <img src="Torimeshi.jpg" width="auto" height="212" alt="">
        <div>
            <h2>Torimeshi – O Arroz com Frango que É Puro Conforto</h2>
            <p>O Torimeshi é um prato simples e reconfortante típico de Gunma, feito com arroz cozido junto com frango, shoyu e saquê, resultando em um sabor delicado e aromático. Tradicionalmente, o arroz é preparado com chá (como o bancha) ou caldo leve, o que dá um toque especial à receita. É uma refeição caseira muito apreciada, mas também encontrada em bento boxes e restaurantes locais.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Esse prato reflete a tradição agrícola de Gunma, onde o frango e o arroz sempre foram ingredientes acessíveis e valorizados. É perfeito para quem busca uma comida leve, nutritiva e cheia de sabor.</p>
        <p>Melhor época para comer: O Torimeshi é consumido o ano todo, mas é especialmente popular em piqueniques, festivais e viagens, já que é comum ser servido em marmitas (bento).</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Ligação com o chá</h5>
            <p class="subconteudo">Algumas versões usam chá verde ou bancha para cozinhar o arroz, criando um aroma único.</p>
            <h5>Prato de viagem</h5>
            <p class="subconteudo">É tradicionalmente vendido em estações de trem como ekiben (bento típico de estação).</p>
            <h5>Simples e nutritivo</h5>
            <p class="subconteudo">Combina carboidratos, proteínas e um toque de temperos japoneses.</p>
            <h5>Receita familiar</h5>
            <p class="subconteudo">Cada casa tem sua própria variação, com diferentes cortes de frango e vegetais.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p>2 xícaras de arroz japonês</p>
                <p>300 g de frango (coxas ou peito, cortado em cubos)</p>
                <p>2 c. sopa de shoyu</p>
                <p>2 c. sopa de saquê</p>
                <p>1 c. sopa de mirin</p>
                <p>1 c. chá de sal</p>
                <p>500 ml de chá bancha (ou água, se preferir)</p>
                <p>1 cenoura em tiras (opcional)</p>
                <p>1 pedaço pequeno de gengibre ralado</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Lavar o arroz: Lave bem o arroz até a água ficar clara.</p>
                <p>2. Preparar o líquido: Misture chá (ou água), shoyu, saquê, mirin e sal.</p>
                <p>3. Montar na panela: Coloque o arroz, o frango, a cenoura e o gengibre na panela elétrica ou donabe.</p>
                <p>4. Cozinhar: Ligue a panela e deixe cozinhar até o arroz absorver todo o líquido.</p>
                <p>5. Servir: Misture delicadamente e sirva quente, acompanhado de picles japoneses.</p>
            </div>
        </div>
    </div>
        `,
        "Kamameshi":`
            <div class="conteudo2">
        <img src="Kamameshi.jpg" width="auto" height="212" alt="">
        <div>
            <h2>Kamameshi – O Arroz Artesanal Servido na Panela de Ferro</h2>
            <p>O Kamameshi é um prato tradicional japonês que ganhou destaque em Gunma por sua apresentação única e sabor marcante. O nome significa literalmente “arroz na panela de ferro”, pois o prato é preparado e servido em pequenas panelas individuais chamadas kama. O arroz é cozido junto com ingredientes como frango, vegetais, cogumelos e frutos do mar, absorvendo todos os aromas e sabores durante o cozimento.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Em Gunma, o kamameshi é uma refeição típica de ryokans e restaurantes tradicionais, sendo considerado um prato especial para ocasiões e viagens. Além do sabor, a experiência de comer diretamente da panela quente torna o kamameshi memorável.</p>
        <p>Melhor época para comer: O Kamameshi é apreciado o ano todo, mas é especialmente popular no outono e inverno, quando pratos quentes e reconfortantes são mais procurados.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Origem do nome</h5>
            <p class="subconteudo">“Kama” é a panela de ferro usada para cozinhar, e “meshi” significa arroz.</p>
            <h5>Apresentação única</h5>
            <p class="subconteudo">Cada porção é servida na própria panela, mantendo o calor e o aroma.</p>
            <h5>Variedade de ingredientes</h5>
            <p class="subconteudo">Pode incluir frango, cogumelos, frutos do mar e vegetais sazonais.</p>
            <h5>Prato de viagem</h5>
            <p class="subconteudo">É comum encontrar kamameshi em ekiben (marmitas vendidas em estações de trem).</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p>2 xícaras de arroz japonês</p>
                <p>400 ml de dashi</p>
                <p>2 c. sopa de shoyu</p>
                <p>2 c. sopa de saquê</p>
                <p>1 c. sopa de mirin</p>
                <p>200 g de frango em cubos</p>
                <p>100 g de cogumelos shiitake</p>
                <p>1 cenoura em tiras</p>
                <p>1/2 xícara de edamame (opcional)</p>
                <p>Sal a gosto</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Lavar o arroz: Lave bem o arroz até a água ficar clara.</p>
                <p>2. Preparar o caldo: Misture dashi, shoyu, saquê e mirin.</p>
                <p>3. Montar na panela: Coloque o arroz, o caldo e os ingredientes na panela de ferro (ou panela comum).</p>
                <p>4. Cozinhar: Tampe e cozinhe em fogo baixo por cerca de 15–20 minutos, até o líquido ser absorvido.</p>
                <p>5. Descansar: Desligue o fogo e deixe a panela tampada por 10 minutos para finalizar o cozimento.</p>
                <p>6. Servir: Misture delicadamente e sirva diretamente na panela para manter a tradição.</p>
            </div>
        </div>
    </div>
        `,
        "OtaYakisoba":`
            <div class="conteudo2">
        <img src="Ota Yakisoba.jpg" width="auto" height="212" alt="">
        <div>
            <h2>Ota Yakisoba – O Sabor Simples que Virou Tradição</h2>
            <p>O Ota Yakisoba é um prato típico da cidade de Ota, em Gunma, conhecido por sua simplicidade e sabor caseiro. Diferente das versões mais elaboradas, o yakisoba de Ota é preparado com macarrão firme, repolho e molho à base de shoyu, sem excesso de ingredientes. Essa simplicidade é justamente o que conquistou os moradores e visitantes, tornando-se um ícone da culinária local.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>O prato é tão popular que Ota realiza festivais dedicados ao yakisoba, reunindo barracas que oferecem diferentes variações, mas sempre mantendo a essência: sabor equilibrado e preparo rápido.</p>
        <p>Melhor época para comer: O ano todo! Mas a experiência é ainda mais especial durante os festivais gastronômicos de Ota, geralmente realizados na primavera e no outono.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Origem popular</h5>
            <p class="subconteudo">Criado como comida rápida e acessível para trabalhadores, tornou-se um prato tradicional.</p>
            <h5>Festival do Yakisoba</h5>
            <p class="subconteudo">Ota organiza eventos anuais com dezenas de barracas oferecendo versões criativas.</p>
            <h5>Simples e saboroso</h5>
            <p class="subconteudo">A receita tradicional leva apenas macarrão, repolho e molho, sem carnes ou frutos do mar.</p>
            <h5>Identidade local</h5>
            <p class="subconteudo">É considerado um “sabor nostálgico” para quem cresceu na região.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 2 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p>2 porções de macarrão para yakisoba</p>
                <p>1/4 de repolho cortado em tiras</p>
                <p>1/2 cebola fatiada</p>
                <p>2 c. sopa de óleo vegetal</p>
                <p>Sal e pimenta a gosto</p>
                <p style="margin-left: 20px;">Molho:</p>
                <p>3 c. sopa de molho yakisoba (ou misture shoyu + Worcestershire + açúcar)</p>
                <p>1 c. sopa de shoyu</p>
                <p>1 c. chá de açúcar</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Preparar o macarrão: Cozinhe rapidamente ou aqueça no vapor conforme instruções da embalagem.</p>
                <p>2. Refogar vegetais: Em uma frigideira grande, aqueça óleo e refogue cebola e repolho até ficarem macios.</p>
                <p>3. Adicionar macarrão: Junte o macarrão e misture bem.</p>
                <p>4. Molho: Acrescente os ingredientes do molho e mexa até tudo ficar bem incorporado.</p>
                <p>5. Servir: Finalize com aonori (alga em pó) e gengibre em conserva, se quiser manter o toque japonês.</p>
            </div>
        </div>
    </div>
        `,
        "NumataDango-jiru":`
            <div class="conteudo2">
        <img src="Numata Dango-jiru.jpg" width="auto" height="182" alt="">
        <div>
            <h2>Numata Dango-jiru – A Sopa Rústica das Montanhas de Gunma</h2>
            <p>O Dango-jiru é uma sopa tradicional da cidade de Numata, em Gunma, feita com bolinhos de massa de trigo (dango) cozidos em um caldo saboroso junto com vegetais da estação e, às vezes, carne ou frango. É um prato simples, nutritivo e perfeito para os dias frios, refletindo a cultura agrícola da região e a tradição de aproveitar ingredientes locais.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Os bolinhos são preparados com farinha, água e sal, formando pequenas porções que ficam macias e levemente elásticas após o cozimento. Essa sopa é considerada um prato caseiro, mas também é servida em restaurantes típicos e festivais gastronômicos.</p>
        <p>Melhor época para comer: Ideal para outono e inverno, quando pratos quentes e reconfortantes são mais apreciados. É muito popular em eventos locais e como refeição familiar.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Origem camponesa</h5>
            <p class="subconteudo">Criado como prato econômico para aproveitar trigo e vegetais disponíveis.</p>
            <h5>Sem ovos</h5>
            <p class="subconteudo">A massa dos bolinhos é simples, mantendo a tradição rústica.</p>
            <h5>Variedade de caldos</h5>
            <p class="subconteudo">Pode ser feito com base de shoyu ou missô, dependendo da preferência.</p>
            <h5>Prato comunitário</h5>
            <p class="subconteudo">É comum ser servido em grandes panelas para compartilhar em reuniões familiares.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 4 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p style="margin-left: 20px;">Bolinhos (dango):</p>
                <p>200 g de farinha de trigo</p>
                <p>100 ml de água</p>
                <p>1 pitada de sal</p>
                <p style="margin-left: 20px;">Sopa:</p>
                <p>1 litro de caldo dashi</p>
                <p>3 c. sopa de shoyu (ou missô, se preferir)</p>
                <p>1 cenoura em rodelas</p>
                <p>1 batata em cubos</p>
                <p>1/4 de repolho ou acelga japonesa</p>
                <p>100 g de frango ou carne de porco (opcional)</p>
                <p>Cogumelos (shiitake ou shimeji)</p>
                <p>Sal a gosto</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Preparar os bolinhos: Misture farinha, água e sal até formar uma massa firme. Modele pequenas bolinhas (≈2 cm).</p>
                <p>2. Preparar o caldo: Em uma panela grande, aqueça o dashi e tempere com shoyu (ou missô).</p>
                <p>3. Adicionar ingredientes: Coloque os vegetais e a carne. Cozinhe até ficarem macios.</p>
                <p>4. Cozinhar os bolinhos: Adicione os dango diretamente na sopa e cozinhe por 8–10 minutos, mexendo para não grudar.</p>
                <p>5. Servir: Sirva bem quente, em tigelas grandes, para compartilhar.</p>
            </div>
        </div>
    </div>
        `,
        "Ginhikari":`
            <div class="conteudo2">
        <img src="Ginhikari.jpg" width="auto" height="198" alt="">
        <div>
            <h2>Ginhikari – A Truta Premium das Águas Puras de Gunma</h2>
            <p>O Ginhikari é uma variedade especial de truta arco-íris criada nas águas cristalinas das montanhas de Gunma. Conhecida por sua carne firme, sabor delicado e coloração brilhante, essa truta é considerada um produto premium da região, sendo servida em pratos sofisticados como sashimi, grelhada ou frita.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>A criação do Ginhikari segue padrões rigorosos para garantir qualidade e frescor, tornando-o um ingrediente valorizado em restaurantes tradicionais e ryokans. É uma experiência gastronômica que conecta o visitante à pureza das águas e à tradição pesqueira de Gunma.</p>
        <p>Melhor época para comer: O Ginhikari pode ser apreciado o ano todo, mas é especialmente popular na primavera e verão, quando os rios estão mais ativos e os pratos frios, como sashimi, são muito procurados.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Nome simbólico</h5>
            <p class="subconteudo">“Ginhikari” significa “brilho prateado”, referência à aparência da truta.</p>
            <h5>Criação controlada</h5>
            <p class="subconteudo">Produzida em águas puras das montanhas, garantindo sabor e textura superiores.</p>
            <h5>Produto premium</h5>
            <p class="subconteudo">É considerado um dos ingredientes mais nobres da culinária regional de Gunma.</p>
            <h5>Versatilidade</h5>
            <p class="subconteudo">Pode ser servido cru, grelhado, empanado ou até em pratos modernos como carpaccio.</p>
        </div>
        <h4 style="margin-top: 20px">Receita (Serve 2 pessoas)</h4>
        <div class="conteudo5">
            <div>
                <h5>Ingredientes</h5>
                <p>2 filés de truta Ginhikari (ou truta fresca)</p>
                <p>Sal grosso a gosto</p>
                <p>Fatias de limão para acompanhar</p>
            </div>
            <div>
                <h5>Modo de preparo</h5>
                <p>1. Preparar o peixe: Lave os filés e seque com papel toalha.</p>
                <p>2. Temperar: Polvilhe sal grosso sobre os filés e deixe descansar por 10 minutos.</p>
                <p>3. Grelhar: Aqueça uma grelha ou frigideira antiaderente e grelhe os filés por 3–4 minutos de cada lado, até dourar.</p>
                <p>4. Servir: Acompanhe com fatias de limão e, se quiser, um pouco de molho ponzu.</p>
            </div>
        </div>
    </div>
        `
    },
    jp: {
        "navbar": `
        <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand">
            <img src="gunmachan.png" width="auto" height="50" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alternar navegação">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="../../index.html">ホーム<span class="sr-only">(現在のページ)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        県人会
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="../../Kenjinkai/Bolsa.html">奨学金</a>
                        <a class="dropdown-item" href="../../Kenjinkai/Eventos.html">イベント</a>
                        <a class="dropdown-item" href="../../Kenjinkai/index.html">私たちについて...</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        群馬を訪れる
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../../Turismo/MapaGunma/index.html">群馬県マップ</a>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                観光エリア
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/AreasTuristicas/KusatsuOnsen.html">草津温泉</a>
                                <a class="dropdown-item" href="../../Turismo/AreasTuristicas/IkahoOnsen.html">伊香保温泉</a>
                                <a class="dropdown-item" href="../../Turismo/AreasTuristicas/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                自然景観
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/PaisagensNaturais/OzeNationalPark.html">尾瀬国立公園</a>
                                <a class="dropdown-item" href="../../Turismo/PaisagensNaturais/MonteHaruna.html">榛名山</a>
                                <a class="dropdown-item" href="../../Turismo/PaisagensNaturais/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                歴史遺産
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/PatrimoniosHistoricos/TomiokaSilkMill.html">富岡製糸場</a>
                                <a class="dropdown-item" href="../../Turismo/PatrimoniosHistoricos/MuseudeHistoriaNaturaldeGunma.html">群馬県立自然史博物館</a>
                                <a class="dropdown-item" href="../../Turismo/PatrimoniosHistoricos/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                公園
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../../Turismo/Parques/GunmaSafariPark.html">群馬サファリパーク</a>
                                <a class="dropdown-item" href="../../Turismo/Parques/Esqui.html">スキー場</a>
                                <a class="dropdown-item" href="../../Turismo/Parques/index.html">もっと見る...</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        群馬の味
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                塩味料理
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="MizusawaUdon.html">水沢うどん</a>
                                <a class="dropdown-item" href="SauceKatsudon.html">ソースカツ丼</a>
                                <a class="dropdown-item" href="index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                甘味料理
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../PratosDoces/Yakimanju.html">焼きまんじゅう</a>
                                <a class="dropdown-item" href="../PratosDoces/GateauRusk.html">ガトーラスク</a>
                                <a class="dropdown-item" href="../PratosDoces/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                特産品
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../ProdutoRegional/Konnyaku.html">こんにゃく</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <button onclick="changeLanguage('pt')" class="btnidioma">Português</button>
            <button onclick="changeLanguage('jp')" class="btnidioma">日本語</button>
            <a class="navbar-brand">
                <img src="gunmachan.png" width="auto" height="50" alt="">
            </a>
        </div>
    </nav>
        `,
        "footer": `
            <footer>
        <div class="footerconteudo1">
            <p class="footertext">ブラジル群馬県人会</p>
            <div class="footerlink">
                <a href="https://www.instagram.com/gunmakenjinkaidobrasil">
                    <img src="instagram.png" width="auto" height="30" alt="">
                </a>
                <a href="https://www.facebook.com/groups/398071183552232">
                    <img src="facebook.png" width="auto" height="30" alt="">
                </a>
            </div>
        </div>
        <div class="footerconteudo2">
            <p>Eメール：contato.gunma@gmail.com</p>
            <p class="footerredes">ソーシャルメディア</p>
        </div>
        <div class="footerconteudo3">
            <p>電話番号：+55 (11) 33418085</p>
        </div>
    </footer>
        `,
        "index":`
            <div id="carouselExampleSlidesOnly" class="carousel slide carousel-responsivo" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="gunmachan-salgdos.png" width="auto" height="575">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>群馬県の代表的な塩味料理</h5>
                    <p>群馬県の美味しい塩味料理を探求しましょう。それぞれが独自の味わいと伝統を体験させてくれます。</p>
                </div>
            </div>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="JoshuSukiyaki.html">
                <div class="card1">
                    <img src="Joshu Sukiyaki.jpg" width="auto" height="100" alt="">
                    <div>
                        <h5 class="card-title">上州すき焼き</h5>
                        <p class="card-text">上州すき焼きは、群馬県の伝統料理で、評判の高い上州牛を野菜や豆腐とともに風味豊かな出汁で煮込んだものです。寒い季節に特に好まれる、心温まる味わいが特徴です。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Okkirikomi.html">
                <div class="card1">
                    <img src="Okkirikomi.jpg" width="auto" height="110" alt="">
                    <div>
                        <h5 class="card-title">おきりこみ</h5>
                        <p class="card-text">おきりこみは、群馬県の伝統的な鍋料理で、手打ちの幅広麺と野菜を濃厚な出汁で煮込んだもので、そのシンプルで心温まる味わいが特に寒い季節に好まれています。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="MizusawaUdon.html">
                <div class="card1">
                    <img src="Mizusawa Udon.jpg" width="auto" height="85" alt="">
                    <div>
                        <h5 class="card-title">水沢うどん</h5>
                        <p class="card-text">水沢うどんは、群馬県の伝統的なうどんであり、山からの清らかな水で作り出された、コシのある弾力性のある麺が特徴で、一年を通して温かいもの、冷たいものの両方で楽しまれています。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="HimokawaUdon.html">
                <div class="card1">
                    <img src="Himokawa Udon.jpg" width="auto" height="150" alt="">
                    <div>
                        <h5 class="card-title">ひもかわうどん</h5>
                        <p class="card-text">ひもかわうどんは、桐生市の伝統的なうどんであり、非常に幅広で薄い麺が特徴で、柔らかく弾力のある食感が楽しめます。一年中、温かい状態でも冷たい状態でも提供されます。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="TakasakiPasta.html">
                <div class="card1">
                    <img src="Takasaki Pasta.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">高崎パスタ</h5>
                        <p class="card-text">高崎は「パスタの街」として知られ、小麦栽培の伝統とイタリアの影響が融合し、手作りのパスタや一年中楽しめる食の祭典が生み出されています。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="SauceKatsudon.html">
                <div class="card1">
                    <img src="Sauce Katsudon.jpg" width="auto" height="100" alt="">
                    <div>
                        <h5 class="card-title">ソースカツ丼</h5>
                        <p class="card-text">ソースカツ丼は、カリカリのトンカツをご飯の上にのせ、特製の甘酸っぱいソースをかけた群馬の代表的な料理で、シンプルでおいしい、一年中楽しめる食事です。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Torimeshi.html">
                <div class="card1">
                    <img src="Torimeshi.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">とりめし</h5>
                        <p class="card-text">とりめしは、鶏肉と香辛料で炊いた群馬の郷土料理で、シンプルでありながら香り高く、一年中、特に弁当で親しまれている。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Kamameshi.html">
                <div class="card1">
                    <img src="Kamameshi.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">釜飯</h5>
                        <p class="card-text">釜飯は、鶏肉や野菜、キノコなどの具材と一緒に米を小さな鉄鍋で炊き上げた料理で、香り高く特別な味わいが特徴。群馬では一年中親しまれている。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="OtaYakisoba.html">
                <div class="card1">
                    <img src="Ota Yakisoba.jpg" width="auto" height="112" alt="">
                    <div>
                        <h5 class="card-title">大田焼きそば</h5>
                        <p class="card-text">大田焼きそばは、コシのある麺、キャベツ、醤油ベースのタレを使ったシンプルでおいしい焼きそばで、大田市の食文化の象徴であり、年間を通して開催されるお祭りでも大好評です。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="NumataDango-jiru.html">
                <div class="card1">
                    <img src="Numata Dango-jiru.jpg" width="auto" height="82" alt="">
                    <div>
                        <h5 class="card-title">沼田団子汁</h5>
                        <p class="card-text">団子汁は、小麦粉の団子と野菜を温かい出汁で煮込んだ沼田の名物家庭料理で、寒い日にぴったりで、この地域の郷土料理として親しまれています。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <div class="card w-75 mb-3">
        <div class="card-body">
            <a href="Ginhikari.html">
                <div class="card1">
                    <img src="Ginhikari.jpg" width="auto" height="98" alt="">
                    <div>
                        <h5 class="card-title">ギンヒカリ</h5>
                        <p class="card-text">ギンヒカリは、群馬県のプレミアムトラウトで、澄んだ水で育てられ、その繊細な味わいが評価されています。刺身や焼き物などの料理で提供され、特に春と夏に人気があります。</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    
    <nav>
        <ul class="pagination justify-content-center" id="pagination"></ul>
    </nav>
        `,
        "JoshuSukiyaki":`
            <div class="conteudo2">
        <img src="Joshu Sukiyaki.jpg" width="auto" height="212" alt="">
        <div>
            <h2>上州すき焼き – 群馬の山々が育んだ洗練された味わい</h2>
            <p>上州すき焼きは、群馬の豊かな農畜産物を反映した伝統料理です。日本でも指折りの美味と評される上州牛を使用し、薄切りにした牛肉を新鮮な野菜、豆腐、白滝と共にかすかな醤油、砂糖、酒の風味のダシでじっくりと煮込む。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>上州牛は、その柔らかさと完璧な霜降りで知られ、豊かな風味と口の中でとろけるような食感を楽しめます。群馬では、すき焼きは単なる食事以上の存在です。伝統と品質を融合した食体験として、旅館や専門店、さらには食の祭典でも提供されています。</p>
        <p>食べるのに最適な時期：上州すき焼きは、温かい料理が好まれる寒い季節（秋と冬）に最適です。お祝いや家族の集まりでも人気があります。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>プレミアム牛肉</h5>
            <p class="subconteudo">上州牛は、優れた味と品質を保証するために、群馬県で入念な飼育技術によって育てられています。</p>
            <h5>地域の伝統</h5>
            <p class="subconteudo">群馬県は、日本で牛肉料理が最も重視されている地域のひとつとして知られています。</p>
            <h5>典型的な付け合わせ</h5>
            <p class="subconteudo">牛肉に加え、この料理には、ネギ、キノコ、豆腐などの地元の野菜も使用されます。</p>
            <h5>提供方法</h5>
            <p class="subconteudo">食材をテーブルで調理するのが一般的で、食事は社交の場となります。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p>上州牛（または他の霜降り肉、薄切り）400g</p>
                <p>固い豆腐 1丁</p>
                <p>しらたき（こんにゃく麺）200g</p>
                <p>青ネギ 1束</p>
                <p>椎茸 200g</p>
                <p>スライスした人参 1本</p>
                <p>キャベツまたはチンゲン菜 1/2個</p>
                <p>油（フライパン用）</p>
                <p style="margin-left: 20px;">出汁：</p>
                <p>醤油 100ml</p>
                <p>酒 100ml</p>
                <p>みりん 50ml</p>
                <p>砂糖 50g</p>
                <p>水 200ml</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 出汁を作る：醤油、酒、みりん、砂糖、水を混ぜ合わせる。取っておく。</p>
                <p>2. 鍋に油をひく：浅い鍋に少量の油を熱する。</p>
                <p>3. 肉に焼き色をつける：肉を数枚入れ、軽く焼き色がつくまで焼く。</p>
                <p>4. 出汁と材料を加える：出汁の一部と野菜、豆腐、白滝を加える。</p>
                <p>5. 煮込む：必要に応じて出汁を足しながら、味がなじむまで煮込む。</p>
                <p>6. 盛り付け：伝統的には、各自が鍋から直接具材を取り出し、溶き卵（任意）につけて食べる。</p>
            </div>
        </div>
    </div>
        `,
        "Okkirikomi":`
            <div class="conteudo2">
        <img src="Okkirikomi.jpg" width="auto" height="210" alt="">
        <div>
            <h2>おきりこみ – 群馬を温める素朴な鍋料理</h2>
            <p>おきりこみは、群馬の伝統料理で、日本の家庭料理の素朴さと味わいを反映しています。小麦の太麺、旬の野菜、時には鶏肉や豚肉を醤油や味噌ベースのスープで煮込んだ、栄養たっぷりの鍋料理です。麺は卵を使わず手打ちで、幅広にカットされているため、独特の手作り感あふれる食感を楽しめます。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>この料理は、この地域の厳しい冬にぴったりの農民の食事として生まれました。現在では、群馬県のおもてなしの象徴とされており、特に地方では、地元のレストランや旅館で提供されています。</p>
        <p>食べるのに最適な時期：おきりこみは、温かい料理が好まれる寒い季節（秋と冬）にぴったりです。また、地域の食文化を祝うお祭りでも大人気です。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>質素な起源</h5>
            <p class="subconteudo">地元の小麦と旬の野菜を使った、経済的な料理として生まれました。</p>
            <h5>卵を使用しない</h5>
            <p class="subconteudo">生地は小麦粉、水、塩だけで作られ、シンプルな伝統を守っています。</p>
            <h5>さまざまなスープ</h5>
            <p class="subconteudo">地域や好みによって、醤油ベースまたは味噌ベースで調理されます。</p>
            <h5>家族向けの料理</h5>
            <p class="subconteudo">家族向けの料理</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p style="margin-left: 20px;">生地：</p>
                <p>小麦粉 300g</p>
                <p>水 150ml</p>
                <p>塩 ひとつまみ</p>
                <p style="margin-left: 20px;">煮込み：</p>
                <p>だし汁 1リットル</p>
                <p>醤油 大さじ3（お好みで味噌でも可）</p>
                <p>人参 1本（輪切り）</p>
                <p>じゃがいも 1個（角切り）</p>
                <p>キャベツまたはチンゲン菜 1/4個</p>
                <p>鶏肉または豚肉 100g（任意）</p>
                <p>キノコ（椎茸またはシメジ）</p>
                <p>塩 適量</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 生地の準備：小麦粉、水、塩を混ぜて固めの生地を作る。5分間こね、蓋をして30分間休ませる。</p>
                <p>2. 伸ばして切る：麺棒で3～4mmの厚さに伸ばす。幅2cm程度の細長い帯状に切る。</p>
                <p>3. 出汁の準備：大きな鍋で出汁を温め、醤油（または味噌）で味を調える。</p>
                <p>4. 材料を加える：野菜と肉を加えます。柔らかくなるまで煮込みます。</p>
                <p>5. 麺を茹でる：麺を直接スープに加え、8～10分間、くっつかないように混ぜながら茹でます。</p>
                <p>6. 盛り付け：大きな器に盛り、熱いうちに皆で分け合っていただきます。</p>
            </div>
        </div>
    </div>
        `,
        "MizusawaUdon":`
            <div class="conteudo2">
        <img src="Mizusawa Udon.jpg" width="auto" height="185" alt="">
        <div>
            <h2>水沢うどん – 群馬の山々で受け継がれる百年の伝統</h2>
            <p>水沢うどんは、讃岐（香川）や稲庭（秋田）と並んで、日本で最も有名な3大うどんのひとつです。群馬県伊香保温泉発祥のこのうどんは、水沢山の清らかな水と地元産の小麦粉を使った手打ち製法により、コシのある弾力ある食感が特徴です。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>伝統的に、冷たいつゆ（醤油と出汁ベース）で、あるいは温かいあっさりとしたスープで提供される水沢うどんは、シンプルでありながら洗練された食体験です。この地域には、何世代にもわたって受け継がれてきたレシピを守る専門店が多くあり、健康的で歴史に満ちた料理を提供しています。</p>
        <p>食べるのに最適な時期：水沢うどんは一年中楽しめますが、暑い日に冷たくして食べる夏と、温かくして食べる冬に特に人気があります。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>400年以上の歴史</h5>
            <p class="subconteudo">水沢うどんは、水沢の寺で供物として生まれ、この地域の伝統料理となりました。</p>
            <h5>山の水</h5>
            <p class="subconteudo">この地域の純度の高い水は、麺の品質に欠かせない要素と考えられています。</p>
            <h5>全国的な評価</h5>
            <p class="subconteudo">「日本三大うどんのひとつ」に数えられています。</p>
            <h5>観光体験</h5>
            <p class="subconteudo">伊香保温泉を訪れる観光客の多くは、水沢うどん専門店に立ち寄ります。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p style="margin-left: 20px;">生地：</p>
                <p>小麦粉 300g</p>
                <p>冷水 150ml</p>
                <p>塩 ひとつまみ</p>
                <p  style="margin-left: 20px;">つゆ（冷たい）：</p>
                <p>だし 200ml</p>
                <p>しょうゆ 50ml</p>
                <p>みりん 50ml</p>
                <p>わさび、刻みねぎ（添え用）</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 生地の準備：小麦粉、塩、氷水を少しずつ混ぜて、固めの生地を作る。</p>
                <p>2. こねる：10分間こねて、覆いをして30分間休ませる。</p>
                <p>3. 伸ばして切る：麺棒で3mmの厚さに伸ばし、4mm幅の細切りにする。</p>
                <p>4. 茹でる：たっぷりの湯を沸かし、うどんを10～12分茹でる。湯切りし、冷水で洗って火を通しすぎないようにする。</p>
                <p>5. タレ：だし、しょうゆ、みりんを混ぜ合わせる。冷やしたうどんに、別皿のタレ、わさび、青ねぎを添えて出す。</p>
            </div>
        </div>
    </div>
        `,
        "HimokawaUdon":`
            <div class="conteudo2">
        <img src="Himokawa Udon.jpg" width="auto" height="250" alt="">
        <div>
            <h2>ひもかわうどん – 群馬県桐生市の名物</h2>
            <p>ひもかわうどんは、群馬県桐生市に伝わる、非常に幅が広く、とても細いうどんです。一般的な太いうどんとは異なり、ひもかわうどんは布の切れ端のような形状をしています。幅は1.5cmから10cm以上に達し、それでも厚さは約1mmと、滑らかで弾力性のある食感です。温かいスープで、あるいは冷たいつけ汁で提供されます。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>この地域の伝統では、ひもかわは群馬県の小麦栽培と農民の料理の発展と関連があります。歴史的には、幅の広いひもかわは、生麺と野菜を使った郷土料理「おきりこみ」に使われていました。</p>
        <p>食べるのに最適な時期：一年中。夏には、ざる（醤油と出汁ベースのタレ付き）で提供される冷たい麺が爽やかで、冬には、あっさりとしたスープの麺が心温まる一品となります。桐生では、季節ごとにさまざまなスタイルでこの料理を提供する専門店が数多くあります。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>「型破りな」幅</h5>
            <p class="subconteudo">桐生市の有名店では、幅10～12cmの麺がよく見られ、写真や動画の撮影スポットとなっています。</p>
            <h5>他の「平打ち麺」との関連</h5>
            <p class="subconteudo">この名前の由来は、きしめん（きしめん）の祖先とされる古くからの「芋川うどん（いもかわうどん）」にあると考える人もいます。ひもかわ（ひもかわ）は、群馬県で独自の道を歩んできたのです。</p>
            <h5>鍋からフィードへ</h5>
            <p class="subconteudo">「リボン」のような形状が、日本のSNSでこの料理の人気を押し上げ、食通たちがより幅の広いバージョンを求めて桐生を訪れるようになった。</p>
            <h5>技術と食感</h5>
            <p class="subconteudo">幅は広いものの、麺は細く、調理時間が短く、冷やし麺として提供される前に、氷水で冷やしてコシとツヤを出すのが一般的です。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p style="margin-left: 20px;">生地：</p>
                <p>小麦粉 400g（理想：中力粉のブレンド、強力粉50% + 薄力粉50%でも可）</p>
                <p>冷水 180～200ml</p>
                <p>塩 8g（水に溶かす）</p>
                <p>打ち粉用小麦粉</p>
                <p  style="margin-left: 20px;">つゆ（冷たいもの）：</p>
                <p>だし 300ml</p>
                <p>しょうゆ 75ml</p>
                <p>みりん 75ml</p>
                <p>付け合わせ用：青ネギ、おろし生姜、ごまなど</p>
                <p  style="margin-left: 20px;">あっさりスープ（温かいもの）：</p>
                <p>だし 1.2L</p>
                <p>醤油 60～80ml</p>
                <p>みりん 30～40ml</p>
                <p>お好みでトッピング（天ぷら、青ネギ、かまぼこなど）</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 水を塩で塩漬けにする：冷水に塩を溶かす（塩水は生地にコシと弾力性を与える）。</p>
                <p>2. 生地を作る：塩水を小麦粉に少しずつ加え、湿った塊ができるまで混ぜる。ボール状にまとめ、10～12分間、滑らかになるまでこねる。蓋をして、室温で1時間休ませる。</p>
                <p>3. 薄く伸ばす：作業台に打ち粉をし、麺棒で1mm程度の厚さに伸ばす。生地を軽く折りたたみ（折り目に打ち粉をする）、幅1.5cm～10cm以上の幅に切る。家庭では3～5cmの幅で十分。破れないよう注意しながら広げる。</p>
                <p>4. 茹で方：たっぷりの沸騰したお湯で、3～8分間茹でます（時間は幅や厚さによって異なります）。くっつかないように、そっとかき混ぜてください。水気を切ります。冷たいスタイルの場合は、氷水で洗って冷やし、固めます。</p>
                <p>5. 盛り付け – 冷製（ざる/つけ）：竹のすだれの上に扇形に広げた麺を盛り付け、別皿につゆ（だし、しょうゆ、みりんを混ぜ合わせ、冷やしておく）を添える。青ネギと生姜を添える。</p>
                <p>6. 温かいスタイル： あっさりした出汁を温め、塩加減を調整し、素早く麺を浸してから、深めの器に盛り付け、お好みのトッピングを添えます。</p>
            </div>
        </div>
    </div>
        `,
        "TakasakiPasta":`
            <div class="conteudo2">
        <img src="Takasaki Pasta.jpg" width="auto" height="212" alt="">
        <div>
            <h2>高崎パスタ – 日本のパスタの都</h2>
            <p>群馬県高崎市は、小麦栽培の長い伝統とイタリア料理の影響から「パスタの街」として知られています。この名声は、高崎市がパスタに焦点を当てた食のイベントを開催し、著名なシェフを招き、地元の新鮮な食材を使ったパスタ料理を大切にする地域文化を築き上げたことから始まりました。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>現在、高崎には手打ちパスタを専門とするレストランが数多くあり、ミートソースのスパゲッティ、ミラノ風カツレツのパスタ、日本とイタリアの風味を融合させたクリエイティブなレシピなどを提供しています。この融合により、高崎は食通にとって必見の目的地となっています。</p>
        <p>食べるのに最適な時期：一年中！ただし、主に春と秋に開催される高崎のパスタフェスティバルでは、特別メニューや料理コンテストが開催されます。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>パスタフェスティバル</h5>
            <p class="subconteudo">高崎では、地元や海外のシェフを招いて、パスタを祝うイベントを毎年開催しています。</p>
            <h5>群馬の小麦</h5>
            <p class="subconteudo">この伝統の基盤は、うどんやイタリアンのパスタに使われる、この地域で豊富に栽培されている小麦にあります。</p>
            <h5>文化の融合</h5>
            <p class="subconteudo">多くの料理は、イタリアの調理法と日本の食材を組み合わせて、独特の味を生み出しています。</p>
            <h5>グルメの目的地</h5>
            <p class="subconteudo">この街は、手打ちパスタに関しては全国的に有名な場所となっています。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p>スパゲッティ 400g（できれば手打ち）</p>
                <p>ひき肉（牛または豚） 300g</p>
                <p>みじん切り玉ねぎ 1個</p>
                <p>みじん切りニンニク 2片</p>
                <p>皮をむいたトマト 400g</p>
                <p>オリーブオイル 大さじ2</p>
                <p>塩、こしょう 適量</p>
                <p>仕上げ用粉パルメザンチーズ 適量</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 炒める：鍋にオリーブオイルを熱し、玉ねぎとニンニクをきつね色になるまで炒める。</p>
                <p>2. ひき肉を加える：ひき肉を加え、ほぐれるまで炒める。</p>
                <p>3. ソース：皮をむいたトマトを加え、塩、こしょうで味を調え、15～20分間、とろみがつくまで煮込む。</p>
                <p>4. パスタを茹でる：沸騰した塩水で、スパゲッティをアルデンテになるまで茹でる。</p>
                <p>5. 仕上げ：パスタをソースと混ぜ合わせ、すりおろしたパルメザンチーズとオリーブオイルを少しかけて出す。</p>
            </div>
        </div>
    </div>
        `,
        "SauceKatsudon":`
            <div class="conteudo2">
        <img src="Sauce Katsudon.jpg" width="auto" height="200" alt="">
        <div>
            <h2>ソースカツ丼 – 群馬の独特な味わいの丼</h2>
            <p>ソースカツ丼は、群馬県、特に前橋市や桐生市で非常に人気のある、伝統的な日本のカツ丼の特別なバリエーションです。卵とスープが添えられる古典的なカツ丼とは異なり、ソースカツ丼はより大胆な提案です。パン粉をつけて揚げた豚カツ（とんかつ）を白米の上にのせ、醤油、ケチャップ、ウスターソースをベースにした甘酸っぱいソースをかけたものです。その結果、シンプルでありながら風味豊かな料理が生まれ、この地域の住民や観光客を魅了しています。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>この料理は、ヨーロッパの影響を日本の味覚に合わせてアレンジした、日本の西洋化料理の象徴とみなされています。群馬では、伝統的なレストランだけでなく、地元の食堂でも提供されており、手軽で心温まる食事として親しまれています。</p>
        <p>食べるのに最適な時期：ソースカツ丼は一年中楽しめますが、特に食のフェスティバルや、群馬の街を散策する間の軽食として人気があります。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>地域の起源</h5>
            <p class="subconteudo">群馬はソースカツ丼の発祥の地の一つとされており、店によってレシピは様々です。</p>
            <h5>特製ソース</h5>
            <p class="subconteudo">各店には、より甘口のもの、より酸味のあるものなど、独自のソースがあります。</p>
            <h5>西洋の影響</h5>
            <p class="subconteudo">この料理は、ヨーロッパの料理から着想を得たソースを取り入れた、とんかつのアレンジとして生まれました。</p>
            <h5>人気料理</h5>
            <p class="subconteudo">ソースカツ丼は、家族経営のレストランや地元のカフェのメニューでよく見かけるものです。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（2人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p>豚ロース肉 2枚（各150g）</p>
                <p>塩、こしょう 適量</p>
                <p>小麦粉（衣用）</p>
                <p>溶き卵 1個分</p>
                <p>パン粉（衣用）</p>
                <p>揚げ油</p>
                <p>炊いた日本米 2人分</p>
                <p style="margin-left: 20px;">ソース：</p>
                <p>ウスターソース 大さじ3</p>
                <p>ケチャップ 大さじ2</p>
                <p>醤油 大さじ1</p>
                <p>砂糖 大さじ1</p>
                <p>マスタード 小さじ1（お好みで）</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 肉の下ごしらえ： 豚ロース肉に塩、こしょうをふる。</p>
                <p>2. 衣をつける： 薄力粉、溶き卵、パン粉の順につける。</p>
                <p>3. 揚げる： 油を170℃に熱し、豚ロース肉をきつね色になるまで揚げる（約5～6分）。ペーパータオルで油を切る。</p>
                <p>4. ソース：ソースの材料をすべて小鍋に入れ、少しとろみがつくまで加熱する。</p>
                <p>5. 盛り付け：ご飯を茶碗に盛り、細切りにしたカツを上にのせ、ソースをかける。</p>
                <p>6. 提供：千切りキャベツやシンプルなサラダを添える。</p>
            </div>
        </div>
    </div>
        `,
        "Torimeshi":`
            <div class="conteudo2">
        <img src="Torimeshi.jpg" width="auto" height="212" alt="">
        <div>
            <h2>とりめし – 心のこもった鶏肉ご飯</h2>
            <p>とりめしは、鶏肉、醤油、酒と一緒に炊いたご飯で、繊細で香り高い味わいの、群馬県を代表するシンプルで心温まる料理です。伝統的に、ご飯は茶（番茶など）や薄い出汁で炊かれるため、このレシピに特別な風味が加わります。家庭料理として親しまれているほか、弁当や地元のレストランでも味わうことができます。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>この料理は、鶏肉と米が常に手に入りやすく、珍重されてきた群馬県の農業の伝統を反映しています。軽くて栄養価が高く、風味豊かな料理をお探しの方に最適です。</p>
        <p>食べるのに最適な時期：鳥飯は一年中食べられますが、弁当箱に入れて持ち運ぶことが多いので、ピクニックや祭り、旅行で特に人気があります。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>お茶とのつながり</h5>
            <p class="subconteudo">緑茶や番茶を使ってご飯を炊くものもあり、独特な香りを生み出しています。</p>
            <h5>旅行の食事</h5>
            <p class="subconteudo">伝統的に、駅弁として鉄道の駅で販売されています。</p>
            <h5>シンプルで栄養価が高い</h5>
            <p class="subconteudo">炭水化物、タンパク質、そして日本の調味料が絶妙に調和しています。</p>
            <h5>家庭料理</h5>
            <p class="subconteudo">各家庭で、鶏肉や野菜の切り方を変えるなど、それぞれ独自のバリエーションがあります。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p>日本米 2カップ</p>
                <p>鶏肉 300g（もも肉または胸肉、角切り）</p>
                <p>醤油 大さじ2</p>
                <p>酒 大さじ2</p>
                <p>みりん 大さじ1</p>
                <p>塩 小さじ1</p>
                <p>番茶 500ml（お好みで水でも可）</p>
                <p>人参 1本（千切り、任意）</p>
                <p>おろし生姜 少量</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 米を洗う：水が透明になるまでよく洗う。</p>
                <p>2. 汁を準備する：番茶（または水）、醤油、酒、みりん、塩を混ぜ合わせる。</p>
                <p>3. 鍋に材料を入れる：炊飯器または土鍋に米、鶏肉、人参、生姜を入れる。</p>
                <p>4. 炊く：炊飯器のスイッチを入れ、米が水分をすべて吸収するまで炊く。</p>
                <p>5. 盛り付ける：優しく混ぜ、温かいうちに日本の漬物と一緒に盛り付ける。</p>
            </div>
        </div>
    </div>
        `,
        "Kamameshi":`
            <div class="conteudo2">
        <img src="Kamameshi.jpg" width="auto" height="212" alt="">
        <div>
            <h2>釜飯 – 鉄鍋で提供される手作りのご飯</h2>
            <p>釜飯は、その独特な見た目と印象的な味わいで群馬県で注目を集めている日本の伝統料理です。その名前は文字通り「鉄鍋のご飯」を意味しており、この料理は「釜」と呼ばれる小さな個別の鍋で調理され、提供されます。ご飯は鶏肉、野菜、キノコ、魚介類などの食材と一緒に炊かれ、調理中にすべての香りと風味を吸収します。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>群馬県では、釜飯は旅館や伝統的なレストランの代表的な料理であり、特別な機会や旅行の際に食べられる料理とみなされています。その味に加え、熱い釜から直接食べるという体験も、釜飯を思い出深いものにしています。</p>
        <p>食べるのに最適な時期：釜飯は一年中楽しめますが、温かい料理が恋しくなる秋や冬に特に人気があります。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>名前の由来</h5>
            <p class="subconteudo">「釜」は調理に使う鉄鍋、「飯」はご飯を意味します。</p>
            <h5>ユニークな盛り付け</h5>
            <p class="subconteudo">各人前が鍋ごと提供されるため、熱と香りが保たれます。</p>
            <h5>さまざまな具材</h5>
            <p class="subconteudo">鶏肉、キノコ、魚介類、季節の野菜などが使われます。</p>
            <h5>旅の食事</h5>
            <p class="subconteudo">釜飯は駅弁（駅で売られている弁当）でよく見かけます。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p>日本米 2カップ</p>
                <p>だし 400ml</p>
                <p>しょうゆ 大さじ2</p>
                <p>酒 大さじ2</p>
                <p>みりん 大さじ1</p>
                <p>鶏肉（角切り） 200g</p>
                <p>椎茸 100g</p>
                <p>千切り人参 1本</p>
                <p>枝豆 1/2カップ（任意）</p>
                <p>塩 適量</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 米を洗う：水が透明になるまでよく洗う。</p>
                <p>2. 出汁を作る：出汁、醤油、酒、みりんを混ぜ合わせる。</p>
                <p>3. 鍋に材料を入れる：鉄鍋（または普通の鍋）に米、出汁、材料を入れる。</p>
                <p>4. 炊く：蓋をして弱火で15～20分ほど、水分がなくなるまで炊く。</p>
                <p>5. 蒸らす：火を止め、蓋をしたまま10分ほど蒸らして炊き上げる。</p>
                <p>6. 盛り付ける：伝統に従って、鍋の中で軽く混ぜてから、そのまま鍋から盛り付ける。</p>
            </div>
        </div>
    </div>
        `,
        "OtaYakisoba":`
            <div class="conteudo2">
        <img src="Ota Yakisoba.jpg" width="auto" height="212" alt="">
        <div>
            <h2>太田焼きそば – 伝統となったシンプルな味わい</h2>
            <p>太田焼きそばは、群馬県太田市で知られる、シンプルで家庭的な味わいの郷土料理です。手の込んだ焼きそばとは異なり、太田焼きそばは、固めの麺、キャベツ、醤油ベースのタレで、余計な具材は使われていません。このシンプルさが住民や観光客の心を掴み、地元の食文化の象徴となっています。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>この料理は人気が高いため、太田市では焼きそばに焦点を当てたフェスティバルが開催され、様々なバリエーションを提供する屋台が集まりますが、その本質である「バランスの取れた味」と「手早く作れる」という特徴は常に保たれています。</p>
        <p>食べるのに最適な時期：一年中！しかし、大田市のグルメフェスティバル（通常、春と秋に開催）では、さらに特別な体験ができます。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>大衆的な起源</h5>
            <p class="subconteudo">労働者向けの安価で手軽な食事として誕生し、今では伝統的な料理となっています。</p>
            <h5>焼きそばフェスティバル</h5>
            <p class="subconteudo">太田では毎年、数十の屋台がクリエイティブな焼きそばを提供するイベントが開催されています。</p>
            <h5>シンプルでおいしい</h5>
            <p class="subconteudo">伝統的なレシピは、麺、キャベツ、タレのみで、肉や魚介類は使用しません。</p>
            <h5>地域のアイデンティティ</h5>
            <p class="subconteudo">この地域で育った人々にとっては「懐かしい味」とされています。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（2人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p>焼きそば用麺 2人分</p>
                <p>千切りキャベツ 1/4個分</p>
                <p>薄切り玉ねぎ 1/2個分</p>
                <p>植物油 大さじ2</p>
                <p>塩・こしょう 適量</p>
                <p style="margin-left: 20px;">タレ：</p>
                <p>焼きそば用タレ 大さじ3（または醤油＋ウスターソース＋砂糖を混ぜる）</p>
                <p>醤油 大さじ1</p>
                <p>砂糖 小さじ1</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 麺の準備：パッケージの指示に従って、茹でるか蒸す。</p>
                <p>2. 野菜を炒める：大きめのフライパンで油を熱し、玉ねぎとキャベツが柔らかくなるまで炒める。</p>
                <p>3. 麺を加える：麺を加えてよく混ぜる。</p>
                <p>4. ソース：ソースの材料を加え、全体がよく混ざるまで混ぜる。</p>
                <p>5. 盛り付け：和風を保ちたい場合は、あおのり（粉末海苔）と生姜の漬物をトッピングする。</p>
            </div>
        </div>
    </div>
        `,
        "NumataDango-jiru":`
            <div class="conteudo2">
        <img src="Numata Dango-jiru.jpg" width="auto" height="182" alt="">
        <div>
            <h2>沼田団子汁 – 群馬の山間部の素朴なスープ</h2>
            <p>団子汁は、群馬県沼田市で伝統的に食べられているスープで、小麦粉の団子（だんご）を、旬の野菜や、時には肉や鶏肉と一緒に、風味豊かな出汁で煮込んだものです。シンプルで栄養価が高く、寒い日にぴったりの料理で、この地域の農業文化と地元の食材を活用する伝統を反映しています。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>団子は小麦粉、水、塩で作り、小さく丸めて、茹でると柔らかく、少し弾力のある食感になります。この汁物は家庭料理とされていますが、地元のレストランや食文化の祭典でも提供されています。</p>
        <p>食べるのに最適な時期：温かく心温まる料理が好まれる秋と冬に最適です。地元のイベントや家庭料理として非常に人気があります。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>農民の料理に由来</h5>
            <p class="subconteudo">入手可能な小麦や野菜を活用する経済的な料理として生まれました。</p>
            <h5>卵を使用しない</h5>
            <p class="subconteudo">団子の生地はシンプルで、素朴な伝統を守っています。</p>
            <h5>様々なスープ</h5>
            <p class="subconteudo">好みに応じて、醤油ベースまたは味噌ベースで作ることができます。</p>
            <h5>共同の料理</h5>
            <p class="subconteudo">家族が集まる場で、大きな鍋に入れて皆で分け合うのが一般的です。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（4人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p style="margin-left: 20px;">団子：</p>
                <p>小麦粉 200g</p>
                <p>水 100ml</p>
                <p>塩 ひとつまみ</p>
                <p style="margin-left: 20px;">スープ：</p>
                <p>だし汁 1リットル</p>
                <p>醤油 大さじ3（お好みで味噌でも可）</p>
                <p>人参 1本（薄切り）</p>
                <p>じゃがいも 1個（角切り）</p>
                <p>キャベツまたはチンゲン菜 1/4個</p>
                <p>鶏肉または豚肉 100g（任意）</p>
                <p>キノコ（椎茸またはシメジ）</p>
                <p>塩 適量</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 団子の準備：小麦粉、水、塩を混ぜて固めの生地を作る。小さなボール（約2cm）を作る。</p>
                <p>2. 出汁の準備：大きな鍋で出汁を温め、醤油（または味噌）で味を調える。</p>
                <p>3. 材料を加える：野菜と肉を入れる。柔らかくなるまで煮込む。</p>
                <p>4. 団子の調理：団子を直接スープに加え、8～10分間、くっつかないように混ぜながら煮る。</p>
                <p>5. 盛り付け：大きな器に熱々で盛り付け、皆で分け合う。</p>
            </div>
        </div>
    </div>
        `,
        "Ginhikari":`
            <div class="conteudo2">
        <img src="Ginhikari.jpg" width="auto" height="198" alt="">
        <div>
            <h2>ギンヒカリ – 群馬の清流で育ったプレミアムトラウト</h2>
            <p>ギンヒカリは、群馬県の山々の澄んだ水で育てられた特別な種類のニジマスです。身が締まっていて、繊細な味わいと鮮やかな色合いで知られるこのマスは、この地域のプレミアム食材として、刺身、焼き物、揚げ物などの洗練された料理に使われています。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>銀鱒の養殖は、品質と鮮度を確保するために厳格な基準に従って行われており、伝統的なレストランや旅館で高く評価されている食材となっています。この食体験は、訪問者に群馬の清らかな水と漁業の伝統を体感させてくれます。</p>
        <p>食べるのに最適な時期：ギンヒカリは一年中味わうことができますが、川が最も活発になる春と夏に特に人気があり、刺身などの冷たい料理が好まれます。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>象徴的な名前</h5>
            <p class="subconteudo">「ギンヒカリ」は「銀色の輝き」を意味し、マス外見に由来しています。</p>
            <h5>管理された養殖</h5>
            <p class="subconteudo">山の清らかな水で生産され、優れた味と食感を保証しています。</p>
            <h5>プレミアム製品</h5>
            <p class="subconteudo">群馬の郷土料理において、最も高級な食材のひとつとされています。</p>
            <h5>汎用性</h5>
            <p class="subconteudo">生、焼き、衣をまぶして、あるいはカルパッチョなどのモダンな料理としてもお召し上がりいただけます。</p>
        </div>
        <h4 style="margin-top: 20px">レシピ（2人分）</h4>
        <div class="conteudo5">
            <div>
                <h5>材料</h5>
                <p>ギンヒカリのマスフィレ（または新鮮なマス）2枚</p>
                <p>粗塩 適量</p>
                <p>添え用のレモンスライス</p>
            </div>
            <div>
                <h5>作り方</h5>
                <p>1. 魚の下ごしらえ：フィレを洗い、ペーパータオルで水気を拭き取る。</p>
                <p>2. 下味：フィレに粗塩をふりかけ、10分間置く。</p>
                <p>3. グリル：グリルまたはテフロン加工のフライパンを熱し、切り身を片面3～4分ずつ、きつね色になるまで焼く。</p>
                <p>4. 盛り付け：レモンスライスを添え、お好みでポン酢を少しかける。</p>
            </div>
        </div>
    </div>
        `
    }
}