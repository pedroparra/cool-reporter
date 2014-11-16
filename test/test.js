'use strict';
var assert = require('assert');
var jshint = require('jshint/src/cli').run;
var reporter = require('../reporter').reporter;

describe('cool-reporter', function () {

it('should be used by JSHint', function(){

  var ret = false;
  var _log = process.stdout.write.bind(process.stdout);

  process.stdout.write = function (str) {
    _log(str);
    if ( /'foo' is defined/ig.test(str || '') ) { ret = true; }
  };

  jshint({
    args: ['fixture.js'],
    reporter: reporter
  });

  process.stdout.write = _log;
  assert(ret);

});

});

return true;
