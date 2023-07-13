# Proyecto DashboardAPI
Proyecto usando Chat JS con API de Indicadores Financieros (https://mindicador.cl/) en UDD Bootcamp.

Este es un servicio open source (web service) que entrega los principales indicadores económicos para Chile en formato JSON. Tanto los indicadores diarios como históricos para que desarrolladores puedan utilizarlos en sus aplicaciones o sitios web.


## Descripción

Este proyecto tiene como objetivo el consumir una API y relacionar los datos con la
librería Chart.js  El trabajo se desarrolla en un entorno Node.js con aplicaciones
de modularización.


## Construido con 🛠️

Herramientas utilizadas para crear el proyecto:

* HTML - Estructura del sitio web.
* CSS - Estilos y diseño visual, usando Pisco css
* JavaScript - Lógica y funcionalidad.
* Librerias con Axios y metodos fetch 
* DOM - Manipulación del árbol de objetos del documento.
* GitHub Pages para el despliegue de la pagina.

## Funcionalidad

* Primera parte obtiene el valor del día de 3 indicadores principales, UF, DOLAR y UTM.
  lo anterior se consume con Axios.

* La segunada parte se despliegua mediante una lista las opciones varios indicadores
  que el usuario puede elegir y asi obetener un gráfico de rendiento diario,anual o mensual dependiendo de la información recolectada.



