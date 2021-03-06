## React-Redux Starter Kit

#### Based on Cory House's project for Pluralsight: https://github.com/coryhouse/pluralsight-redux-starter

But with many changes: Added TypeScript, upgraded React, Router, Bootstrap, ...


#### Installation and start

1. Clone react-redux-starterkit
1. Go to web/
1. npm install
1. npm run start:mocked
1. Go to http://localhost:9090

See package.json for more scripts.


#### Contents

* ES6
* Babel
* React
* Redux
* Redux asynchronous calls: redux-thunk
* Router: react-router v4
* Static typing: Typescript
* Linter: eslint, (tslint)
* Build: webpack
  * development mode
  * production mode
* Local dev server: webpack-dev-server
* Style
  * pre-processing: SASS
  * Bootstrap v4
  * Fontawesome 5 (SVG with JS)
* Test
  * mocha
  * chai or expect
  * enzyme
  * jsdom
  * (nock)
* demo


#### About react-router

Routing with hash er default. To use BrowserRouter (see App.tsx) the server has to be configured correctly.

To use BrowserRouter:

* App.tsx:render(): Change from HashRouter to BrowserRouter


#### Fontawesome and React

 * [js-component-packages](https://fontawesome.com/how-to-use/js-component-packages)
 * [react-fontawesome usage](https://www.npmjs.com/package/@fortawesome/react-fontawesome) 


#### Misc

##### Some problems can be solved by doing the following

1. rm -rf node_modules
1. npm cache clean
