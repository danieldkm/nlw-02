<h1 align="center">Next Level Week #2</h1>

# Dia 1

## Iniciando front-end

```sh
yarn create react-app web --template typescript

# se nao tiver o yarn
npx create-react-app web --template typescript

cd web

# abrir o projeto na IDE
yarn start
# ou
npm start
```

### Removendo arquivos desnecessários
- README.md
- App.css
- index.css
- App.test.tsx
- logo.svg
- serviceWorker.ts
- setupTests.ts

No arquivo index.tsx remover;

```javascript
import './index.css';
import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

No arquivo App.tsx remover;

```javascript
import logo from './logo.svg';
import './App.css';

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
```

Na pasta public remover tudo que não é index e remover no index

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<meta
  name="description"
  content="Web site created using create-react-app"
/>
<!--
manifest.json provides metadata used when your web app is installed on a
user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
-->
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
<!--
Notice the use of %PUBLIC_URL% in the tags above.
It will be replaced with the URL of the `public` folder during the build.
Only files inside the `public` folder can be referenced from the HTML.

Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
work correctly both with client-side routing and a non-root public URL.
Learn how to configure a non-root public URL by running `npm run build`.
-->

<!--
  This HTML file is a template.
  If you open it directly in the browser, you will see an empty page.

  You can add webfonts, meta tags, or analytics to this file.
  The build step will place the bundled scripts into the <body> tag.

  To begin the development, run `npm start` or `yarn start`.
  To create a production bundle, use `npm run build` or `yarn build`.
-->
```
## fonts do projeto
- Archivo
  - Regular 400
  - Bold 700
- Poppins
  - Regular 400

Embed -> `<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet">`

## CSS
Utilizar o `rem` para unidade de medida para manter a responsividade de qualidade da pagina, pensando em `Mobile First`.

1fr -> ocupe o espaço que sobrar

## Instalando dependecia

- para fazer navegação na web

```sh
yarn add react-router-dom
yarn add @types/react-router-dom -D
```

# Dia 2
## Iniciando back-end

```sh
mkdir server
cd server

yarn init -y
mkdir src

yarn add typescript -D
# criar arquivo de configuração do typescript
yarn tsc --init
# sem yarn
npx tsc --init
```

No arquivo de configuração do typescript, modificar `"target": "es5", ` para `"target": "es2017", `, para aceitar a versão do javaScript ate 2017, validar a versão com a versão do node instalada.

```sh
# Executa no servidor no script
yarn add ts-node-dev -D
```

Adicionar o script `"start": "tsnd --transpile-only src/server.ts"` no package.json

```sh
yarn add express
yarn add @types/express -D
yarn add knex sqlite3
```

Migrations com knex

Script facilitar a execução das migrations, adicionar no package.json

```json
"knex:migrate": "knex --knexfile knexfile.ts migrate:latest"
```

lib permitir que aplicações em endereços distintos posso ser acessado na api.
```sh
yarn add cors
yarn add @types/cors -D
```