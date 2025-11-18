const translations = {
    pt:{
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
                    <a class="nav-link" href="../index.html">Início<span class="sr-only">(página atual)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Kenjinkai
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="Bolsa.html">Bolsa</a>
                        <a class="dropdown-item" href="Eventos.html">Eventos</a>
                        <a class="dropdown-item" href="index.html">Sobre nós...</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Visite Gunma
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../Turismo/MapaGunma/index.html">Mapa de Gunma</a>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Áreas Turísticas
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/AreasTuristicas/KusatsuOnsen.html">Kusatsu Onsen</a>
                                <a class="dropdown-item" href="../Turismo/AreasTuristicas/IkahoOnsen.html">Ikaho Onsen</a>
                                <a class="dropdown-item" href="../Turismo/AreasTuristicas/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Paisagens Naturais
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/PaisagensNaturais/OzeNationalPark.html">Oze National Park</a>
                                <a class="dropdown-item" href="../Turismo/PaisagensNaturais/MonteHaruna.html">Monte Haruna</a>
                                <a class="dropdown-item" href="../Turismo/PaisagensNaturais/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Patrimônios Históricos
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/PatrimoniosHistoricos/TomiokaSilkMill.html">Tomioka Silk Mill</a>
                                <a class="dropdown-item" href="../Turismo/PatrimoniosHistoricos/MuseudeHistoriaNaturaldeGunma.html">Museu de História Natural de Gunma</a>
                                <a class="dropdown-item" href="../Turismo/PatrimoniosHistoricos/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Parques
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/Parques/GunmaSafariPark.html">Gunma Safari Park</a>
                                <a class="dropdown-item" href="../Turismo/Parques/Esqui.html">Estações de Esqui</a>
                                <a class="dropdown-item" href="../Turismo/Parques/index.html">Veja mais...</a>
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
                                <a class="dropdown-item" href="../Gastronomia/PratosSalgados/MizusawaUdon.html">Mizusawa Udon</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosSalgados/SauceKatsudon.html">Sauce Katsudon</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosSalgados/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pratos Doces
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Gastronomia/PratosDoces/Yakimanju.html">Yakimanju</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosDoces/GateauRusk.html">Gateau Rusk</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosDoces/index.html">Veja mais...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Produto Regional
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Gastronomia/ProdutoRegional/Konnyaku.html">Konnyaku</a>
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
        "index": `
        <div class="conteudo2">
        <img src="Kenjinkai.jpg" width="auto" height="250" alt="">
        <div>
            <h2>Sobre a Associação Cultural Gunma Kenjin do Brasil</h2>
            <p>A Associação Cultural Gunma Kenjin do Brasil foi fundada em 25 de outubro de 1945 por imigrantes da província de Gunma, Japão, com o objetivo de preservar tradições, promover a cultura japonesa e fortalecer os laços entre Brasil e Japão. Desde sua criação, a associação tem sido um ponto de encontro para famílias e descendentes, oferecendo atividades culturais, sociais e educacionais que mantêm viva a herança japonesa no país.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Ao longo de sua história, a associação consolidou parcerias importantes, como o Tratado de Fraternidade entre a Província de Gunma e o Estado de São Paulo, firmado em 1980, que reforça o intercâmbio cultural e econômico entre as duas regiões. Além disso, a entidade participa de eventos tradicionais como o Festival do Japão, Shinenkai (Ano Novo), Keiroukai (homenagem aos idosos) e bazares beneficentes, além de promover apresentações culturais em espaços como o Japan House.</p>
        <p>Outro destaque é o programa de bolsas Kenpi Ryugaku e Kenpi Kenshu, que há 60 anos oferece oportunidades para jovens descendentes realizarem estudos ou estágios na província de Gunma. Até hoje, 169 bolsistas já participaram do programa, vivenciando experiências acadêmicas e profissionais que fortalecem a integração cultural e tecnológica entre Brasil e Japão.</p>
        <p>Com sede no bairro da Liberdade, em São Paulo, a Associação Cultural Gunma Kenjin do Brasil segue firme em sua missão: preservar tradições, apoiar a comunidade e criar pontes para o futuro, garantindo que as próximas gerações continuem conectadas às suas raízes e abertas a novas oportunidades.</p>
        <p>Participe dos nossos eventos e viva a cultura japonesa de perto! A Associação Cultural Gunma Kenjin do Brasil promove atividades tradicionais, encontros e celebrações que aproximam gerações e fortalecem os laços entre Brasil e Japão. Se você deseja saber mais sobre nossos eventos, tem dúvidas ou quer informações sobre o programa de bolsas, entre em contato pelo e-mail contato.gunma@gmail.com. Estamos prontos para atender você!</p>
        <div class="mapa">
        <iframe
            src="https://www.google.com/maps?q=Associação+Cultural+Gunma+Kenjin+do+Brasil&z=15&output=embed"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização Gunma">
        </iframe>
    </div>
    </div>
    `,
        "Bolsa": `
        <div class="conteudo2">
        <img src="Bolsa.png" width="auto" height="200" alt="">
        <div>
            <h2>Programa de Bolsa – Gunma Kenjin do Brasil</h2>
            <p>A Associação Cultural Gunma Kenjin do Brasil mantém, há mais de 60 anos, um programa de bolsas que oferece oportunidades únicas para jovens descendentes da província de Gunma aprofundarem seus estudos e experiências no Japão. Desde a primeira bolsista enviada em 1964, já foram contemplados 169 participantes, que tiveram a chance de estudar ou realizar estágios na província, fortalecendo a integração cultural e tecnológica entre Brasil e Japão.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>O programa é dividido em duas modalidades: Kenpi Ryugaku, voltada para estudos acadêmicos em universidades japonesas, e Kenpi Kenshu, destinada a estágios técnicos em empresas ou instituições públicas. Atualmente, a bolsa tem duração de seis meses e é oferecida exclusivamente a descendentes da província de Gunma. O participante pode escolher entre realizar o estágio em uma universidade ou em uma empresa alinhada à sua formação profissional.</p>
        <p>Mais do que uma experiência acadêmica, a bolsa proporciona uma imersão cultural completa. Os bolsistas vivenciam o dia a dia japonês, aprendem o idioma, conhecem tradições e estabelecem conexões que podem abrir portas para oportunidades futuras. Essa iniciativa reforça a missão da associação de criar pontes entre Brasil e Japão, preparando jovens para atuar em um mundo cada vez mais globalizado.</p>
        </div>
    `,
        "Eventos": `
        <div class="conteudo2">
        <img src="Eventos.jpg" width="auto" height="200" alt="">
        <div>
            <h2>Eventos da Associação Cultural Gunma Kenjin do Brasil</h2>
            <p>A Associação Cultural Gunma Kenjin do Brasil participa e organiza diversos eventos que celebram a cultura japonesa e fortalecem os laços da comunidade nipo-brasileira. Entre os mais tradicionais está o Festival do Japão, o maior evento da cultura japonesa na América Latina, onde a associação apresenta danças, música, culinária típica e informações sobre a província de Gunma.</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>Além disso, realizamos encontros anuais como o Shinenkai (celebração de Ano Novo), o Bonenkai (confraternização de fim de ano) e o Keiroukai, uma homenagem especial aos idosos, valorizando o respeito e a gratidão presentes na cultura japonesa. Também promovemos bazares beneficentes e o Iroukai, que reúne atividades culturais e sociais voltadas para toda a comunidade.</p>
        <p>A associação participa ainda de apresentações culturais em espaços como o Japan House, além de visitas a entidades assistenciais e passeios que incentivam a integração social. Esses eventos não apenas preservam tradições, mas também aproximam gerações, oferecendo oportunidades para jovens e adultos conhecerem mais sobre a cultura japonesa e manterem viva a herança da província de Gunma no Brasil.</p>
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
                        <a class="dropdown-item" href="Bolsa.html">奨学金</a>
                        <a class="dropdown-item" href="Eventos.html">イベント</a>
                        <a class="dropdown-item" href="index.html">私たちについて...</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        群馬を訪れる
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="../Turismo/MapaGunma/index.html">群馬県マップ</a>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                観光エリア
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/AreasTuristicas/KusatsuOnsen.html">草津温泉</a>
                                <a class="dropdown-item" href="../Turismo/AreasTuristicas/IkahoOnsen.html">伊香保温泉</a>
                                <a class="dropdown-item" href="../Turismo/AreasTuristicas/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                自然景観
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/PaisagensNaturais/OzeNationalPark.html">尾瀬国立公園</a>
                                <a class="dropdown-item" href="../Turismo/PaisagensNaturais/MonteHaruna.html">榛名山</a>
                                <a class="dropdown-item" href="../Turismo/PaisagensNaturais/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                歴史遺産
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/PatrimoniosHistoricos/TomiokaSilkMill.html">富岡製糸場</a>
                                <a class="dropdown-item" href="../Turismo/PatrimoniosHistoricos/MuseudeHistoriaNaturaldeGunma.html">群馬県立自然史博物館</a>
                                <a class="dropdown-item" href="../Turismo/PatrimoniosHistoricos/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                公園
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Turismo/Parques/GunmaSafariPark.html">群馬サファリパーク</a>
                                <a class="dropdown-item" href="../Turismo/Parques/Esqui.html">スキー場</a>
                                <a class="dropdown-item" href="../Turismo/Parques/index.html">もっと見る...</a>
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
                                <a class="dropdown-item" href="../Gastronomia/PratosSalgados/MizusawaUdon.html">水沢うどん</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosSalgados/SauceKatsudon.html">ソースカツ丼</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosSalgados/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                甘味料理
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Gastronomia/PratosDoces/Yakimanju.html">焼きまんじゅう</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosDoces/GateauRusk.html">ガトーラスク</a>
                                <a class="dropdown-item" href="../Gastronomia/PratosDoces/index.html">もっと見る...</a>
                            </div>
                        </div>
                        <div class="dropdown-submenu dropright">
                            <a class="dropdown-item dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                特産品
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../Gastronomia/ProdutoRegional/Konnyaku.html">こんにゃく</a>
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
        "index": `
        <div class="conteudo2">
        <img src="Kenjinkai.jpg" width="auto" height="250" alt="">
        <div>
            <h2>ブラジル群馬県人会について</h2>
            <p>ブラジル群馬県人会は、日本の群馬県からの移民によって、伝統を守り、日本の文化を広め、ブラジルと日本の絆を強めることを目的に、1945年10月25日に設立されました。設立以来、当協会は家族や子孫たちの交流の場として、ブラジルにおける日本の伝統を継承する文化・社会・教育活動を提供してきました。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>その歴史の中で、同協会は、1980年に締結された群馬県とサンパウロ州の友好協力協定など、両地域間の文化・経済交流を強化する重要な提携関係を構築してきました。さらに、同協会は、日本フェスティバル、新年会、敬老会、チャリティーバザーなどの伝統的な行事に参加するほか、ジャパンハウスなどの会場で文化公演を主催しています。</p>
        <p>もう一つの特徴は、60年にわたり、日系青少年に群馬県での留学や研修の機会を提供している「健平留学・健平研修」奨学金プログラムです。これまでに169人の奨学生がこのプログラムに参加し、ブラジルと日本の文化・技術交流を強化する学術的・職業的経験を積んできました。</p>
        <p>サンパウロのリベルダーデ地区に本部を置くブラジル群馬県人会は、伝統の保存、コミュニティの支援、未来への架け橋の構築という使命を堅持し、次世代が自らのルーツとつながりを保ち、新たな機会に開かれた姿勢を持ち続けることを保証しています。</p>
        <p>当協会のイベントに参加し、日本の文化を間近で体験しましょう！ブラジル群馬県人会文化協会は、世代を超えた交流を促進し、ブラジルと日本の絆を強める伝統行事、交流会、祝賀会などを開催しています。イベントの詳細、ご質問、奨学金プログラムに関するお問い合わせは、contato.gunma@gmail.com までメールでお問い合わせください。皆様のご連絡をお待ちしております！</p>
        <div class="mapa">
        <iframe
            src="https://www.google.com/maps?q=Associação+Cultural+Gunma+Kenjin+do+Brasil&z=15&output=embed"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização Gunma">
        </iframe>
    </div>
    </div>
    `,
        "Bolsa": `
        <div class="conteudo2">
        <img src="Bolsa.png" width="auto" height="200" alt="">
        <div>
            <h2>奨学金プログラム – ブラジル群馬県人会</h2>
            <p>ブラジル群馬県人会文化協会は、60年以上にわたり、群馬県出身の若者が日本で学びや経験を深めるためのユニークな機会を提供する奨学金プログラムを運営しています。1964年に最初の奨学生を派遣して以来、これまでに169名の参加者が同県で留学や研修の機会を得て、ブラジルと日本の文化・技術交流の強化に貢献してきました。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>このプログラムは、日本の大学での学術研究を目的とした「健平留学」と、企業や公共機関での技術研修を目的とした「健平研修」の2種類に分かれています。現在、奨学金の期間は6か月で、群馬県出身者の子孫にのみ提供されています。参加者は、大学または自分の専門分野に関連する企業での実習から選択することができます。</p>
        <p>学術的な経験以上に、この奨学金は完全な文化浸漬を提供します。奨学生は日本の日常生活を体験し、言語を学び、伝統に触れ、将来の機会への扉を開く可能性のある人脈を築きます。この取り組みは、ブラジルと日本の架け橋となり、ますますグローバル化する世界で活動する若者を育成するという協会の使命を強化するものです。</p>
        </div>
    `,
        "Eventos": `
        <div class="conteudo2">
        <img src="Eventos.jpg" width="auto" height="200" alt="">
        <div>
            <h2>ブラジル群馬県人会文化協会イベント</h2>
            <p>ブラジル群馬県人会文化協会は、日本文化を称え、日系ブラジル人コミュニティの絆を強める様々なイベントに参加・主催しています。最も伝統的なものとしては、ラテンアメリカ最大の日本文化イベントである「日本フェスティバル」があり、協会は群馬県の舞踊、音楽、郷土料理、情報などを紹介しています。</p>
        </div>
    </div>
    <div class="conteudo1">
        <p>また、新年の会（新年会）、忘年会、敬老会など、日本の文化に根ざした敬意と感謝の気持ちを大切にした、高齢者への特別な感謝を込めた会も毎年開催しています。さらに、チャリティーバザーや、地域社会全体に向けた文化・社会活動をまとめた「いろかい」も開催しています。</p>
        <p>当協会は、ジャパンハウスなどの会場での文化発表会への参加、福祉施設への訪問、社会交流を促進する遠足なども行っています。これらのイベントは、伝統を守るだけでなく、世代間の交流も促進し、若者や大人が日本の文化についてより深く学び、ブラジルにおける群馬県の遺産を生き生きと伝える機会を提供しています。</p>
        </div>
    `
    }
}