//agregamos nuestras variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-curso');

cargarEventListeners();
function cargarEventListeners(){
    //
    listaCursos.addEventListener('click',agregarCurso);
}

function agregarCurso(e){
    if (e.target.classList.contains('agregar-carrito')){
        console.log('Agregando al carrito...');
    }
    
}