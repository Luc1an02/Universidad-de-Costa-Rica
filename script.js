const mallaContainer = document.getElementById("malla-container");
let totalCreditos = 0;

data.forEach((ciclo, index) => {
  const divCiclo = document.createElement("div");
  divCiclo.className = "ciclo";
  divCiclo.innerHTML = `<h2>Ciclo ${index + 1}</h2>`;

  ciclo.forEach((curso, i) => {
    const divCurso = document.createElement("div");
    divCurso.className = "curso";
    const checkboxId = `curso-${index}-${i}`;

    divCurso.innerHTML = `
      <label for="${checkboxId}">
        <input type="checkbox" id="${checkboxId}" onchange="toggleCurso(this, ${curso.creditos})">
        ${curso.nombre} (${curso.codigo}) - ${curso.creditos} créditos
      </label>
    `;

    divCiclo.appendChild(divCurso);
  });

  mallaContainer.appendChild(divCiclo);
});

function toggleCurso(checkbox, creditos) {
  if (checkbox.checked) {
    totalCreditos += creditos;
    checkbox.closest(".curso").classList.add("aprobado");
  } else {
    totalCreditos -= creditos;
    checkbox.closest(".curso").classList.remove("aprobado");
  }
  document.getElementById("creditos-completados").textContent = totalCreditos;
}
