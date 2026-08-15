const motivos = [
    "Porque você consegue deixar qualquer lugar mais especial simplesmente estando nele. ❤️",
    "Porque seu sorriso é capaz de melhorar o dia de quem está ao seu redor. 🌷",
    "Porque você merece todo o carinho e amor do mundo. 💕",
    "Porque existem pessoas que passam pela nossa vida... e existem pessoas que fazem parte dela para sempre. Você é uma delas. ❤️",
    "Porque você é única e não existe ninguém igual a você. ✨",
    "Porque seus 40 anos são apenas o começo de uma nova fase maravilhosa. 🎂",
    "E principalmente... porque você é a Amanda. E isso já é motivo suficiente. ❤️"
];

let motivoAtual = 0;




function mostrarTela(id, adicionarHistorico = true) {

    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.remove("ativa");
    });

    const tela = document.getElementById(id);

    if (!tela) return;

    tela.classList.add("ativa");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (adicionarHistorico) {
        history.pushState(
            { tela: id },
            "",
            "#" + id
        );
    }
}




function comecar() {

    mostrarTela("menu");

    iniciarMusica();

    criarCoracoes();
}




function iniciarMusica() {

    const musica = document.getElementById("musica");

    if (!musica) return;

    musica.volume = 0.25;

    musica.play().catch(() => {

        console.log(
            "O navegador bloqueou o início automático da música."
        );

    });
}




function abrirMensagem() {

    mostrarTela("mensagem");
}




function abrirMotivos() {

    motivoAtual = 0;

    const texto = document.getElementById("motivoTexto");

    if (texto) {
        texto.textContent =
            "Clique no botão para descobrir ❤️";
    }

    mostrarTela("motivos");
}


function proximoMotivo() {

    const texto =
        document.getElementById("motivoTexto");

    if (!texto) return;

    texto.style.opacity = "0";

    setTimeout(() => {

        texto.textContent =
            motivos[motivoAtual];

        texto.style.opacity = "1";

        motivoAtual++;

        if (motivoAtual >= motivos.length) {
            motivoAtual = 0;
        }

    }, 200);
}




function abrirFotos() {

    mostrarTela("fotos");
}




function abrirSurpresa() {

    const mensagem =
        document.getElementById("mensagemFinal");

    const texto =
        document.getElementById("surpresaTexto");

    if (mensagem) {
        mensagem.classList.remove("visivel");
    }

    if (texto) {
        texto.textContent =
            "Clique no presente ❤️";
    }

    mostrarTela("surpresa");
}


function abrirPresente() {

    const mensagem =
        document.getElementById("mensagemFinal");

    const texto =
        document.getElementById("surpresaTexto");

    if (mensagem) {
        mensagem.classList.add("visivel");
    }

    if (texto) {
        texto.textContent =
            "🎉 SURPRESA! 🎉";
    }

    criarConfetes(120);

    criarCoracoes();
}




function voltarMenu() {

    mostrarTela("menu");
}




window.addEventListener("popstate", () => {

    const estado =
        history.state;

    const telaAnterior =
        estado && estado.tela
            ? estado.tela
            : "inicio";

    mostrarTela(
        telaAnterior,
        false
    );
});




function criarCoracoes() {

    const container =
        document.querySelector(".background-hearts");

    if (!container) return;

    for (let i = 0; i < 15; i++) {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        heart.textContent =
            ["❤️", "💕", "💗", "🌸", "✨"][
                Math.floor(Math.random() * 5)
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (12 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (6 + Math.random() * 7) + "s";

        heart.style.animationDelay =
            Math.random() * 4 + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 15000);
    }
}




function criarConfetes(quantidade) {

    for (let i = 0; i < quantidade; i++) {

        const confete =
            document.createElement("div");

        confete.className =
            "confete";

        confete.style.left =
            Math.random() * 100 + "vw";

        confete.style.width =
            (5 + Math.random() * 8) + "px";

        confete.style.height =
            (8 + Math.random() * 12) + "px";

        confete.style.background =
            escolherCor();

        confete.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confete.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(confete);

        setTimeout(() => {

            confete.remove();

        }, 5000);
    }
}


function escolherCor() {

    const cores = [
        "#ff6f9f",
        "#ffd166",
        "#9bdeac",
        "#8ecae6",
        "#cdb4db",
        "#ffb4a2"
    ];

    return cores[
        Math.floor(Math.random() * cores.length)
    ];
}




setInterval(() => {

    criarCoracoes();

}, 7000);




function alternarTema() {

    const body =
        document.body;

    const botao =
        document.getElementById("temaBtn");

    body.classList.toggle("escuro");

    const modoEscuro =
        body.classList.contains("escuro");

    if (modoEscuro) {

        if (botao) {
            botao.textContent = "☀️";
        }

        localStorage.setItem(
            "tema",
            "escuro"
        );

    } else {

        if (botao) {
            botao.textContent = "🌙";
        }

        localStorage.setItem(
            "tema",
            "claro"
        );
    }
}




window.addEventListener(
    "DOMContentLoaded",
    () => {

        const tema =
            localStorage.getItem("tema");

        const botao =
            document.getElementById("temaBtn");

        if (tema === "escuro") {

            document.body.classList.add(
                "escuro"
            );

            if (botao) {
                botao.textContent = "☀️";
            }
        }

        
       
        const telas =
            document.querySelectorAll(".tela");

        telas.forEach(tela => {
            tela.classList.remove("ativa");
        });

        const inicio =
            document.getElementById("inicio");

        if (inicio) {
            inicio.classList.add("ativa");
        }

        
        history.replaceState(
            { tela: "inicio" },
            "",
            "#inicio"
        );
    }
);
