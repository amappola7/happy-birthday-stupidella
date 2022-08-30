const botonTarjetaCumpleaños = document.querySelector(".tarjeta-cumpleaños-boton");
const botonSiguienteScreen2 = document.querySelector(".siguiente-screen-2");
const botonSiguienteScreen3 = document.querySelector(".siguiente-screen-3");
const botonSiguienteScreen4 = document.querySelector(".siguiente-screen-4");
const botonGorro = document.querySelector(".gorro-boton");
const botonPastel = document.querySelector(".pastel-boton");
const botonRegalo = document.querySelector(".regalo-boton");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3");
const screen4 = document.querySelector(".screen4");
const screen5 = document.querySelector(".screen5");
const sectionMensajeGorro = document.querySelector(".mensaje-gorro");
const sectionMensajePastel = document.querySelector(".mensaje-pastel");
const sectionMensajeRegalo = document.querySelector(".mensaje-regalo");
const cerrarMensajeGorro = document.querySelector(".cerrar-mensaje-gorro");
const cerrarMensajePastel = document.querySelector(".cerrar-mensaje-pastel");
const cerrarMensajeRegalo = document.querySelector(".cerrar-mensaje-regalo");

botonTarjetaCumpleaños.addEventListener("click", () => {
  screen1.style.display = "none";
  screen2.style.display = "flex";
})

botonSiguienteScreen2.addEventListener("click", () => {
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "flex";
})

botonSiguienteScreen3.addEventListener("click", () => {
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "flex";
})

botonSiguienteScreen4.addEventListener("click", () => {
  screen1.style.display = "none";
  screen2.style.display = "none";
  screen3.style.display = "none";
  screen4.style.display = "none";
  screen5.style.display = "flex";
})

botonGorro.addEventListener("click", () => {
  screen4.style.display = "none";
  sectionMensajeGorro.style.display ="flex"
});

botonPastel.addEventListener("click", () => {
  screen4.style.display = "none";
  sectionMensajePastel.style.display ="flex"
});

botonRegalo.addEventListener("click", () => {
  screen4.style.display = "none";
  sectionMensajeRegalo.style.display ="flex"
});

cerrarMensajeGorro.addEventListener("click", () => {
  screen4.style.display = "flex";
  sectionMensajeGorro.style.display ="none"
})

cerrarMensajePastel.addEventListener("click", () => {
  screen4.style.display = "flex";
  sectionMensajePastel.style.display ="none"
})

cerrarMensajeRegalo.addEventListener("click", () => {
  screen4.style.display = "flex";
  sectionMensajeRegalo.style.display ="none"
})