## :book: Clase 5 - 14 Junio

Temas:

Base de datos

---

## :star: Intalación - conexion a base de datos

- **MySQL** es el servidor

- **Heidi**, **Workbench** son el cliente

- Instalo con : ``` > npm install mysql ```

- A la altura de la raiz creo el archivo **db.js** donde voy a tener las cosas para la base de datos y:

-> Requerimos el modulo:
```JavaScript
const mysql = require('mysql');
```

->> Armamos la conexion:

```JavaScript
const connection = mysql.createConnection({
  host: 'localhost', // 127.0.0.1
  user: 'root', // usuario de la base de datos
  password: '', // password de la base de datos
  database: 'cac_22006'
});
```

->> Nos conectamos:

```JavaScript
connection.connect(error => {
  if (error) { throw error}
});
```

->> Lo exporto para poder usarlo fuera del modulo :

```JavaScript
module.exports = connection;
```

->> En terminal ```> node nd.js```

---

## :star: Uso la conexion par ahacer una consulta en la base de datos

Es **asincrono** se manda la consulta y cuando esta la respuesta llega.

Como es un callback, tiene como parametro el error y el resultado, asi de tener un error sale la excepcion y sino llega el resultado con la respuesta de la consulta de la base de datos.

```JavaScript
connection.query('SELECT * FROM productos', (error, result) => {
  if (error) {  throw error }
  console.log(results);
});
```

---

## :star: Traemos la lista de productos desde la base de datos

En **prudctos.js**:

```JavaScript
const express = require('express');
const router = express.Router();

const producto = require('../productos');
const connection = require('../db');

router.get('/productos', (req, res) => {
  connection.query('SELECT * FROM productos',  (error, results) => {
    if (error) { throw error }

    res.render('productos/index', { productos: results });
  })
});

router.get('/productos/:codigo', (req, res) => {
  connection.query('SELECT * FROm productos WHERe codigo = ?',
    [ req.params.codigo],
    (error, results) => {
      if (error) { throw error }
      //res.send(results);
      res.render('productos/show', { productos: results[0] })
  });
});
```

->> Y en **shows** debo cambiar como tengo en mi base de datos:

id -> codigo

name -> nombre

description -> descripcion

```
<% if (producto) { %>
  <h2>Codigo: <%= producto.codigo %></h2>
  <h3><%= producto.nombre %></h3>
  <p><%= producto.descripcion %></p>
<% } else { %>
  <p>No existe el producto</p>
<% }%>
```

---

## CRUD

**C**reate, **r**ead, **u**pdate, **d**elete


### Para crear productos

En > productos > index.ejs agrego : ```<a href="/productos/create"> Crear producto</a>``` para tener un link y poder crear un nuevo producto. 

-> En productos.js:

```JavaScript
// para crear los poductos
router.get('productos/create', (req, res) => {
  res.render('productos/create');
})
```

->> En views > productos > **create.ejs** y aca armo un formulario para ingresar los datos y crear el producto:

```
<from action="/productos/store" method="post">
  <div>
    <label for="codigo">Codigo:</label>
    <input type="text" id="codigo" name="codigo">
  </div>
  <div>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
  </div>
  <div>
    <label for="descripcion">Descripcion:</label>
    <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
  </div>
  <div>
    <label for="categoria">Categoria:</label>
   <select name="" id="">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
   </select>
  </div>
  <div>
    <button type="submit">Guardar</button>
  </div>
</from>
```

->> En **productos.js**:

```JavaScript
// para insertar el producto en la base de datos
router.posrt('produtcos/store', (req,res) => {
  connection.query('INSERT INTO productos SET = ?', { 
    codigo: req.body.codigo,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria_id: req.body.categoria
  }, (error, results) => {
    if (error) { throw error }

    res.redirect('productos'); // una vez que ingreso el producto redirijo a la lista de los productos
  });
})
```

Tomamos los datos del formulario, hacemos la consulta por el codigo ingresado para traer los datos del producto y lo muestra.

---

- Para correr el proyecto: ```> npm run dev```

---
---

## :star: BASE DE DATOS

