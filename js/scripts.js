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

    document.getElementById('contacto').innerHTML = 'Contáctanos';
    document.getElementById('descripcionContacto').innerHTML = 'Estamos aquí para ayudarte con cualquier pregunta que puedas tener.';

    document.getElementById('envioExitoso').innerHTML = 'Envío exitoso';
    document.getElementById('submitButton').innerHTML = 'Enviar Mensaje';

    document.getElementById('descripcionModalJeans').innerHTML = 'Bienvenido a nuestro taller especializado en reparación de jeans, donde aportamos experiencia en la reparación de todo tipo de mezclilla. Nuestro equipo destaca especialmente en la restauración de vaqueros resistentes al fuego, garantizando que conserven sus cualidades protectoras y su estilo. Confíe en nosotros para rejuvenecer sus amados jeans, desde cortes clásicos hasta pares especializados resistentes al fuego. ';
   
    const modalTitles = document.getElementsByClassName("modalTitle");
    for (const modalTitle of modalTitles) {
        modalTitle.innerHTML = `Reviviendo tu ropa, <strong class="text-warning">Redefiniendo el estilo</strong>`;
    }
    
    const cerrarModales = document.getElementsByClassName("btnCerrarModal");
    for (const cerrarModal of cerrarModales) {
        cerrarModal.innerHTML = "Cerrar Proyecto";
    }

    document.getElementById('modalPlayera').innerHTML = 'Playeras';
    document.getElementById('descripcionModalPlayera').innerHTML = 'Bienvenido a Alteraciones para el Futuro, tu destino principal para la rejuvenecimiento de camisetas. Nos especializamos en transformar todos los tipos de camisetas, con un énfasis único en materiales innovadores y de alto rendimiento. Nuestro equipo experto está comprometido a restaurar tus prendas queridas a su antigua gloria, asegurando que sigan siendo tus favoritas en los años venideros. Confía en nuestra habilidad artesanal para un cuidado meticuloso, ya sea reviviendo algodón clásico o tejidos técnicos avanzados.';
  

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

    document.getElementById('contacto').innerHTML = 'Contact Us';
    document.getElementById('descripcionContacto').innerHTML = 'We are here to help you with any questions you may have.';

    document.getElementById('envioExitoso').innerHTML = 'Form submission successful!';
    document.getElementById('submitButton').innerHTML = 'Send Message';

    document.getElementById('descripcionModalJeans').innerHTML = 'Welcome to our specialized jeans repair workshop, where we bring expertise in mending all types of denim. Our team excels particularly in restoring fire-resistant jeans, ensuring they retain their protective qualities and style. Trust us to rejuvenate your beloved denim, from classic cuts to specialized fire-resistant pairs.';

    const modalTitles = document.getElementsByClassName("modalTitle");
    for (const modalTitle of modalTitles) {
        modalTitle.innerHTML = `Reviving Your Clothes, <strong class="text-warning">Redefining Style</strong>`;
    }

    const cerrarModales = document.getElementsByClassName("btnCerrarModal");
    for (const cerrarModal of cerrarModales) {
        cerrarModal.innerHTML = "Close Project";
    }

    document.getElementById('modalPlayera').innerHTML = 'Shirts';
    document.getElementById('descripcionModalPlayera').innerHTML = 'Welcome to Alterations for the Future, your premier destination for T-shirt rejuvenation. We specialize in transforming all types of T-shirts, with a unique emphasis on innovative, high-performance materials. Our expert team is committed to restoring your cherished garments to their former glory, ensuring they remain your favorites for years to come. Trust in our skilled craftsmanship for meticulous care, whether reviving classic cotton or advanced technical fabrics.';
  

});
