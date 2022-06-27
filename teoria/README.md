
# :book: Teoria

---

## :book: TEORIA UNIDAD 1 - 1. Contenidos de la unidad

- Node.JS

- Páginas Estáticas vs Páginas Dinámicas

- Por qué Node.

- ¿JavaScript del lado del servidor? Porque usar Node?

- Instalación Node.

- Comprobación de la instalación

- Primeros pasos.

- Comentarios en Node.

- Configuración del entorno de desarrollo.

- Variables

- Concepto de Bloqueo.

- Bibliotecas de uso habitual.

- Utilizando require , Request y Response
 

---
 
### :star: 2. Web dinámica vs Web estática


---

**Páginas web estáticas vs páginas web dinámicas**
 
Cuando se trata de desarrollar un sitio web lo primero que tenes que considerar es cómo lo querés construir, como un sitio web estático o como un sitio web dinámico. Pero, ¿qué hace que un sitio web sea categorizado “estático” o “dinámico”?.

Te invito que me acompañes en este comparativo para que conozcas cómo distinguir las diferencias entre estos dos tipos de páginas web y que puedas decidir cuál es el que te conviene según tu necesidad.

Pero antes de entrar en detalles de cada uno de estos tipos de sitios web, primero debes entender cómo funciona la comunicación en Internet cuando queremos ver una página web.

---

### Comunicación entre servidores y navegadores web

Para entender la comunicación más básica que ocurre en Internet, debemos saber que en ella están involucrados un **servidor web**, como *IIS*, *Apache* o *NGINX*, que contiene los archivos **HTML**, **CSS** y **JavaScript** de las *páginas web*, y un **cliente**, el *navegador* (*Chrome*, *Firefox*, *Edge*).


El servidor web y el cliente se comunican a través de los **protocolos HTTP** (**Hypertext Transfer Protocol**), el protocolo de Transferencia de Hipertexto y la versión segura **HTTPS** (**HyperText Transfer Protocol Secure**), una serie de reglas que permiten la transferencia de información a través de archivos en la Internet. La diferencia principal entre HTTP y HTTPS, es que, con este último, la comunicación entre el servidor y el cliente es **cifrada** permitiendo que la transmisión de los datos sea segura, brindando mayor integridad y confidencialidad a los mismos.


->> La comunicación entre ellos inicia cuando el **usuario**, a través del **navegador**, ingresa la **dirección de un sitio web** (conocida como la **URL** del inglés *Uniform Resource Locator* ó LRU que se refiere al Localizador de Recursos Uniforme en español), generando una **petición al servidor web** para encontrar los archivos de dicha página en dónde están alojados (**HTTP request**). 


->> Luego, el **servidor web** *responde a la petición* y *devuelve los archivos del sitio web* (**HTTP response**). La respuesta llega al navegador como una copia en formato HTML de la página web, y es en este momento cuando el usuario puede verla en su pantalla.


---

#### Qué es una página web estática

Lo primero que debemos entender es ¿a qué nos referimos con la palabra **estática** en el contexto de una página web?, y no es más que *aquello que en el ámbito del código fuente del sitio web se encuentra fijo, no se mueve ni cambia de ninguna manera*.


Cuando hablamos de **estático** también podemos referirnos a que la página web tiene un número fijo de página, es decir, que tal como fue diseñada y almacenada en el servidor web, así mismo la recibe el navegador y la ve el usuario, como un número fijo de páginas HTML.


Una página web estática está compuesta por *archivos HTML individuales por cada página que son pre-generados y presentados al usuario a través del navegador de la misma forma*.


Como una página web estática básica está compuesta por elementos como títulos, cuadros de textos, etiquetas, imágenes y otros elementos multimedia, un usuario solo puede interactuar con una página web estática a través de lo que permiten los elementos HTML, por ejemplo haciendo clic en enlaces, botones o rellenando formularios como el clásico formulario de subscripción.


No son tan complejos técnicamente como un sitio web dinámico, pero tampoco son tan versátiles y efectivos cuando se trata de entregar funcionalidad. En pocas palabras, *en una página web estática, verás la misma información, diseño y contenido cada vez que la visites, a menos que alguien aplique cambios al código fuente de forma manual*.


Si quisieras crear una página web estática solo necesitas un **editor de texto** como el Bloc de notas y saber de **HTML** y **CSS**, no es necesario utilizar entornos de desarrollo complejos.


---

### Ventajas de una página web estática


Entre las ventajas de una página web estática podemos mencionar:


- **1** - El costo inicial de una página web estática puede ser mucho menor que al de una dinámica.


- **2** - Por su naturaleza estática, la complejidad y tiempo de desarrollo es menor porque no requiere del uso de lenguajes de programación o bases de datos, y por ende su costo monetario es más bajo.


- **3** - Son muy flexibles cuando se trata del diseño. Dado a su naturaleza independiente, cada página puede tener un diseño diferente. No es necesario un solo diseño para múltiples tipos de contenido, lo que en los sitios web dinámicos se le conoce como plantillas (templates).


- **4** - Los tiempos de carga son muy rápidos. Ya que los sitios web estáticos son construidos previamente. No implica ejecución de scripts o secuencias de comandos complejas, bases de datos ni análisis de contenido a través de lenguajes de plantillas, etc.


- **5** - Sin embargo, con la revolución del Jamstack, los generadores de sitios web estáticos como Jekyll, GatsbyJS o Eleventy, y los Headless CMS como Netlify CMS, Siteleaf o Forestry, y además la incorporación de CDN (Content Delivery Network en inglés) para gestionar los recursos multimedia, se puede generar un aumento en el tiempo de carga de una página web estática dependiendo de sus características.


---
#### Desventajas de una página web estática

Algunas desventajas de elegir una página web estática son:

- **1** - Una página web estática puede ser más difícil de actualizar.


- **2** - Para usuarios no técnicos, una vez que la página es creada, hacer pequeños ajustes en el contenido puede representar un desafío a menos que estén familiarizados con HTML, CSS y el código del sitio web en general. Si no es así, es posible que deban pedirle al desarrollador que la creó originalmente, que realice los cambios que necesitan.


- **3** - Agregar contenido a la página web o realizar actualizaciones puede incurrir en costos adicionales. Esto puede verse como una consecuencia de la desventaja anterior. Es decir que, con el tiempo, el mantenimiento de un sitio estático puede generar costos de mantenimiento continuo que podrían evitarse si tuvieras una página web dinámica.


- **4** - Agregar nuevas páginas o funcionalidades a una web estática puede ser más difícil que hacerlo para una web dinámica. Por ejemplo, si creas una página web para promocionar productos de tecnología, cada vez que querés agregar un producto, como un nuevo televisor o un nuevo celular, tendrías que crear una nueva página específicamente para ese producto, lo que puede llevar mucho tiempo además del costo que puede llevar este proceso.


---
#### Ejemplos de páginas web estáticas

Un ejemplo sencillo de cómo es una página web estática, es el siguiente:

```HTML
<head>
   <title>Ejemplo página web estática</title>
</head>
<body>
    La fecha de hoy es Enero 1, 2022
</body>
</html>
```
 
Aquí, la fecha está escrita directamente en el código de la página (estática) y cada vez que se recargue la página, dirá lo mismo, Enero 1, 2022… la única forma de que cambie es si alguien actualiza el código y escribe otra fecha o aplica alguna instrucción que la haga dinámica para que la fecha sea diferente cada vez que carga.
 

---
### ¿ Qué es una página web dinámica ?

La palabra dinámica se refiere a elementos que cambian continuamente, son interactivos y funcionales, en lugar de ser simplemente informativos. Por supuesto, eso requiere utilizar más que solo código HTML y CSS.


En comparación con las páginas web estáticas, que son mayoritariamente informativas, una página web dinámica incluye aspectos que se caracterizan por la interactividad y la funcionalidad, por ejemplo, los usuarios pueden interactuar con la información que se presenta en la página gracias a las instrucciones creadas a través de los lenguajes de programación y la base de datos sobre la que está construida.


Los sitios web dinámicos basan su comportamiento y funcionalidad en dos tipos de programación, front-end (del lado del cliente) y  back-end (del lado del servidor). Las instrucciones del lado del cliente es código JavaScript que se ejecuta en el navegador. Mientras que las instrucciones que se ejecutan del lado del servidor son instrucciones escritas en lenguajes de scripting o programación, como ASP.Net, PHP, Python, etc. y que son ejecutadas para crear lo que el usuario ha solicitado en su interacción con la página. En nuestro caso utilizaremos Node.Js como lenguaje de back-end.


Una vez ejecutadas las instrucciones en el servidor, un nuevo HTTP response se envía al navegador del usuario para mostrarle lo que ha solicitado. El resultado final es el mismo que en un sitio web estático: una página HTML que el usuario ve desde el navegador.


Por resumir, una página web dinámica puede ser más compleja cuando hablamos de su diseño y desarrollo, 

---

#### Ventajas de una página web dinámica

Entre las ventajas de una página web dinámica están:


- **1** - Puede gestionar información a través de bases de datos. Esto permite que el usuario pueda solicitar información fácilmente de una manera organizada y estructurada dentro de un catálogo, además de crear y mostrar contenido según el tipo de usuario que acceda a la página.


- **2** - El contenido se puede gestionar a través de un CMS.
El contenido almacenado en el CMS puede incluir una variedad de archivos, desde el texto hasta las imágenes que se muestran, diseños de página, configuraciones del sitio y más. Esto permite una flexibilidad extrema a la hora de crear el sitio y también permite que varios usuarios puedan manipular el contenido según sea necesario.


- **3** - El coste de mantenimiento es menor. Si la página no necesita cambios en el diseño básico o en la funcionalidad definida al inicio de su desarrollo. Ya que se puede gestionar la información a través de un CMS (por ej: WordPress) , existe poco o nada de costes cuando se trata de su mantenimiento.


---

#### Desventajas de una página web dinámica


Algunas desventajas de una página web dinámica son:


- **1** - Pueden existir limitaciones en el diseño. Ya que el contenido está principalmente basado en la información contenida en la base de datos y la presentación al usuario se basa en la estructura de la misma. Esto puede hacer que el diseño sea complicado, ya que lo más sencillo es optar por un enfoque único para todas las páginas. 


- **2** - Dependiendo del CMS, puede resultar difícil crear varios diseños o plantillas que permitan mostrar diferentes tipos de contenido de diferentes formas.


- **3** - Puede involucrar altos costos de construcción iniciales.
Al coste del desarrollo de la página web se le suma el coste del desarrollo de las bases de datos donde se guardará el contenido a mostrar, etc. El desarrollo también puede costar más a medida que se agregan nuevas funcionalidades. Si bien los costos de mantenimiento pueden ser más bajos como fue mencionado en las ventajas, también puede involucrar costos de desarrollo iniciales mucho más altos que al desarrollar una página web estática.
 

---

#### Ejemplos de páginas web dinámicas

Como ya hemos visto, es muy sencillo determinar si una página web es dinámica: por ejemplo, cuando puedes interactuar con ella, o si cada vez que la recargas, puedes ver contenido distinto.

Por lo tanto, la mayoría de las páginas que regularmente visitas es probable que sean dinámicas porque son interactivas. Por ejemplo, una página web dinámica te permite crear un perfil de usuario Facebook.com, comentar una publicación LinkedIn.com,  o hacer una reserva .

Siguiendo el ejemplo de la página que muestra una fecha, si queremos convertirla en una página web dinámica, podemos cambiar la fecha escrita textualmente por una función que retorne la fecha actual, de esta forma:

```HTML
<head>
<title>Página web dinámica</title>
</head>
<body>
La fecha de hoy es <%=Datetime.Now()%>
</body>
</html>
```

Aquí, cada vez que se recarga la página, se mostrará la fecha y hora actual, es decir será diferente en cada recarga de la página, ya que la instrucción ```<%=Datetime.Now()%>``` le indica al servidor que retorne la fecha del momento en que recibe la petición.


---
#### Página web dinámica vs estática: Conclusión

En conclusión, si tenés que crear una página web y vas a tomar la decisión entre crear una página web estática o una dinámica, tu decisión debe ser principalmente en los objetivos que querés cumplir con tu página web y los recursos de tiempo y conocimientos que tengas disponibles.


La mayoría de las personas que no poseen conocimientos técnicos de diseño y desarrollo de páginas web, prefieren los sitios web dinámicos porque a través de plataformas CMS como WordPress, Joomla, Drupal o Ghost pueden crear sitios web dinámicos de una forma muy fácil y rápida, a la vez que son más fáciles de mantener a largo plazo.


Si bien es cierto que las páginas web dinámicas ofrecen más posibilidades, pueden ser mucho más complejas de construir y mantener para los usuarios que no tengan conocimientos técnicos y deseen incorporar integraciones que no ofrezcan los CMS; mientras que las páginas web estáticas son algo más limitadas, pero en principio son mucho más simples de crear y mantener si tenés conocimientos en HTML y CSS.
 

---
## :star: 3. ¿Qué es NodeJS?

### Introducción

La creciente popularidad de JavaScript ha traído consigo varios cambios, incluyendo la superficie del desarrollo web, ya que hoy en día es radicalmente diferente. Las cosas que podemos hacer en la web hoy, con JavaScript ejecutando en el servidor, como también en el navegador, eran difíciles de imaginar hace varios años, o se encapsulan dentro de entornos “sandbox” como Flash y Java.


Antes de indagar en Node.js, tenés que leer acerca de los beneficios de utilizar JavaScript a través del stack, que unifica el idioma y el formato de datos (JSON), lo que permite reutilizar de manera óptima los recursos del desarrollador. Como esto es más un beneficio de JavaScript que de Node.js específicamente, no hablaremos mucho de ello aquí. Sin embargo, es una ventaja clave para la incorporación de Node en su pila.


La web de Node indica:**Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google** Más allá de eso, vale la pena señalar que el creador de Node.js, **Ryan Dahl** fue encargado a crear sitios web en tiempo real con función de inserción, *inspirado por aplicaciones como Gmail*. En Node.js, dió a los desarrolladores una herramienta para trabajar en el **paradigma no-bloqueante, event-driven I/O**.

---

#### En resumen: Node.js se destaca en aplicaciones web de tiempo real empleando la tecnología push a través de Websockets. ¿Qué es tan revolucionario acerca de eso? Bueno, después de más de 20 años de webs basadas en el paradigma de petición-respuesta, finalmente tenemos aplicaciones web en tiempo real, las conexiones bidireccionales, donde tanto el cliente como el servidor pueden iniciar la comunicación, lo que les permite intercambiar datos libremente. Esto está en contraste con el paradigma de respuesta web típica, donde el cliente siempre inicia la comunicación. Además, todo se basa en el Open Web Stack (HTML, CSS y JS) que se ejecuta en el puerto estándar 80.

---


Podríamos argumentar que hemos tenido este formato durante años en forma de Flash y Applets de Java, pero en realidad, eran simplemente un entorno de Sandbox usando la web como un protocolo de transporte para ser entregado al cliente. Además, se ejecutan en aislamiento y a menudo operan a través de un puerto no estándar, el cual podía tener requisitos adicionales para su uso.


Con todas sus ventajas, Node.js ahora juega un papel crítico en la pila de tecnología de muchas empresas de alto perfil que dependen de sus exclusivas ventajas.


Vamos a analizar no sólo cómo estas ventajas son obtenidas, sino también por qué es posible que desees utilizar Node.js y por qué no usar algunos de los clásicos modelos de aplicaciones web como ejemplos.
 

---
### :star:  ¿Cómo funciona?

La idea principal de Node.js: **uso no-bloqueante**, **event-driven I/O**, **permanecer ligero** y **eficiente** en la superficie del **uso intensivo de datos en tiempo real** de las aplicaciones que se ejecutan en dispositivos distribuidos.


Y este entendimiento es absolutamente esencial. Definitivamente no tenés que usar Node.js para operaciones intensivas de CPU; de hecho, utilizándolo para el cálculo pesado anulará casi todas sus ventajas. Donde Node REALMENTE destaca es en la **construcción rápida y escalable de aplicaciones de red**, debido a que **es capaz de manejar un gran número de conexiones simultáneas con alto rendimiento**, lo que equivale a una **alta escalabilidad**.


### :star:  ¿ Cómo funciona internamente?

Es bastante interesante. Frente a las tradicionales técnicas de servicio web donde cada conexión (solicitud) genera un nuevo subproceso, retomando la RAM del sistema y finalmente a tope a la cantidad de RAM disponible, **Node.js opera en un solo subproceso**, **no utiliza el bloqueo de llamadas de E/S**, lo que le permite admitir decenas de miles de conexiones simultáneas (celebrada en el caso de **loop**).


Un cálculo rápido: suponiendo que cada subproceso tiene un potencial acompañado de 2 MB de memoria, el cual se ejecutará dentro de un sistema con 8 GB de RAM nos pone a un máximo teórico de 4.000 conexiones simultáneas, además del costo de cambio de contexto entre subprocesos. Ese es el escenario que se suelen tratar con técnicas de servicio web tradicional. 

Evitando todo eso, Node.js alcanza niveles de escalabilidad de más de 1M de conexiones simultáneas.


Existe por supuesto, la posibilidad de compartir un único subproceso entre todas las solicitudes de clientes, convirtiéndola en una falla potencial de escribir aplicaciones Node.js. En primer lugar, el cómputo pesado podría estancarse y provocar problemas para todos los clientes (más sobre esto más adelante) como las peticiones entrantes, las cuales serían bloqueadas hasta que dicho cálculo se haya completado. En segundo lugar, los desarrolladores necesitan ser muy cuidadosos en no permitir una excepción burbujeante hacia el núcleo (la superior), lo que provocaría que la instancia de Node.js se terminase.


La técnica utilizada para evitar excepciones transfiere los errores a la llamada como llamada de parámetros (en lugar de tirar de ellos, al igual que en otros entornos).
 

---
### :star:  NPM: El Node Package Manager


Cuando hablamos de Node.js, una cosa que definitivamente no debe omitirse es integrarlo en el apoyo de la **gestión de paquetes utilizando la herramienta NPM que viene por defecto con cada instalación de Node.js**. 

La idea de los módulos NPM es muy similar a la de Ruby Gemas: **un conjunto de componentes reutilizables disponibles públicamente a través de una fácil instalación a través de un repositorio en línea, con la versión y la dependencia de gestión**.


Una lista completa de los paquetes de módulos puede encontrarse en el sitio web de NPM [**Https://npmjs.org/**](Https://npmjs.org/) o acceder utilizando la **herramienta de la CLI de NPM** que automáticamente se instala con Node.js. 

El módulo es un ecosistema abierto a todos, y cualquiera puede publicar su propio módulo que será incluido en el repositorio de NPM. Una breve introducción a la NPM (un poco viejo, pero sigue siendo válido) se puede encontrar en [http://howtonode.org/introduction-to-npm](http://howtonode.org/introduction-to-npm).


Algunos de los más populares hoy en día son módulos de NPM:
 

**express - Express.js**, inspirado en el framework de desarrollo web para Node.js, y el estándar de facto para la mayoría de aplicaciones Node.js de hoy en día.
 

**connect - Connect** es un servidor HTTP extensible framework para Node.js, que proporciona una colección de alto rendimiento de plugins conocidos como middleware; sirve como fundamento para expresar.
 

**socket.io y sockjs** - Componente del servidor de los dos componentes de websockets más comúnes en la actualidad.
 

**Jade** - Uno de los más populares motores de plantillas, inspirados por HAML, un defecto en Express.js.
 

**mongo y mongojs** - mongoDB wrappers para proporcionar la API para bases de datos de objetos MongoDB en Node.js.
 

**redis** - Redis biblioteca cliente.
 

**coffee-script** - CoffeeScript compilador que permite a los desarrolladores escribir sus programas Node.js con café.


**Underscore (lodash, lazy)** - La biblioteca de utilidades más popular de JavaScript, empaquetados para ser utilizado con Node.js, así como sus dos contrapartes, que prometen mejorar el rendimiento mediante la adopción de un enfoque de aplicación ligeramente diferente.


**forever** - Probablemente la utilidad más común para asegurar que un determinado Node script se ejecuta continuamente. Mantiene su proceso de Node.js en la producción y en el rostro de cualquier fallo inesperado.


->> La lista es interminable. Hay toneladas de paquetes realmente útiles y disponible para todos (sin ofender a los que he omitido aquí).
 

---
### Ejemplos en donde Node.js debe utilizarse:


**Chat**: Es la forma más típica en tiempo real y una multi-aplicación de usuario. Desde IRC , a través de muchos propietarios y protocolos abiertos girando en puertos no estándar, con la capacidad de instrumentar todo en Node.js con websockets corriendo sobre el puerto estándar 80.

La aplicación de chat es realmente perfecta para Node.js: es ligera, tiene un alto tráfico de datos intensivos (pero baja/procesamiento de cómputo) y es una aplicación que funciona en dispositivos distribuidos. 

También es un gran caso de uso para el aprendizaje, ya que es demasiado simple, pero al mismo tiempo que cubre la mayoría de herramientas que podés utilizar en una típica aplicación Node.js.


Vamos a tratar de describir cómo funciona.


- En el ejemplo más sencillo, tenemos una sola sala de chat en nuestro sitio web donde la gente puede venir e intercambiar mensajes ya sea con una persona o con varias. 

- Por ejemplo, supongamos que tenemos tres personas en el sitio todos los conectados a nuestro tablero de mensajes.

- En el lado del servidor, tenemos un simple Express.js que implementa dos cosas: 

1) Obtener un controlador de solicitudes ‘/’ que sirve la página web que contiene un tablero de mensajes y un botón ‘Enviar’ para inicializar el nuevo mensaje de entrada, y 

2) un servidor websockets que escucha los mensajes emitidos por los clientes de websocket.


