// =========================================================================
// CONFIGURAÇÃO INICIAL E SEED DE DADOS (LOCALSTORAGE)
// =========================================================================

const ARTIGOS_PADRAO = [
    {
        id: "1",
        titulo: "Direitos Trabalhistas na Demissão sem Justa Causa",
        categoria: "Trabalho",
        resumo: "Entenda detalhadamente quais são os seus direitos e verbas rescisórias ao ser desligado da empresa.",
        conteudo: "<p>Quando ocorre a demissão sem justa causa, o trabalhador sob regime CLT tem garantido por lei uma série de direitos importantes. O principal objetivo é garantir uma estabilidade financeira temporária enquanto se busca uma recolocação no mercado.</p><p>As principais verbas rescisórias incluem o <strong>saldo de salário</strong> (dias trabalhados no mês), o <strong>aviso prévio</strong> (trabalhado ou indenizado), o <strong>13º salário proporcional</strong>, e as <strong>férias vencidas e proporcionais</strong> acrescidas do terço constitucional.</p><p>Além disso, o trabalhador ganha o direito de movimentar sua conta do <strong>FGTS</strong> e recebe uma multa rescisória adicional correspondente a 40% do total depositado pela empresa durante a vigência do contrato, além das guias para dar entrada no <strong>Seguro-Desemprego</strong>.</p>",
        tempo: "5 min",
        keywords: "demissão, fgts, clt, rescisão, trabalho",
        data: "09/06/2026"
    },
    {
        id: "2",
        titulo: "Como Funciona o Divórcio Consensual em Cartório?",
        categoria: "Família",
        resumo: "Saiba como realizar o divórcio de forma rápida, barata e amigável diretamente em um Cartório de Notas.",
        conteudo: "<p>O divórcio consensual por via administrativa, instituído pela Lei 11.441/07, permitiu desburocratizar drasticamente a dissolução do casamento no Brasil.</p><p>Para que o processo possa ser realizado diretamente em um Cartório de Notas, é obrigatório o cumprimento de alguns requisitos fundamentais: o consenso mútuo entre o casal sobre todas as condições (partilha de bens, pensão alimentícia, etc.) e a <strong>ausência de filhos menores ou incapazes</strong> (ou grávidas).</p><p>Mesmo sendo realizado fora do tribunal, a presença de um <strong>advogado ou defensor público</strong> é obrigatória por lei para assinar a escritura pública. O processo costuma ser resolvido em poucos dias, gerando economia de tempo e custos emocionais e financeiros.</p>",
        tempo: "4 min",
        keywords: "divórcio, casamento, cartório, partilha, família",
        data: "03/02/2026"
    },
    {
        id: "3",
        titulo: "Preços diferenciados para Consumidores Idosos: O que diz a Lei?",
        categoria: "Consumidor",
        resumo: "Saiba quais são os direitos dos consumidores idosos em relação a preços diferenciados e descontos previstos no Código de Defesa do Consumidor.",
        conteudo: "<p>O preço diferenciado para consumidores idosos é regulamentado pela Lei 10.715/2003, que estabelece que os estabelecimentos comerciais devem oferecer descontos de até 20% para idosos com idade igual ou superior a 60 anos.</p>",
        tempo: "7 min",
        keywords: "mercado, preco, preços, consumidor, idoso, desconto, direitos, consumidor idoso, código de defesa do consumidor, cdc, lei 10.715/2003, descontos para idosos, direitos do consumidor idoso, legislação de proteção ao consumidor idoso",
        data: "08/06/2026"
    },
    {
        id: "4",
        titulo: "Cometeu um crime? Saiba como funciona a audiência de custódia e seus direitos",
        categoria: "Penal",
        resumo: "A audiência de custódia é um procedimento legal que ocorre após a prisão de uma pessoa acusada de um crime. Durante essa audiência, o juiz determina se a pessoa pode ser solta ou mantida em liberdade provisória.",
        conteudo: "<p>Audiência de custódia é um procedimento legal que ocorre após a prisão de uma pessoa acusada de um crime. Durante essa audiência, o juiz determina se a pessoa pode ser solta ou mantida em liberdade provisória.</p>",
        tempo: "3 min",
        keywords: "criminal, justica, justiça, custódia, custodia, crime, preso, audiencia, audiência, audiência de custódia, direitos do preso, liberdade provisória, prisão, processo penal, justiça criminal, direitos humanos, sistema prisional",
        data: "08/06/2026"
    }
];

