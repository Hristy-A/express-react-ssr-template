const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function renderTemplate(component, props, res) {
  const element = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(element);

  res.write('<!DOCTYPE html>');
  res.end(html);
};
