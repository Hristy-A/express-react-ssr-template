### Simple template Express app with React ssr

Command, usages to install packages:

`npm i @babel/core @babel/preset-env @babel/preset-react 
@babel/register` - babel

`npm i react react-dom` - react

`npm i express` - express

.babelrc config:
`
{
 "presets": ["@babel/preset-env", "@babel/preset-react"]
}
`

`require('@babel/register');` - to configure babel

Helpful links:

1. enable https ([#1](https://stackoverflow.com/questions/11744975/enabling-https-on-express-js), [#2](https://expressjs.com/en/api.html#app.listen))
2. exception handling [middleware](https://expressjs.com/en/guide/error-handling.html)
3. [routing](https://expressjs.com/en/guide/routing.html)
4. [query interface](https://sequelize.org/docs/v6/other-topics/query-interface/#obtaining-the-query-interface)
5. rest api [recommendations](https://habr.com/ru/post/351890/)
