# SebastiánCristianoREADME

## RESUMEN DE LOS VIDEOS.

A lo largo de los videos aprendí que Docker es una herramienta que permite guardar una aplicación con todo lo que necesita para funcionar dentro de un contenedor, como si fuera una cajita que puedes usar en cualquier computador sin errores.  

Antes, cuando se quería mover un programa a otro equipo, se usaban máquinas virtuales. Estas eran pesadas, lentas y consumían muchos recursos. En cambio, Docker es más rápido y liviano, ya que aprovecha el sistema que ya está funcionando en lugar de crear uno nuevo.  

También aprendí cómo se crean estas “cajitas”. Para eso se utiliza un archivo llamado Dockerfile, donde se indican los pasos que debe seguir Docker para construir la aplicación. Es como una receta donde se dice qué ingredientes necesita y cómo debe prepararse.  

Otro punto importante es Docker Compose, que permite manejar varios contenedores al mismo tiempo. Por ejemplo, una aplicación puede necesitar una parte para mostrar la web y otra para guardar los datos. Con Docker Compose, se puede definir todo en un solo archivo y ponerlo a funcionar con un solo comando.  

Además, conocí los volúmenes, que sirven para que los datos no se pierdan aunque borremos los contenedores, y también aprendí sobre Docker Hub, un espacio donde se pueden guardar y compartir las imágenes creadas, o descargar las de otros usuarios.  

En conjunto, Docker hace que trabajar con programas sea más ordenado, fácil y rápido. Es una herramienta que mejora la forma en que se crean y comparten aplicaciones, y ayuda a evitar errores entre distintos entornos.


## REFLEXIONES PERSONALES 

Lo que más me gustó de Docker es su practicidad. Me pareció muy útil poder crear un entorno completo que se puede llevar a cualquier lugar y que siempre funciona igual. Eso evita los problemas clásicos de “en mi computador sí corre, pero en el tuyo no”.  

La principal ventaja que encuentro es la organización. Todo queda limpio, sin archivos desordenados ni instalaciones complicadas. También me parece ideal para trabajar en equipo, porque todos pueden usar exactamente el mismo entorno.  

El desafío, al principio, fue entender cómo se conectan los contenedores entre sí. Sin embargo, con la práctica se vuelve más fácil, y los beneficios compensan el tiempo que toma aprenderlo.  

Creo que Docker tiene aplicación práctica en cualquier proyecto: desde páginas web simples hasta sistemas grandes. Permite mantener la estabilidad y ahorrar tiempo, sobre todo cuando se necesita probar o compartir proyectos rápidamente.


## EJEMPLO PRÁCTICO: “Mi página web en Docker”

Imaginemos que quiero crear una página web sencilla usando Docker.  
Para eso, creo un archivo llamado **Dockerfile** con este contenido:

```dockerfile
# Indico la base que usaré
FROM nginx:latest

# Copio mis archivos al contenedor
COPY ./mi_pagina /usr/share/nginx/html
```

En la carpeta “mi_pagina” tengo mis archivos HTML y CSS.  
Luego, en la terminal, ejecuto estos comandos:

```bash
# 1. Construyo la imagen con un nombre
docker build -t mi_pagina_web .

# 2. Creo y ejecuto el contenedor
docker run -d -p 8080:80 mi_pagina_web
```

Con esto, Docker crea una “cajita” con mi página web adentro y la deja lista para abrir en cualquier navegador entrando a:

```
http://localhost:8080
```

Así puedo ver mi página funcionando, sin necesidad de instalar un servidor manualmente.  
Si quiero compartirla con otra persona, solo tengo que enviarle mi imagen o mi Dockerfile, y podrá verla igual en su computador.  

Este ejemplo demuestra cómo Docker hace que algo tan simple como mostrar una página web se vuelva rápido, limpio y sin complicaciones.


## RECURSOS ADICIONALES CONSULTADOS 

- Documentación oficial de Docker: [https://docs.docker.com/](https://docs.docker.com/)
- Artículo “Qué es Docker y cómo funciona” (FreeCodeCamp en español): [https://www.freecodecamp.org/espanol/news/](https://www.freecodecamp.org/espanol/news/)
- Canal de YouTube “Fazt Code” – Introducción a Docker: [https://www.youtube.com/@FaztCode](https://www.youtube.com/@FaztCode)
- Curso “Docker para principiantes” – MiduDev: [https://www.youtube.com/@midudev](https://www.youtube.com/@midudev)
- Tutorial “Docker desde cero” – Código Facilito: [https://codigofacilito.com/](https://codigofacilito.com/)