- En el cliente, tenemos una página HTML con un par de controladores, uno para el *Send* evento de clic de botón, que recoge el mensaje de entrada y lo envía hacia abajo el websocket, y otro que *escucha los mensajes entrantes* del nuevo cliente de websockets (es decir, los mensajes enviados por otros usuarios, que el servidor ahora quiere que el cliente muestre).


- Cuando uno de los clientes envía un mensaje, lo que sucede es lo siguiente:

1- El explorador atrapa el clic con el botón ‘Send’ a través de un controlador de JavaScript que recoge el valor del campo de entrada (es decir, el texto del mensaje), y emite un mensaje al websocket utilizando el cliente conectado a nuestro servidor (inicializado con la página web).


2- El componente del servidor de la conexión websocket recibe el mensaje y lo reenvía a todos los demás clientes conectados mediante el método de difusión.


3 - Todos los clientes reciben el mensaje como un mensaje de inserción a través de un componente de cliente websockets que se ejecuta dentro de la página web. Ellos entonces recogen el contenido del mensaje y actualizan la página web en lugar de anexar el nuevo mensaje a la junta.



->> Este es el ejemplo más sencillo. Para una solución más robusta, podrías utilizar un caché simple basado en la **Redis store**. O incluso en una solución más avanzada, una **cola de mensajes para gestionar el enrutamiento de mensajes a los clientes** y un **mecanismo de entrega más robusto que pueda cubrir pérdidas de conexión temporal o almacenar mensajes para clientes registrados mientras está desconectado**. Pero independientemente de las mejoras que realices, Node.js todavía operará bajo los mismos principios básicos...

...**reaccionar a eventos**

... **manejo de muchas conexiones simultáneas**

... **mantenimiento en la fluidez de la experiencia del usuario**.
 

**API en la parte superior de un OBJETO DB:**

Aunque Node.js realmente destaca entre aplicaciones de tiempo real, es una adaptación natural para exponer los datos de objeto DBs (p. ej. MongoDB). El **almacenamiento de datos JSON** permite que Node.js funcione sin la desigualdad de impedancia y la conversión de datos.

Por ejemplo, si estás utilizando Rails, tendrías que convertir los datos de JSON para modelos binarios y después exponer nuevamente como JSON sobre HTTP cuando el dato es consumido por el backbone.js, angulares, etc., o incluso llamadas AJAX jQuery normal. **Con Node.js, simplemente podés exponer tus objetos JSON con una API REST para que el cliente consuma**. Además, **no necesitas preocuparte por la conversión entre JSON y cualquier otra cosa al leer o escribir desde su base de datos (si estás usando MongoDB)**. 

#### -> En conclusión, podés evitar la necesidad de realizar varias conversiones mediante un formato de la serialización de datos uniformes a través del cliente, servidor y base de datos.
 

---

### :star:  Entradas en espera


Si estás recibiendo una gran cantidad de datos concurrentes, tu base de datos puede ahogarse. Como se ha descrito más arriba, Node.js **puede manejar fácilmente las conexiones simultáneas al mismo tiempo**. Pero debido a que el acceso a la base de datos es una operación de bloqueo (en este caso), nos topamos con problemas. La solución es reconocer el comportamiento del cliente antes de que los datos se escriban en la verdadera base de datos.


Con ese enfoque, el sistema mantiene su sensibilidad bajo una carga pesada, lo que es particularmente útil cuando el cliente no necesita una firme confirmación de la correcta escritura de datos. Ejemplos típicos incluyen: el registro o la escritura de datos de seguimiento de usuario, procesamiento en lotes que no se utilizan hasta un momento posterior, así como las operaciones que no necesitan ser reflejadas al instante (como actualizar el recuento de Likes en Facebook) donde la coherencia final (tan a menudo utilizadas en el mundo NoSQL) es aceptable.

**Los datos se ponen en cola a través de algún tipo de caché o de Message Queue Server** (por ejemplo, infraestructura, RabbitMQ, ZeroMQ) y resumido por un proceso separado escrito en lote, cálculo o procesamiento intensivo servicios backend, escrito en un mejor desempeño de plataforma para tales tareas.

Un comportamiento similar puede implementarse con otros lenguajes/frameworks, pero no con el mismo hardware o con el mismo alto, para mantener su rendimiento.


---


####  :star:  En resumen: con Node, podés empujar la base de datos escrita a un lado y tratar con ella más tarde, para proceder como que si esta hubiera sido exitosa.

---


#### Transmisión de Datos


En plataformas web más tradicional, las peticiones y respuestas HTTP son tratadas como eventos aislados; de hecho, son realmente corrientes. Esta observación puede ser utilizada en Node.js para construir algunas características interesantes. Por ejemplo, es posible procesar archivos mientras están siendo cargados, ya que los datos entran a través de un arroyo, y pueden ser procesados en una línea de moda. Esto podría hacerse en tiempo real para la codificación de audio o vídeo, como proxy entre diferentes fuentes de datos (véase la sección siguiente).


#### PROXY


**Node PROXY.js** es empleado como un servidor proxy el cual puede manejar una gran cantidad de conexiones simultáneas en un modo de no-bloqueo. Es especialmente útil para proxy de diferentes servicios con distintos tiempos de respuesta, o para la recopilación de datos desde varios puntos de origen.


Un ejemplo: considere una aplicación de servidor que se comunica con recursos de terceros, extrayendo datos de diferentes fuentes, o almacenando los activos como imágenes y vídeos a servicios terceros de Cloud.


Aunque existen servidores de proxy dedicados, utilizando en su lugar Node podría ser útil si su infraestructura de servidores proxy es inexistente o si necesita una solución para el desarrollo local. Con esto, quiero decir que se podría construir una aplicación del lado del cliente con un servidor de desarrollo Node.js para activos como proxy/stubbing solicitudes de API, mientras que en la producción manejarías tales interacciones con un dedicado servicio de proxy (nginx, HAProxy, etc.).


---
### Brokerage-Dashboard del Stock Trader


Volvamos al nivel de aplicación. Otro ejemplo donde domina el software de escritorio, sin embargo podría ser fácilmente reemplazado con una web en tiempo real es la solución comercial de los agentes de software; se utiliza para realizar el seguimiento de los precios de las existencias, realizar cálculos y análisis técnico y crear los gráficos y diagramas.


**Cambiar a tiempo real** es una solución basada en la web que permitiría a los corredores cambiar fácilmente de estaciones de trabajo o lugares de trabajo. Pronto podríamos comenzar a verlos en la playa de Florida, Ibiza … o Bali.
 

---

### :star:  Panel de Supervisión de Aplicaciones


Otro caso de uso común en qué el Node-con-web-sockets encaja perfectamente es el siguiente: el **seguimiento de los visitantes del sitio web** y la **visualización de sus interacciones a tiempo real**. (Si estás interesado, esta idea ya se produjo por Colibrí).


Podrías recopilar estadísticas a tiempo real desde tu usuario, o inclusive subir al siguiente nivel mediante la introducción de interacciones selectivas con tus visitantes abriendo un canal de comunicación cuando llegan a un punto específico en el embudo. (Si estás interesado, esta idea ya se produjo por CANDDi).


Imagina cómo podría mejorar tu negocio si supieras lo que estuvieran haciendo tus visitantes en tiempo real; si pudieras visualizar sus interacciones. Con el tiempo real, ahora podés tomar dos vías de Node.js.


Ahora el panel de monitorización del sistema, vamos a conocer la **perspectiva de la infraestructura de las cosas**. Imagínate, por ejemplo, un proveedor de SaaS que le quiere ofrecer a sus usuarios un servicio de supervisión (por ejemplo, la página de GitHub). Con el evento Node.js-loop, podemos crear un poderoso tablero basado en la web que comprueba los servicios de los estados de manera asíncrona y envía datos a los clientes usando Websockets.


Tanto internos (intra-empresa) como también los de los servicios públicos de los Estados, pueden ser reportados en vivo y a tiempo real utilizando esta tecnología. 

Empuja esta idea un poco más lejos y trata de imaginar un centro de operaciones de red (NOC) en aplicaciones de supervisión de un operador de telecomunicaciones, cloud/red/proveedor de servicios de hosting, o alguna institución financiera, todos se ejecutan en el open web stack respaldado por Node.js y Websockets en lugar de Java y/o applets de Java.

Nota: No intentes construir sistemas a tiempo real duros en Node (es decir, sistemas que requieran tiempos de respuesta coherentes). Erlang es probablemente una mejor elección para esta clase de aplicación.
 

---

### ¿ Donde node.js se puede utilizar?


**1 - Aplicaciones Web del lado del Servidor**

**Node.js** con **Express.js** también pueden ser utilizados para crear aplicaciones web clásicas en el servidor. Sin embargo, mientras sea posible, este paradigma en petición-respuesta de Node.js sería llevar alrededor de HTML, no es el más típico de los casos de uso. Hay argumentos para estar a favor y en contra de este enfoque. Aquí están algunos hechos a considerar:


**PROS**:

- Si tu aplicación no tiene ningún cálculo intensivo del CPU, podés construir en Javascript de arriba a abajo, inclusive a nivel de base de datos si utilizas el objeto de almacenamiento JSON como MongoDB DB. Esto facilita el desarrollo (incluyendo la contratación) significativamente.

Los Crawlers reciben una respuesta totalmente HTML, que es mucho más SEO-friendly, digamos, una sola página o en una aplicación de Websockets app se ejecuta sobre Node.js.


**CONS**:

- Un CPU de cálculo intensivo bloqueará la receptividad del Node.js, por lo que una plataforma de roscado es un mejor enfoque. Alternativamente, podrías intentar escalar el cómputo [*].

- Utilizando Node.js con una base de datos relacional es aún bastante doloroso (leer más abajo para ver más detalles). Hazte un favor y escoge cualquier otro entorno como Rails, Django, o ASP.NET MVC si estás intentando realizar operaciones relacionales.

#### Donde Node.js no debe usarse

- En el lado del Servidor de Aplicaciones Web con una DB Relaciónal detrás

- Comparando Node.js con Express.js en contra de Ruby on Rails, por ejemplo, hay una decisión clara en favor de esta última cuando se trata de acceso a datos relacionales. El DB relacional con herramientas para Node.js está aún en sus primeras etapas; es bastante prematuro y por ende no tan agradable trabajar con ello. Por otro lado, Rails automáticamente proporciona datos de configuración del acceso a la derecha de la caja junto con el esquema de base de datos y herramientas de soporte de migraciones de otras Gemas (con doble sentido). Rails y su homólogo marco han madurado y probado que Active Record Data Mapper recopila implementaciones del acceso a datos y que echarás de menos si intentas replicarlo con JavaScript puro.[*]

- Aún, si estás muy inclinado a permanecer en JS todo el camino, mantén un ojo sobre Sequelize ORM y Nodo2 ya que ambos son todavía inmaduros, pero eventualmente pueden alcanzar a los demás lenguajes de programación.

- Cuando se trata de cómputo pesado, Node.js no es la mejor plataforma. Definitivamente no querés construir un servidor de cálculo Fibonacci en Node.js. En general, cualquier operación de uso intensivo de CPU anula todas las ventajas de rendimiento y bloquearía cualquier petición entrante de un subproceso.

