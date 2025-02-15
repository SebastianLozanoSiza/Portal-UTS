console.log(students);

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

/* 3. Event listeners */
document.addEventListener('DOMContentLoaded', () => {
    showStudents(students);
})

function showStudents(students) {
    const cardContainer = document.querySelector('#tarjetas');
    students.forEach((student) => {
        const studentHtml = document.createElement('p');
        studentHtml.innerHTML = `
            <figure class="student">
                <img src="img/${student.imagen}" alt="Student" />
                    <div class="student-box">
                        <h3>${student.nombre}</h3>
                        <ul class="student-details">
                            <li>
                                <span>${student.experto}</span>
                            </li>
                            <br />
                            <li>
                                <strong>${student.ingles}</strong>
                            </li>
                        </ul>
                        <div class="student-price">
                            <strong>$${student.sueldo}/hora</strong>
                            <a href="#" class="btn btn--small">Contratar</a>
                        </div>
                    </div>
            </figure>
        `;
        cardContainer.appendChild(studentHtml);
    })
}