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
                                <a class="dropdown-item" href="../PratosSalgados/MizusawaUdon.html">Mizusawa Udon</a>
                                <a class="dropdown-item" href="../PratosSalgados/SauceKatsudon.html">Sauce Katsudon</a>
                                <a class="dropdown-item" href="../PratosSalgados/index.html">Veja mais...</a>
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
                                <a class="dropdown-item" href="Konnyaku.html">Konnyaku</a>
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
        "Konnyaku": `
            <div class="conteudo2">
        <img src="Konnyaku.jpg" width="300" height="auto" alt="">
        <div>
            <h2>Konnyaku – O Superalimento Tradicional de Gunma</h2>
            <p>Gunma é conhecida como a maior produtora de konnyaku no Japão, um alimento único feito a partir da batata konjac. Com textura gelatinosa e sabor neutro, ele é extremamente versátil e aparece em diversos pratos da culinária japonesa, como ensopados, sashimi e até sobremesas.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>O konnyaku é valorizado não apenas pelo sabor, mas também pelos benefícios à saúde. Rico em fibras solúveis e praticamente sem calorias, é ideal para quem busca uma alimentação equilibrada. Além disso, ajuda na digestão e na sensação de saciedade, sendo muito popular entre pessoas que seguem dietas saudáveis.</p>
        <p>Em Gunma, você pode experimentar o konnyaku de várias formas: grelhado com molho de missô, em espetinhos, como sashimi acompanhado de molho de soja e wasabi, ou até em pratos inovadores como sorvete de konnyaku. A região também abriga fábricas e museus dedicados a esse ingrediente, onde os visitantes podem aprender sobre sua produção e degustar diferentes variações.</p>
        <p>Melhor época para comer: O konnyaku pode ser apreciado o ano todo, mas durante festivais gastronômicos em Gunma, especialmente na primavera e no outono, há eventos dedicados a esse alimento, com degustações e oficinas.</p>
        <div class="conteudo3">
            <h4>Curiosidades</h4>
            <h5>Museu do Konnyaku em Gunma</h5>
            <p class="subconteudo">Espaço interativo para conhecer a história e produção do konnyaku, com degustações e oficinas.</p>
            <h5>Konnyaku Sashimi</h5>
            <p class="subconteudo">Uma experiência única para quem quer provar o ingrediente puro, com textura suave e sabor delicado.</p>
            <h5>Espetinhos de Konnyaku com Missô</h5>
            <p class="subconteudo">Prato típico de festivais, perfeito para quem gosta de sabores tradicionais.</p>
            <h5>Produtos Criativos</h5>
            <p class="subconteudo">Sorvetes, doces e até bebidas à base de konnyaku, mostrando a versatilidade do ingrediente.</p>
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
                                <a class="dropdown-item" href="../PratosSalgados/MizusawaUdon.html">水沢うどん</a>
                                <a class="dropdown-item" href="../PratosSalgados/SauceKatsudon.html">ソースカツ丼</a>
                                <a class="dropdown-item" href="../PratosSalgados/index.html">もっと見る...</a>
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
                                <a class="dropdown-item" href="Konnyaku.html">こんにゃく</a>
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
        "Konnyaku": `
            <div class="conteudo2">
        <img src="Konnyaku.jpg" width="300" height="auto" alt="">
        <div>
            <h2>こんにゃく – 群馬の伝統的なスーパーフード</h2>
            <p>群馬は、こんにゃく芋から作られるユニークな食品、こんにゃくの日本最大の生産地として知られています。ゼリーのような食感と無味無臭のこんにゃくは、非常に用途が広く、煮物、刺身、さらにはデザートなど、さまざまな日本料理に使われています。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>こんにゃくは、その味だけでなく、健康効果も高く評価されています。水溶性食物繊維が豊富で、カロリーがほとんどないため、バランスの取れた食事を求める人に最適です。さらに、消化を助け、満腹感をもたらすため、健康的な食事を心がける人々に非常に人気があります。</p>
        <p>群馬では、味噌焼き、串焼き、醤油とわさびを添えた刺身、さらにはこんにゃくアイスクリームなどの斬新な料理など、さまざまな形でこんにゃくを味わうことができます。この地域には、こんにゃくの製造工場や博物館もあり、訪問者はその製造工程について学んだり、さまざまな種類のこんにゃくを味わったりすることができます。</p>
        <p>食べるのに最適な時期：こんにゃくは一年中楽しめますが、群馬県で開催される食のフェスティバル、特に春と秋には、こんにゃくに焦点を当てた試食会やワークショップなどのイベントが開催されます。</p>
        <div class="conteudo3">
            <h4>豆知識</h4>
            <h5>群馬県こんにゃく博物館</h5>
            <p class="subconteudo">こんにゃくの歴史や製造工程を学べる体験型施設で、試食やワークショップも開催されています。</p>
            <h5>こんにゃく刺身</h5>
            <p class="subconteudo">なめらかな食感と繊細な味わいをそのまま楽しめる、ユニークな体験です。</p>
            <h5>こんにゃくの味噌焼き串</h5>
            <p class="subconteudo">お祭り名物の定番料理で、伝統的な味を楽しみたい方にぴったりです。</p>
            <h5>クリエイティブな製品</h5>
            <p class="subconteudo">こんにゃくを使ったアイスクリーム、お菓子、さらには飲み物まで、こんにゃくの多様性を実感できます。</p>
        </div>
    </div>
    `
    }
}