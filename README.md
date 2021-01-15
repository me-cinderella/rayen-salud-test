# rayen-salud-test

NOTA: todo el desarrollo se encuentra en la rama `develop`. La estructura de ramas esta basada en gitflow con nombres: `feature/NOMBRE-FEATURE`

## Levantar y ejecutar con Docker

Para levantar el proyecto se debe tener instalado en el equipo `Docker` y `Docker compose`

instalar docker: https://docs.docker.com/engine/install/ubuntu/
instalar docker-compose: https://docs.docker.com/compose/install/

En la raiz del proyecto (dentro del directorio react-redux-project) se debe ejecutar el comando `docker-compose up` y esperar que se construya la imagen y posteriormente se levante el servidor web con la aplicacion

Dicha aplicacion sera levantada de manera local quedando ubicada en la url indicada por el mismo contenedor una vez lista para su uso

Puede se puede visualizar en: 
    * http://172.17.0.2:3000/

## Levantar y ejecutar con npm

Para levantar el proyecto se debe tener instalado en el equipo `nodejs` y `npm`

instalar nodejs: https://nodejs.org/es/download/

En el directorio `app` dentro de la raiz (directorio react-redux-project) se debe ejecutar:

1. npm install
2. npm start

el proyecto se abrira en: http://localhost:3000/

## La aplicacion 
Dentro de la aplicacion existe un menu que permite navegar a las soluciones de los problemas presentados para este test siendo

    - home:
        - url: "http://localhost:3000/"
        - Permite visualizar lista de tutoriales
        - Permite eliminar un tutorial particular
        - Permite eliminar todos los tutoriales
        - Permite realizar busquedas por nombre entre los tutoriales disponibles
        - Permite dirigirse al formulario para agregar tutoriales
    - detalle tutorial
        - url: "http://localhost:3000/tutorial/:id"
        - Permite visualizar la data del tutorial segun id
        - Permite editar el tutorial
    - agregar
        - url: "http://localhost:3000/agregar"
        - Permite ingresar un nuevo tutorial