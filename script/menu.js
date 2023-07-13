/*esse pequeno script faz com que o menu mobile funcione 
abrindo e fechando */

//pegando o componente do botão
let btn_menu = document.getElementById("btn_menu");

//adicionando um evento ao clicar
btn_menu.addEventListener("click", function (){

    //pegando o nav para manipular
    let nav = document.getElementById("nav_bar")

    //condição caso tiver o hidden tirar ele e se não tiver colocar ele
    if(nav.classList.contains("hidden")){

        nav.classList.remove("hidden")
    }else{
        nav.classList.add("hidden")
    }
})