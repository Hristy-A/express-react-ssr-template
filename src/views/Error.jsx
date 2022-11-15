const React = require('react');

module.exports = function Error({ error }) {
  return (
    <div>
      <h1>{error.constructor.name}</h1>
      <p>{error.message}</p>
      <p>{error.stack}</p>
    </div>
  );
};
