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
                    <a class="nav-link" href="index.html">Início<span class="sr-only">(página atual)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kenjinkai
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="Kenjinkai/Bolsa.html">Bolsa</a>
                        <a class="dropdown-item" href="Kenjinkai/Eventos.html">Eventos</a>
                        <a class="dropdown-item" href="Kenjinkai/index.html">Sobre nós...</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Visite Gunma
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="Turismo/MapaGunma/index.html">Mapa de Gunma</a>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Áreas Turísticas
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/AreasTuristicas/KusatsuOnsen.html">Kusatsu Onsen</a>
                                <a class="dropdown-item" href="Turismo/AreasTuristicas/IkahoOnsen.html">Ikaho Onsen</a>
                                <a class="dropdown-item" href="Turismo/AreasTuristicas/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Paisagens Naturais
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/PaisagensNaturais/OzeNationalPark.html">Oze National Park</a>
                                <a class="dropdown-item" href="Turismo/PaisagensNaturais/MonteHaruna.html">Monte Haruna</a>
                                <a class="dropdown-item" href="Turismo/PaisagensNaturais/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Patrimônios Históricos
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/PatrimoniosHistoricos/TomiokaSilkMill.html">Tomioka Silk Mill</a>
                                <a class="dropdown-item" href="Turismo/PatrimoniosHistoricos/MuseudeHistoriaNaturaldeGunma.html">Museu de História Natural de Gunma</a>
                                <a class="dropdown-item" href="Turismo/PatrimoniosHistoricos/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Parques
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/Parques/GunmaSafariPark.html">Gunma Safari Park</a>
                                <a class="dropdown-item" href="Turismo/Parques/Esqui.html">Estações de Esqui</a>
                                <a class="dropdown-item" href="Turismo/Parques/index.html">Veja mais...</a>
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
                                <a class="dropdown-item" href="Gastronomia/PratosSalgados/MizusawaUdon.html">Mizusawa Udon</a>
                                <a class="dropdown-item" href="Gastronomia/PratosSalgados/SauceKatsudon.html">Sauce Katsudon</a>
                                <a class="dropdown-item" href="Gastronomia/PratosSalgados/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pratos Doces
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Gastronomia/PratosDoces/Yakimanju.html">Yakimanju</a>
                                <a class="dropdown-item" href="Gastronomia/PratosDoces/GateauRusk.html">Gateau Rusk</a>
                                <a class="dropdown-item" href="Gastronomia/PratosDoces/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Produto Regional
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Gastronomia/ProdutoRegional/Konnyaku.html">Konnyaku</a>
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
        <div id="carouselExampleControls" class="carousel slide carousel-responsivo" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="Boas Vindas.png" width="auto" height="575" alt="Primeiro Slide">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>Boas Vindas</h5>
                    <p>Bem-vindo à Associação Cultural Gunma Kenjin do Brasil – Conectando tradições, fortalecendo laços!</p>
                </div>
            </div>
            <div class="carousel-item">
                <a href="Kenjinkai/Bolsa.html">
                <img class="d-block w-100" src="Bolsa1.png" width="auto" height="575" alt="Segundo Slide">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>Quer estagiar no Japão?</h5>
                    <p>Participe do nosso Programa de Bolsas e viva essa experiência única!</p>
                </div>
                </a>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="Turismo.png" width="auto" height="575" alt="Terceiro Slide">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>Descubra Gunma</h5>
                    <p>Natureza, cultura e experiências únicas esperam por você!</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
        </a>
    </div>

    <div class="conteudo4">
        <div>
            <h2>Gunma Kenjinkai do Brasil</h2>
            <p>A Associação Cultural Gunma Kenjin do Brasil, fundada em 1945, é uma entidade sem fins lucrativos dedicada a preservar e divulgar a cultura japonesa, especialmente as tradições da província de Gunma. Com sede na Liberdade, em São Paulo, a associação promove eventos culturais, sociais e beneficentes, além de manter um programa de bolsas que há mais de 60 anos oferece oportunidades de estudo e estágio no Japão. Nossa missão é fortalecer os laços entre Brasil e Japão, apoiando a comunidade e criando pontes para as futuras gerações.</p>
        </div>
        <img src="Gunma.jpg" width="auto" height="200" alt="">
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
                    <a class="nav-link" href="index.html">ホーム<span class="sr-only">(現在のページ)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        県人会
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="Kenjinkai/Bolsa.html">奨学金</a>
                        <a class="dropdown-item" href="Kenjinkai/Eventos.html">イベント</a>
                        <a class="dropdown-item" href="Kenjinkai/index.html">私たちについて...</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        群馬を訪れる
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="Turismo/MapaGunma/index.html">群馬県マップ</a>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                観光エリア
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/AreasTuristicas/KusatsuOnsen.html">草津温泉</a>
                                <a class="dropdown-item" href="Turismo/AreasTuristicas/IkahoOnsen.html">伊香保温泉</a>
                                <a class="dropdown-item" href="Turismo/AreasTuristicas/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                自然景観
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/PaisagensNaturais/OzeNationalPark.html">尾瀬国立公園</a>
                                <a class="dropdown-item" href="Turismo/PaisagensNaturais/MonteHaruna.html">榛名山</a>
                                <a class="dropdown-item" href="Turismo/PaisagensNaturais/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                歴史遺産
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/PatrimoniosHistoricos/TomiokaSilkMill.html">富岡製糸場</a>
                                <a class="dropdown-item" href="Turismo/PatrimoniosHistoricos/MuseudeHistoriaNaturaldeGunma.html">群馬県立自然史博物館</a>
                                <a class="dropdown-item" href="Turismo/PatrimoniosHistoricos/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                公園
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Turismo/Parques/GunmaSafariPark.html">群馬サファリパーク</a>
                                <a class="dropdown-item" href="Turismo/Parques/Esqui.html">スキー場</a>
                                <a class="dropdown-item" href="Turismo/Parques/index.html">もっと見る...</a>
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
                                <a class="dropdown-item" href="Gastronomia/PratosSalgados/MizusawaUdon.html">水沢うどん</a>
                                <a class="dropdown-item" href="Gastronomia/PratosSalgados/SauceKatsudon.html">ソースカツ丼</a>
                                <a class="dropdown-item" href="Gastronomia/PratosSalgados/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                甘味料理
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Gastronomia/PratosDoces/Yakimanju.html">焼きまんじゅう</a>
                                <a class="dropdown-item" href="Gastronomia/PratosDoces/GateauRusk.html">ガトーラスク</a>
                                <a class="dropdown-item" href="Gastronomia/PratosDoces/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                特産品
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="Gastronomia/ProdutoRegional/Konnyaku.html">こんにゃく</a>
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
        <div id="carouselExampleControls" class="carousel slide carousel-responsivo" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="Boas Vindas.png" width="auto" height="575" alt="Primeiro Slide">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>ようこそ</h5>
                    <p>ブラジル群馬県人会へようこそ – 伝統をつなぎ、絆を強める！</p>
                </div>
            </div>
            <div class="carousel-item">
                <a href="Kenjinkai/Bolsa.html">
                <img class="d-block w-100" src="Bolsa1.png" width="auto" height="575" alt="Segundo Slide">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>日本でインターンシップをしたいですか？</h5>
                    <p>私たちの奨学金プログラムに参加して、このユニークな体験をしましょう！</p>
                </div>
                </a>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="Turismo.png" width="auto" height="575" alt="Terceiro Slide">
                <div class="carousel-caption d-none d-md-block carousel-text" style="color: rgb(247, 230, 249);">
                    <h5>群馬を発見しよう</h5>
                    <p>自然、文化、そしてユニークな体験があなたを待っています！</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
        </a>
    </div>

    <div class="conteudo4">
        <div>
            <h2>ブラジル群馬県人会</h2>
            <p>1945年に設立されたブラジル群馬県人会は、日本文化、特に群馬県の伝統文化の保存と普及に尽力する非営利団体です。サンパウロのリベルダーデに本部を置き、文化・社会・慈善イベントを主催するほか、60年以上にわたり日本での留学・研修の機会を提供する奨学金プログラムを運営しています。私たちの使命は、ブラジルと日本の絆を強化し、コミュニティを支援し、次世代への架け橋を築くことです。</p>
        </div>
        <img src="Gunma.jpg" width="auto" height="200" alt="">
    </div>
        `
    }
}