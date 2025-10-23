Primero, instalamos Docker en el computador.

Docker es un programa que permite crear "contenedores", que funcionan
como pequeñas cajas donde podemos instalar y correr programas sin
afectar el sistema operativo.

En este caso, lo usamos para instalar tres bases de datos diferentes:
MySQL, MariaDB y PostgreSQL.

Desde la terminal o CMD, escribimos los comandos para descargar las
imágenes oficiales de cada base de datos:

docker pull mysql

docker pull mariadb

docker pull postgres

Esto preparó el entorno para crear los contenedores, que son los
espacios donde se ejecutan las bases de datos.

3\. Creación de los contenedores

Una vez descargadas las imágenes, creamos los contenedores con comandos
que asignan nombre, puerto y contraseña:

docker run -d \--name mysql_container -e MYSQL_ROOT_PASSWORD=12345 -p
3306:3306 mysql

docker run -d \--name mariadb_container -e MARIADB_ROOT_PASSWORD=12345
-p 3307:3306 mariadb

docker run -d \--name postgres_container -e POSTGRES_PASSWORD=12345 -p
5432:5432 postgres

![](media/2.jpg){width="6.0in" height="1.4468077427821522in"}

Cada contenedor se ejecuta de forma independiente y nos permite usar
cada base de datos sin conflictos.

Para comprobar que los contenedores estaban funcionando, usamos:

docker ps

Esto mostró todos los contenedores activos, sus nombres, puertos y
estado.

Si queríamos ver todos los contenedores, incluso los que estaban
detenidos, usamos:

docker ps -a

Así confirmamos que MySQL, MariaDB y PostgreSQL estaban corriendo
correctamente.

![](media/5.jpg){width="6.0in" height="0.5671872265966754in"}

5\. Conexión mediante herramientas externas

Después, conectamos los contenedores a herramientas de gestión de bases
de datos:

\- DBeaver

\- HeidiSQL

\- Beekeeper Studio

Para cada base de datos colocamos:

MySQL y MariaDB:

Host: localhost

Puerto: 3306 (MySQL) / 3307 (MariaDB)

Usuario: root

Contraseña: 12345

PostgreSQL:

Host: localhost

Puerto: 5432

Usuario: postgres

Contraseña: 12345

De esta manera, pudimos conectarnos y ver las bases de datos funcionando
desde la interfaz de los programas.

6\. Creación de bases de datos

Dentro de cada contenedor creamos tres bases de datos, sumando un total
de nueve:

MySQL:

CREATE DATABASE colegio;

CREATE DATABASE empresa;

CREATE DATABASE tienda;

MariaDB:

CREATE DATABASE hospital;

CREATE DATABASE universidad;

CREATE DATABASE gimnasio;

PostgreSQL:

CREATE DATABASE biblioteca;

CREATE DATABASE restaurante;

CREATE DATABASE videojuegos;

Cada base se creó correctamente y se pudo visualizar desde las
herramientas externas, confirmando que todo funcionaba bien.

![](media/8.jpg){width="3.0in"
height="0.6820308398950131in"}![](media/11.jpg){width="3.0in"
height="0.759825021872266in"}![](media/14.jpg){width="3.0in"
height="2.1539052930883638in"}

Aclarando, este trabajo está hecho con un computador prestado, debido a
que por mi cuenta no tengo pc, todo el mes de octubre estoy sin pc,
espero no haya inconvenientes con ello
