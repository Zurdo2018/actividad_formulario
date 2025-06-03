// Mapa de ciudades por país
var ciudadesPorPais = {
  ecuador: ["Quito", "Guayaquil", "Cuenca"],
  chile: ["Santiago", "Valparaíso", "Concepción"]
};

const paisSelect = document.getElementById("pais");
const ciudadSelect = document.getElementById("ciudad");
const modal = document.getElementById("popupModal");
const closeModalBtn = document.getElementById("closeModal");
const popupMessage = document.getElementById("popupMessage");
ciudadSelect.disabled = true;



paisSelect.addEventListener("change", () => {
  const paisSeleccionado = paisSelect.value;
  // Limpiar ciudades actuales
  ciudadSelect.innerHTML = '<option value="" disabled selected>Selecciona una ciudad</option>';

  if (paisSeleccionado && ciudadesPorPais[paisSeleccionado]) {
    ciudadesPorPais[paisSeleccionado].forEach(ciudad => {
      const option = document.createElement("option");
      option.value = ciudad.toLowerCase();
      option.textContent = ciudad;
      ciudadSelect.appendChild(option);
    });
    ciudadSelect.disabled = false;
  } else {
    ciudadSelect.disabled = true;
  }
});

function registrar() {

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const pais = paisSelect.options[paisSelect.selectedIndex].text;
  const ciudad = ciudadSelect.options[ciudadSelect.selectedIndex].text;


  //alert(`Registro exitoso:\n\nNombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nPaís: ${pais}\nCiudad: ${ciudad}`);

  popupMessage.innerHTML = `
  <div style="text-align: center; font-size: 18px; margin-bottom: 10px;">
    <strong>Registro exitoso</strong>
  </div>
  <strong>Nombre:</strong> ${nombre}<br>
  <strong>Apellido:</strong> ${apellido}<br>
  <strong>Email:</strong> ${email}<br>
  <strong>País:</strong> ${pais}<br>
  <strong>Ciudad:</strong> ${ciudad}`; 
  modal.style.display = "block";
  ciudadSelect.disabled = true;

}


document.getElementById("registroForm").addEventListener("submit", (e) => {
  e.preventDefault();
  registrar();
  e.target.reset();

});


closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
