'use strict';

var chalk = require('chalk');
var Table = require('easy-table');
var logSymbols = require('log-symbols');

function reporter(errors){

  var habla = '';

  if(! errors || (errors && ! (errors instanceof Array)) || (errors && errors instanceof Array && errors.length === 0)){

    habla = '\n'+logSymbols.success+' '+chalk.green('No problems')+'\n';

  }else{

    var total = errors.length;
    var errorCount = 0;
    var warningCount = 0;
    var t = new Table();

    errors.forEach(function (el) {

      var err = el.error;
      var file = el.file;
      var infocell = {};

      var isError = err.code && err.code[0] === 'E';
      if (isError) {
        errorCount++;
        infocell.icon = logSymbols.error+' Error';
      } else {
        warningCount++;
        infocell.icon = logSymbols.warning+' Warning';
      }

      if(! err.line){ err.line = '(unknown line)'; }
      if(! err.character){ err.character = '(unknown column)'; }
      if(! err.reason){ err.reason = '(unknown error)'; }
      if(! err.evidence){ err.evidence = '(unknown problem)'; }
      if(! err.code){ err.code = '(unknown code)'; }


      t.cell('File', file );
      t.cell('Line', err.line);
      t.cell('Col', err.character);
      t.cell('Reason', err.reason);
      t.cell('Type', infocell.icon);
      t.newRow();

    });

    habla = '\n' + t.toString();
    habla += '\n' +(total > 1 ? 'Errors: ' : 'Error: ')+total+'\n';

  }

  console.log( habla );

}

module.exports = { reporter: reporter };
