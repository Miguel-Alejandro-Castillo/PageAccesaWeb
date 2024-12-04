
function changeLanguaje(){
    const currentLang = document.documentElement.lang;
    if ( document.documentElement.lang === 'en'){
        document.documentElement.lang = 'es';
        loadLanguaje(document.documentElement.lang);
    }else{
        document.documentElement.lang = 'en';
        loadLanguaje(document.documentElement.lang);
    }
}

function loadLanguaje(lang) {
    if (lang === 'en') {
        document.getElementById('language-btn').textContent = 'Español';
        document.getElementById('item-download').textContent = 'Download';
        document.getElementById('item-docs').textContent = 'Docs';
        document.getElementById('item-contact').textContent = 'Contact';
        document.getElementById('footer-contact').textContent = 'Contact';
        document.getElementById('footer-email').textContent = 'Leave your suggestion in the following email:';
        document.getElementById('footer-about').textContent = 'About';
        document.getElementById('footer-about-desc').innerHTML = 'The <a href="" class="text-white">AccesaWeb</a> application was presented as the final project for the <a href="https://www.info.unlp.edu.ar/" class="text-white">Bachelor&#39;s degree in Computer Science at the National University of La Plata.</a>';

    } else {
        document.getElementById('language-btn').textContent = 'English';
        document.getElementById('item-download').textContent = 'Descargar';
        document.getElementById('item-docs').textContent = 'Documentación';
        document.getElementById('item-contact').textContent = 'Contacto';
        document.getElementById('footer-contact').textContent = 'Contacto';
        document.getElementById('footer-email').textContent = 'Deja tu sugerencia en el siguiente mail:';
        document.getElementById('footer-about').textContent = 'Acerca de';
        document.getElementById('footer-about-desc').innerHTML = 'La aplicación <a href="" class="text-white">AccesaWeb</a> fue presentada como trabajo final correspondiente a la carrera de grado <a href="https://www.info.unlp.edu.ar/" class="text-white">Licenciatura en Informática de la Universidad Nacional de La Plata.</a>';
    }
    switch (document.documentElement.currentpage) {
        case 'main.html':
            if (lang === 'en') {
                document.getElementById('main-title').textContent = 'What is AccesaWeb?';
                document.getElementById('main-description').textContent = 'AccesaWeb is a tool designed to consider, assist, and include users within their disability context, adapting to their various forms of interaction and navigation. It offers, completely free of charge, a set of useful and relevant features integrated into a single, accessible, comprehensive, and effective platform. Additionally, it complies with WCAG accessibility guidelines and contributes to meeting accessibility laws, ensuring the right to access information and content on websites.';
            } else {
                document.getElementById('main-title').textContent = '¿Qué es AccesaWeb?';
                document.getElementById('main-description').textContent = 'AccesaWeb es una herramienta diseñada para considerar, asistir e incluir a las personas usuarias en su contexto de discapacidad, adaptándose a sus diversas formas de interacción y navegación. Ofrece, de manera completamente gratuita, un conjunto de funcionalidades útiles y relevantes, integradas en una plataforma única, accesible, completa y eficaz. Además, cumple con las pautas de accesibilidad WCAG y contribuye al cumplimiento de la ley de accesibilidad, garantizando el derecho de acceso a la información y contenido de las páginas web.';
            }
            break;
        case 'download.html':
            if (lang === 'en') {
                document.getElementById('title-download').textContent = 'Get AccesaWeb';
                document.getElementById('btn-download-zip').innerHTML = '<i class="bi bi-file-zip"></i> Download ZIP';
                document.getElementById('desc-download-zip').innerHTML = '1. Unzip the file<br/> 2. Open the browser extension manager by typing "chrome://extensions/" (without the double quotes) in the address bar.<br/> <img src="images/captura1_en.png" alt="Gestor de extensiones del navegador" class="img-fluid mb-4"/> 3. In case it is disabled, check the "Developer mode" option.<br/> <img src="images/captura2_en.png" alt="Developer mode" class="img-fluid mb-4"/> 4. Click on "Load unpacked" and select the AccesaWeb folder.<br/> <img src="images/captura3_en.png" alt="Load unpacked" class="img-fluid mb-4"/> 5. Done! You now have AccesaWeb in your browser. As a recommendation, you can pin it to the navigation bar and by clicking on the icon <br/> you will enter the AccesaWeb configuration menu.<br/> <img src="images/captura4_en.png" alt="Menú de configuración de AccesaWeb" class="img-fluid"/>';
            } else {
                document.getElementById('title-download').textContent = 'Obtener AccesaWeb';
                document.getElementById('btn-download-zip').innerHTML = '<i class="bi bi-file-zip"></i> Descargar ZIP';
                document.getElementById('desc-download-zip').innerHTML = '1. Descomprima el archivo<br/> 2. Abra el gestor de extensiones del navegador escribiendo "chrome://extensions/" (sin las comillas dobles) en la barra de direcciones.<br/> <img src="images/captura1.png" alt="Gestor de extensiones del navegador" class="img-fluid mb-4"/> 3. En caso de que esté desactivado, marque la opción "Modo desarrollador".<br/> <img src="images/captura2.png" alt="Modo desarrollador" class="img-fluid mb-4"/> 4. Haz click en "Cargar descomprimido" y seleccione la carpeta AccesaWeb.<br/> <img src="images/captura3.png" alt="Cargar descomprimida" class="img-fluid mb-4"/> 5. ¡Listo! Ya tiene AccesaWeb en su navegador, como recomendacion puede anclarlo a la barra de navegacion y al hacer click sobre el icono <br/> entrará al menu de configuracion de AccesaWeb.<br/> <img src="images/captura4.png" alt="Menú de configuración de AccesaWeb" class="img-fluid"/>';
            }
        break;
        case 'developers.html':
            if (lang === 'en') {
                document.getElementById('card-text-1').innerHTML = 'Bachelor of Computer Science <br/> e-mail: miguelcastillo1992lp@gmail.com';
                document.getElementById('card-text-2').innerHTML = 'Bachelor of Computer Science <br/> e-mail: emi.maartinez@gmail.com';
            } else {
                document.getElementById('card-text-1').innerHTML = 'Licenciado en Informática <br/> e-mail: miguelcastillo1992lp@gmail.com';
                document.getElementById('card-text-2').innerHTML = 'Licenciada en Informática <br/> e-mail: emi.maartinez@gmail.com';
            }
        break;
        case 'docs.html':
            if (lang === 'en') {
                document.getElementById('docs-title').textContent = 'How to use the plugin features';
                document.getElementById('docs-desc').innerHTML = 'AccesaWeb offers two forms of interaction: through voice commands or through a settings menu.<br/> To customize your browser to your preferences, simply select the desired changes and they will be automatically saved. If you opt for voice navigation, make sure to activate this option from the menu. Once enabled, you will be able to interact and navigate using voice commands.<br/> If at any time you wish to restore the browser to its original settings, you can easily do so with the "Reset settings" button, which will load the default values.';
            } else {
                document.getElementById('docs-title').textContent = 'Como utilizar las funcionalidades del complemento';
                document.getElementById('docs-desc').innerHTML = 'AccesaWeb ofrece dos formas de interacción: a través de comandos de voz o  mediante un menú de configuración.<br/> Para personalizar tu navegador según tus preferencias, simplemente selecciona los cambios deseados y se guardarán automáticamente. Si optas por la navegación por voz, asegúrate de activar esta opción desde el menú. Una vez habilitada, podrás interactuar y navegar utilizando comandos de voz.<br/> Si en algún momento deseas restaurar el navegador a su configuración original, puedes hacerlo fácilmente con el botón "Restablecer configuración", que cargará los valores por defecto.';
            }
            break;
    }
}

async function loadHTML(archivo) {
    try {
        const response = await fetch(archivo); // Reemplaza 'archivo.html' con la ruta de tu archivo
        const html = await response.text();
        document.getElementById('content').innerHTML = html;
        document.documentElement.currentpage = archivo;
        loadLanguaje(document.documentElement.lang);
    } catch (error) {
        console.error('Error al cargar el archivo HTML:', error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadHTML('main.html')
});

document.getElementById('language-btn').addEventListener('click', () => {
    changeLanguaje()
});

