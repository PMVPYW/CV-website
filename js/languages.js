document.getElementById("python").addEventListener("click", function () {
    console.log("python");
    document.getElementById("python").classList.add("active");
    document.getElementById("c").classList.remove("active");
    document.getElementById("php").classList.remove("active");
    document.getElementById("html").classList.remove("active");
    document.getElementById("java").classList.remove("active");
    document.getElementById("js").classList.remove("active");
    document.getElementById("linux").classList.remove("active");
    document.getElementById("text").innerText = "Sintaxe Básica|Web Requests\nsockets|threading\nInterfaces gráficas\nAcesso á camara\nGráficos|Módulos\nOrientação a Objetos";
});


document.getElementById("c").addEventListener("click", function () {
    document.getElementById("python").classList.remove("active");
    document.getElementById("c").classList.add("active");
    document.getElementById("php").classList.remove("active");
    document.getElementById("html").classList.remove("active");
    document.getElementById("java").classList.remove("active");
    document.getElementById("js").classList.remove("active");
    document.getElementById("linux").classList.remove("active");
    document.getElementById("text").innerText = "Sintaxe Básica|Ponteiros\nStructs|ficheiros\nAlocação de memória dinâmica\n Interligação de Ficheiros";
});


document.getElementById("php").addEventListener("click", function () {
    document.getElementById("python").classList.remove("active");
    document.getElementById("c").classList.remove("active");
    document.getElementById("php").classList.add("active");
    document.getElementById("html").classList.remove("active");
    document.getElementById("java").classList.remove("active");
    document.getElementById("js").classList.remove("active");
    document.getElementById("linux").classList.remove("active");
    document.getElementById("text").innerText = "Sintaxe Básica|variáveis de sessão\nGET e POST|ficheiros\nBase de dados SQL";
});


document.getElementById("html").addEventListener("click", function () {
    document.getElementById("python").classList.remove("active");
    document.getElementById("c").classList.remove("active");
    document.getElementById("php").classList.remove("active");
    document.getElementById("html").classList.add("active");
    document.getElementById("java").classList.remove("active");
    document.getElementById("js").classList.remove("active");
    document.getElementById("linux").classList.remove("active");
    document.getElementById("text").innerText = "Bootstrap|css\nWebsites em geral";
});

document.getElementById("java").addEventListener("click", function () {
    document.getElementById("python").classList.remove("active");
    document.getElementById("c").classList.remove("active");
    document.getElementById("php").classList.remove("active");
    document.getElementById("html").classList.remove("active");
    document.getElementById("java").classList.add("active");
    document.getElementById("js").classList.remove("active");
    document.getElementById("linux").classList.remove("active");
    document.getElementById("text").innerText = "Sintaxe Básica\nOrientação a Objetos";
});


document.getElementById("js").addEventListener("click", function () {
    document.getElementById("python").classList.remove("active");
    document.getElementById("c").classList.remove("active");
    document.getElementById("php").classList.remove("active");
    document.getElementById("html").classList.remove("active");
    document.getElementById("java").classList.remove("active");
    document.getElementById("js").classList.add("active");
    document.getElementById("linux").classList.remove("active");
    document.getElementById("text").innerText = "Sintaxe Básica\nAlteração de Elementos em website\nAcesso a Base de dados\nWeb Requests|Gráficos";
});


document.getElementById("linux").addEventListener("click", function () {
    document.getElementById("python").classList.remove("active");
    document.getElementById("c").classList.remove("active");
    document.getElementById("php").classList.remove("active");
    document.getElementById("html").classList.remove("active");
    document.getElementById("java").classList.remove("active");
    document.getElementById("js").classList.remove("active");
    document.getElementById("linux").classList.add("active");
    document.getElementById("text").innerText = "API de ficheiros de baixo nivel em C\nbash|instalação de pacotes\nUtilização em geral\ncurl|wget";
});