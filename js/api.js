let graficoFinanciero;

import { ObtenerdatosdeHoy} from './DatosAxios.js';

document.addEventListener("DOMContentLoaded", () => {

// const opciones = {
//     style: 'decimal',
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2
//     };

//     //? PROCESO GET VALORES DEL DIA
//     axios.get('https://mindicador.cl/api')
//     .then(response => {
//       // Procesar la respuesta exitosa
//       const data = response.data;
//       const vUf = document.getElementById("vUf");
//       const vDolar = document.getElementById("vDolar");
//       const vUtm = document.getElementById("vUtm");
//       vUf.textContent = new Intl.NumberFormat('es-ES', opciones).format(data.uf.valor);
//       vDolar.textContent = new Intl.NumberFormat('es-ES', opciones).format(data.dolar.valor);
//       vUtm.textContent = new Intl.NumberFormat('es-ES', opciones).format(data.utm.valor);
//     })
//     .catch(error => {
//       // Manejar el error
//       console.error('Ocurrió un error al obtener los datos:', error);
//       vUf.textContent = new Intl.NumberFormat('es-ES', opciones).format("0");
//       vDolar.textContent = new Intl.NumberFormat('es-ES', opciones).format("0");
//       vUtm.textContent = new Intl.NumberFormat('es-ES', opciones).format("0");
//     });

    ObtenerdatosdeHoy();
    GeneraGrafico("uf");

});

// Seleccionar el elemento <select> por su ID
const selectElement = document.getElementById('select');

// Asignar el evento onchange
selectElement.addEventListener('change', SelecIndicador);


function SelecIndicador(event) {
  // Evita la recarga de la página
  event.preventDefault(); 

  const elementoSeleccionado = event.target; // Obtiene el elemento select
  const valorSeleccionado = elementoSeleccionado.value; // Obtiene el valor seleccionado

  console.log("Elemento seleccionado:", elementoSeleccionado);
  console.log("Valor seleccionado:", valorSeleccionado);
  //alert(valorSeleccionado);
  
  GeneraGrafico(valorSeleccionado);
}


function GeneraGrafico(TipoIndicador /*: string */){

  const url = 'https://mindicador.cl/api/' + TipoIndicador
  let labels = [];
  let values = [];


   // Muestra el mensaje de carga
   const loadingElement = document.getElementById("loading");
   loadingElement.style.display = "block";
 
  const getData = async () => {

  const response = await fetch(url);
  const dataGrafico = await response.json();

  labels = dataGrafico.serie.map(serie => serie.fecha).reverse();
  values = dataGrafico.serie.map(serie => serie.valor).reverse();
  loadingElement.style.display = "none";
};



if (graficoFinanciero) {
    graficoFinanciero.destroy();
}


getData().then(() => {
    const ctx = document.getElementById("myChart");
    graficoFinanciero = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Valores Diario - " + TipoIndicador,
            data: values,
          },
        ],
      },
    });
});

}
