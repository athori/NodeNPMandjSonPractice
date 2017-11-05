var _ = require('lodash');
var jsonfile = require('jsonfile');
jsonfile.readFile('data.json', function(err, obj) {
  _.forEach(obj, value =>{
      console.log(value);
  });
});

