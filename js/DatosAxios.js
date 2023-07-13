export function ObtenerdatosdeHoy(opciones) {
        //? PROCESO GET VALORES DEL DIA
        axios.get('https://mindicador.cl/api')
        .then(response => {
          // Procesar la respuesta exitosa
          const data = response.data;
          const vUf = document.getElementById("vUf");
          const vDolar = document.getElementById("vDolar");
          const vUtm = document.getElementById("vUtm");
          vUf.textContent = new Intl.NumberFormat('es-ES', opciones).format(data.uf.valor);
          vDolar.textContent = new Intl.NumberFormat('es-ES', opciones).format(data.dolar.valor);
          vUtm.textContent = new Intl.NumberFormat('es-ES', opciones).format(data.utm.valor);
        })
        .catch(error => {
          // Manejar el error
          console.error('Ocurrió un error al obtener los datos:', error);
          vUf.textContent = new Intl.NumberFormat('es-ES', opciones).format("0");
          vDolar.textContent = new Intl.NumberFormat('es-ES', opciones).format("0");
          vUtm.textContent = new Intl.NumberFormat('es-ES', opciones).format("0");
        });
}