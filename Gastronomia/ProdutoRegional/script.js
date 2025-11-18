function dropdown() {
    $('.dropdown-submenu .dropdown-toggle').off("click.i18n");
    $('.dropdown').off("hidden.bs.dropdown.i18n");
    $('.dropdown-submenu .dropdown-toggle').on("click.i18n", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.dropdown-submenu .dropdown-menu.show').not($(this).siblings()).removeClass('show');
        $(this).siblings('.dropdown-menu').toggleClass('show');
    });

    $('.dropdown').on("hidden.bs.dropdown.i18n", function() {
        $('.dropdown-menu.show').removeClass('show');
    });
}

function changeLanguage(lang) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key];
    });
    dropdown();
    const params = new URLSearchParams(window.location.search);
    const pag = Number(params.get('pagina'));
    if (pag && pag > 0) {
        paginaAtual = pag;
    }
    renderCards();
    renderPaginacao();
}

const cardsPorPagina = 6;
let paginaAtual = 1;

function atualizarUrl(pagina) {
    const url = new URL(window.location);
    url.searchParams.set('pagina', pagina);
    window.history.pushState({}, '', url);
}

function renderCards() {
    const totalCards = Array.from(document.querySelectorAll('.card'));
    if (!totalCards.length) return;

    const inicio = (paginaAtual - 1) * cardsPorPagina;
    const fim = inicio + cardsPorPagina;

    totalCards.forEach((totalCards, idx) => {
        totalCards.style.display = (idx >= inicio && idx < fim) ? 'block' : 'none';
    });
}

function renderPaginacao() {
    const totalCards = document.querySelectorAll('.card');
    const totalPaginas = Math.max(1, Math.ceil(totalCards.length / cardsPorPagina));
    if (totalPaginas > 1) {
        const paginacao = document.getElementById('pagination');
        if (!paginacao) return;

        let html = '';

        html += `<li class="page-item${paginaAtual === 1 ? ' disabled' : ''}">
                    <a class="page-link" href="#" data-pagina="${paginaAtual - 1}"><</a>
                </li>`;

        for (let i = 1; i <= totalPaginas; i++) {
            html += `<li class="page-item${paginaAtual === i ? ' active' : ''}">
                        <a class="page-link" href="#" data-pagina="${i}">${i}</a>
                    </li>`;
        }

        html += `<li class="page-item${paginaAtual === totalPaginas ? ' disabled' : ''}">
                    <a class="page-link" href="#" data-pagina="${paginaAtual + 1}">></a>
                </li>`;

        paginacao.innerHTML = html;

        paginacao.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const pag = Number(this.getAttribute('data-pagina'));
                if (pag >= 1 && pag <= totalPaginas) {
                    paginaAtual = pag;
                    atualizarUrl(paginaAtual);
                    renderCards();
                    renderPaginacao();
                }
            });
        });
    }
}

window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const pag = Number(params.get('pagina'));
    paginaAtual = (pag && pag > 0) ? pag : 1;
    renderCards();
    renderPaginacao();
});

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(localStorage.getItem("lang") || "pt");
    dropdown();
    const params = new URLSearchParams(window.location.search);
    const pag = Number(params.get('pagina'));
    if (pag && pag > 0) {
        paginaAtual = pag;
    }
    renderCards();
    renderPaginacao();
});