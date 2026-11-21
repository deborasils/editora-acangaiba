
// MENU PARA CELULAR

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {

    navigation.classList.toggle("active");

    const aberto = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", aberto);

    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = aberto ? "×" : "☰";

});


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".navigation a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";

    });

});


// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("year").textContent =
    new Date().getFullYear();