- Como se dijo anteriormente, Node.js es Single-threaded y utiliza un único núcleo del CPU. Cuando se trata de la adición de la concurrencia en un servidor multi-core, hay algunos trabajos realizados por el Node básico en la forma de un módulo cluster [ref: http://nodejs.org/api/cluster.html](http://nodejs.org/api/cluster.html). También podés ejecutar varias instancias del servidor Node.js bastante fácil detrás de un proxy inverso a través de nginx.

- Con la agrupación, debes descargar todo el cómputo pesado para procesar un fondo escrito dentro de un entorno más apropiado, y que ellos se comuniquen a través de Message Queue Server como RabbitMQ.

- Aunque tu procesamiento en segundo plano puede ejecutarse en el mismo servidor inicialmente, este enfoque tiene el potencial de una muy alta escalabilidad. Los servicios de procesamiento de fondo podrían ser fácilmente distribuidos al trabajador independientemente de de servidores sin la necesidad de configurar las cargas de los distintos servidores web.

- Por supuesto utilizarías el mismo enfoque en otras plataformas también, pero con Node.js podés conseguir un alto reqs/s del que hemos hablado, ya que cada petición es una tarea pequeña y un manejo muy rápido y eficientemente.

---

#### Conclusión

Hemos hablado de Node.js desde una teoría práctica, comenzando con sus objetivos y ambiciones, y terminando con algunos de los escollos que tiene programar en ese entorno. Cuando las personas tienen problemas con Node, casi siempre deducen al hecho de que el bloqueo de operaciones son la raíz de todo mal. El 99% del abuso de procesos en Node viene como consecuencia directa.


---

#### Para recordar: Node.js nunca fue creado para resolver el problema de escalado de computación. Fue creado para resolver el problema de escalado de E/S, lo que lo hace muy bien.

---

### ¿Por qué usar Node.js? 


Si el caso de uso no contiene operaciones intensivas del CPU ni el acceso a los recursos de bloqueo, podés aprovechar los beneficios de Node.js y disfrutar de aplicaciones de red rápidas y escalables. 

Bienvenido a la web en tiempo real.
 


---
## :star: 4. ¿Por qué usar NodeJS?
 

Inicialmente uno de los puntos que se deben tener en claro es que Node.JS por definición **es un entorno de ejecución para JavaScript**. Así mismo, sus características son aquellas que hacen que sea tan interesante a la hora de utilizarlo ya bien sea para un desarrollo batch, un servicio web, una API Rest o cualquier herramienta a nivel de batch.


Anteriormente, los desarrolladores de JavaScript sólo podían utilizar este lenguaje con la obligación de utilizar un navegador web ya sea Firefox, Chrome, entre otros. Lo que ocasionaba que se tuviera una limitación a la hora de realizar cierto tipo de aplicaciones, ya que no se podían generar o programar aplicaciones que se renderizaran en el servidor.


Con la llegada de Node.JS, se abrió un nuevo mundo y empezaron a surgir los **servidores web hechos con Express o con otras librerías basadas en Node, las de API Rest**, incluso se abrió un nuevo mundo a la hora de desarrollar para IOT. Por ejemplo: las placas arduino, ya que éstas se pueden desarrollar con Node en una aplicación y utilizarlas en ese tipo de placas. Con lo cual, se puede decir que Node tiene una cantidad considerable de características entre las cuales destacan las siguientes:
 

**Desarrollo en JavaScript**: Para desarrollar en Node se realiza a través del **lenguaje de programación JavaScript**, que actualmente está teniendo popularidad y mejoras permitiendo el desarrollo tanto para frontend como para backend, abriendo el camino a los profesionales full stack.


**Basado en el motor V8 de Chrome**: Es uno de los motores más avanzados a nivel de JavaScript ya que *se mantiene actualizado con las nuevas funcionalidades del estándar ECMAScript 6, 7 y 8*. También existe una versión de Node.JS que utiliza el motor de JavaScript Chakra propio de Microsoft, aunque en su mayoría las versiones y los proyectos de Node se encuentran basadas en V8.


**Operaciones de E/S sin bloqueos**: Node está pensado *para que las operaciones de entrada y salida sean sin bloqueos*, por ejemplo: un servidor web realiza una petición única y espera una respuesta.


**Orientado a eventos (POE)**: Para comprender esta característica, pensemos en un bus de datos cuando un trozo de código realiza una operación, pública un evento ese evento en otra instancia (en otro momento del tiempo) lo recibe otro trozo de código y hace otra acción con él; en este punto de hecho, se habla mucho del término **asincronía** del tema de **ajax**. Por ejemplo, a la hora de hacer peticiones a un servicio web externo una API Rest la sincronía es una consecuencia de la orientación a eventos, Node.JS funciona perfectamente con temas de asincronía y es una muy buena opción si queremos hablar de códigos asíncronos que queramos hacer para nuestra aplicación. 
 

**Liviano y Eficiente**: En resumen por todo lo anteriormente mencionado (entradas y salidas sin bloqueo, desarrollado bajo JavaScript, basado en V8, orientado a eventos y el tema de la asincronía) hace que Node.JS sea liviano (pese muy poco) y a su vez sea muy eficiente en los casos de gestión de eventos, orientación a eventos y los casos de entrada y salida.
 
 ---
#### Node.JS es una buena opción para desarrollar cierto tipo de cosas como lo son:
 

**Servidores Web**: Con el uso de librerías que se encuentran en los paquetes propios de Node.JS o de terceros como Express, Koa y Hapi.


**Sockets**: Son eventos que para realizar chats y aplicaciones en tiempo real es una excelente opción, sobretodo gracias a su gran velocidad.
IOT: Programar placas pequeñas con poco hardware como un Arduino, permite desarrollar una aplicación y desplegarla.
 

---
## :star: 5. Instalación de Node


### Instalación de NodeJS en Windows
 
- Primero tenés que obtener el instalador desde [https://www.nodejs.org/es/](https://www.nodejs.org/es/)


- Si estás en Windows, al pulsar sobre el botón verde se descargará el instalador para este sistema, un archivo con extensión "msi" que como ya sabes, te mostrará el típico asistente de instalación de software.


- Una vez descargado, ejecutas el instalador y ¡ya lo tienes!


- A partir de ahora, para ejecutar "Node" tienes que irte a la línea de comandos de Windows e introducir el comando "node".


- Nota: Acceder a la línea de comandos de Windows desde el menú de inicio, buscas "cmd" y encuentras el cmd.exe, que abre la línea de comandos. En algunos sistemas Windows anteriores a 7 accedes también desde el menú de inicio, utilizas la opción "Ejecutar" del menú de inicio y escribes "cmd".


- Entonces entrarás en la línea de comandos del propio NodeJS donde podés ya escribir tus comandos Node, que luego veremos.
 

### Instalar NodeJS en Linux

- En la página de instalación de NodeJS te ofrecen los comandos para instalar Node en Linux. Son un par de comandos sencillos, pero depende de tu distro, así que es recomendable que te documentes allí. En mi caso quería instalar NodeJS en Ubuntu 20.04. Para ello he usado los siguientes comandos, a ejecutar uno después del otro.

```
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

- Con el primer comando obtienes el instalador y con el segundo comando haces la instalación propiamente dicha. Luego podés verificar la instalación con el comando ```node -v``` y te debería salir la versión que se ha instalado en tu máquina.
 

- También si lo deseas, desde la página de descargas de Node accederás a los binarios de Linux o al código fuente para complilarlo.


#### Instalar NodeJS en Mac


- Para instalar NodeJS sobre Mac es tan sencillo como acceder a la página de Node y descargar el instalador. Se instala como cualquier otra aplicación, tanto el propio NodeJS como npm.
Alternativa con Homebrew: La instalación en Mac es muy sencilla si cuentas con el gestor de paquetes "homebrew". Es tan fácil como lanzar el comando:

``` 
brew install nodejs
```

- Durante la instalación es posible que te solicite incluir en tu sistema un paquete de utilidades por línea de comandos de xcode, si es que no lo tienes ya instalado en tu OS X. Si se produce un error durante la instalación prueba a hacer un update de homebrew.

``` 
brew update
```

#### Probando los primeros comandos NodeJS

En NodeJS la consola de Node podés escribir instrucciones Javascript. 

Si lo deseas, podés mandar mensajes a la consola con ```console.log()``` por lo que ésta podría ser una bonita instrucción para comenzar con node:
 
``` 
$ node
console.log("hola mundo");
```

-> Te mostrará el mensaje "hola mundo" en la consola.
 

---

## :star: 6. Comenzando con Node

### ¿Cómo empiezo con Node.js después de instalarlo?


Una vez que hayamos instalado Node.js, construyamos nuestro primer servidor web. Creá un archivo llamado  app.js que contenga el siguiente contenido:


```JavaScript
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Ahora, ejecutalo en tu servidor web usando node app.js. Visitá [http://localhost:3000](http://localhost:3000) en tu navegador web y verás un mensaje que dice "Hola mundo".
 

 ---

## :star: 7. Concepto de Bloqueo

### Bloqueo frente a no bloqueo

#### Bloqueo


El bloqueo es cuando la ejecución de JavaScript adicional en el proceso de Node.js debe esperar hasta que se complete una operación que no es de JavaScript. Esto sucede porque **el bucle de eventos no puede seguir ejecutando JavaScript mientras se produce una operación de bloqueo**.


En Node.js, JavaScript que presenta un rendimiento deficiente debido a que consume mucha CPU en lugar de esperar una operación que no es JavaScript, como E / S, no se suele denominar bloqueo. Los métodos síncronos en la biblioteca estándar de Node.js que usan libuv son las operaciones de bloqueo más comúnmente utilizadas. Los módulos nativos también pueden tener métodos de bloqueo.


Todos los métodos de E / S en la biblioteca estándar de Node.js proporcionan versiones asincrónicas, que no son bloqueantes y aceptan funciones de devolución de llamada. Algunos métodos también tienen contrapartes de bloqueo , que tienen nombres que terminan en Sync.


---

#### :star:  Comparación de código


Los métodos de bloqueo se ejecutan de forma sincrónica y los métodos sin bloqueo se ejecutan de forma asincrónica.

Usando el módulo Sistema de archivos como ejemplo, este es un archivo síncrono leído:


```JavaScript
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
```

Y aquí hay un ejemplo asincrónico equivalente :


```JavaScript
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```


El primer ejemplo parece más simple que el segundo, pero tiene la desventaja de que la segunda línea bloquea la ejecución de cualquier JavaScript adicional hasta que se lea todo el archivo. 

**Tenga en cuenta que en la versión síncrona, si se produce un error, será necesario detectarlo o el proceso se bloqueará**. **En la versión asincrónica, depende del autor decidir si se debe producir un error como se muestra**.


Ampliemos un poco nuestro ejemplo:


```JavaScript
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log
```


Y aquí hay un ejemplo asincrónico similar, pero no equivalente:

```JavaScript
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log
```


En el primer ejemplo anterior, console.log se llamará antes que  moreWork().

En el segundo ejemplo fs.readFile() es sin bloqueo, por lo que la ejecución de JavaScript puede continuar y moreWork() se llamará primero. La capacidad de ejecutarse moreWork() sin esperar a que se complete la lectura del archivo es una opción de diseño clave que permite un mayor rendimiento.


---

#### Simultaneidad y rendimiento


La **ejecución de JavaScript en Node.js es de un solo subproceso**, por lo que la **concurrencia** se refiere a la **capacidad del bucle de eventos para ejecutar funciones de devolución de llamada de JavaScript después de completar otro trabajo**. Cualquier código que se espere que se ejecute de manera concurrente **debe permitir que el bucle de eventos continúe ejecutándose mientras se están produciendo operaciones que no son de JavaScript, como E / S**.


Como ejemplo, consideremos un caso en el que cada solicitud a un servidor web tarda 50 ms en completarse y 45 ms de esos 50 ms son E / S de base de datos que se pueden realizar de forma asincrónica. La elección  de operaciones asincrónicas sin bloqueo libera esos 45 ms por solicitud para manejar otras solicitudes. Esta es una diferencia significativa en la capacidad con solo elegir usar métodos sin bloqueo en lugar de métodos de bloqueo .


El bucle de eventos es diferente a los modelos en muchos otros lenguajes donde se pueden crear hilos adicionales para manejar el trabajo concurrente.


---
#### :star:  Peligros de mezclar código de bloqueo y no bloqueo


Hay algunos patrones que deben evitarse cuando se trabaja con E / S. 

Veamos un ejemplo:

```JavaScript
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.unlinkSync('/file.md');
```


En el ejemplo anterior, ```fs.unlinkSync()``` es probable que se ejecute antes  ```fs.readFile()```, lo que se eliminaría file.md antes de que realmente se lea. Una mejor manera de escribir esto, que es completamente sin bloqueo y se garantiza que se ejecutará en el orden correcto es:


```JavaScript
const fs = require('fs');
fs.readFile('/file.md', (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink('/file.md', (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});
```


Lo anterior coloca una llamada sin bloqueo ```fs.unlink()``` dentro de la devolución de llamada ```fs.readFile()``` que garantiza el orden correcto de las operaciones.
 

---

## :star: 8. Crear comentario y manejo de módulos


### Comentarios en Node.Js


No tenemos que olvidarnos que Node es JavaScript, por ende, permite insertar comentarios en el código, al igual que la mayoría de los lenguajes de programación y puntualmente que JS. En concreto hay dos tipos de comentarios permitidos:

- los **comentarios en línea** que comienzan con una doble barra: **//**

- los **comentarios multilínea**, que **comienzan con /* y terminan con */**.


---

### Importando y creando módulos


Un modulo es una librería o archivo JavaScript que puede ser importado dentro de otro código utilizando la función``` require()``` de Node.  

Por sí mismo, Express es un modulo,  como lo son el middleware y las librerías de bases de datos que se utilizan en las aplicaciones Express.


El código mostrado abajo, muestra como puede importarse un modulo con base a su nombre, como ejemplo se utiliza el  framework Express. 

Primero se invoca la función ```require()```, indicando como parámetro el nombre del módulo o librería como una cadena ('express'),  posteriormente se invoca el objeto obtenido para crear una aplicación Express.

Posteriormente, se puede acceder a las propiedades y funciones del objeto Aplicación.


```JavaScript
var express = require('express');
var app = express();
```


---
---
 

## :book: TEORIA - :star:  UNIDAD 2

---

Temas:

- Mostrar HTML desde archivo

- Formularios - Métodos GET y POST

- NPM, el manejador de bibliotecas.

- NPM Init

- NPM -v

- Archivo Json de configuración de NPM

- Servidor en Node.Js

- Concepto de Servicios Web

- Consumir Web services desde JavaScript.

---

# :star: 2. Acerca de NPM

## Acerca de NPM

**npm** es el registro de software más grande del mundo. Los desarrolladores de código abierto de todos los continentes usan npm para compartir y tomar prestados paquetes, y muchas organizaciones también usan npm para administrar el desarrollo privado.

npm consta de tres componentes distintos:

- el sitio web

- la interfaz de línea de comandos (CLI)

- el registro


Utilizá el sitio web para descubrir paquetes, configurar perfiles y administrar otros aspectos de su experiencia npm. Por ejemplo, podés configurar  organizaciones  para administrar el acceso a paquetes públicos o privados.


La CLI se ejecuta desde una terminal y es la forma en que la mayoría de los desarrolladores interactúan con npm.


El registro es una gran base de datos pública de software JavaScript y la meta-información que la rodea.

---

### :star:  Utilizá npm para. . .

- Adaptar paquetes de código para tus aplicaciones o incorporar paquetes tal como están.

- Descargar herramientas independientes que podés usar de inmediato.

- Ejecutar paquetes sin descargar usando npx .

- Compartir código con cualquier usuario de npm, en cualquier lugar.

- Restrinjir el código a desarrolladores específicos.

- Crear organizaciones para coordinar el mantenimiento, la codificación y los desarrolladores de paquetes.

- Formar equipos virtuales utilizando organizaciones.

- Administrar múltiples versiones de código y dependencias de código.

- Actualizar las aplicaciones fácilmente cuando se actualice el código subyacente.

- Descubrir múltiples formas de resolver el mismo rompecabezas.

- Buscar otros desarrolladores que estén trabajando en problemas y proyectos similares.

---

## :star:  Empezando

- 1 - Para comenzar con npm, podés crear una cuenta , que estará disponible en http://www.npmjs.com/~*yourusername *.

- 2 - Después de configurar una cuenta npm, el siguiente paso es usar la interfaz de línea de comandos (CLI) para instalar npm . 


--

### :star:  Compartir paquetes y colaborar con otros

Si eligís compartir tus paquetes públicamente, no hay ningún costo. Para usar y compartir paquetes privados, debes actualizar tu cuenta. Para compartir con otros, crear organizaciones llamadas organizaciones npm , o invite a otros a trabajar con vos, de forma privada (por una tarifa) o públicamente (gratis). O podés registrarte para obtener una instancia privada de npm para tu empresa, llamada npm Enterprise , para que puedas desarrollar paquetes internamente que no se comparten públicamente.

Para obtener más información sobre npm como producto, las próximas funciones nuevas y los usos interesantes de npm, suscríbite al boletín informativo en [npm-Weekly](https://www.npmjs.com/npm-weekly) o seguí a [@npmjs en Twitter](https://twitter.com/npmjs).

---

### :star:  Documentación de referencia de CLI

Si bien los comandos CLI relevantes se tratan a lo largo de esta cursada de Codo a Codo, también NPM pone a disposición su documentación del usuario, e incluye ayuda de línea de comandos, en su propia sección de documentación y ayuda instantánea (páginas de manual) .


---

## :star: 3. Crear cuenta de usuario NPM


### Crear una nueva cuenta de usuario en el registro público
 

Si no tenés una cuenta de usuario de npm, podés crear una cuenta para compartir y descargar paquetes de Javascript en el registro público.

Nota: Si estás utilizando un registro de npm Enterprise, debes iniciar sesión con tus credenciales de usuario en lugar de crear una cuenta. 

### Crear una cuenta en el sitio web

Ir a la [página de registro de npm](https://www.npmjs.com/signup).

En el formulario de registro de usuario, escribí los campos:

Nombre de usuario: el nombre de usuario que se mostrará cuando publiques paquetes o interactúes con otros usuarios de npm en npmjs.com. Tu nombre de usuario debe estar en minúsculas y puede contener guiones y números.

Dirección de correo electrónico: tu dirección de correo electrónico pública se agregará a los metadatos de sus paquetes y será visible para cualquiera que descargue sus paquetes. También enviaremos un correo electrónico a esta cuenta cuando actualices paquetes, así como actualizaciones e información de productos ocasionales.

Contraseña : Tu contraseña debe cumplir con nuestras pautas de contraseña:

- tiene más de 10 caracteres

- no coincide o contiene significativamente su nombre de usuario, por ejemplo, no use 'username123'

- no es una contraseña de uso común

->> Lee el Acuerdo de licencia de usuario final y la Política de privacidad e indique que estás de acuerdo con ellos.



->> Hacé clic en Crear una cuenta

Nota: Después de registrarte para obtener una cuenta npm, recibirá un correo electrónico de verificación de cuenta. Debe verificar su dirección de correo electrónico para publicar paquetes en el registro.

---

### :star:  Probando su nueva cuenta con npm login

Utilizá el comando npm login para probar el inicio de sesión en su nueva cuenta.

Nota: Si escribís mal el nombre de usuario de tu cuenta existente cuando inicias sesión con el comando npm login, crearás una nueva cuenta con el nombre mal escrito. Para obtener ayuda con las cuentas creadas accidentalmente, comunícate con el Soporte de npm .

En la línea de comando, escribí el siguiente comando:

```npm init sesion```

Cuando se te solicite, ingrese su nombre de usuario, contraseña y dirección de correo electrónico.

Si tenés habilitada la autenticación de dos factores , cuando se te solicite, ingrese una contraseña de un solo uso.

Para comprobar que has iniciado sesión correctamente, escriba:

```npm whoami```

Debería mostrarte tu nombre de usuario npm.

---

## :star: 4. Registro Público de NPM

### ¿Que es el registro público de npm?


El registro público de npm es una base de datos de paquetes de JavaScript, cada uno compuesto por software y metadatos. Los desarrolladores de código abierto y los desarrolladores de las empresas utilizan el registro npm para contribuir con paquetes a toda la comunidad o miembros de sus organizaciones, y descargar paquetes para utilizarlos en sus propios proyectos.

npm es el Node Package Manager que viene incluido y ayuda a cada desarrollo asociado a Node. Durante años, Node ha sido ampliamente utilizado por los desarrolladores de JavaScript para compartir herramientas, instalar varios módulos y administrar sus dependencias. Es por eso que es fundamental que las personas que trabajan con Node.js entiendan qué es npm.



Esta herramienta funciona de dos formas:

- Como un repositorio ampliamente utilizado para la publicación de proyectos Node.js de código abierto. Lo que significa que es una plataforma en línea donde cualquiera puede publicar y compartir herramientas escritas en JavaScript.

- Como una herramienta de línea de comandos que ayuda a interactuar con plataformas en línea, como navegadores y servidores. Esto ayuda a instalar y desinstalar paquetes, gestión de versiones y gestión de dependencias necesarias para ejecutar un proyecto.

Para usarlo, tenés que instalar node.js como te mostré en la unidad anterior de codo a codo Desarrollo Web, ya que están desarrollados y se instalan de forma agrupada.

---

## :star: 5. Paquetes y Módulos en NPM

### Acerca de paquetes y módulos

El registro npm contiene paquetes, muchos de los cuales también son módulos de nodo o contienen módulos de nodo. 

### Acerca de los paquetes

Un paquete es un archivo o directorio descrito por un archivo package.json. Un paquete debe contener un archivo package.json para que se publique en el registro de npm. 

Los paquetes pueden ser sin ámbito o con ámbito para un usuario u organización, y los paquetes con ámbito pueden ser privados o públicos. 

### Formatos de paquete
Un paquete es cualquiera de los siguientes:

- a) Una carpeta que contiene un programa descrito por un archivo package.json.

- b) Un tarball comprimido con gzip que contiene (a).

- c) Una URL que se resuelve en (b).

- d) A ```<name>@<version>```que se publica en el registro con (c).

- e) A ```<name>@<tag>``` que apunta a (d).

- f) A ```<name>```que tiene una etiqueta latest que satisface (e).

- g) Una URL git que, cuando se clona, ​​da como resultado (a).


### Formatos de URL de git del paquete npm

Las URL de Git utilizadas para los paquetes npm se pueden formatear de las siguientes formas:

```git://github.com/user/project.git#commit-ish```

```git+ssh://user@hostname:project.git#commit-ish```

```git+http://user@hostname/project/blah.git#commit-ish```

```git+https://user@hostname/project/blah.git#commit-ish```


El ```commit-ish``` puede ser cualquier etiqueta, sha, o una rama que se puede suministrar como un argumento a git checkout. 

El valor predeterminado commit-ish es master.

###  Acerca de los módulos

Un módulo es cualquier archivo o directorio en el directorio ```node_modules``` que la función ```require()``` Node.js puede cargar .

Para que la  función ```require()``` Node.js lo cargue, un módulo debe ser uno de los siguientes:

- Una carpeta con un archivo ```package.json``` que contiene un campo **main**.

- Un archivo JavaScript.

Nota: Dado que no se requiere que los módulos tengan un archivo ```package.json```, no todos los módulos son paquetes. Solo los módulos que tienen un ```package.json```

El archivo también es parte del paquete.

En el contexto de un programa de nodo, module también es lo que se cargó desde un archivo. Por ejemplo, en el siguiente programa:

```javaScript
var req = require ('solicitud')
```

podríamos decir que "La variable se  refiere req al  módulo request".

 
 ---

## :star: 6. Alcances del registro en NPM

## Acerca de los alcances

Nota: Se debe utilizar npm versión 2 o superior para utilizar ámbitos. Para actualizar a la última versión de npm, en la línea de comando, ejecutá

```npm install npm @ latest -g```

Cuando te registrás para obtener una cuenta de usuario de npm o creas una organización, se te otorga un alcance que coincide con el nombre de tu usuario u organización. 

Un alcance te permite crear un paquete con el mismo nombre que un paquete creado por otro usuario u organización sin conflicto.

Cuando se enumeran como dependientes en un archivo package.json, los paquetes con ámbito están precedidos por su nombre de ámbito. El nombre del alcance es todo lo que se encuentra entre la barra  @ y la barra:

Alcance "npm":

```@ npm / nombre-paquete```

Alcance "npmcorp":

```@ npmcorp / nombre-paquete```


###  Visibilidad de alcances y paquetes

Los paquetes sin ámbito son siempre públicos.

Los paquetes privados siempre tienen un alcance.

Los paquetes con ámbito son privados de forma predeterminada; debe pasar una marca de línea de comandos al publicar para hacerlos públicos.

---

## :star:  7. Crear y publicar paquetes

### Crear y publicar paquetes privados

Para compartir tu código con un conjunto limitado de usuarios o equipos, podés publicar paquetes privados con ámbito de usuario o con ámbito de organización en el registro de npm.

Nota: Antes de poder publicar paquetes npm privados con ámbito de usuario, debes registrarte para obtener una cuenta de usuario npm pagada.

### Creando un paquete privado

Si estás utilizando npmrc para administrar cuentas en múltiples registros , en la línea de comando, cambiá al perfil apropiado:

```npmrc <nombre-perfil>```

En la línea de comando, creá un directorio para su paquete:

```mkdir mi-paquete-de-prueba```

Navegá hasta el directorio raíz de su paquete:

```cd mi-paquete-de-prueba```

Si está utilizando git para administrar el código de tu paquete, en el directorio raíz del paquete, ejecute los siguientes comandos, reemplazándolos con la URL remota ```git-remote-url``` de git para tu paquete:

``git init``

```git remote agregar origen git: // git-remote-url```

En el directorio raíz del paquete, ejecutá el comando npm init y pase el alcance a la scopebandera:

Para un paquete en el ámbito de la organización:

```npm init --scope = @ my-org```

Para un paquete de ámbito de usuario:

``npm init --scope = @ mi-nombre de usuario``

## Revisar el contenido del paquete en busca de información sensible o innecesaria

La publicación de información confidencial en el registro puede dañar a tus usuarios, comprometer su infraestructura de desarrollo, ser costosa de arreglar y ponerlo en riesgo de acciones legales. Recomendamos encarecidamente eliminar la información confidencial, como claves privadas, contraseñas, [información de identificación personal] [pii] (PII) y datos de tarjetas de crédito antes de publicar su paquete en el registro. Incluso si su paquete es privado, la información confidencial puede quedar expuesta si el paquete se hace público o se descarga en una computadora a la que puedan acceder más usuarios de los previstos.

##  Probando un paquete

Para reducir las posibilidades de publicar errores, recomendamos probar tu paquete antes de publicarlo en el registro de npm. Para probar su paquete, ejecute npm install con la ruta completa al directorio de su paquete:

```npm instalar mi paquete```

## Publicar paquetes privados

De forma predeterminada, los paquetes con ámbito se publican con visibilidad privada.

En la línea de comando, navegue hasta el directorio raíz de tu paquete.

```cd / ruta / a / paquete```

