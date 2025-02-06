export function pagesHeader(place) {
    place.innerHTML = ""

    const main_div = document.createElement("div")
    main_div.classList.add("main_div")

    const div_for_logo_nav = document.createElement("div")
    div_for_logo_nav.classList.add("div_for_logo_nav")

    const adaptedMenu = document.createElement("img")
    adaptedMenu.classList.add("adaptedMenu")
    adaptedMenu.src = "/imgs/adaptedMenu.png"

    const adaptedMenuBlock = document.createElement("div")
    const menucloseBtn = document.createElement("div")

    const pgeBtnsDiv = document.createElement("div")

    const mainPage = document.createElement("a")
    const portfolioPage = document.createElement("a")
    const soc_setiPage = document.createElement("a")
    const uslugiPage = document.createElement("a")

    mainPage.innerHTML = "Главная"
    portfolioPage.innerHTML = "Портфолио"
    soc_setiPage.innerHTML = "Соц-сети"
    uslugiPage.innerHTML = "Услуги"

    pgeBtnsDiv.classList.add("pgeBtnsDiv")

    mainPage.href = "/"
    portfolioPage.href = "/src/pages/portfolio/"
    soc_setiPage.href = "/src/pages/socialnetworks/"
    uslugiPage.href = "/src/pages/uslugi/"

    pgeBtnsDiv.append(mainPage, portfolioPage, soc_setiPage, uslugiPage)
    adaptedMenuBlock.append(menucloseBtn, pgeBtnsDiv)

    menucloseBtn.innerHTML = "x"
    menucloseBtn.classList.add("menucloseBtn")

    const logo = document.createElement("img")
    logo.src = "/imgs/logo.png"
    logo.classList.add("logo")
    
    logo.onclick = () => {
        location.assign("/")
    }
    
    adaptedMenu.onclick = () => {
        adaptedMenuBlock.classList.add("adaptedMenuBlock_active")
    }
    menucloseBtn.onclick = () => {
        adaptedMenuBlock.classList.remove("adaptedMenuBlock_active")
    }
    
    const nav_div = document.createElement("div")
    const glavniy = document.createElement("a")
    glavniy.href = "/"
    const portfolio = document.createElement("a")
    portfolio.href = "/src/pages/portfolio/"
    const soc_seti = document.createElement("a")
    soc_seti.href = "/src/pages/socialnetworks/"
    const uslugi = document.createElement("a")
    uslugi.href = "/src/pages/uslugi/"
    
    
    const btn_a = document.createElement("a")
    btn_a.href = "https://t.me/Ak_Edits_578"
    btn_a.target = "_blank"
    const connect_btn = document.createElement("button")
    connect_btn.classList.add("connect_btn")
    connect_btn.innerHTML = "СВЯЗАТЬСЯ"
    
    nav_div.classList.add("nav_div")
    
    glavniy.innerHTML = "Главная"
    portfolio.innerHTML = "Портфолио"
    soc_seti.innerHTML = "Соц-сети"
    uslugi.innerHTML = "Услуги"
    
    adaptedMenuBlock.classList.add("adaptedMenuBlock")
    
    btn_a.append(connect_btn)
    nav_div.append(glavniy, portfolio, soc_seti, uslugi)
    div_for_logo_nav.append(logo, adaptedMenu, nav_div)
    main_div.append(div_for_logo_nav, adaptedMenuBlock, btn_a)
    place.append(main_div)
}   