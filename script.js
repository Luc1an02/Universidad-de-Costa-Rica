
const mallaContainer = document.getElementById("malla-container");
let totalCreditos = 0;

data.forEach((ciclo, index) => {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    divCiclo.innerHTML = `<h2>Ciclo ${index + 1}</h2>`;
    ciclo.forEach(curso => {
        const divCurso = document.createElement("div");
        divCurso.className = "curso";
        divCurso.innerHTML = \`
            <label>
                <input type="checkbox" onchange="toggleCurso(this, \${curso.creditos})">
                \${curso.nombre} (\${curso.codigo}) - \${curso.creditos} créditos
            </label>
        \`;
        divCiclo.appendChild(divCurso);
    });
    mallaContainer.appendChild(divCiclo);
});

function toggleCurso(checkbox, creditos) {
    if (checkbox.checked) {
        totalCreditos += creditos;
        checkbox.parentElement.parentElement.classList.add("aprobado");
    } else {
        totalCreditos -= creditos;
        checkbox.parentElement.parentElement.classList.remove("aprobado");
    }
    document.getElementById("creditos-completados").textContent = totalCreditos;
}
