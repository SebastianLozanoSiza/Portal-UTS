console.log(students);

/* 5. Selectores */
const selectorNombre = document.querySelector('#nombre');
const selectorExperto = document.querySelector('#experto');
const selectorSueldo = document.querySelector('#sueldo');
const selectorNivelIngles = document.querySelector('#nivelIngles');


/* 1. Llenar dinamicamente select de nombres */
students.forEach((student) => {
    const option = document.createElement('option');
    option.value = student.nombre;
    option.textContent = student.nombre;
    document.querySelector('#nombre').appendChild(option);
})

/* 2. Llenar dinamicamente select con sueldos en dolares */
const max = 100;
const min = max - 90;

for (let i = min; i <= max; i++) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    document.querySelector('#sueldo').appendChild(opcion);
}

/* 4. Guardar valores seleccionados en un objeto literal */
const criteriosSeleccionados = {
    nombre: "",
    experto: "",
    ingles: "",
    sueldo: "",
}

/* 6. Event listeners filtros */
selectorNombre.addEventListener('input', (e) => {
    criteriosSeleccionados.nombre = e.target.value;
    /* 7. Llamado a funcion de alto nivel de filtros */
    filtrarUteista();
})

selectorExperto.addEventListener('input', (e) => {
    criteriosSeleccionados.experto = e.target.value;
    filtrarUteista();
})

selectorSueldo.addEventListener('input', (e) => {
    criteriosSeleccionados.sueldo = e.target.value;
    filtrarUteista();
})

selectorNivelIngles.addEventListener('input', (e) => {
    criteriosSeleccionados.ingles = e.target.value;
    filtrarUteista();
})

/* 3. Event listeners DOM*/
document.addEventListener('DOMContentLoaded', () => {
    showStudents(students);
    console.log(criteriosSeleccionados);
})

function showStudents(students) {
    const cardContainer = document.querySelector('#tarjetas');
    limpiar();
    students.forEach((student) => {
        const {imagen, nombre, experto, ingles, sueldo} = student
        const studentHtml = document.createElement('p');
        studentHtml.innerHTML = `
            <figure class="student">
                <img src="img/${imagen}" alt="Student" />
                    <div class="student-box">
                        <h3>${nombre}</h3>
                        <ul class="student-details">
                            <li>
                                <span>${experto}</span>
                            </li>
                            <br />
                            <li>
                                <strong>${ingles}</strong>
                            </li>
                        </ul>
                        <div class="student-price">
                            <strong>$${sueldo}/hora</strong>
                            <a href="#" class="btn btn--small">Contratar</a>
                        </div>
                    </div>
            </figure>
        `;
        cardContainer.appendChild(studentHtml);
    })
}

/* 7.1 Declaración de funcion filter de alto nivel */
function filtrarUteista(){
    const resultado = students
    .filter(filtrarNombre)
    .filter(filtrarExperto)
    .filter(filtrarSueldo)
    .filter(filtrarNivelIngles)
    console.log(resultado);
    showStudents(resultado);
    
}

function filtrarNombre(student){
    if (criteriosSeleccionados.nombre) {
        return student.nombre === criteriosSeleccionados.nombre
    }else{
        return student
    }
}

function filtrarExperto(student){
    if (criteriosSeleccionados.experto) {
        return student.experto === criteriosSeleccionados.experto
    }else{
        return student
    }
}
function filtrarSueldo(student){
    if (criteriosSeleccionados.sueldo) {
        return student.sueldo === parseInt(criteriosSeleccionados.sueldo, 10)
    }else{
        return student
    }
}
function filtrarNivelIngles(student){
    if (criteriosSeleccionados.ingles) {
        return student.ingles === criteriosSeleccionados.ingles
    }else{
        return student
    }
}

function limpiar(){
    let z = document.querySelectorAll('p');
    for(let v = 0; v < z.length; v++){
        z[v].remove();
    }
}