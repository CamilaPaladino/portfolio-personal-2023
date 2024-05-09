const Razones = [
    "soy muy divertida",
    "creo en el trabajo en equipo",
    "soy práctica y resolutiva",
    "armo muy buenas playlist musicales",
    "puedo aportar desde mi ingenio y creatividad",
    "soy la persona organizada que estabas buscando",
    "puedo aportar mi criterio estético",
    "soy muy divertida, ya lo dije?",
    "creo en la importancia de la comunicación",
    "tengo muchas ganas de comenzar mi carrera en esta profesion"
    ]
    
    let btnRazones = document.getElementById("btnRazones")
    let razonesCont = document.getElementById('razonesCont')
    
    function dameUnaRazon(array){
        let random = Math.random()*array.length | 0;
        let resultado = array[random];
        return resultado;
    }
    
    btnRazones.addEventListener("click", () => {
        let resultado = dameUnaRazon(Razones);
        razonesCont.innerHTML = resultado
    });
    
    
    
    /*      menu responsive      */
    const nav = document.querySelector(".nav");
    const openMenuBtn = document.querySelector(".open-menu");
    const closeMenuBtn = document.querySelector(".close-menu");
    
    function toggleMenu() {
        nav.classList.toggle("menu_opened")
    }
    
    openMenuBtn.addEventListener("click", toggleMenu);
    closeMenuBtn.addEventListener("click", toggleMenu);
    
    const menuLinks = document.querySelectorAll('.nav a[href^="#"');
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function(){
            nav.classList.remove("menu_opened");
        })
    })

