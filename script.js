const render = () => {

    const formulario = document.querySelector("#Formulario");
    const mensaje = document.querySelector("#mensaje");

    formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombreValue = e.target.nombre.value;
    const apellidoValue = e.target.apellido.value;
    const edadValue = e.target.edad.value;


    mensaje.innerHTML = `El nombre de la persona es ${nombreValue}, su apellido es ${apellidoValue} y su edad es ${edadValue} años.`;
    });
};


document.addEventListener("DOMContentLoaded",render);