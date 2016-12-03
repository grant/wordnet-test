var wordnet = require('wordnet');

wordnet.lookup('rabbit', function(err, definitions) {
  var foo = definitions[0].meta;
  console.log(JSON.stringify(foo, null, 2))
});