// Inicializa o LocalStorage caso esteja vazio
if (!localStorage.getItem("jf_artigos")) {
    localStorage.setItem("jf_artigos", JSON.stringify(ARTIGOS_PADRAO));
}
if (!localStorage.getItem("jf_duvidas")) {
    localStorage.setItem("jf_duvidas", JSON.stringify([]));
}

// Auxiliares para obter e salvar dados facilmente
function pegarArtigos() {
    return JSON.parse(localStorage.getItem("jf_artigos"));
}
function salvarArtigos(artigos) {
    localStorage.setItem("jf_artigos", JSON.stringify(artigos));
}
function pegarDuvidas() {
    return JSON.parse(localStorage.getItem("jf_duvidas"));
}
function salvarDuvidas(duvidas) {
    localStorage.setItem("jf_duvidas", JSON.stringify(duvidas));
}

// Execução automática na Home (index.html)
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("articlesGrid")) {
        renderizarArtigosHome(pegarArtigos());
    }
});

// =========================================================================
// MÓDULO: INDEX / HOME (AUTENTICAÇÃO PÚBLICA & BUSCAS)
// =========================================================================

function renderizarArtigosHome(artigos) {
    const grid = document.getElementById("articlesGrid");
    const noResults = document.getElementById("no-results");
    
    if (!grid) return;
    grid.innerHTML = "";

    if (artigos.length === 0) {
        noResults.classList.remove("hidden");
        return;
    }
    noResults.classList.add("hidden");

    artigos.forEach(artigo => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.style.cursor = "pointer";
        card.onclick = () => window.location.href = `artigo.html?id=${artigo.id}`;
        
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                <span class="badge" style="background:#eff6ff; color:var(--brand-blue); padding:0.2rem 0.6rem; border-radius:4px; font-size:0.75rem; font-weight:600;">
                    ${artigo.categoria}
                </span>
                <small style="color:#94a3b8; font-size:0.75rem;"><i class="ph ph-clock"></i> ${artigo.tempo}</small>
            </div>
            <h3 style="margin-bottom:0.5rem; font-family:'Merriweather', serif; font-size:1.15rem; color:var(--brand-dark); text-align:left;">
                ${artigo.titulo}
            </h3>
            <p style="color:var(--text-secondary); font-size:0.9rem; text-align:left; line-height:1.4;">
                ${artigo.resumo}
            </p>
        `;
        grid.appendChild(card);
    });
}

function filtrarArtigos() {
    const termo = document.getElementById("searchInput").value.toLowerCase();
    const artigos = pegarArtigos();
    
    const filtrados = artigos.filter(artigo => 
        artigo.titulo.toLowerCase().includes(termo) ||
        artigo.resumo.toLowerCase().includes(termo) ||
        artigo.keywords.toLowerCase().includes(termo)
    );
    
    renderizarArtigosHome(filtrados);
}

function buscarComScroll() {
    filtrarArtigos();
    const secao = document.getElementById("secao-artigos");
    if (secao) {
        secao.scrollIntoView({ behavior: "smooth" });
    }
}

// Preenche o campo de busca e rola até os resultados
function preencherBusca(tema) {
    const input = document.getElementById("searchInput");
    if (input) {
        input.value = tema;
        buscarComScroll();
    }
}

function filtrarPorCategoria(categoria) {
    const artigos = pegarArtigos();
    const filtrados = artigos.filter(artigo => artigo.categoria.toLowerCase() === categoria.toLowerCase());
    renderizarArtigosHome(filtrados);
    
    const secao = document.getElementById("secao-artigos");
    if (secao) {
        secao.scrollIntoView({ behavior: "smooth" });
    }
}

function limparBusca() {
    const input = document.getElementById("searchInput");
    if (input) input.value = "";
    renderizarArtigosHome(pegarArtigos());
}

// Form de Dúvidas da Comunidade
function enviarDuvida() {
    const nome = document.getElementById("contatoNome").value;
    const email = document.getElementById("contatoEmail").value;
    const tel = document.getElementById("contatoTel").value;
    const msg = document.getElementById("contatoMsg").value;

    const novaDuvida = {
        id: Date.now().toString(),
        nome,
        email,
        tel: tel || "Não informado",
        mensagem: msg,
        data: new Date().toLocaleDateString("pt-BR")
    };

    const duvidas = pegarDuvidas();
    duvidas.unshift(novaDuvida);
    salvarDuvidas(duvidas);

    document.getElementById("formDuvida").classList.add("hidden");
    document.getElementById("msgSucesso").classList.remove("hidden");
}

function novaDuvida() {
    document.getElementById("formDuvida").reset();
    document.getElementById("formDuvida").classList.remove("hidden");
    document.getElementById("msgSucesso").classList.add("hidden");
}

// =========================================================================
// MÓDULO: LOGIN (AUTENTICAÇÃO SIMULADA)
// =========================================================================

function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const errorMsg = document.getElementById("errorMsg");

    if (email === "admin@jusfacil.com" && senha === "admin123") {
        localStorage.setItem("jf_sessao", "ativa");
        window.location.href = "admin.html";
    } else {
        errorMsg.style.display = "block";
    }
}

function verificarSessao() {
    if (localStorage.getItem("jf_sessao") !== "ativa") {
        window.location.href = "login.html";
    }
}

function logout() {
    localStorage.removeItem("jf_sessao");
    window.location.href = "index.html";
}

// =========================================================================
// MÓDULO: LEITURA DE ARTIGO (artigo.html)
// =========================================================================

function carregarArtigoCompleto() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    const loading = document.getElementById("loading");
    const container = document.getElementById("artigo-container");

    if (!id) {
        window.location.href = "index.html";
        return;
    }

    const artigos = pegarArtigos();
    const artigo = artigos.find(a => a.id === id);

    if (artigo) {
        if (loading) loading.style.display = "none";
        if (container) container.style.display = "block";

        document.getElementById("artigo-categoria").innerText = artigo.categoria;
        document.getElementById("artigo-titulo").innerText = artigo.titulo;
        document.getElementById("artigo-data").innerText = artigo.data || "Recente";
        document.getElementById("artigo-tempo").innerText = artigo.tempo;
        document.getElementById("artigo-conteudo").innerHTML = artigo.conteudo;
    } else {
        if (loading) loading.innerHTML = "<h3>Artigo não encontrado.</h3><a href='index.html'>Voltar ao início</a>";
    }
}

// =========================================================================
// MÓDULO: PAINEL ADMINISTRATIVO (admin.html)
// =========================================================================

function trocarAba(aba, botao) {
    // Esconde todas as abas resetando o active e aplicando hidden
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.add("hidden");
        tab.classList.remove("active");
    });

    // Mostra a aba clicada aplicando active e removendo hidden
    const abaDestino = document.getElementById(`tab-${aba}`);
    if (abaDestino) {
        abaDestino.classList.remove("hidden");
        abaDestino.classList.add("active");
    }

    // Altera o estado visual ativo dos botões do menu superior
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    botao.classList.add("active");
}

function carregarTudoAdmin() {
    const artigos = pegarArtigos();
    const duvidas = pegarDuvidas();

    // 1. Atualiza Indicadores do Dashboard
    document.getElementById("dash-total-artigos").innerText = artigos.length;
    document.getElementById("dash-total-duvidas").innerText = duvidas.length;

    const badgeDuvidas = document.getElementById("badge-duvidas");
    if (duvidas.length > 0) {
        badgeDuvidas.innerText = duvidas.length;
        badgeDuvidas.classList.remove("hidden");
    } else {
        badgeDuvidas.classList.add("hidden");
    }

    // 2. Calcula Métricas das Categorias
    renderizarEstatisticasCategorias(artigos);

    // 3. Renderiza Listas das Tabelas
    renderizarTabelaArtigos(artigos);
    renderizarTabelaDuvidas(duvidas);
}

function renderizarEstatisticasCategorias(artigos) {
    const statsContainer = document.getElementById("lista-categorias-stats");
    if (!statsContainer) return;

    const contagem = { Trabalho: 0, Consumidor: 0, Família: 0, Penal: 0 };
    artigos.forEach(a => { if (contagem[a.categoria] !== undefined) contagem[a.categoria]++; });

    statsContainer.innerHTML = "";
    Object.keys(contagem).forEach(cat => {
        const total = artigos.length || 1;
        const porcentagem = Math.round((contagem[cat] / total) * 100);
        
        const item = document.createElement("div");
        item.style.marginBottom = "1rem";
        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:0.3rem; font-size:0.9rem;">
                <strong>${cat}</strong>
                <span>${contagem[cat]} artigos (${porcentagem}%)</span>
            </div>
            <div style="background:#e2e8f0; border-radius:50px; height:8px; width:100%; overflow:hidden;">
                <div style="background:var(--brand-blue); height:100%; width:${porcentagem}%;"></div>
            </div>
        `;
        statsContainer.appendChild(item);
    });
}