[**Laragoon**](https://laragon.org/)

- La [documentacion](https://laragon.org/docs/):

#### What is Laragon?

-Laragon is a portable, isolated, fast & powerful universal development environment for PHP, Node.js, Python, Java, Go, Ruby. It is fast, lightweight, easy-to-use and easy-to-extend.

-Laragon is great for building and managing modern web applications. It is focused on performance - designed around stability, simplicity, flexibility and freedom.

-Laragon is very lightweight and will stay as lean as possible. The core binary itself is less than 2MB and uses less than 4MB RAM when running.

-Laragon doesn’t use Windows services. It has its own service orchestration which manages services asynchronously and non-blocking so you’ll find things run fast & smoothly with Laragon.



#### Features

**Pretty URLs**

Use ```app.test``` instead of ```localhost/app```.

#### Portable

You can move Laragon folder around (to another disks, to another laptops, sync to Cloud,…) without any worries.

#### Isolated

Laragon has an isolated environment with your OS - it will keep your system clean.

#### Easy Operation

Unlike others which pre-config for you, Laragon auto-configs all the complicated things. That why you can add another versions of PHP, Python, Ruby, Java, Go, Apache, Nginx, MySQL, PostgreSQL, MongoDB,… effortlessly.

#### Modern & Powerful

Laragon comes with modern architect which is suitable to build modern web apps. You can work with both Apache & Nginx as they are fully-managed.

Also, Laragon makes things a lot easier:
Wanna have a Wordpress CMS? Just 1 click.
Wanna show your local project to customers? Just 1 click.
Wanna enable/disable a PHP extension? Just 1 click.

#### Note

Laragon is trully isolated & portable. However, you may need to use the installer as it will detect and install missing run-time components that are required to run C++ applications built using Visual Studio such as PHP, Apache for you.

#### How easy?

-Laragon is very easy to install & upgrade:

Just download the latest version and click Next, Next, Next...

-Laragon is very easy to use:

For almost time, it will work out-of-the-box that you don’t need to touch any configuration files.

-Laragon is very easy to extend:

You can add other services to your current stack by just extracting them to Laragon's bin folder.

#### Install Laragon

To start the journey with Laragon, just download the latest version and click *Next*, *Next*, *Next*  ... -> [https://laragon.org/download/](https://laragon.org/download/)


[Se puede instalar desde GitHub desde aca](https://github.com/leokhoa/laragon/releases) y sino desde la web esta el [**Laragoon - Full**](https://laragon.org/download/) o el **Laragoon - Portable**

---

Otras opciones para trabajar con Base de Datos:

->> Para MAC teniendo WAMPSERVER

->> Para Windows XAMPP

->> Capaz que se necesita el servidor para loq ue es **PHP MyAdmin** y también descargarse **Node** (mejor la version LTS, la más estable).


Las opcines son...

...  node + mysql (servidor de base de datos) + **workbench** (cliente para trabajar con la base de datos)

... xaamp + node

... laragoon

... HeidiSQL es otra alternativa a Workbench (Laragoon ya lo tiene instalado)

... si tiene LINUX o MAC otra opcion es **DBeaver** ya que Heidi es solo para windows.

---

## :star: Laragoon

Una vez que lo instalamos lo abrimos y vamos a tener disponible: PHP, Apache, MySQL (con el cliente **Heidi**), Nodejs. Tambien tenemos Web, DataBase, Terminal y Root.

Desde **Tools** > **Quick Add** podemos agregar varias cosas: MongoDB, Python, Java, Go, varias versiones de Node.



---

## :star: SQL

**Modelo entidad - relación**:

```
Entidades
    Atributos
Relaciones
    1 a n
        Categorias 1 tiene n Productos
    1 a 1
        Perfil 1 pertenece a 1 usuario
    N a n
        Usuarios n tiene n Roles
```

Cada **entidad** a a ser una **tabla**, cada una va a tener **atributos** que serán las **columnas** / **campos** (en las tablas) donde se van a almacenar los datos.


**HeidiSQL** (que está en Laragoon) es el cliente que se va a conectar a la base de datos.

- 1ro: Desde **Lagaroon** click en **START ALL** y va a acceder al **PUERTO 3306**.

- 2do: Hago click derecho y selecciono **MySQL** > **HeidiSQL**

- 3ro: Click en **Nueva** para crear una nueva conexion, vamos a tener los sigueintes datos:

Tipo de red: MariaDB or MyQSL

Nombre del host: 127.0.0.01 (local host) No tildamos ni pedir credenciales ni usar autenticacion de Windows

Usuario: root

Contraseña: rootroot

Puerto: 3306

No seleccionamos Protocolo cliente/servidor comprimido

Bases de datos: Separadas por punto y coma

Comentario : lo dejamos vacio

-> click en ABRIR

- 4to voy a usar HeidiSQL (como antes use workbench y PHPMyAdmin voy a tener todas mis bases de datos creadas anteriormente).

- 5to: creo una nueva base de datos, desde el panel de la izquierda donde veo mis bases de datos **desde el nombre del servidor** > **click derecho** > **crear nuevo**  > **base de datos**. Le damos el nombre **cac_22006** si haymas de una palabra se separa con **_** y en collation (la codificacion) tengo ya por default **utf8mb4_0900_ai_ci**. Abajo vamos a tener por linea de comando lo que vemos graficamente:

```SQL
CREATE DATABASE `cac_22006` /*!40100 COLLATE 'utf8mb4_0900_ai_ci' */
```

Para crear la base de dato usamos la palabra reservada **CREATE DATABASE**, pero por ejemplo en Workbench se usa **CREATE SCHEMA** luego entre back tiks (comillas francesas) va el **nombre de la base de datos** y a continuacion la codificaicón.

Y ahora en el listado de la izquierda ya veo la base de datos

- 6to: creamos la tabla, haciendo click en **cac_22006** > click derecho > **crear nuevo** > **tabla** y completamos con el nombre de la **entidad**(tabla) que suele ir en plural y si tengo mas de una palabra uso camelCase o uno con _ :

Nombre: categorias

-> luego click en **agregar** para insertar los campos y completamos:

| Nombre | Tipo de dato | Longitud | Sin signo | Permitir | Relle.. | Predeterminado | Comentario | Collation | Expresion | Virtualidad |
| ------ | ------------ | -------- | --------- | -------- | ------- | -------------- | ---------- | --------- | --------- | ----------- |
| nombre | VARCHAR |  50 | - | - | - | - | - | - | - | - |     
| descripcion | TEXT |  - | - | X | - | - | - | - | - | - |  


En código:

```SQL
CREATE TABLE `categorias` (
	`nombre` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`descripcion` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci'
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;
```

- 7mo: click en **GUARDAR** y creamos la tabla.


- 8vo: si vamos a **DATOS** ahi podemos ir agregando las categorias, con click en boton derecho > **insertar fila**. Como voy a hacer una tienda de cafe voy a inventar para **categoria**:

1 CAPSULAS

2 GRANOS

3 MOLIDO

En codigo:

```SQL
INSERT INTO `cac_22006`.`categorias` (`nombre`, `descripcion`) VALUES ('1_capsulas', 'capsulas de cafe');
INSERT INTO `cac_22006`.`categorias` (`nombre`, `descripcion`) VALUES ('2_granos', 'granos de cafe');
INSERT INTO `cac_22006`.`categorias` (`nombre`, `descripcion`) VALUES ('3_molido', 'cafe molido');
```



->> Falta al PRIMARY KEY en al tabla, la agrego:

| Nombre | Tipo de dato | Longitud | Sin signo | Permitir | Relle.. | Predeterminado | Comentario | Collation | Expresion | Virtualidad |
| ------ | ------------ | -------- | --------- | -------- | ------- | -------------- | ---------- | --------- | --------- | ----------- |
| nombre | VARCHAR |  50 | - | - | - | - | - | - | - | - |     
| descripcion | TEXT |  - | - | X | - | - | - | - | - | - |  
| id | INT |  - | X | - | - | AUTOINCREMENT | - | - | - | - |  

Para transformar el id en PK, click derecho > crear nuevo indice > PRIMARY

```SQL
CREATE TABLE `categorias` (
	`nombre` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`descripcion` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
;
```

Y ahora si voy a **datos** voy a ver las PK agregadas en mi tabla de CATEGORIAS


Para las String vamos a utilizar **VARCHAR** en el cual lo podemos decir cuantos caracteres va a utilizar, en cambio el **CHAR** me va a ocupar un espacio fijo en la memoria. Si determino que VARCHAr puede tener hasta 50 caracteres pero solo guardo 3 me guarda el especio de memoria solo para esos 3 caracteres.

El tipo de dato **TEXT** es para guardar máas caracteres que el VARCHAR, en general se utiliza cuando son más de unos 200 caracteres. Se utiliza para guardar comentarios de un formulario, por ejemplo.

El de **sin signo** si esta checkeado es que solo admite numeros POSITIVOS, si no esta marcadao admite datos tanto positivos como negativos.

El de **Permitir** es para los NULL (valor vacio), si esta con TICK permite NULL, si está desmarcado NO permite NULL.

**Predeterminado** es para guardar un valor predeterminado; tenemos: **custom text**, **NULL**, **Expresion**, **On update**, **AUTO_INCREMENT** ( este nos sirve para las primary keys)

### Relaciones entre tablas

**PK** PrimaryKey (clave primaria) es única de cada registro, suele llamarse **id**

**FK** Foreing Key (clave foranea) nos permite relacionar una tabla con otra

En mi caso tengo la tabla **categoria** que puede tener **n productos** o sea tengo una relacion **1 a n**, el producto va a guardar con que categoria se relaciona y ahi va la FK

#### Creamos la tabla productos

-> click derecho en **cac_22006** > **crear nuevo** > **tabla**

-> nombre: productos

| Nombre | Tipo de dato | Longitud | Sin signo | Permitir | Relle.. | Predeterminado | Comentario | Collation | Expresion | Virtualidad |
| ------ | ------------ | -------- | --------- | -------- | ------- | -------------- | ---------- | --------- | --------- | ----------- |
| codigo_id | INT |  - | X | - | - | AUTOINCREMENT | - | - | - | - |  
| codigo | VARCHAR |  5 | - | - | - | - | - | - | - | - |   
| nombre | VARCHAR |  80 | - | - | - | - | - | - | - | - |    
| descripcion | VARCHAR |  100 | - | - | - | - | - | - | - | - |    
| precio | INT |  - | - | - | - | - | - | - | - | - |     
| categoria_id | INT |  - | - | - | - | - | - | - | - | - |  


El codigo va a tener 3 letras + 2 numeros , por ejemplo ABC12

El codigo_id va a ser la PK

La categoria_id va a ser la FK va a tener que coincidir con el tipo de dato (INT) y no permitir NULL, tal cual tenga la PK en la tabla categorias, para que sea **FK** voy a la pestaña de **llaves foranea** > click en **Agregar**:

| Nombre de la llave | Columnas | Tabla de Referencia | Columnas | En UPDATE | En DELETE | 
| ------------------ | -------- | ------------------- | -------- | --------- | --------- |
| FK1 | categoria_id | categorias | id | RESTRICT | RESTRICT |

-> Click en **Guardar** y creo la tabla.

En codigo :

```SQL
CREATE TABLE `productos` (
	`codigo_id` INT NOT NULL AUTO_INCREMENT,
	`codigo` VARCHAR(5) NOT NULL DEFAULT '' COMMENT 'ABC12',
	`nombre` VARCHAR(80) NOT NULL DEFAULT '',
	`descripcion` VARCHAR(100) NOT NULL DEFAULT '',
	`precio` INT NOT NULL DEFAULT 0,
	`categoria_id` INT UNSIGNED NOT NULL DEFAULT 0,
	PRIMARY KEY (`codigo_id`),
	CONSTRAINT `FK__categorias` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
;
```


---

## :star: Insertar datos : INSERT


Un ejemplo en codigo:

```SQL
INSERT INTO usuarios 
VALUES (null, 'x@x.com','123456');
```



->> Si en mi tabla **categorias** quiero agregar una nueva:

```SQL
INSERT INTO categorias
VALUES (4,'nombre_categoria', 'descriptcion');
```
De este modo debo completar TODOS los VALORES: id, nombre de la categoria, descripcion

->> Si solo quiero insertar algun valor primero acalro para que columna(CAMPOS) y luego los valores:

```SQL
INSERT INTO usuarios (email, password) 
VALUES ('x@x.com','123456');
```

En mi base de datos

```SQL
INSERT INTO categorias (nombre)
VALUES ('nombre_categoria');
```

*En este caso recordar que todo el CAMPo que sea NO NULL debo tenerlo*

Con la flecha como PLAY ejecuto el codigo

---

## :star: Leer datos : SELECT

->> Para ver todos los datos de mi tabla categorias:

```SQL
SELECT * FROM categoria;
```
El * es el ALL paara leer todos los campos


->> Un ejemplo de leer solo el campo (no todos) indicado en codigo, si quiero más de un campo los separo por coma:

```SQL
SELECT name FROM usuarios;
```

->> Si agregamos el **WHERE** ya condicionamos la busqueda

```SQL
SELECT * FROM usuarios WHERE email = 'x@x.com'
```

Otro ejemplo:

```SQL
SELECT nombre, id 
FROM categorias 
WHERE id = 3;
```

Con WHERE uso los operadores relacionales ya vistos:

```=``` en este caso el igual es uno solo (no dos)

```>``` mayor que... ó  ```>=``` mayor o igual que ...

```<``` menor que... o ```<=``` menor o igual que...

```!=``` distinto que...

Tambien tenemos el **LIKE** y el **NOT LIKE**.

El LIKE es similar al IGUAL, pero tiene el extra del PATRON DE BUSQUEDA...

...%a' por ejemplo buscamos que termine con a

... 'a%' buscamos que empiece con a

...'%a%' buscamos que contenga a entre medio

...'jo_' el _ significa un caracter busco jo+1 caracter

```SQL
SELECT * 
FROM usuarios
WHERE email LIKE 'user%'
ORDER BY email ASC
LIMIT 200;
```

->> Para ordenar la busqueda con **ORDER BY** y puede ser **ASC** (ascendente, de menor a mayor para numeros o alfabeticamente para los caracteres) o **DESC** (descendiente):

```SQL
SELECT * FROM usuarios
ORDER BY email ASC;
```

->> Si tengo muchisimos registros puedo limitar la cantidad que se muestran con **LIMIT**

```SQL
SELECT * FROM usuarios
ORDER BY email ASC
LIMIT 200;
```

---

## :star: Actualizar informacion: UPDATE


Para modificar datos que ya tengo ingresados en la base de datos, lo más importante es siempre tener el **WHERE** sino voy a actualizar el dato en TODOS los registros.

```SQL
UPDATE FROM usuarios
SET username = 'User'
WHERE id = 3
```

---

## :star: Borrar informacion: DELETE

También es importantísimo tenere el WHERE sino borro todos los registros; ya que no tengo un roll back, una vez que borre todo sone.


```SQL
DELETE FROM usuarios
WHERE id = 3
```

---
---

## UNION DE TABLAS

### JOIN

INNER JOIN los datos en comun de ambas tablas

LEFT JOIN los datos de la primer tabla (IZQUIERDA) y los que estan en comun (las relaciones) en la segunda tabla

RIGHT JOIN los datos en comun de ambas (las relaciones) y los datos de la segunda tabla (DERECHA)

Una forma de unirlos es utilizando **WHERE**:

En mi base de datos se que la PF de caegorias es **id** y en productos es **codigo_id**, entonces:

```SQL
SELECT * FROM productos, categorias
WHERE productos.codigo_id = categorias.id
```

Ejemplo de INNER JOIN:

```SQL
SELECT *
FROM productos
INNER JOIN categorias
  ON productos.codigo_id = categorias.id;
```

Es decir que traigo primero la tabla productos con el *FROM* y la uno con categorias con el *INNER JOIN* y aclaro por que keys se relacionan las tablas con: *productos.codigo_id = categorias.id*

En general al unir varias tablas no se usa el *(all) sino los campos, y como puedo tener un mismo nombre de campo para dos tablas debo especificar, por ejemplo si quiero traer los nombres de ambas tablas:

```SQL
SELECT productos.nombre, categorias.nombre
FROM productos
INNER JOIN categorias
  ON productos.codigo_id = categorias.id;
```

Para achicar un poco el texto puedo utilizar alias, por ejemplo a la tabla productos la llamo *p* y a la talba categorias la llamo *c*:

```SQL
SELECT p.nombre, c.nombre
FROM productos AS p
INNER JOIN categorias AS c
  ON p.codigo_id = c.id;
```

Y si los nombres no son muy ilustrativos tambien puedo usar alis :


```SQL
SELECT p.nombre AS 'Nombre Producto', c.nombre AS 'Nombre Categoria'
FROM productos AS p
INNER JOIN categorias AS c
  ON p.codigo_id = c.id;
```