Para publicar tu paquete privado en el registro npm, ejecutá:

npm publicar

Para ver la página de tu paquete privado, visitá [https://npmjs.com/package/*package-name](https://npmjs.com/package/*package-name),  reemplazando package-name * con el nombre de tu paquete. Los paquetes privados dirán private debajo del nombre del paquete en el sitio web de npm.



---
---


 
## :book: TEORIA - UNIDAD 4:

### Temas:

- Uso y características de Express

- Mostrar archivos por intermedio de sendfile

- Mostrando archivos con node

- Definiendo el motor de vistas con Engine.

- .then y throw en el manejo de errores

- Haciendo llamada a funciones con diferentes parámetros

- Uso de Callback en funciones Node

- Instalación de Express

- Api´s Asincrónicas

- Archivos Estáticos

- Manejo de Excepciones

- Express y bases de datos.

---

## :star: El framework Express

### Express, el framework mas utilizado de Node.Js

Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para:

- Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).

- Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.

- Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.

- Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.

A pesar de que Express es en sí mismo bastante minimalista, los desarrolladores han creado paquetes de middleware compatibles para abordar casi cualquier problema de desarrollo web. Hay librerías para trabajar con cookies, sesiones, inicios de sesión de usuario, parámetros URL, datos POST, cabeceras de seguridad y muchos más. Podés encontrar una lista de paquetes middleware mantenida por el equipo de Express en Express Middleware (junto con una lista de algunos de los paquetes más populares de terceros).

### ¿Dónde comenzó?

Express fue lanzado inicialmente en Noviembre de 2010 y está ahora en la versión 4.17.1 de la API. Podés comprobar en el changelog la información sobre cambios en la versión actual, y en GitHub notas de lanzamiento históricas más detalladas.


###  ¿Qué popularidad tiene Node/Express?

La popularidad de un framework web es importante porque es un indicador de si se continuará manteniendo y qué recursos tienen más probabilidad de estar disponibles en términos de documentación, librerías de extensiones y soporte técnico.

No existe una medida disponible de inmediato y definitiva de la popularidad de los frameworks de lado servidor (aunque sitios como Hot Frameworks intentan asesorar sobre popularidad usando mecanismos como contar para cada plataforma el número de preguntas sobre proyectos en GitHub y StackOverflow). Una pregunta mejor es si Node y Express son lo "suficientemente populares" para evitar los problemas de las plataformas menos populares. ¿Continúan evolucionando? ¿Podés conseguir la ayuda que necesitas? ¿Hay alguna posibilidad de que consigas un trabajo remunerado si aprendes Express?

De acuerdo con el número de compañías de perfil alto que usan Express, el número de gente que contribuye al código base, y el número de gente que proporciona soporte tanto libre como pagado, podemos entonces decir que Express es un framework extremadamente popular.


### 


### ¿Es Express dogmático?

Los frameworks web frecuentemente se refieren a sí mismos como "dogmáticos" ("opinionated") o "no dogmáticos" ("unopinionated").

Los **frameworks dogmáticos** son aquellos que opinan acerca de la "manera correcta" de gestionar cualquier tarea en particular. Ofrecen soporte para el desarrollo rápido en un dominio en particular (resolver problemas de un tipo en particular) porque la manera correcta de hacer cualquier cosa está generalmente bien comprendida y bien documentada. Sin embargo pueden ser menos flexibles para resolver problemas fuera de su dominio principal, y tienden a ofrecer menos opciones para elegir qué componentes y enfoques pueden usarse.

Los **framewoks no dogmáticos**, en contraposición, tienen muchas menos restricciones sobre el modo mejor de unir componentes para alcanzar un objetivo, o incluso qué componentes deberían usarse. Hacen más fácil para los desarrolladores usar las herramientas más adecuadas para completar una tarea en particular, si bien al costo de que necesitas encontrar esos componentes por tí mismo.

**Express es no dogmático**, transigente. Podés insertar casi cualquier middleware compatible que te guste dentro de la cadena de manejo de la petición, en casi cualquier orden que te parezca. Podés estructurar la app en un fichero o múltiples ficheros y usar cualquier estructura de directorios.Es válido tambien mencionar que algunas veces podés sentir que tenes demasiadas opciones.


### 

### ¿Cómo es el código para Express?

En sitios web o aplicaciones web dinámicas, que accedan a bases de datos, el servidor espera a recibir peticiones HTTP del navegador (o cliente). Cuando se recibe una petición, la aplicación determina cuál es la acción adecuada correspondiente, de acuerdo a la estructura de la URL y a la información (opcional) indicada en la petición con los métodos POST o GET. Dependiendo de la acción a realizar, puede que se necesite leer o escribir en la base de datos, o realizar otras acciones necesarias para atender la petición correctamente. La aplicación ha de responder al navegador, normalmente, creando una página HTML dinámicamente para él, en la que se muestre la información pedida, usualmente dentro de un elemento especifico para este fin, en una plantilla HTML.

Express posee métodos para especificar que función ha de ser llamada dependiendo del verbo HTTP usado en la petición (GET, POST, SET, etc.) y la estructura de la URL ("ruta"). También tiene los métodos para especificar que plantilla ("view") o gestor de visualización utilizar, donde están guardadas las plantillas de HTML que han de usarse  y como  generar la visualización adecuada para cada caso. El middleware de Express, puede usarse también para añadir funcionalidades para la gestión de cookies, sesiones y usuarios, mediante el uso de parámetros, en los  métodos  POST/GET. 

Puede utilizarse además cualquier sistema de trabajo con bases de datos, que sea soportado por Node (Express no especifica ningún método preferido para trabajar con bases de datos). 

En las siguientes secciones, se explican algunos puntos comunes que se pueden encontrar cuando se trabaja con código de Node y Express.


### Hola Mundo! - en Express

Primero consideremos el tradicional ejemplo de Hola Mundo! (se comentará cada parte a continuación).

 
```JavaScript
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
```

Las primeras dos líneas incluyen (mediante la orden **require()**) el **módulo de Express** y crean una **aplicación de Express**. 

Este elemento se denomina comúnmente **app**, y posee métodos para el *enrutamiento de las peticiones HTTP*, *configuración del 'middleware'*, y *visualización de las vistas de HTML*, uso del *motores de 'templates'*, y gestión de las *configuraciones de las aplicaciones  que controlan la aplicación* (por ejemplo el entorno, las definiciones para enrutado ... etcetera.)

Las líneas que siguen en el código (las tres líneas que comienzan con **app.get**) muestran una definición de ruta que se llamará cuando se reciba una petición  HTTP GET con una dirección **('/')** relativa al directorio **raíz**. La función **'callback'** toma una *petición* (**req**) y una *respuesta* (**res**) como argumentos, y ejecuta un **send()** en la respuesta, para enviar la cadena  de caracteres: "Hola Mundo!".

El bloque final de código, define y crea el servidor, escuchando el **puerto 3000** e imprime un comentario en la consola. 

Cuando se está ejecutando el servidor, es posible ir hasta la dirección  **localhost:3000**  en un navegador, y ver como el servidor de este ejemplo devuelve el mensaje de respuesta.

 
---

## :star: 3. Instalación de Express

Instalando el módulo Express

### Instalación

Suponiendo que ya ha instalado **Node.js**, creá un directorio para que contenga la aplicación y convertilo en el directorio de trabajo.

``` 
$ mkdir myapp
$ cd myapp
```
 

Utilizá el comando ```npm init``` para crear un archivo **package.json** para la aplicación.

 
``` > $ npm init```

 Este comando solicita varios elementos como, por ejemplo, el nombre y la versión de la aplicación. Por ahora, sólo tenés que pulsar ENTER para aceptar los valores predeterminados para la mayoría de ellos, con la siguiente excepción:
 
```entry point: (index.js)```


Especificá app.js o el nombre que desees para el archivo principal. Si deseas que sea index.js, pulsás enter y listo, para aceptar el nombre de archivo predeterminado recomendado.

A continuación, instalá Express en el directorio myapp y guardalo en la lista de dependencias. Por ejemplo:
 
``` > $ npm install express --save```

Para instalar Express temporalmente y no añadirlo a la lista de dependencias, omití la opción ```--save```:

 ``` > $ npm install express```

Los módulos de Node que se instalan con la opción ```--save``` se añaden a la lista dependencies en el archivo package.json. Posteriormente, si ejecutás npm install en el directorio app, los módulos se instalarán automáticamente en la lista de dependencias.

---

## :star: 4. Funciones Callbacks

### Función Callback

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Ejemplo:

```JavaScript
function saludar(nombre) {
  alert('Hola ' + nombre);
}


function procesarEntradaUsuario(callback) { 
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```


El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

Sin embargo, tené en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica  — estas se denominan devoluciones de llamada asincrónicas. 

 
---
## :star:   5. Importar Módulos

### Importando y creando módulos

Un **modulo** es una **librería** o *archivo JavaScript* que puede ser importado dentro de otro código utilizando la función **require()** de Node.  Por sí mismo, **Express es un modulo**,  como lo son el **middleware** y las librerías de bases de datos que se utilizan en las aplicaciones Express.

El código mostrado abajo, muestra como puede importarse un modulo con base a su nombre, como ejemplo se utiliza el  framework Express . 

-Primero se invoca la función **require()**, indicando como parámetro el nombre del módulo o librería como una cadena ('express').

-Posteriormente se invoca el objeto obtenido para crear una aplicación Express.

-Posteriormente, se puede acceder a las propiedades y funciones del objeto Aplicación.

```JavaSCript
var express = require('express');
var app = express();
```

También podemos crear nuestros propios módulos que puedan posteriormente ser importados de la misma manera.

Para hacer que los objetos esten disponibles fuera de un modulo, solamente es necesario asignarlos al **objeto exports**. Por ejemplo, el modulo mostrado a continuación square.js  es un archivo que exporta los métodos area() y perimeter() :

```JavaScript
exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };
```

Nosotros podemos importar este módulo utilizando la función **require()**, y entonces podremos invocar los métodos exportados de la siguiente manera:

```JavaScript
// Utilizamos la función require() El nombre del archivo se ingresa sin la extensión (opcional) .js
var square = require('./square');

// invocamos el metodo area()
console.log('El área de un cuadrado con lado de 4 es ' + square.area(4));
```
 
Si querés exportar completamente un objeto en una asignación en lugar de construir cada propiedad por separado, debes asignarlo al módulo module.exports como se muestra a continuación (también podés hacer esto al inicio de un constructor o de otra función.)

```JavaScript
module.exports = {
  area: function(width) {
    return width * width;
  },
  perimeter: function(width) {
    return 4 * width;
  }
};
```

---

### :star: 6. Api´s Asincrónicas


### Usando APIs asíncronas

El código JavaScript usa frecuentemente APIs asíncronas antes que sincrónicas para operaciones que tomen algún tiempo en completarse. En una API sincrónica cada operación debe completarse antes de que la siguiente pueda comenzar. Por ejemplo, la siguiente función de registro es síncrona, y escribirá en orden el texto en la consola (Primero, Segundo).

```JavaScript
console.log('Primero');
console.log('Segundo');
```

En contraste, **en una API asincrónica, la API comenzará una operación e inmediatamente retornará (antes de que la operación se complete). Una vez que la operación finalice, la API usará algún mecanismo para realizar operaciones adicionales**. 

Por ejemplo, el código de abajo imprimirá "Segundo, Primero" porque aunque el método setTimeout() es llamado primero y retorna inmediatamente, la operación no se completa por varios segundos.

```JavaScript
setTimeout(function() { 
  console.log('Primero');
}, 3000);

console.log('Segundo');
```



Usar APIs asíncronas sin bloques es aun mas importante en Node que en el navegador, porque **Node es un entorno de ejecución controlado por eventos de un solo hilo. "Un solo hilo"** quiere decir que **todas las peticiones al servidor son ejecutadas en el mismo hilo (en vez de dividirse en procesos separados)**. Este modelo es extremadamente eficiente en términos de velocidad y recursos del servidor, pero eso significa que si alguna de sus funciones llama a métodos sincrónicos que tomen demasiado tiempo en completarse, bloquearan no solo la solicitud actual, sino también cualquier otra petición que este siendo manejada por tu aplicación web.

Hay muchas maneras para una API asincrónica de notificar a su aplicación que se ha completado. La manera mas común es registrar una **función callback** cuando invocás a una API asincrónica, la misma será llamada de vuelta cuando la operación se complete. Éste es el enfoque utilizado anteriormente.

 

En el siguiente ejemplo de "Hola Mundo!" en Express, definimos una función (callback) manejadora de ruta para peticiones HTTP GET a la raíz del sitio ('/').

```JavaScript
app.get('/', function(req, res) {
  res.send('Hello World!');
});
```



La función callback toma una petición y una respuesta como argumentos. En este caso el método simplemente llama a send() en la respuesta para retornar la cadena "Hello World!". Hay un número de otros métodos de respuesta para finalizar el ciclo de solicitud/respuesta, por ejemplo podrá llamar a res.json() para enviar una respuesta JSON o res.sendFile() para enviar un archivo.

El objeto que representa una aplicación de Express, también posee métodos para definir los manejadores de rutas para el resto de los verbos HTTP: post(), put(), delete(), options(), trace(), copy(), lock(), mkcol(), move(), purge(), propfind(), proppatch(), unlock(), report(), mkactivity(), checkout(), merge(), m-search(), notify(), subscribe(), unsubscribe(), patch(), search(), y connect().

Hay un método general para definir las rutas:  **app.all()**, el cual será llamado en respuesta a cualquier método HTTP. Se usa para cargar funciones del middleware en una dirección particular para todos los métodos de peticiones. El siguiente ejemplo (de la documentación de Express) muestra el uso de los manejadores a  /secret  sin tener en cuenta el verbo HTTP utilizado (siempre que esté definido por el módulo http).

```JavaScript
app.all('/secret', function(req, res, next) {
  console.log('Accediendo a la seccion secreta ...');
  next(); // pasa el control al siguiente manejador
});
```



Las rutas le permiten igualar patrones particulares de caracteres en la URL, y extraer algunos valores de ella y pasarlos como parámetros al manejador de rutas (como atributo del objeto petición pasado como parámetro).

**Usualmente es útil agrupar manejadores de rutas para una parte del sitio juntos y accederlos usando un prefijo de ruta en común**. 

Ej: un sitio con una Wiki podría tener todas las rutas relacionadas a dicha sección en un archivo y siendo accedidas con el prefijo de ruta /wiki/. En Express esto se logra usando el **objeto express.Router**. 

Ej: podemos crear nuestra ruta wiki en un módulo llamado wiki.js, y entonces exportar el objeto Router, como se muestra debajo:

```JavaScript
// wiki.js - Modulo de rutas Wiki
var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, reCreando manejadores de rutass) {
  res.send('Página de inicio Wiki');
});
 
// About page route
router.get('/about', function(req, res) {
  res.send('Acerca de esta wiki');
});

module.exports = router;
```
 

Para usar el router en nuestro archivo app principal, necesitamos **require()** el módulo de rutas (wiki.js), entonces llamar a **use()** en la aplicación Express para agregar el Router al software intermediario que maneja las rutas. Las dos rutas serán accesibles entonces desde /wiki/ y /wiki/about/.

```JavaScript
var wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);
```



### Usando middleware

El "middleware" es ampliamente utilizado en las aplicaciones de Express: desde tareas para servir archivos estáticos, a la gestión de errores o la compresión de las respuestas HTTP. Mientras las funciones de enrutamiento, con el objeto express.Router, se encargan del ciclo petición-respuesta, al gestionar la respuesta adecuada al cliente, las funciones  de middleware normalmente realizan alguna operación al gestionar una petición o respuesta y a continuación llaman a la siguiente función en la "pila", que Podés ser otra función de middleware  u otra función de enrutamiento. El orden en el que las funciones de middleware son llamadas depende del desarrollador de la aplicación.

La mayoría de las aplicaciones usan middleware desarrollado por terceras partes, para simplificar funciones habituales en el desarrollo web, como puede ser: 

- gestión de cookies

- sesiones

- autentificado de usuarios

- peticiones POST  y datos en JSON

- registros de eventos

Podés encontrar en npm.js una  lista de middleware mantenido por el equipo de Express (que también incluye otros paquetes populares de terceras partes). Las librerías de Express están disponibles con la aplicación NPM (Node Package Manager).

Para usar estas colecciones, primero ha de instalar la aplicación usando NPM. Por ejemplo para instalar el registro de peticiones HTTP morgan, se haría con el comando Bash:  

``` > $ npm install morgan```

Entonces podrías llamar a la función use() en un objeto de aplicación Express para utilizar este middleware a su aplicación. 

```JavaScript
var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('dev'));
```
 


Podés escribir tu propia funcion middleware, y si queres hacerlo así (solo para crear código de manejo de error). La única diferencia entre una función **middleware** y un callback manejador de rutas es que las funciones middleware **tienen un tercer argumento next, cuyas funciones  middleware son esperadas para llamarlas si ellas no completan el ciclo request (cuando la función midleware es llamada, esta contiene la próxima función que debe ser llamada)**.


Podés agregar una función middleware a la cadena de procesamiento con cualquier  **app.use()**  o  **app.add()**, dependiendo de si hay que aplicar el middleware a todas las respuestas o a respuestas con un verbo particular HTTP (GET, POST, etc). Vos especificas las rutas, lo mismo en ambos casos, aunque la ruta es opcional cuando llama app.use().


El ejemplo de abajo muestra como podés agregar la función middleware usando ambos métodos, y con/sin una ruta.

```JavaSCript
var express = require('express');
var app = express();

// An example middleware function
var a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
```
 


---

### :star: 7. Archivos estáticos

### Sirviendo archivos estáticos

Podés utilizar el **middleware express.static** para servir archivos estáticos, incluyendo sus imagenes, CSS y JavaScript (static() es la única función  middleware que es actualmente parte de Express). 

Por ejemplo, podrias utilizar la linea de abajo para servir imágenes, archivos CSS, y archivos JavaScript desde un directorio nombrado 'public' al mismo nivel desde donde llama a node:

```JavaScript
app.use(express.static('public'));
```

Cualquier archivo existente en el directorio público son servidos al agregar su nombre de archivo (relativo a la ubicación del directorio "público" ) de la ubicación URL. Por ejemplo:

[http://localhost:3000/images/dog.jpg](http://localhost:3000/images/dog.jpg)

[http://localhost:3000/css/style.css](http://localhost:3000/css/style.css)

[http://localhost:3000/js/app.js](http://localhost:3000/js/app.js)

[http://localhost:3000/about.html](http://localhost:3000/about.html)

Podés llamar **static()** en multiples ocasiones a servir multiples directorios. Si un archivo no puede ser encontrado por una función middleware entonces éste simplemente será pasado en la subsequente middleware (el orden en que el middleware está basado en  su orden de declaración).

```JavaScript
app.use(express.static('public'));
app.use(express.static('media'));
```

Tambien podés crear un prefijo virtual para sus URLs estáticas, aun más teniendo los archivos agregados en la ubicación URL. Por ejemplo, aqui especificamos a mount path tal que los archivos son bajados con el prefijo "/media":

```JavaScript
app.use('/media', express.static('public'));
```

Ahora, Podés bajar los archivos que estan en el directorio publico del path con prefijo /media.

[http://localhost:3000/media/images/dog.jpg](http://localhost:3000/media/images/dog.jpg)

[http://localhost:3000/media/video/cat.mp4](http://localhost:3000/media/video/cat.mp4)

[http://localhost:3000/media/cry.mp3](http://localhost:3000/media/cry.mp3)



---

#### :star:  Manejando errores

Los errores son manejados por una o más funciones especiales middleware que tienen cuatro argumentos, en lugar de las usuales tres: (err, req, res, next. Por ejemplo:

```JavaScript
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

Estas pueden devolver cualquier contenido, pero deben ser llamadas después de todas las otras app.use() llamadas de rutas tal que ellas son las últimas middleware en el proceso de manejo de request.

Express viene con un manejador de error integrado, el que se ocupa de cualquier error remanente que pudiera ser encontrado en la app. Esta función middleware con su manejador de error esta agregada al final del stack de funciones middleware. Si pasa un error a next() y no lo maneja en un manejador de error, éste sera manejado por el manejador de error integrado; el error sera escrito en el cliente con el rastreo de pila.

--- 

### :star: 8. Expresiones de manejo de excepciones

### Expresiones de manejo de excepciones

Podés lanzar excepciones usando la instrucción **throw** y manejarlas usando las declaraciones **try...catch**.

**Expresión throw**

Declaración **try...catch**

---

### Tipos de excepciones

Casi cualquier objeto se puede lanzar en JavaScript. Sin embargo, no todos los objetos lanzados son iguales. Si bien es común lanzar números o cadenas como errores, con frecuencia es más efectivo usar uno de los tipos de excepción creados específicamente para este propósito:

excepciones ECMAScript

La interfaz DOMException (en-US) representa un evento anormal (llamado excepción) que ocurre como resultado de llamar a un método o acceder a una propiedad de una API web y la interfaz DOMError describe un objeto de error que contiene un nombre de error.

### Expresión throw

**Utilizá la expresión throw para lanzar una excepción**. 

Una expresión throw especifica el valor que se lanzará:

**throw expression**;

Podés lanzar cualquier expresión, no solo expresiones de un tipo específico. 

El siguiente código arroja varias excepciones de distintos tipos:

```JavaScript
throw 'Error2'; // tipo String
throw 42; // tipo Number
throw true; // tipo Boolean
throw {toString: function() { return "¡Soy un objeto!"; } };
```


Nota Podés especificar un objeto cuando lanzas una excepción. A continuación, Podés hacer referencia a las propiedades del objeto en el bloque catch.


```JavaScript
// Crea un objeto tipo de UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}
```
 
```JavaScript
// Hacer que la excepción se convierta en una cadena
// (por ejemplo, por la consola de errores)
UserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
}
```
 
```JavaScript
// Crea una instancia del tipo de objeto y tírala
throw new UserException('Valor muy alto');
```


### :star:  Declaración try...catch

**La declaración try...catch marca un bloque de expresiones para probar y especifica una o más respuestas en caso de que se produzca una excepción**. **Si se lanza una excepción, la declaración try...catch la detecta**.


La declaración try...catch consta de un bloque try, que contiene una o más declaraciones, y un bloque catch, que contiene declaraciones que especifican qué hacer si se lanza una excepción en el bloque try.


En otras palabras:

->> si deseas que el bloque try tenga éxito, pero si no es así, deseas que el control pase al bloque catch. 

->> Si alguna instrucción dentro del bloque try (o en una función llamada desde dentro del bloque try) arroja una excepción, el control  inmediatamente  cambia al bloque catch. 

->> Si no se lanza ninguna excepción en el bloque try, se omite el bloque catch. El bloque finalmente se ejecuta después de que se ejecutan los bloques  try y catch, pero antes de las declaraciones que siguen a la declaración try...catch.



El siguiente ejemplo usa una instrucción try...catch. El ejemplo llama a una función que recupera el nombre de un mes de un arreglo en función del valor pasado a la función. Si el valor no corresponde a un número de mes (1-12), se lanza una excepción con el valor "Mes Inválido" y las declaraciones en el bloque catch establezca la variable monthName en 'unknown'.

```JavaScript
function getMonthName(mo) {
  mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
  let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'Mes Inválido'; // aquí se usa la palabra clave throw
  }
}
```
 
```JavaScript
try { // declaraciones para try
  monthName = getMonthName(myMonth); // la función podría lanzar una excepción
} catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
}
```

#### :star:  El bloque catch

**Podés usar un bloque catch para manejar todas las excepciones que se puedan generar en el bloque try**.

```
catch (catchID) {
  instrucciones
}
```

El bloque catch especifica un identificador (catchID en la sintaxis anterior) que contiene el valor especificado por la expresión throw. Podés usar este identificador para obtener información sobre la excepción que se lanzó.


JavaScript crea este identificador cuando se ingresa al bloque catch. El identificador dura solo la duración del bloque catch. Una vez que el bloque catch termina de ejecutarse, el identificador ya no existe.

Por ejemplo, el siguiente código lanza una excepción. Cuando ocurre la excepción, el control se transfiere al bloque catch.

```JavaScript
try {
  throw 'myException'; // genera una excepción
} catch (err) {
// declaraciones para manejar cualquier excepción
  logMyErrors(err); // pasa el objeto exception al controlador de errores
}
```


### :star:  El bloque finally

**El bloque finally contiene instrucciones que se ejecutarán después que se ejecuten los bloques try y catch**. 

Además, el bloque finally ejecuta antes el código que sigue a la declaración try...catch...finally.

También es importante notar que **el bloque finally se ejecutará independientemente de que se produzca una excepción**. Sin embargo, si se lanza una excepción, las declaraciones en el bloque finally se ejecutan incluso si ningún bloque catch maneje la excepción que se lanzó.

Podés usar el bloque finally para hacer que tu script falle correctamente cuando ocurra una excepción. Por ejemplo, es posible que debas liberar un recurso que tu script haya inmovilizado.

El siguiente ejemplo abre un archivo y luego ejecuta declaraciones que usan el archivo. (JavaScript de lado del servidor te permite acceder a los archivos). Si se lanza una excepción mientras el archivo está abierto, el bloque finally cierra el archivo antes de que falle el script. Usar finally aquí asegura que el archivo nunca se deje abierto, incluso si ocurre un error.


```JavaScript
openMyFile();

try {
  writeMyFile(theData); // Esto puede arrojar un error
} catch(e) {
  handleError(e); // Si ocurrió un error, manéjalo
} finally {
  closeMyFile(); // Siempre cierra el recurso
}
```

Si el bloque finally devuelve un valor, este valor se convierte en el valor de retorno de toda la producción de try…catch…finally, independientemente de las declaraciones return en los bloques try y catch:

```JavaScript
function f() {

try {
  console.log(0);
  throw 'bogus';
} catch(e) {
  console.log(1);
  return true; // esta declaración de retorno está suspendida
// hasta que el bloque finally se haya completado
console.log(2); // no alcanzable
} finally {
  console.log(3);
  return false; // sobrescribe el "return" anterior
  console.log(4); // no alcanzable
}
// "return false" se ejecuta ahora
console.log(5); // inalcanzable
}

console.log(f()); // 0, 1, 3, false
```

La sobrescritura de los valores devueltos por el bloque finally también se aplica a las excepciones lanzadas o relanzadas dentro del bloque catch:


```JavaScript
function f() {

try {
  throw 'bogus';
} catch(e) {
  console.log('captura "falso" interno');
  throw e; // esta instrucción throw se suspende hasta
  // que el bloque finally se haya completado
} finally {
  return false; // sobrescribe el "throw" anterior
}
// "return false" se ejecuta ahora
}


try {
  console.log(f());
} catch(e) {
// ¡esto nunca se alcanza!
// mientras se ejecuta f(), el bloque `finally` devuelve false,
// que sobrescribe el `throw` dentro del `catch` anterior
console.log('"falso" externo capturado');
}
// Produce
// "falso" interno capturado
// false
```


### :star:  Declaraciones try...catch anidadas

- Podés anidar una o más declaraciones try...catch.

- Si un bloque try interno no tiene un bloque catch correspondiente:

-debe contener un bloque finally

-el bloque catch adjunto de la declaración try...catch se comprueba para una coincidencia.


Para obtener más información, consulta bloques try anidados en la una página de referencia try...catch.




### :star:  Utilizar objetos Error

Dependiendo del tipo de error, es posible que puedas utilizar las propiedades name y message para obtener un mensaje más refinado.

La propiedad name proporciona la clase general de Error (tal como DOMException o Error), mientras que message generalmente proporciona un mensaje más conciso que el que se obtendría al convertir el objeto error en una cadena.

Si estás lanzando tus propias excepciones, para aprovechar estas propiedades (por ejemplo, si tu bloque catch no discrimina entre tus propias excepciones y las del sistema), Podés usar el constructor Error.

Por ejemplo:


```JavaScript
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('El mensaje'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}

try {
  doSomethingErrorProne();
} catch (e) { // AHORA, en realidad usamos `console.error()`
  console.error(e.name); // registra 'Error'
  console.error(e.message); // registra 'The message' o un mensaje de error de JavaScript
}
```

---

## :star: 9. Express y Base de datos

### Usando Bases de datos

Las apps de Express pueden usar cualquier mecanismo de bases de datos soportadas por Node (Express en sí mismo no define ningúna conducta/requerimiento especifico adicional para administración de bases de datos). Hay muchas opciones, incluyendo **PostgreSQL**, **MySQL**, **Redis**, **SQLite**, **MongoDB**, etc.

Con el propósito de usar éste, primero hay instalar el manejador de bases de datos utilizando NPM. 

Por ejemplo, para instalar el manejador para el popular NoSQL MongoDB querría utilizar el comando: ```$ npm install mongodb```


La base de datos por si misma puede ser instalada localmente o en un servidor de la nube. 

En su codigo Express requiere el manejador, conectarse a la base de datos, y entonces ejecutar operaciones crear, leer, actualizar, y borrar (CLAB). }El ejemplo de abajo (de la documentación Express documentation) muestra como puede encontrar registros en la colección "mamiferos" usando MongoDB.

```JavaScript
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
  if (err) throw err;
  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
  });

});
```


Otra aproximación es acceder a su base de datos indirectamente, via algún **Mapeo Objeto Relacional** ("MOR"). En esta aproximación se define sus datos como "objetos" o "modelos" y el MOR mapea estos a través del delineamiento basico de la base de datos. Esta aproximación tiene el beneficio de que como un desrrollador puede continuar pensando en términos de objetos de JavaScript mas que en semántica de bases de datos, y en esto hay un lugar obvio para ejecutar la validación y chequeo de entrada de datos. Hablaremos más de bases de datos en un artículo posterior.


### Renderización de data (vistas)

El Motor de plantilla (referido como "motor de vistas" por Express) le permite definir la estructura de documento de salida en una plantilla, usando marcadores de posición para datos que seran llenados cuando una pagina es generada. Las plantillas son utilizadas generalmete para crear HTML, pero tambien pueden crear otros tipos de documentos.

En su código de configuración de su aplicación vos configuras el motor de plantillas para usar y su localización Express podría buscar plantillas usando las configuraciones de 'vistas' y 'motores de vistas', mostrado abajo (tendría también que instalar el paquete conteniendo su librería de plantillas)



```JavaScript
var express = require('express');
var app = express();

// Set directory to contain the templates ('views')
app.set('views', path.join(__dirname, 'views'));

// Set view engine to use, in this case 'some_template_engine_name'
app.set('view engine', 'some_template_engine_name');
```


La apariencia de la plantilla dependera de qué motor use. Asumiendo que tiene un archivo de plantillas nombrado "index.<template_extension>" este contiene placeholders para variables de datos nombradas 'title' y "message", podría llamar Response.render() en una función manejadora de rutas para crear y enviar la HTML response:


```JavaScript
app.get('/', function(req, res) {
  res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});
```

### Estructura de Archivos

Express no hace las cargas de estructura o de componentes utilizados. Rutas, vistas, archivos estáticos, y otras lógicas de aplicación específica pueden vivir en cualquier número de archivos con cualquier estructura de directorio. Mientras que esto es perfectamente posible, se puede tener toda la aplicación en un solo archivo. En Express, tipicamente esto tiene sentido al desplegar tu aplicación dentro de archivos basados en función (e.g. administracion de cuentas, blogs, tableros de discusion) y dominio de problema arquitectonico (e.g. modelo, vista or controlador si pasás a estar usando una arquitectura MVC).

 
---
---

## :book: UNIDAD 5

---

## :star: Temas:

- require HTTP

- writeHead – Crear / Modificar el encabezado HTTP

- end() para el envío de cadenas en HTML

- console.log desde Node.

- Creando un servidor. El módulo HTTP

- Configuración del puerto de escucha con listen()

- Usando http.createServer()

- Análisis de su funcionamiento y detalle de librerías activas.

- Instalando librerías a Visual Studio

- Creando un proyecto en Node con NPM

- Leer Cadenas en consultas

- El error 404 y el código 200

- Módulo de archivos.

---

## :star: 2. Web Services - Concepto

### Web services: servicios de máquina a máquina

A día de hoy, usar diferentes servicios a través de la web es una actividad habitual. Comprar online, leer el periódico, reservar una mesa en un restaurante o ver películas son solo algunos ejemplos de las muchas interacciones que se producen a diario entre el usuario y la máquina. Pero, además, y aunque pueda pasar desapercibido, estas interacciones también tienen lugar entre máquinas: el cliente y el servidor se están enviando continuamente solicitudes y respuestas, transmisión que se produce gracias a los web services o servicios web.


###  ¿Qué es un web service?

 

Un web service facilita un servicio a través de Internet: se trata de una interfaz mediante la que dos máquinas (o aplicaciones) se comunican entre sí. Esta tecnología se caracteriza por estos dos rasgos:

 

- **Multiplataforma**: cliente y servidor no tienen por qué contar con la misma configuración para comunicarse. El servicio web se encarga de hacerlo posible.

 

- **Distribuida**: por lo general, un servicio web no está disponible para un único cliente, sino que son diferentes los que acceden a él a través de Internet.

Cuando se utiliza un web service, un cliente manda una solicitud a un servidor, desencadenando una acción por parte de este. A continuación, el servidor devuelve una respuesta al cliente.

 

### La tecnología detrás de un servicio web con ejemplo

Todos los web services cuentan con un Uniform Resource Identifier (URI) unívoco, esto es, la dirección del servicio web. Es similar al Uniform Resource Locator (URL) que permite acceder a páginas web. El catálogo UDDI debía desempeñar también un papel importante, pues permitía encontrar los servicios web, pero este servicio nunca logró imponerse y sus mayores partidarios terminaron retirándose del proyecto.

 

Más importancia tiene el lenguaje Web Service Description Language (WSDL). Un servicio web contiene un archivo en WSDL en el que se describe el servicio de forma detallada. Con esta información, el cliente puede comprender qué funciones puede ejecutar en el servidor a través del servicio web. La comunicación funciona exclusivamente mediante diferentes protocolos y arquitecturas. Entre ellos, son muy populares el protocolo de red SOAP en combinación con el estándar de Internet HTTP o los servicios web basados en una arquitectura REST.

 

Con estas tecnologías se posibilita el intercambio de peticiones y respuestas a menudo utilizando el lenguaje de marcado extensible (XML). Este lenguaje, relativamente simple, puede ser interpretado en igual medida por personas y ordenadores, y además es adecuado para unir sistemas con requisitos diferentes. Con todo, REST también admite otros formatos, como JSON.

 

Veamos cómo funciona la mecánica de esta tecnología con un ejemplo de web service. Partamos de un software escrito en Visual Basic que se ejecuta en una máquina con sistema Windows. El programa necesita el servicio de un servidor web Apache. Para ello, el cliente envía una solicitud SOAP en forma de mensaje HTTP al servidor. El web service interpreta el contenido de la solicitud y se encarga de que el servidor lleve a cabo una acción. Finalmente, el servicio web formula una respuesta y la envía de vuelta al cliente (de nuevo con SOAP y HTTP), que vuelve a interpretarla. La información se envía entonces al software, donde será procesada.


### Ventajas y desventajas de los servicios web

La ventaja principal de los servicios web es que la comunicación no depende de una plataforma determinada, por lo que el cliente y el servidor apenas han de presentar rasgos en común para poder comunicarse. Para ello, la tecnología web service recurre a formatos estandarizados que interpretan todos los sistemas.

 

Pero en estos formatos es donde encontramos una de las desventajas. Precisamente, XML es un formato más bien voluminoso que genera grandes paquetes de datos, lo que puede crear problemas en las conexiones de red lentas. Otra posibilidad que permite conectar a dos sistemas a través de Internet son las API web. Aunque, por lo general, son más rápidas, someten a cliente y servidor a especificaciones más concretas, con lo que la interoperabilidad se ve limitada.

---

## :star: 3. Funcionamiento y objetivos

## Web Services


### Funcionamiento y Objetivo

#### 1. Introducción

Un Web Service, o Servicio Web, es un método de comunicación entre dos aparatos electrónicos en una red. Es una colección de protocolos abiertos y estándares usados para intercambiar datos entre aplicaciones o sistemas. Las aplicaciones escritas en varios lenguajes de programación que funcionan en plataformas diferentes pueden utilizar web services para intercambiar información a través de una red. La interoperatividad, por ejemplo entre Java y Python o Windows y Linux se debe al uso de estándares abiertos.

Como sistema de mensajes se utiliza XML estandarizado. El protocolo más simple para el intercambio de información entre ordenadores es XML-RPC, que emplea XML para llevar a cabo RPCs. RPC, Remote Procedure Call, es un protocolo de red que permite a un programa a ejecutar código en una máquina remota. Los XML-RPC requests son una combinación entre contenido XML y headers HTTP. La simpleza de los XML-RPC hizo que el estándar evolucionase a SOAP, uno de los componentes básicos de los Web Services.

La base de comunicación entre web services es por tanto el lenguaje XML y el protocolo HTTP.

## 2. Componentes de los Web Services


```
             UDDI
  ------Service Registry------
  |                          |
Busqueda                  Publicacion
 en el                       en el
 UDDI                        UDDI
  |                          |
 CLIENTE                WEB SERVICE
(service                (service
requestor)              provider)
``` 

Los web services estandarizados funcionan con los siguientes componentes:

- **SOAP** - Simple Object Access Protocol

SOAP es un protocolo escrito en XML para el intercambio de información entre aplicaciones. Es un formato para enviar mensajes, diseñado especialmente para servir de comunicación en Internet, pudiendo extender los HTTP headers. Es una forma de definir qué información se envía y cómo mediante XML. Básicamente es un protocolo para acceder a un Web Service.

- **WSDL** - Web Services Description Language

WSDL es un lenguaje basado en XML para describir los servicios web y cómo acceder a ellos. Es el formato estándar para describir un web service, y fue diseñado por Microsoft e IBM. WSDL es una parte integral del estándar UDDI, y es el lenguaje que éste utiliza.

- **UDDI** - Universal Description, Discovery and Integration

UDDI es un estándar XML para describir, publicar y encontrar servicios web. Es un directorio donde las compañías pueden registrar y buscar servicios web. Es un directorio de interfaces de servicios web descritos en WSDL que se comunican mediante SOAP.

### 3. Arquitectura de los Web Services

- **Service Discovery**. Responsable de centralizar servicios web en un directorio común de registro y proveer una funcionalidad sencilla para publicar y buscar. UDDI se encarga del Service Discovery.

- **Service Description**. Uno de los aspectos más característicos de los web services es que se autodescriben. Esto significa que una vez que se ha localizado un Web Service nos proporcionará información sobre que operaciones soporta y cómo activarlo. Esto se realiza a través del Web Services Description Language (WSDL).

- **Service Invocation**. Invocar a un Web Service implica pasar mensajes entre el cliente y el servidor. SOAP (Simple Object Access Protocol) especifica cómo deberíamos formatear los mensajes request para el servidor, y cómo el servidor debería formatear sus mensajes de respuesta.

- **Transport**. Todos estos mensajes han de ser transmitidos de alguna forma entre el servidor y el cliente. El protocolo elegido para ello es HTTP (HyperText Transfer Protocol). Se pueden utilizar otros protocolos pero HTTP es actualmente el más usado.

### 4. Como funciona un Web Service

- **1**. El Service Provider genera el WSDL describiendo el Web Service y registra el WSDL en el directorio UDDI o Service Registry.

- **2**. El Service Requestor o la aplicación del cliente requiere un Web Service y se pone en contacto con el UDDI para localizar el Web Service.

- **3**. El cliente, basándose en la descripción descrita por el WSDL, envía un request para un servicio particular al Web Service Listener, que se encarga de recibir y enviar los mensajes en formato SOAP.

- **4**. El Web Service analiza el mensaje SOAP del request e invoca una operación particular en la aplicación para procesar el request. El resultado se escribe de nuevo en SOAP en forma de respuesta y se envía al cliente.

- **5**. El cliente analiza el mensaje de respuesta SOAP y lo interpreta o genera un error si ha habido alguno.

```
|---------------------------------|
|      HTTP Web Server            |
|   |--------------------------|  |
|   | Application Server       |  |
|   |  |-------------------|   |  |
|   |  |  Soap Enigne      |   |  |
|   |  |  |-------------|  |   |  |
|   |  |  | Web Service |  |   |  |
|   |  |  | Web Service |  |   |  |
|   |  |  | Web Service |  |   |  |
|   |  |  |-------------|  |   |  |
|   |  |-------------------|   |  |
|   |--------------------------|  |
|---------------------------------| 

```

### 5. Componentes de los servidores en una aplicación Web Service


Web Service. Es el software o componente que realiza las operaciones. Si está escrito en Java, estas operaciones se realizarán en lenguaje Java. Los clientes invocarán estas operaciones enviando mensajes SOAP.

- **SOAP Engine**. El Web Service no sabe interpretar SOAP requests y crear SOAP responses. Para hacer esto hace falta un SOAP engine, un software que se encarga del manejo de estos mensajes. Apache Axis es un ejemplo.


- **Application Server**. Para funcionar como un servidor que puede recibir requests desde diferentes clientes, el SOAP engine normalmente funciona dentro de un application server. Este es otro software que proporciona un espacio libre para aplicaciones que han de ser accedidas por múltiples clientes. El SOAP engine funciona como una aplicación dentro del application server. Ejemplos son Apache Tomcat server, Java Servlet y JSP container.

- **HTTP Server**. Algunos application servers incluyen funcionalidades HTTP, por lo que se pueden tener Web Services funcionando instalando simplemente un SOAP engine y un application server. Sin embargo cuando un application server carece de funcionalidad HTTP es necesario también un HTTP server, más comúnmente llamado Web Server. Es un software que sabe cómo manejar mensajes HTTP. Los dos más populares en la actualidad son Apache HTTP Server y Nginx.

---

## :star:  4. Api´s y servicios. Concepto y uso

### Api´s y servicios. Concepto y uso.


Una API es un conjunto de definiciones y protocolos que se utiliza para desarrollar e integrar el software de las aplicaciones. API significa interfaz de programación de aplicaciones.

Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados. Esto simplifica el desarrollo de las aplicaciones y permite ahorrar tiempo y dinero. Las API le otorgan flexibilidad; simplifican el diseño, la administración y el uso de las aplicaciones, y proporcionan oportunidades de innovación, lo cual es ideal al momento de diseñar herramientas y productos nuevos (o de gestionar los actuales).


A veces, las API se consideran como contratos, con documentación que representa un acuerdo entre las partes: si una de las partes envía una solicitud remota con cierta estructura en particular, esa misma estructura determinará cómo responderá el software de la otra parte.

Debido a que simplifican la forma en que los desarrolladores integran los elementos de las aplicaciones nuevas en una arquitectura actual, las API permiten la colaboración entre el equipo comercial y el de TI. Las necesidades comerciales suelen cambiar rápidamente en respuesta a los mercados digitales en constante cambio, donde la competencia puede modificar un sector entero con una aplicación nueva. Para seguir siendo competitivos, es importante admitir la implementación y el desarrollo rápidos de servicios innovadores. El desarrollo de aplicaciones nativas de la nube es una forma identificable de aumentar la velocidad de desarrollo y se basa en la conexión de una arquitectura de aplicaciones de microservicios a través de las API.

Las API son un medio simplificado para conectar su propia infraestructura a través del desarrollo de aplicaciones nativas de la nube, pero también le permiten compartir sus datos con clientes y otros usuarios externos. Las API públicas representan un valor comercial único porque simplifican y amplían la forma en que se conecta con sus partners y, además, pueden rentabilizar sus datos (un ejemplo conocido es la API de Google Maps).

```                                      |-----  
                                         |   Apps
                 <-->      API        <--|   IoT devices
BACKEND    APIS  <-->    managment    <--|   Mobile
SYSTEMS          <-->      system     <--|
                                         |-----
```

Por ejemplo, imagínese una empresa distribuidora de libros. Podría ofrecer a los clientes una aplicación que les permita a los empleados de la librería verificar la disponibilidad de los libros con el distribuidor. El desarrollo de esta aplicación podría ser costoso, estar limitado por la plataforma y requerir mucho tiempo de desarrollo y mantenimiento continuo.

Otra opción es que la distribuidora de libros proporciona una API para verificar la disponibilidad en inventario. Existen varios beneficios de este enfoque:


- Permite que los clientes accedan a los datos con una API que les ayude a añadir información sobre su inventario en un solo lugar.

- La distribuidora de libros podría realizar cambios en sus sistemas internos sin afectar a los clientes, siempre y cuando el comportamiento de la API fuera el mismo.

- Con una API disponible de forma pública, los desarrolladores que trabajan para la distribuidora de libros, los vendedores o los terceros podrían desarrollar una aplicación para ayudar a los clientes a encontrar los libros que necesiten. Esto podría dar como resultado mayores ventas u otras oportunidades comerciales.

En resumen, las API le permiten habilitar el acceso a sus recursos y, al mismo tiempo, mantener la seguridad y el control. Cómo habilitar el acceso y a quiénes depende de usted. Seguridad de las API. Para conectarse a las API y crear aplicaciones que utilicen los datos o las funciones que estas ofrecen, se puede utilizar una plataforma de integración distribuida que conecte todos los elementos, incluidos los sistemas heredados y el Internet de las cosas (IoT).

Existen tres enfoques respecto a las políticas de las versiones de las API.

### Innovaciones con las API

El acceso de los partners o el público a sus API permite:

- Crear nuevos canales de ingresos o ampliar los existentes.

- Expandir el alcance de su marca.

- Facilitar la innovación abierta o lograr mayor eficiencia, gracias al desarrollo y la colaboración externos.



Suena maravilloso, ¿no? ¿Pero cómo lo logran las API?

Volvamos al ejemplo de la empresa distribuidora de libros.

Supongamos que uno de los partners de la empresa desarrolla una aplicación que ayuda a las personas a encontrar libros en los estantes de cierta librería. Esta experiencia mejorada atrae más compradores a la librería (que es cliente de la distribuidora) y expande un canal de ingresos existente.

Es posible que un tercero use una API pública para desarrollar una aplicación que permita a las personas comprar libros directamente de la distribuidora, en lugar de hacerlo en una tienda, lo cual abre un nuevo canal de ingresos para la distribuidora de libros. Esto abre un nuevo canal de ingresos para la distribuidora de libros.

Las API compartidas, ya sea con los partners elegidos o con todo el mundo, tienen efectos positivos. Mientras más se asocie con otros gracias a las API, mayor difusión obtendrá su marca, independientemente de los esfuerzos publicitarios de la empresa. Si usted utiliza una API pública, por ejemplo, para dar acceso a la tecnología a todo el mundo, alienta a los desarrolladores a crear un ecosistema de aplicaciones en torno a su API. Mientras más personas usen su tecnología, más personas estarán dispuestas a hacer negocios con usted.

Hacer pública la tecnología da resultados novedosos e inesperados que a veces alteran sectores completos. Estos resultados, a veces, alteran sectores completos. En el caso de nuestra distribuidora de libros, las nuevas empresas (un servicio de préstamo de libros, por ejemplo) pueden cambiar la manera en que comercializa sus servicios. Los partners y las API públicas le permiten aprovechar los esfuerzos creativos de una comunidad más grande que su equipo de desarrolladores internos. Las nuevas ideas surgen de todas partes, y las empresas deben ser conscientes de los cambios en su mercado y estar listas para actuar en consecuencia. Las API son de gran ayuda.

### Breve historia de las API

Las API surgieron los primeros días de la informática, mucho antes que la computadora personal. En esa época, una API normalmente se usaba como biblioteca para los sistemas operativos. Casi siempre estaban habilitadas localmente en los sistemas en los que operaban, aunque a veces pasaban mensajes entre las computadoras centrales. Después de casi 30 años, las API se expandieron más allá de los entornos locales. A principios del año 2000, ya eran una tecnología importante para la integración remota de datos.


###  Las API remotas

Las API remotas están diseñadas para interactuar en una red de comunicaciones. Por "remoto" nos referimos a que los recursos que administran las API están, de alguna manera, fuera de la computadora que solicita alguno de dichos recursos. Debido a que la red de comunicaciones más usada es Internet, la mayoría de las API están diseñadas de acuerdo con los estándares web. No todas las API remotas son API web, pero se puede suponer que las API web son remotas.

Las API web normalmente usan HTTP para solicitar mensajes y proporcionar una definición de la estructura de los mensajes de respuesta. Por lo general, estos mensajes de respuesta toman la forma de un archivo XML o JSON, que son los formatos preferidos porque presentan los datos en una manera fácil de manejar para otras aplicaciones.


###  ¿Qué se ha hecho para mejorar las API?

A medida que las API han evolucionado en las ahora generalizadas API web, se han realizado muchos esfuerzos 
 para simplificar su diseño y facilitar su implementación.


### Un poco de SOAP, mucho de REST

A medida que se han difundido las API, se desarrolló una especificación de protocolo para permitir la estandarización del intercambio de información; se llama Protocolo de Acceso a Objetos Simples, más conocido como SOAP. Las API diseñadas con SOAP usan XML para el formato de sus mensajes y reciben solicitudes a través de HTTP o SMTP. Con SOAP, es más fácil que las aplicaciones que funcionan en entornos distintos o están escritas en diferentes lenguajes compartan información.

Otra especificación es la Transferencia de Estado Representacional (REST). Las API web que funcionan con las limitaciones de arquitectura REST se llaman API de RESTful. La diferencia entre REST y SOAP es básica: SOAP es un protocolo, mientras que REST es un estilo de arquitectura. Esto significa que no hay ningún estándar oficial para las API web de RESTful. Las API son RESTful siempre que cumplan con las 6 limitaciones principales de un sistema RESTful:

- Arquitectura cliente-servidor: la arquitectura REST está compuesta por clientes, servidores y recursos, y administra las solicitudes con HTTP.

- Sin estado: el contenido de los clientes no se almacena en el servidor entre las solicitudes, sino que la información sobre el estado de la sesión se queda en el cliente. En su lugar, la información sobre el estado de la sesión está en posesión del cliente.

- Capacidad de caché: el almacenamiento en caché puede eliminar la necesidad de algunas interacciones cliente-servidor.

- Sistema en capas: las interacciones cliente-servidor pueden estar mediadas por capas adicionales, que pueden ofrecer otras funciones, como el equilibrio de carga, los cachés compartidos o la seguridad. Estas capas pueden ofrecer funcionalidades adicionales, como equilibrio de carga, cachés compartidos o seguridad.

- Código de demanda (opcional): los servidores pueden extender las funciones de un cliente transfiriendo código ejecutable.

- Interfaz uniforme: esta limitación es fundamental para el diseño de las API de RESTful e incluye 4 aspectos:

- Identificación de recursos en las solicitudes: los recursos se identifican en las solicitudes y se separan de las representaciones que se devuelven al cliente.

- Administración de recursos mediante representaciones: los clientes reciben archivos que representan los recursos. Estas representaciones deben tener la información suficiente como para poder ser modificadas o eliminadas.

- Mensajes autodescriptivos: cada mensaje que se devuelve al cliente contiene la información suficiente para describir cómo debe procesar la información.

- Hipermedios es el motor del estado de la aplicación: después de acceder a un recurso, el cliente REST debe ser capaz de descubrir mediante hipervínculos todas las otras acciones que están disponibles actualmente.

Estas limitaciones pueden parecer demasiadas, pero son mucho más sencillas que un protocolo definido previamente. Por eso, las API de RESTful son cada vez más frecuentes que las de SOAP.

En los últimos años, la especificación de OpenAPI se ha convertido en un estándar común para definir las API de REST. OpenAPI establece una forma independiente del lenguaje para que los desarrolladores diseñen interfaces API de REST, que permite a los usuarios entenderlas con el mínimo esfuerzo.


### SOA frente a la arquitectura de microservicios

Los dos enfoques de arquitectura que más se utilizan para las API remotas son la arquitectura orientada al servicio (SOA) y la arquitectura de microservicios. La SOA es el más antiguo de los dos, y comenzó como una mejora de las aplicaciones monolíticas. En lugar de usar una sola aplicación que haga todo, se pueden usar varias aplicaciones que proporcionen diferentes funciones y que no tengan conexión directa, todo gracias a un patrón de integración, como un bus de servicios empresariales (ESB).

Aunque en muchos aspectos la SOA es más sencilla que una arquitectura monolítica, conlleva un riesgo de cambios en cascada en todo el entorno si las interacciones de los componentes no se comprenden claramente. Esta complejidad adicional vuelve a presentar algunos de los problemas que la SOA pretendía solucionar.

Las arquitecturas de microservicios se parecen a los patrones SOA en que los servicios son especializados y no tienen conexión directa. Pero además, descomponen las arquitecturas tradicionales en partes más pequeñas. Los servicios de la arquitectura de microservicios usan un marco de mensajería común, como las API de RESTful. Utilizan API de RESTful para comunicarse entre sí, sin necesidad de operaciones complejas de conversión de datos ni capas de integración adicionales. Usar las API de RESTful permite e incluso fomenta una distribución más rápida de nuevas funciones y actualizaciones. Cada servicio es independiente. Un servicio se puede reemplazar, mejorar o abandonar, sin afectar los demás servicios de la arquitectura. Esta arquitectura liviana optimiza los recursos distribuidos o en la nube y admite la escalabilidad dinámica de los servicios individuales.

---

## :star: 5. Chequeo de Web Services con Postman

Te mostramos de forma práctica cómo instalar Postman y cómo enviar una primera petición a una API REST.

## Descarga e instalación de Postman

Para descargar Postman accedemos a su página oficial: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)

Una vez hemos accedido a la web elegimos el sistema operativo en el que queremos instalar Postman, ya que se puede utilizar como un plugin de Google Chrome o se puede utilizar en Linux, MacOS o en Windows.

Cuando hayamos realizado la descarga ejecutamos el instalador, que va a realizar una instalación que resulta bastante automática. No es la típica instalación en la que se nos pregunta dónde queremos instalar la aplicación, o en la que hay que aceptar los términos y condiciones, sino que automáticamente se va a instalar, en el directorio AppData de nuestro usuario.

 

Tras la instalación se nos solicita introducir una cuenta que tengamos ya registrada o bien se nos ofrece la posibilidad de crear una nueva cuenta.

Esto se debe a que Postman tiene muchas funciones que interactúan con una nube, por lo que para poder almacenar un registro de las peticiones y de nuestro trabajo en la nube, y poder trabajar compartiendo un workspace o espacio de trabajo con otros compañeros de equipo, necesitamos identificarnos con una cuenta de Postman.

Para esta introducción no vamos a hacer uso de estos, sino que vamos a continuar pulsando en “Skip signing in and take me straight to de app”, para entrar en la aplicación sin tener que registrarse o iniciar sesión en Postman.

### Envío de una petición con Postman

En la vista inicial de Portman una vez ejecutado --> En esta pantalla tenemos diversas funcionalidades, características y elementos con los que podemos interactuar, como son:

- Request: Crear una petición REST.

- Collection: Crear una colección.

- Environment: Crear un entorno.

- Mock Server: Crear un Mock Server.

- Monitor: Crear un monitor.


---> Para el ejemplo vamos a crear una petición, para lo que tenemos que encontrar una API a la que queramos llamar. Usaremos la API que encontraremos en esta web: [https://rickandmortyapi.com/](https://rickandmortyapi.com/) .

Al ser una API pública no necesitamos autenticación y tiene un uso muy sencillo.

En la documentación de esta API podemos, vamos a obtener la lista de episodios de la serie. Podemos ver los esquemas de los episodios en [esta página](https://rickandmortyapi.com/documentation/#episode-schema).

Vamos a ir al primer endpoint, al que se accede a través de [esta ruta](https://rickandmortyapi.com/api/episode/).

Volvemos a Postman a la creación de una petición REST, y a la misma le damos el nombre “Todos los episodios”, y en la descripción indicamos “Petición para obtener una lista de episodios de Rick y Morty.”, por ejemplo.

Después pulsamos en “Create Collection” para crear una colección, que simplemente una forma de almacenar peticiones, la llamamos “Episodios” y guardamos nuestra petición.

De esta forma hemos creado una petición que se va a llamar “Todos los episodios”, que va a servir para obtener una lista de episodios de esa API, y que la vamos a guardar en la colección “Episodios”. Así tenemos creada una colección en la que vamos a almacenar todas las peticiones que queramos almacenar en esa colección

Podemos especificar el método HTTP que queremos utilizar, y vamos a definir la URL para acceder a ese endpoint.

También podemos modificar parámetros de query, métodos de autenticación, añadir headers y también añadir algún tipo de body, por ejemplo si quisiéramos hacer POST en lugar de GET, tendríamos que elegir raw y en Text añadir JSON.

Además se pueden introducir scripts que se ejecute antes de la petición o después de la petición, como por ejemplo, para poder validar parámetros, es decir, para poder hacer pruebas.

A pesar de que los scripts se definen en JavaScript, no hace falta un conocimiento extensivo de JavaScript para poder crear pruebas automatizadas en Postman, ya que se incluye la generación de diversos snippets de código para validar o hacer ciertas operaciones, como por ejemplo comprobar que el código de estado es 200.

De esta forma enviaríamos una petición de tipo GET a ese PATH, bajo el protocolo HTTP, con el host rickyandmortyapi.com. Además añadimos unos parámetros adicionales que añade Postman y que se pueden configurar las opciones de la aplicación.

Pulsamos SEND para enviar la petición, y comprobamos que todo ha ido bien, porque el servidor nos ha devuelto un código 200, y podemos obtener la lista de los episodios, en base al modelo que podemos encontrar en la documentación de la API.

 

Podemos ver cada episodio con su título, la fecha en la que se emitió o los personajes que intervienen en el mismo. En esta lista de personajes, los mismos aparecen con el identificador con el que podemos consultarlos en la misma API en la sección de personajes.

También podemos ver los headers que nos devuelve el servidor, podemos comprobar el tiempo de respuesta, el tamaño de la petición del body o de los headers, además de una lista de los tests que hayamos definido a través de los scripts, que en nuestro caso muestra que ha pasado el código 200.


###  Zona de trabajo de Postman

En la parte superior de Postman tenemos lo que sería la barra de tareas, donde podemos crear nuevo contenido, nuevas colecciones y nuevas peticiones. También podemos buscar las opciones para configurar la aplicación.

La zona izquierda es muy importante, porque es donde vamos a definir las colecciones y las peticiones que se incluirán en esas colecciones, que como dijimos antes, una colección es un elemento de Postman que contiene peticiones.

También podemos encontrado la colección History, que es el historial de todas las peticiones que hemos enviado, no importa a qué colección pertenezcan.

Y finalmente, en la sección central de Postman es dónde podremos interactuar con las peticiones.

Aprende las bases del testing y cómo aplicarlas para probar APIs REST con Postman, uno de los clientes más utilizados actualmente con el que podrás consumir, probar, documentar e incluso simular APIs REST.




---

## :star: 6. 5 Herramientas de testing de servicios web

### 5 Herramientas de testing de servicios web

Los servicios web son un estándar en lo que se refiere al diseño y desarrollo de interfaces API entre aplicaciones de software empresarial, es por ello que existen diversas herramientas de testing de servicios web que brindan la capacidad a los testers de diseñar y ejecutar pruebas de software.

En este artículo te presentamos 5 herramientas para probar servicios web, específicamente SoapUI, JMeter, Postman, SoapSonar y Wizdler.

Estas herramientas proporcionan diversas capacidades para abarcar todos los tipos de pruebas de servicios web que se pueden realizar, tales como las pruebas funcionales, simulación de servicios (Mocking), evaluación de seguridad, pruebas de carga y de rendimiento.


## SoapUI

SoapUI es una de las herramientas para probar servicios web que permite diseñar pruebas de web services de Arquitecturas SOA y REST. Está en el mercado desde 2005.

Con SoapUI puedes probar web services en los protocolos SOAP, REST, JMS y AMF, además, puedes realizar llamadas HTTP(S) para aplicaciones web y JDBC para bases de datos.

Posee una versión gratuita y una versión profesional (esta última tiene un costo).

SoapUI permite la creación y ejecución automatizada de distintos tipos de pruebas de software sobre servicios web, incluyendo:

- Testing funcional.

- Pruebas de regresión.

- Simulación de servicios (Mocking).

- Pruebas de carga y rendimiento.

- Evaluación de seguridad.



## JMeter

Apache JMeter es una aplicación de código abierto diseñada para la ejecución de pruebas de carga y mediciones de desempeño en aplicaciones.

Es una herramienta desarrollada por la fundación de software Apache 100% en Java. Fue diseñada originalmente para probar aplicaciones web pero desde entonces se ha expandido para abarcar otras funcionalidades.

JMeter posee capacidades para realizar pruebas de carga y desempeño en diferentes aplicaciones, servidores y protocolos, incluyendo:

- Web - HTTP, HTTPS (Java, NodeJS, PHP, ASP.NET, …).

- Servicios web SOAP / REST.

- Servicios FTP.

- Bases de datos, por medio de JDBC.

- Servicios de directorio LDAP.

- Middleware orientado a mensajes, por medio de JMS.

- Correo electrónico - SMTP(S), POP3(S) e IMAP(S).

- Comandos nativos o Shell Scripts.

- Native commands or shell scripts.

- Transmission Control Protocol (TCP).

- Objetos Java.


### Postman

Postman es una herramienta para probar web services e interfaces de aplicación (API) en arquitectura REST. En términos generales, te permite enviar solicitudes post a cualquier servidor web y te proporciona y cataloga la respuesta.

Comenzó como un plugin del navegador Chrome, pero luego fue lanzada como versión nativa tanto para Windows como Mac.

Posee una versión gratuita, versión profesional y versión empresarial a diferentes costos.

Entre sus funcionalidades se encuentran:

- Se puede usar tanto para pruebas exploratorias como pruebas automatizadas.

- Puede utilizarse en Windows, Mac, Linux y Apps del navegador Chrome.

- Posee un conjunto de integraciones con formatos Swagger y RAML.

- Funcionalidades para ejecutar, probar, documentar y monitorear las pruebas.

- No requiere aprender nuevos lenguajes de programación.


### SoapSonar


SOAPSonar es una herramienta que ofrece facilidades para pruebas web services para HTML, XML, SOAP, REST y JSON. Permite realizar pruebas funcionales, de desempeño, cumplimiento, interoperabilidad y de seguridad. Soporta los estándares OASIS y W3C.

Desarrollada por Cross Check Networks, está disponible en una edición personal (gratuita), edición profesional y edición de servidor, a distintos costos.

Entre sus funcionalidades están las siguientes:

- Puede realizar pruebas de vulnerabilidad con mutación XSD.

- Funcionalidades para leer WSDL y Schema.

- Pruebas no funcionales como son las de carga con modelamiento de comportamiento.

- Carga de transacciones simultaneas (Para pruebas de carga).

- Reportes en formato XML, DOC, XLS, PDF, RTF y RPT.

- Integración con HP Quality Center.


### Wizdler

Si no necesitas todas las funcionalidades avanzadas, y más bien buscas algo sencillo, puedes probar Wizdler, una herramienta de testing de web services que soporta únicamente arquitectura SOA, presentada como extensión de navegador y disponible para Google Chrome y Mozilla Firefox.

Usarla es muy sencillo, luego de instalado el plugin, ingresa la dirección WSDL en la dirección de página del navegador, Wizdler la reconoce y lista todas las operaciones y servicios.

Luego haces click sobre cualquier operación y el XML de request se mostrará en el editor SOAP.

Modifica para pasar los parámetros y haz click en “Go”, para ver el Response en el editor. Wizdler puede de esta forma generar el XML de Request Soap.


---

## :star:  7. Métodos de petición HTTP


### Métodos de petición HTTP

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un request method puede ser safe, idempotent (en-US), o cacheable.


#### GET

El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

#### HEAD

El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
 
#### POST

El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

#### PUT

El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

#### DELETE

El método DELETE borra un recurso en específico.

#### CONNECT

El método CONNECT establece un túnel hacia el servidor identificado por el recurso.

#### OPTIONS

El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

#### TRACE

El método TRACE  realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

#### PATCH

El método PATCH  es utilizado para aplicar modificaciones parciales a un recurso.

---

## :star:  8. Nodemoon


### Configurando Nodemon

 

En los siguientes pasos veremos como instalar y configurar Nodemon en tu proyecto y como poner a correr un servidor Node.js.

**Paso 1** : Organizar el directorio de origen src y iniciar el servidor en un archivo server.js, el archivo puede llevar cualquier convención que se utilice para arrancar un servidor Node.js (index.js o app.js ). Actualizar el package.json agregando un script start

**Paso 2**: Agregar express el cual nos va a permitir arrancar un mínimo servidor para realizar esta prueba **server.js**. Iniciá una terminal nueva en la cual iniciaremos el servidor corriendo el script npm start luego de ejecutarlo nos retornara un mensaje como el siguiente node src/index.js

Abrir una nueva terminal y ejecutaremos el siguiente código ```curl -X GET http://localhost:3000/``` el cual nos permitirá comprobar que la API este funcionando de manera correcta.

 Si nos retorna el mensaje La API funciona correctamente quiere decir que vamos bien!

Ahora, si cambiamos el mensaje de respuesta en el archivo **server.js**, debo reiniciar el servidor para obtener el resultado deseado:

Utilizar ```Ctrl + C``` para detener el servidor que se está ejecutando actualmente y volver a iniciarlo usando el mismo comando antes: ```npm run start```.

Usando el comando ```curl``` nuevamente desde la ventana de terminal obtenemos el resultado deseado:

 
**Paso 3**: Agrega nodemon como devDependency. Revisaremos el package.json

**Paso 4**: Agregar el comando dev en el archivo **package.json**. Ahora ejecute npm run dev y solicite el uso nuevamente del comando curl, y veremos que el mensaje es el mismo que teníamos antes:

Si cambio nuevamente el mensaje en el archivo server.js por cualquier otro, ya esta vez no tendré que reiniciar el servidor dado que Nodemon esta observando los cambios usando el directorio src, mediante su parámetro --watch.

Vera que se actualiza solo sin tener que reiniciar el servidor, para cortarlo presionar ```CTRL + C```



---
---

## :book: UNIDAD 6

---

## Temas:

- Ajustando el puerto de escucha de Node.Js en forma automática con process.enc.PORT

- Haciendo Routes para definir diferentes carpetas para cada servicio.

- Implementando un Crud con persistencia de datos.

- Repasando las sentencias SQL a utilizar.

- Creando el Front End para el Crud

- Conectando el Front y el Back con JavaScript y Json

- Creando un web service para: Nuevo dato | Modificar un dato | Listar datos | Eliminar un dato

- Buscar un dato

---

## :star: 2. Control de Acceso Cors


### Control de acceso HTTP (CORS)


El Intercambio de Recursos de Origen Cruzado [**CORS (en-US)**](https://developer.mozilla.org/en-US/docs/Glossary/CORS) es un mecanismo que utiliza cabeceras [HTTP](https://developer.mozilla.org/es/docs/Glossary/HTTP) adicionales para permitir que un  [user agent (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) obtenga permiso para acceder a recursos seleccionados desde un servidor, en un origen distinto (dominio) al que pertenece. Un agente crea una petición HTTP de origen cruzado cuando solicita un recurso desde un dominio distinto, un protocolo o un puerto diferente al del documento que lo generó.

Un ejemplo de solicitud de origen cruzado: el código JavaScript frontend de una aplicación web que es localizada en http://domain-a.com utiliza [XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest) para cargar el recurso http://api.domain-b.com/data.json.

Por razones de seguridad, los exploradores restringen las solicitudes HTTP de origen cruzado iniciadas dentro de un script. Por ejemplo, [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) y la [API Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) siguen la [política de mismo-origen](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). Ésto significa que una aplicación que utilice esas [APIs XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) sólo puede hacer solicitudes HTTP a su propio dominio, a menos que se utilicen cabeceras CORS.


El [W3C Grupo de Trabajo de Aplicaciones Web](https://www.w3.org/groups/wg/webapps) recomienda el nuevo mecanismo de [Intercambio de Recursos de Origen Cruzado](https://fetch.spec.whatwg.org/) (CORS, por sus siglas en inglés). CORS da controles de acceso a dominios cruzados para servidores web y transferencia segura de datos en dominios cruzados entre navegadores y servidores Web. Los exploradores modernos utilizan CORS en un  contenedor API (como [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) o [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)) para ayudar a mitigar los riesgos de solicitudes HTTP de origen cruzado.


### ¿Quién debería leer este artículo?

Todo el mundo, de verdad.

Más específicamente, este artículo está dirigido a administradores web, desarrolladores de servidores y desarrolladores de interfaz. Los exploradores modernos manejan los componentes sobre el intercambio de origen cruzado del lado del cliente. Incluyendo cabeceras y políticas de ejecución. Pero, este nuevo estándar determina que los servidores tienen que manejar las nuevas solicitudes y las cabeceras de las respuestas. Se recomienda, como lectura suplementaria, otro artículo para desarrolladores de servidor que discute el [intercambio de origen cruzado desde una perspectiva de servidor (con fragmentos de código PHP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

### ¿Qué peticiones utiliza CORS?


Este [estándar de intercambio de origen cruzado](https://fetch.spec.whatwg.org/) es utilizado para habilitar solicitudes HTTP de sitios cruzados para:

Invocaciones de las APIs XMLHttpRequest o  Fetch en una manera de sitio cruzado, como se discutió arriba.

Fuentes Web (para usos de fuente en dominios cruzados @font-face dentro de CSS), [para que los servidores puedan mostrar fuentes TrueType que sólo puedan ser cargadas por sitios cruzados y usadas por sitios web que lo tengan permitido](https://www.w3.org/TR/css-fonts-3/#font-fetching-requirements).

Texturas WebGL.

Imágenes dibujadas en patrones usando [drawImage](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage).

Hojas de estilo (para acceso [CSSOM](https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_View)).

Scripts (para excepciones inmutadas).

Este artículo es una discusión general sobre Intercambio de Recursos de Origin Cruzado e incluye una discusión sobre las cabeceras HTTP.

---

### Resumen


El estándar de Intercambio de Recursos de Origen Cruzado trabaja añadiendo nuevas cabeceras HTTP que permiten a los servidores describir el conjunto de orígenes que tienen permiso para leer la información usando un explorador web.  Adicionalmente, para métodos de solicitud HTTP que causan efectos secundarios en datos del usuario (y en particular, para otros métodos HTTP distintos a GET, o para la utilización de POST con algunos tipos MIME), la especificación sugiere que los exploradores "verifiquen" la solicitud, solicitando métodos soportados desde el servidor con un método de solicitud HTTP OPTIONS, y luego, con la "aprobación" del servidor, enviar la verdadera solicitud con el método de solicitud HTTP verdadero. Los servidores pueden también notificar a los clientes cuando sus "credenciales" (incluyendo Cookies y datos de autenticación HTTP) deben ser enviados con solicitudes.

Las secciones siguientes discuten escenarios, así como el análisis de las cabeceras HTTP usados.

---


### Ejemplos de escenarios de control de accesos

Aquí, presentamos tres escenarios que ilustran cómo funciona el Intercambio de Recursos de Origen Cruzado. Todos estos ejemplos utilizan el objeto XMLHttpRequest, que puede ser utilizado para hacer invocaciones de sitios cruzados en cualquier explorador soportado.

Los fragmentos de JavaScript incluidos en estas secciones (y las instancias ejecutadas del código servidor que correctamente maneja las solicitudes de sitios cruzados) [pueden ser encontrados "en acción" aquí](http://arunranga.com/examples/access-control/), y pueden ser trabajados en exploradores que soportan XMLHttpRequest de sitios cruzados. Una discusión de Intercambio de Recursos de Origen Cruzado desde una [perspectiva de servidor (incluyendo fragmentos de código PHP) puede ser encontrada aquí](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).


---

### Solicitudes simples

Una solicitud de sitio cruzado es aquella que cumple las siguientes condiciones:

- Los únicos métodos aceptados son: **GET**, **HEAD**, **POST**.

Aparte de las cabeceras establecidas automáticamente por el agente usuario (ej. Connection, User-Agent,etc.), las únicas cabeceras que están permitidas para establecer manualmente son: **Accept**, **Accept-Language**, **Content-Language**, **Content-Type**.

Los únicos valores permitidos de la cabecera Content-Type son: **application/x-www-form-urlencoded**, **multipart/form-data**, **text/plain**.

Nota: Estos son los mismos tipos de solicitud de sitios cruzados que un contenido web ya puede emitir, y ninguna respuesta de datos es liberada a menos que el servidor envíe la cabecera apropiada. Por lo tanto, los sitios que prevengan solicitudes falsas de sitios cruzados no tienen nada nuevo que temer sobre el control de acceso HTTP.

Por ejemplo, suponga que el contenido web en el dominio [http://foo.example](http://foo.example) desea invocar contenido en el dominio [http://bar.other](http://bar.other). Código de este tipo puede ser utilizado dentro de JavaScript desplegado en foo.example:

```JavaSCript
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/public-data/';

function callOtherDomain() {

 if(invocation) {
  invocation.open('GET', url, true);
  invocation.onreadystatechange = handler;
  invocation.send();
 }
}
```

Dejándonos ver lo que el explorador enviará al servidor en este caso, y veamos como responde el servidor:

```
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml
```
 

[XML Data]

Las líneas 1 - 10 son las cabeceras enviadas por Firefox 3.5.  Observe que la cabecera de solicitud HTTP principal aquí es la cabecera Origin:  en la línea 10 de arriba, lo que muestra que la invocación proviene del contenido en el dominio http://foo.example.

Las líneas 13 - 22  muestran la respuesta HTTP del servidor en el dominio http://bar.other.  En respuesta, el servidor envía de vuelta una cabecera Access-Control-Allow-Origin:, mostrado arriba en la línea 16.  El uso de la cabecera Origin: y Access-Control-Allow-Origin: muestran el protocolo de control de acceso en su uso más simple.  En este caso, el servidor responde con un Access-Control-Allow-Origin: * lo que significa que el recurso puede ser accedido por cualquier dominio en una forma de sitio cruzado. Si el dueño del recurso en http://bar.other deseara restringir el acceso al recurso solamente para http://foo.example, debería devolver lo siguiente:

Access-Control-Allow-Origin: http://foo.example

Note que ahora, ningún otro dominio aparte de http://foo.example (identificado por la cabecera ORIGIN: en la solicitud, como en la línea 10 arriba) puede acceder al recurso en una forma de sitio cruzado. La cabecera Access-Control-Allow-Origin debe contener el valor que fue enviado en la solicitud del encabezado Origin.

---

## Solicitudes Verificadas



A diferencia de las solicitudes simples (discutidas arriba), las solicitudes "verificadas" envían primero una solicitud HTTP por el método OPTIONS al recurso en el otro dominio, para determinar si es seguro enviar la verdadera solicitud. Las solicitudes de sitios cruzados son verificadas así ya que pueden tener implicaciones en la información de usuario.  En particular, una solicitud es verificada sí:

Usa métodos distintos a GET, HEAD o POST.  También, si POST es utilizado para enviar solicitudes de información con Content-Type distinto a application/x-www-form-urlencoded, multipart/form-data, o text/plain, ej. si la solicitud POST envía una carga XML al servidor utilizando application/xml or text/xml, entonces la solicitud es verificada.

Se establecen encabezados personalizados (ej. la solicitud usa un encabezado como X-PINGOTHER)

Nota: Empezando en Gecko 2.0, las codificaciones de datos text/plain, application/x-www-form-urlencoded, y multipart/form-data pueden ser enviadas en sitios cruzados sin verificación. Anteriormente, solo text/plain podía ser enviado sin verificación.

```JavaScript
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/post-here/';
var body = '<?xml version="1.0"?><person><name>Arun</name></person>';

function callOtherDomain(){
 if(invocation) {
  invocation.open('POST', url, true);
  invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
  invocation.setRequestHeader('Content-Type', 'application/xml');
  invocation.onreadystatechange = handler;
  invocation.send(body);
 }
}
```

En el ejemplo de arriba, la línea 3 crea un cuerpo XML para enviar con la solicitud POST en la línea 8.  También, en la línea 9, se establece una cabecera HTTP de solicitud "personalizado" (no estándar X-PINGOTHER: pingpong).  Dichas cabeceras no son parte del protocolo HTTP/1.1, pero son útiles generalmente en aplicaciones web. Dado que la solicitud (POST) usa un Content-Type application/xml, y dado que se establece una cabecera personalizada, la solicitud es verificada.

Veamos este intercambio completo entre un cliente y un servidor:


```
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER
Access-Control-Max-Age: 1728000
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain


POST /resources/post-here/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: http://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: http://foo.example
Pragma: no-cache
Cache-Control: no-cache
```

```<?xml version="1.0"?><person><name>Arun</name></person>```

 
```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain
```
 

[Some GZIP'd payload]

Las líneas 1 - 12 arriba representan la solicitud verificada con los métodos OPTIONS. Firefox 3.1 determina lo que se necesita para enviar esto basándose en los parámetros de la solicitud que los fragmentos de JavaScript que se usaron arriba, para que el servidor pueda responder si es aceptable enviar la solicitud con los parámetros de la solicitud real. OPTIONS es un método HTTP/1.1 que se utiliza para determinar información adicional de los servidores, y es un método idempotente, esto significa que no puede ser utilizado para cambiar el recurso. Observe que, junto con la solicitud OPTIONS, se envían otras dos cabeceras de solicitud (líneas 11 y 12 respectivamente):

Access-Control-Request-Method: POST

Access-Control-Request-Headers: X-PINGOTHER

La cabecera Access-Control-Request-Method notifica al servidor como parte de una solicitud verificada que cuándo se envíe la solicitud real, esta será enviada con un método de solicitud POST. La cabecera Access-Control-Request-Headers notifica al servidor que cuando la solicitud real sea enviada, será enviada con un encabezado X-PINGOTHER personalizado.  Ahora, el servidor tiene la oportunidad para determinar si desea aceptar la solicitud bajo estas circunstancias.

Las líneas 15 - 27 de arriba corresponden con la respuesta que devuelve el servidor indicando que el método de la petición (POST) y la cabecera X-PINGOTHER son aceptadas. En particular, echemos un vistazo a las líneas 18-21:

Access-Control-Allow-Origin: http://foo.example

Access-Control-Allow-Methods: POST, GET, OPTIONS

Access-Control-Allow-Headers: X-PINGOTHER

Access-Control-Max-Age: 1728000

El servidor responde con Access-Control-Allow-Methods y dice que POST, GET, y OPTIONS son métodos viables para consultar el recurso en cuestión.  Observe que esta cabecera es similar al HTTP/1.1 Allow: encabezado de respuesta, pero usado estrictamente dentro del contexto del control de acceso.  El servidor también envía Access-Control-Allow-Headers con un valor de X-PINGOTHER, confirmando que es una cabecera permitida para ser usado en la solicitud real.  Como Access-Control-Allow-Methods, Access-Control-Allow-Headers es una lista separada por comas de cabeceras aceptables.  Finalmente, Access-Control-Max-Age da el valor en segundos de cuánto tarda la respuesta de la solicitud verificada en ser capturada sin enviar otra solicitud verificada. En este caso, 1728000 segundos son 20 días.

---

### Solicitudes con credenciales

La capacidad más interesante expuesta tanto por XMLHttpRequest y Access Control es la habilidad para hacer solicitudes "con credenciales" que estén al tanto de Cookies HTTP e información de Autenticación HTTP.  Por defecto, en las invocaciones XMLHttpRequest de un sitio curzado, los exploradores no enviarán credenciales. Una bandera específica tiene que ser establecida en el objeto XMLHttpRequest cuando este es invocado.

En este ejemplo, el contenido cargado originalmente desde http://foo.example hace una solicitud GET simple a un recurso en http://bar.other que establece Cookies. El contenido en foo.example puede contener un JavaScript como este:


```JavaScript
var invocation = new XMLHttpRequest();
var url = 'http://bar.other/resources/credentialed-content/';

function callOtherDomain() {
 if(invocation) {
  invocation.open('GET', url, true);
  invocation.withCredentials = true;
  invocation.onreadystatechange = handler;
  invocation.send();
 }
}
```

La línea 7 muestra la bandera en XMLHttpRequest que tiene que ser establecida para poder hacer la invocación con Cookies, es decir, el valor booleano withCredentials.  Por defecto, la invocación es hecha sin Cookies. Dado que esta es una simple solicitud GET, no es verificada, pero el explorador rechazará cualquier respuesta que no tiene el encabezado Access-Control-Allow-Credentials: true,y no hará disponible la respuesta para invocar contenido web.

A continuación se proporciona una muestra de intercambio entre un cliente y un servidor:

```
GET /resources/access-control-with-credentials/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive

Referer: http://foo.example/examples/credential.html

Origin: http://foo.example

Cookie: pageAccess=2
```
 
```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2.0.61 (Unix) PHP/4.4.7 mod_ssl/2.0.61 OpenSSL/0.9.7e mod_fastcgi/2.4.2 DAV/2 SVN/1.4.2
X-Powered-By: PHP/5.2.6
Access-Control-Allow-Origin: http://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```
 

[text/plain payload]

Pese a que la línea 11 contiene la Cookie destinada para el contenido en http://bar.other, si bar.other no responde con Access-Control-Allow-Credentials: true (línea 19) la respuesta será ignorada y no puesta a disposición para el contenido web. Nota Importante: cuando se responde a una solicitud con credeciales, el servidor debe especificar un dominio, y no puede usar comodines. El ejemplo de arriba fallará si la cabecera fuera un comodín como: Access-Control-Allow-Origin: *.  Dado que Access-Control-Allow-Origin menciona explícitamente http://foo.example, el contenido de credenciales competente es devuelto al contenido web invocador. Observe que, en la línea 22, se establece una cookie adicional.

Todos estos ejemplos pueden verse funcionando aquí.  La siguiente sección se refiere a las verdaderas cabeceras HTTP.

---

### Las cabeceras HTTP de respuesta

Esta sección lista las cabeceras HTTP de respuesta que los servidores envían de vuelta para las solicitudes de acceso de control definidas por la especificación del Intercambio de Recursos de Origen Cruzado. La sección anterior da un resumen de estos en acción.


### Access-Control-Allow-Origin

Un recurso devuelto puede tener una cabecera Access-Control-Allow-Origin, con la siguiente sintaxis:

```Access-Control-Allow-Origin: <origin> | * ```

El parámetro origin específica una URI que puede tener acceso al recurso.  El explorador debe asegurar esto. Para solicitudes sin credenciales, el servidor debe especificar "*" como un comodín permitiendo, de este modo, el acceso al recurso a cualquier origen.

Por ejemplo, para permitir a http://mozilla.com acceder al recurso, usted puede especificar:

Access-Control-Allow-Origin: http://mozilla.com

Si el servidor especifica un host de origen en vez de "*", entonces se debe incluir Origin en el encabezado de respuesta Vary para indicar a los clientes que las respuestas del servidor difieren basándose en el valor del encabezado de respuesta Origin.

### Access-Control-Expose-Headers

Requires Gecko 2.0(Firefox 4 / Thunderbird 3.3 / SeaMonkey 2.1)

Esta cabecera permite una whitelist de cabeceras del servidor que los exploradores tienen permitido acceder. Por ejemplo:

Access-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header

Esto permite a las cabeceras X-My-Custom-Header y X-Another-Custom-Header ser expuestos al explorador.

### Access-Control-Max-Age

Esta cabecera indica durante cuánto tiempo los resultados de la solicitud verificada pueden ser capturados. Para un ejemplo de solicitudes verificadas, vea los ejemplos de arriba.

Access-Control-Max-Age: <delta-seconds>

El parámetro delta-seconds indica el número de segundos en que los resultados pueden ser capturados.

 
###  Access-Control-Allow-Credentials
 
Indica si la respuesta puede ser expuesta cuando la bandera credentials es verdadera. Cuando se usa como parte de una respuesta para una solicitud verficada, este indica si la solicitud verdadera puede realizarse usando credenciales. Note que las solicitudes GET simples no son verificadas, y por lo que si una solicitud es hecha para un recurso con credenciales, si la cabecera no es devuelta con el recurso, la respuesta es ignorada por el explorador y no devuelta al contenido web.

Access-Control-Allow-Credentials: true | false
 
 
 ### Access-Control-Allow-Methods
 
Específica el método o los métodos permitidos cuando se asigna un recurso. Es usado en respuesta a la solicitud verificada. Las condiciones sobre cuándo una solicitud es verificada se discuten arriba.

``` Access-Control-Allow-Methods: <method>[, <method>]* ```

Un ejemplo de una solicitud verificada se muestra arriba, incluyendo un ejemplo donde se envía este encabezado al explorador.

### Access-Control-Allow-Headers

Usado en respuesta a una solicitud verificada para indicar qué encabezado HTTP puede ser usado cuando se realiza la solicitud real.

```Access-Control-Allow-Headers: <field-name>[, <field-name>]*```

Las Solicitudes con credenciales son discutidas arriba.
 
 
 ## :star: Los encabezados HTTP de solicitud
 
Esta sección lista las cabeceras que los clietnes deben utilizar cuando realizan solicitudes HTTP para usar la característica de intercambio de origen cruzado. Note que estas cabeceras son establecidas cuando se realizan realizan invocaciones a los servidores. Los desarrolladores usan la capacidad de sitios cruzados XMLHttpRequest para no tener que establecer ninguna solicitud de intercambio de origen cruzado programada.
 
 
 ###  Origin
 
Indica el origen de las solicitudes de acceso a sitios cruzados o solicitudes verificadas.

Origin: ```<origin>```

El origen es una URI indicando al servidor dónde se ha iniciado la solicitud. Este no incluye ninguna información de recorrido, sólo el nombre del servidor. 

Nota: El origin puede ser un string vacío; esto es útil, por ejemplo, si el recurso es un data URL.

Observe que en cualquier solicitud de acceso de control, la cabecera ORIGIN siempre se envía.
 
 
 ### Access-Control-Request-Method
Se usa cuando se emite una solicitud verificada, para indicarle al servidor qué método HTTP será usado cuando se haga la solicitud real.

```Access-Control-Request-Method: <method>```

Ejemplos de esta utilización pueden ser encontrados arriba.

### Access-Control-Request-Headers
 
Usada cuando se emite una solicitud verificada para indicarle al servidor qué cabecera HTTP será usada cuando se haga la solicitud real.

```Access-Control-Request-Headers: <field-name>[, <field-name>]*```

---
 
## :star: 3. Enrutamiento con NodeJs
 
### RUTAS / ROUTING CON NODEJS Y EXPRESS

Para añadir más páginas a nuestro sitio, necesitamos más rutas. Podemos hacerlo usando Express Router, que ya viene integrado en Express. Esta entrada será un tanto bestia ya que el manejo de las rutas será una parte importante de todas las aplicaciones que hagamos de ahora en adelante.

Esta es la manera de crear las rutas básicas para sitios web, y también la forma en la que finalmente construiremos nuestras APIs RESTful que utilizará una app frontend en Angular. Así que, sin más dilación procedemos a enrutar (que palabra más fea señores, usaremos routing a partir de ahora).
 
 
## EXPRESS ROUTER

¿Qué es exactamente Express Router? Puedes considerarlo como una mini aplicación de express sin tantas funcionalidades, solo routing. No incorpora vistas o configuraciones, pero nos proporciona una routing API con funciones como .use(), .get(), .param(), y route(). Echaremos un vistazo al significado de todo esto.

Hay varias formas de usar routing. Ya usamos uno de sus métodos cuando creamos la página de inicio en la anterior entrada usando ‘app.get(‘/’, …). Veremos otros métodos para hacer más secciones de nuestro sitio y comentaremos el por qué y cuando usarlos.

 
 ### EJEMPLO DE LAS CARACTERÍSTICAS DE UNA APLICACIÓN

Estas son las principales características que añadiremos a nuestra aplicación actual:

- Rutas básicas (ya hemos tenemos hecha la página principal)

- Rutas de otras secciones del sitio (parte del Admin/Administrador con sus sub-rutas)

- Middleware para registros de peticiones (log request) en consola

- Ruta con Parámetros (http://localhost:1337/usuarios/darthvader)

- Ruta Middleware para Parámetros, para validar parámetros específicos

- Rutas de inicio de sesión (login routes) haciendo GET y POST

- Validar un parámetro que se pasa a una ruta concreta

 
### ¿Qué es el Middleware? 
 
 El Middleware se invoca ente la petición de un usuario y la respuesta final. Es todo lo que ocurre desde que sale una solicitud en lado del cliente hasta que llega a nuestra lógica de la ruta en el servidor. Volveremos sobre este concepto cuando tengamos que registrar los datos de cada petición por la consola/terminal (log data). Un usuario solicitará la página, lo registramos en la consola (middleware) y después enviaremos la respuesta con la página solicitada. Próximamente, más sobre el middleware.

 
Como hemos hecho hasta ahora, tendremos nuestras rutas en el archivo server.js. No necesitaremos hacer cambio alguno en nuestro package.json puesto que ya viene todo instalado con Express.
  
 
###   RUTAS BÁSICAS / BASIC ROUTES

Ya definimos nuestra ruta básica en la página de inicio. Express nos deja definir las rutas con nuestro objeto app. También podemos manejar métodos HTTP como GET, POST, PUT/PATCH, y DELETE.

Está es la forma más simple de definir rutas, pero a medida que nuestra aplicación crezca, necesitaremos más organización para nuestras rutas. Tan solo imagínate una app que tenga una parte de administrador y otra parte para el usuario, con muchas rutas cada una. Express router nos ayuda a regular todo esto.

Para las rutas siguientes, no enviaremos vistas al navegador, solo mensajes. Así será más sencillo ya que quiero centrarme en los aspectos del routing.

###  EXPRESS.ROUTER()

express.Router() actúa como una mini aplicación. Puedes crear una instancia (como hicimos con Express) y luego definir rutas con ella. Vamos a ver un ejemplo.

 
Debajo nuestro app.get() route dentro del server.js, añade lo siguiente. Vamos a 1. llamar una instancia del router 2. aplicarle rutas a esa instancia 3. y luego añadir estas rutas a nuestra app principal.

```JavaScript
//creamos las rutas para la parte de admin
//instanciamos router
var adminRouter = express.Router();

//página principal del admin, panel de administración/dashboard (http://localhost:1337/admin)
adminRouter.get('/', function(req, res) {
 res.send('¡Soy el panel de administración!');
});

//users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function (req, res) {
 res.send('¡Muestro todos los usuarios!');
});

//posts page (http://localhost:1337/admin/users)
adminRouter.get('/posts', function(req, res) {
 res.send('¡Muestro todos los posts!');
});

//aplicamos las rutas a nuestra aplicación, app
app.use('/admin', adminRouter);
```
 
Llamaremos a una instancia de express.Router() y lo asignamos a la variable adminRouter, le aplicamos las rutas, y luego le decimos a nuestra app que use esas rutas.

Ahora podemos acceder al panel de administración en http://localhost:1337/admin y a las sub-páginas en http://localhost:1337/admin/users y http://localhost:1337/admin/posts.


Observa como podemos establecer una raíz/root por defecto usando estas rutas que acabamos de definir. Si hubiéramos cambiado la línea 22 por app.use(‘/app’, router), entonces nuestras rutas serían http://localhost:1337/app/ y http://localhost:1337/app/users.


Esto es muy potente porque podemos creas varias express.Router() y luego aplicarlas a nuestra app. Podríamos tener un Router para las rutas básicas, rutas de autentificación, etc.
 

Usar Router nos permite hacer nuestras aplicaciones más modulares y flexibles que nunca mediante la creación de instancias de Router y aplicándolas como corresponde. Ahora vamos a ver como usar middleware para manejar peticiones.
 
 
 ### ROUTE MIDDLEWARE (ROUTER.USE())

Route middleware en Express es una forma de hacer algo antes de que una petición se procese. Este algo podrían ser cosas como comprobar si un usuario se ha autentificado (logueado con su cuenta por ejemplo), en definitiva, cualquier cosa que gustemos hacer antes de mandarle información al usuario.

El middleware registra un mensaje en nuestra consola cada vez que se realiza una petición / solicitud. Haremos una demostración de como crear middleware usando Express Router. Simplemente añadiremos el middleware al adminRouter que creamos en el último ejemplo. Asegúrate de ponerlo después de declarar tu adminRouter y antes de definir las rutas del admin, usuarios y posts.

Te habrás fijado en el argumento ‘next’. Es el único modo que tiene Express de saber que la función se ha completado y puede proceder con la siguiente parte del middleware o continuar con el enrutamiento (routing).
 
```JavaScript
//middleware que nos dirá qué ocurre en cada petición
adminRouter.use(function(req, res, next){
 //registra cada petición en la consola
 console.log(req.method, req.url);
 //continúamos haciendo lo que sea que estábamos haciendo y vamos a la ruta
 next();
});
```

 adminRouter.use() se utiliza para definir el middleware. Ahora esto se aplicará a todas las peticiones que entran a nuestra aplicación por la instancia de Router. Vamos al navegador y entramos en por ejemplo en http://localhost:1337/admin/users y veremos la petición (request) en nuestra consola.

Express Router petición en consola

Express Router petición en consola

Es muy importante el orden en que coloques tus middleware y las rutas. Todo ocurre en el orden en el que están. Significa que si colocas tus middleware después de una ruta, la ruta procedería antes que el middleware y la petición finalizará ahí mismo. Tu middleware no se ejecutaría en este caso.

Ten en mente que puedes usar el route middleware para muchas cosas. Por ejemplo, puedes usarlo para comprobar si un usuario se ha logueado durante la sesión antes de dejarlo continuar.
 
 
 ### ESTRUCTURANDO RUTAS

Al usar Router(), somos capaces de dividir en partes de nuestro sitio. Significa que puedes crear un basicRouter para rutas de navegación básica del sitio. También podrías crear un adminRouter para las rutas como administrador que estarían protegidas por algún tipo de autentificación.

Enrutar nuestra aplicación es un método que nos permite dividir las piezas que la componen. Nos proporciona la flexibilidad que necesitamos para aplicaciones complejas o APIs. También podemos mantener nuestra aplicación limpia y organizada ya que podemos trasladar cada router definido a su propio archivo individual y luego simplemente coger este archivo cuando lo llamamos con app.use(), de esta manera:
 
 
 ```JavaScript
app.use('/', basicRoutes);
app.use('/admin', adminRoutes);
app.use('/api', apiRoutes);
```

 ###  RUTAS CON PARÁMETROS (/HELLO/:NAME)

 
Vamos a ver como añadir parámetros a las rutas, digamos que queremos tener una ruta llamada /admin/users/:name donde pasamos el nombre de una persona a la URL, y la aplicación lanza un **‘¡Hola :name!’**, añade esto debajo de donde definimos la ruta /admin/users:

 
---------------------------------------------------------------------------------------------------

```JavaScript
//ruta con parámetros (http://localhost:1337/admin/users/:name)
adminRouter.get('/users/:name', function(req, res){
 res.send('hola ' + req.params.name + '!');
});
``` 
 
Ahora visitamos por ejemplo http://localhost:1337/admin/users/darthvader y veremos que nuestro navegador nos lanza un ‘hola darth vader!’, req.params guarda todos los datos que provienen de la petición (request) del usuario. Muy sencillo.

 

### Express Router con parámetros

En el futuro, podríamos usar esto para coger todos los datos de usuario que coincidan con el nombre darthvader. Podríamos hacer un panel de administración para gestionar nuestros usuarios.

Pongamos como ejemplo que queremos validar el nombre de alguna forma. Quizás queremos asegurarnos de que no es una palabra ofensiva o políticamente incorrecta. Haríamos esta validación dentro del middleware. Usaremos un middleware especial para esto.

 
 ### MIDDLEWARE PARA PARÁMETROS (.PARAM())

Usaremos Express .param() middleware. Esto crea un middleware que se ejecutará para cierto parámetro de la ruta. En nuestro caso, estamos usando :name en nuestra ruta de saludo. Una vez más, asegúrate de que el middleware está colocado antes que la ruta:
 
 
 ```JavaScript
 //middleware para validar :name
adminRouter.param('name', function(req, res, next, name){
 //haz aquí la validación de name
 //blah blah blah, validación
 //mostramos en consola para saber si funciona
 console.log('haciendo validaciones de ' + name);
 //una vez hecha la validación guardamos el nuevo objeto en la petición
 req.name = name;
 //pasamos al siguiente asunto
 next();
});
```
 
```JavaScript 
//ruta con parámetros (http://localhost:1337/admin/hello/:name)
adminRouter.get('/hello/:name', function(req, res){
 res.send('hola ' + req.name + '!');
});
```
 

Ahora cuando vamos a la ruta /hello/:name, nuestro middleware entrará en funcionamiento. Podemos hacer las validaciones y luego pasarle la nueva variable a nuestra ruta .get almacenándola dentro de req (request). Después accedemos a ella cambiando req.params.name por req.name.


Si ponemos en el navegador http://localhost:1337/admin/hello/darthvader veremos nuestra petición mostrarse en la consola.


### Express Router Parámetros Middleware


Middleware para parámetros se puede usar para validar datos que se envían a tu aplicación. Si te da por hacer una API RESTful, puedes validar también un token y asegurarte de que el usuario es capaz de acceder a su información. Todo lo que hemos trabajado en Node hasta ahora dará lugar a la API RESTful que comentamos en la primera entrada cuando hablamos del modelo cliente-servidor.


Ahora pasamos a ver la última característica de Express router, cómo usar app.route() para definir varias rutas de una sola vez.

 

### RUTAS LOGIN (APP.ROUTE())

Con esto definimos las rutas de nuestra aplicación de forma similar a usar app.get, pero usando app.route. Es básicamente un shortcut/atajo para llamar al Express Router. En lugar de llamar express.Router(), podemos llamar app.route y empezar a aplicar nuestras rutas ahí.

Usar app.route() nos permite definir varias acciones en una sola ruta de login. Necesitaremos un GET route para mostrar el formulario de login o acceso y un POST route para procesar el formulario.

```JavaScript 
app.route('/login')
//mostramos el formulario (GET http://localhost:1337/login)
.get(function(req, res){
 res.send('este es el formulario de login');
})

//procesamos el formulario (POST http://localhost:1337/login)
.post(function(req, res){
 res.send('procesando el formulario de login');
});
```
 

Listo, ya hemos definido dos acciones diferentes en nuestra ruta /login. Limpio y sencillo. Esta vez hemos aplicado directamente la ruta a nuestro objeto app dentro del archivo server.js, pero también podemos definirlas en el objeto adminRouter que teníamos antes.

Este es un buen método para crear rutas, ya que es limpio y facilita ver qué rutas hay y dónde se aplican. Pronto estaremos haciendo una API RESTful y una de las cosas que debemos hacer es usar los diferentes verbos de una petición HTTP para las acciones o funciones de nuestra aplicación. GET /login dará lugar al formulario de acceso (login) mientras que POST /login procesará los datos de login.

 

### RESUMEN

Express Router nos da mucha flexibilidad a la hora de definir rutas. En resumen, podemos:

- Utilizar express.Router() varias veces para definir grupos de rutas

- Aplicar express.Router() a una sección o parte de nuestra web usando app.use()

- Usar route middleware para procesar peticiones (requests)

- Usar route middleware para validar parámetros usando .param()

- Usar app.route() como un atajo de Router para definir varias peticiones en una ruta
 
---
 
 
 
 
---
---