function renderizarTabelaArtigos(artigos) {
    const tbody = document.getElementById("tabelaArtigos");
    if (!tbody) return;
    tbody.innerHTML = "";

    artigos.forEach(artigo => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${artigo.titulo}</strong></td>
            <td><span class="badge">${artigo.categoria}</span></td>
            <td>${artigo.data || "—"}</td>
            <td style="text-align: right;">
                <button onclick="editarArtigo('${artigo.id}')" class="btn-outline" style="padding:0.3rem 0.6rem; margin-right:0.5rem; border-color:#cbd5e1;"><i class="ph ph-pencil"></i> Editar</button>
                <button onclick="deletarArtigo('${artigo.id}')" class="btn-outline" style="padding:0.3rem 0.6rem; color:red; border-color:rgba(255,0,0,0.2);"><i class="ph ph-trash"></i> Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function renderizarTabelaDuvidas(duvidas) {
    const tbody = document.getElementById("tabelaDuvidas");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (duvidas.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:#94a3b8; padding:2rem;">Nenhuma dúvida cadastrada até o momento.</td></tr>`;
        return;
    }

    duvidas.forEach(duvida => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${duvida.data}</td>
            <td>
                <strong>${duvida.nome}</strong><br>
                <small style="color:#64748b;">${duvida.email} | ${duvida.tel}</small>
            </td>
            <td><div style="max-width:450px; white-space:pre-wrap; color:#334155;">${duvida.mensagem}</div></td>
        `;
        tbody.appendChild(tr);
    });
}

// CRUD do Modal de Artigos
function abrirModal() {
    document.getElementById("modalArtigo").classList.remove("hidden");
    document.getElementById("modalTitle").innerText = "Novo Artigo";
    document.getElementById("formArtigo").reset();
    document.getElementById("artigoId").value = "";
}

function fecharModal() {
    document.getElementById("modalArtigo").classList.add("hidden");
}

function salvarArtigo() {
    const id = document.getElementById("artigoId").value;
    const titulo = document.getElementById("titulo").value;
    const categoria = document.getElementById("categoria").value;
    const resumo = document.getElementById("resumo").value;
    const conteudo = document.getElementById("conteudo").value;
    const tempo = document.getElementById("tempo").value || "5 min";
    const keywords = document.getElementById("keywords").value;

    let artigos = pegarArtigos();

    if (id) {
        // Modo Edição
        artigos = artigos.map(artigo => {
            if (artigo.id === id) {
                return { ...artigo, titulo, categoria, resumo, conteudo, tempo, keywords };
            }
            return artigo;
        });
    } else {
        // Modo Criação
        const novoArtigo = {
            id: Date.now().toString(),
            titulo,
            categoria,
            resumo,
            conteudo,
            tempo,
            keywords,
            data: new Date().toLocaleDateString("pt-BR")
        };
        artigos.unshift(novoArtigo);
    }

    salvarArtigos(artigos);
    carregarTudoAdmin();
    fecharModal();
}

function editarArtigo(id) {
    const artigos = pegarArtigos();
    const artigo = artigos.find(a => a.id === id);

    if (!artigo) return;

    abrirModal();
    document.getElementById("modalTitle").innerText = "Editar Artigo";
    
    document.getElementById("artigoId").value = artigo.id;
    document.getElementById("titulo").value = artigo.titulo;
    document.getElementById("categoria").value = artigo.categoria;
    document.getElementById("resumo").value = artigo.resumo;
    document.getElementById("conteudo").value = artigo.conteudo;
    document.getElementById("tempo").value = artigo.tempo;
    document.getElementById("keywords").value = artigo.keywords;
}

function deletarArtigo(id) {
    if (confirm("Deseja realmente excluir este artigo permanentemente?")) {
        let artigos = pegarArtigos();
        artigos = artigos.filter(a => a.id !== id);
        salvarArtigos(artigos);
        carregarTudoAdmin();
    }
}