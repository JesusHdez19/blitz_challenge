# BlitzChallenge
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4 pero se hizo la migracion a Angular 17.3 .

## Para comenzar
1. Clonar el repositorio utilizando git clone
2. Abrir el proyecto en el gestor de codigo preferido
3. Abrir una terminal y correr npm install o npm i
4. Lanzar el servidor con ng s

El proyecto consiste en 4 vistas, que se describiran a continuacion: 

## Home
Una simple bienvenida con un resumen de las 3 funcionailidades que encontraras en el portal

## Lista
Esta vista es practicamente un to do list, con 3 columnas para cada uno de los progresos de las tareas: por hacer, en progreso y terminadas. A esta vista se le agregaron funcionalidades como el agregar una tarea nueva, eliminar una tarea en cualquiera de las fases y actualizar alguna tarea solo si aun no se ha comenzado. De la misma forma, de agrego un drag and drop para poder mejorar la experiencia del usuario al momento de estar cambiando los estados de las tareas. 


## Clima
Al entrar en esta ruta el componente te pedira darle permisos para obtener tu ubicacion en tiempo real en caso que no se le concedan los permisos el componente arrojara por default el clima de la Ciudad de Mexico. En esta parte me base un poco en la aplicacion de clima del iphone, donde en la parte de arriba un poco mas grande sale el clima actual al momento de consultar. Por debajo de esta, se encuentra una tabla con el clima que tendra en cada una de las horas en el transcurso del dia en el que se encuentra en este momento. Mas abajo tendremos tambien una preview de los climas durante los siguientes 8 dias de la semana con sus minimos y maximos en las temperaturas. Por ultimo, se penso tambien en poder cambiar la ubicacion para poder estar consultando el clima, por esto, se agrego un input en la parte superior derecha el cual buscara en la api el clima de las ciudades, estados, paises o codigos postales que se les consulte.

## Calendario de tareas
Se agrego un calendario con el cual podras interactuar agregando y eliminando eventos que tengas por hacer en los proximos dias, semanas o meses. 
Para agregar un evento en el calendario basta con dar click en el dia que lo quieres agregar y confirmar el nombre del evento en el modal que aparecera. Para eliminar este evento, se tendra que volver a dar click en él y confirmar la eliminacion en el modal que aparecera.

## Tecnolgias utilizadas
Angular 17, Material angular, Bootstrap, Css, Typescript, GitHub, FullCalendarIo
