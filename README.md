# Test-Reclutamiento
Test solicitado en un proceso de reclutamiento 


API de Catálogo de Productos
Estás encargado de desarrollar una API y una interfaz de usuario para un catálogo de productos. El propósito de esta herramienta es:

- Para Usuarios: autenticarse y gestionar los productos.
- Para Administradores: control total sobre las operaciones CRUD de los productos.

No tenemos tareas detalladas, solo reglas de negocio con las que trabajar, que son:

- Debe existir autenticación para usuarios.
- Los productos pueden ser agregados, visualizados, modificados o eliminados.
- Los productos deben ser buscables y filtrables por nombre y precio.
- La información de productos se consume desde una API externa sugerida, DummyJSON.
- Solo los administradores pueden realizar operaciones CRUD completas.
- Los usuarios autenticados pueden ver y buscar productos.

Inicialmente, necesitaremos que soportes estas características técnicas:
- Backend en Node.js, preferiblemente usando NestJS.
- Autenticación con JWT.
- Rutas CRUD para productos.
- Frontend en React, aunque se considerará Angular.
- Uso de Git para control de versiones, con commits regulares que reflejen el progreso y la metodología de trabajo.
- Documentación completa en un archivo README.md y comentarios en el código necesarios para explicar la lógica utilizada.

El desarrollador frontend específicamente ha pedido estos endpoints para que los usuarios puedan:
- Iniciar sesión en la plataforma.
- Obtener una lista de todos los productos, permitiendo agregar, editar y eliminar si el usuario está autenticado.
- Filtrar productos por nombre y precio.

Reglas de la base de código:
- Debe haber un archivo readme que documente la instalación y el uso.
- Puedes usar cualquier framework y librería que desees, pero deben estar incluidos en el archivo readme documentando su propósito y una breve explicación con el razonamiento de tu elección.

Aspectos Valorados:
- Calidad y claridad del código.
- Eficiencia de las soluciones implementadas.
- Profundidad y utilidad de la documentación.
- Buenos hábitos de uso de control de versiones.

Puntos Extras:
- Uso de NestJS como framework de backend.
- Implementación de GraphQL para el manejo de consultas y mutaciones.
- Contenerización de la aplicación utilizando Docker.
- Incorporación de otras tecnologías o funcionalidades que aporten valor al proyecto.
