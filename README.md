Para usar este repo tienes que hacer lo siguiente:

Clona el repositorio.

```
git clone https://github.com/lcataldog/walmart-web-sell.git
```

Luego puedes acceder a tu proyecto y instalar las dependencias:

```
cd ruta_del_proyecto
npm install
```

Entonces puedes correr y ver en el browser:

```
npm start
```

Y para correr las pruebas:

```
npm test
```

# Tecnología

* [React](https://facebook.github.io/react): Renderiza componentes en la pantalla

* [Webpack](http://webpack.github.io/): La herramienta de build

* [Babel](https://babeljs.io/): Compila JavaScript nuevo y jsx

* [Jest](https://facebook.github.io/jest/): Corre las pruebas unitarias y de integración.

* [Enzyme](https://github.com/airbnb/enzyme): Para escribir pruebas de componentes React

* [ESLint](http://eslint.org/): Hace linting con las reglas de Airbnb (https://github.com/airbnb/javascript)

* [Docker](https://www.docker.com/): Usado en Jenkins para instalar la aplicación y correr las tareas

# Tareas del Proyecto

Las tareas que se puede correr en proyecto se encuentran en package.json

* **start**: empeza un servidor webpack local para desarrollo. 

* **build**: hace un build otimizado con webpack en la carpeta /dist

* **test:unit**: Ejecuta pruebas unitarias.

* **test:integration**: Ejecuta pruebas integracion.

* **start:docker**: empeza un servidor webpack local para desarrollo desde un contenedor docker. 

* **docker:build**: Crea imagen docker del artefacto

* **docker:run**: Ejecura el contenedor docker, hace referencia a docker:build



