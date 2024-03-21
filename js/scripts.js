/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// CREAR TRADUCCIONES
//agrega un listener al boton con id btnEspanol
document.getElementById("btnEspanol").addEventListener("click", function () {
  //cambia el texto de los elementos con clase "traducir" a español
  document.getElementById("tituloNav").innerHTML = "Alteraciones el Futuro";
  document.getElementById("navServicios").innerHTML = "Servicios";
  document.getElementById("navPortafolio").innerHTML = "Portafolio";
  document.getElementById("navContacto").innerHTML = "Contacto";

  document.getElementById("bienvenidaStrong").innerHTML =
    "Alteraciones el Futuro";
  document.getElementById("fraseHero").innerHTML = "Arreglamos tu ropa";
  document.getElementById("btnLlamar").innerHTML = "Llama para más información";

  document.getElementById("servicios").innerHTML = "Servicios";
  document.getElementById("descripcionServicios").innerHTML =
    "Ahora veras algunos de nuestros servicios";

  document.getElementById("precios").innerHTML = "Precios";
  document.getElementById("descripcionPrecios").innerHTML =
    "Nuestros precios se basan en el tipo de trabajo requerido y el tiempo que lleva.";

  document.getElementById("tiempo").innerHTML = "Tiempo";
  document.getElementById("descripcionTiempo").innerHTML =
    "Nos aseguramos de que su trabajo se realice de manera oportuna.";

  document.getElementById("seguridad").innerHTML = "Seguridad";
  document.getElementById("descripcionSeguridad").innerHTML =
    "Tenga la seguridad de que nuestro trabajo es de calidad.";

  document.getElementById("portafolio").innerHTML = "Portafolio";
  document.getElementById("descripcionPortafolio").innerHTML =
    "Aquí puedes ver nuestro trabajo";

  document.getElementById("descripcionJeans").innerHTML =
    "Cualquier tipo y material de Jeans";

    document.getElementById('playeras').innerHTML = 'Playeras';
    document.getElementById('descripcionPlayeras').innerHTML = 'Tamaño y otros ajustes';

    document.getElementById('sueter').innerHTML='Sueters';
    document.getElementById('descripcionSueter').innerHTML = 'Cualquier tipo';


    document.getElementById('descripcionPants').innerHTML = 'Para el deporte';


    document.getElementById('chaquetas').innerHTML = 'Chaquetas';
    document.getElementById('descripcionChaquetas').innerHTML = 'Moda y diseño';

    document.getElementById('mujeres').innerHTML = 'Ropa de Mujer';
    document.getElementById('descripcionMujeres').innerHTML = 'Ropa de Mujer';
});

document.getElementById("btnIngles").addEventListener("click", function () {
  // Change the text of elements with the "traducir" class to English
  document.getElementById("tituloNav").innerHTML = "Alterations For The Future";
  document.getElementById("navServicios").innerHTML = "Services";
  document.getElementById("navPortafolio").innerHTML = "Portfolio";
  document.getElementById("navContacto").innerHTML = "Contact";

  document.getElementById("bienvenidaStrong").innerHTML =
    "Alterations For The Future!";
  document.getElementById("fraseHero").innerHTML = "We Fix Your Clothes";
  document.getElementById("btnLlamar").innerHTML = "Call for More";

  document.getElementById("servicios").innerHTML = "Services";
  document.getElementById("descripcionServicios").innerHTML =
    "Here you can see some of our services";

  document.getElementById("precios").innerHTML = "Prices";
  document.getElementById("descripcionPrecios").innerHTML =
    "Our prices are based on the type of work required and the time it takes.";

  document.getElementById("tiempo").innerHTML = "Timing";
  document.getElementById("descripcionTiempo").innerHTML =
    "We ensure that your job is done in a timely manner.";

  document.getElementById("seguridad").innerHTML = "Safety";
  document.getElementById("descripcionSeguridad").innerHTML =
    "Rest assured that our work is of quality.";

  document.getElementById("portafolio").innerHTML = "Portfolio";
  document.getElementById("descripcionPortafolio").innerHTML =
    "Here you can view our work";

  document.getElementById("descripcionJeans").innerHTML =
    "Any type and material of Jeans";

    document.getElementById('playeras').innerHTML = 'Shirts';
    document.getElementById('descripcionPlayeras').innerHTML = 'size and other adjustments';

    document.getElementById('sueter').innerHTML='Sweatshirts';
    document.getElementById('descripcionSueter').innerHTML = 'Any Tipe';


    document.getElementById('descripcionPants').innerHTML = 'For Sports';

    document.getElementById('chaquetas').innerHTML = 'Jackets';
    document.getElementById('descripcionChaquetas').innerHTML = 'Fashion And Designing';

    document.getElementById('mujeres').innerHTML = `Women's Clothing`;
    document.getElementById('descripcionMujeres').innerHTML = `Women's Clothing`;
});
