const shell = require('shelljs');
const tap = require('tap');

let ret = shell.exec("echo \"<vast></vast>\" | ./index.js -l javascript xml").stdout;
tap.equal(ret,"xml\n","string is xml");

ret = shell.exec("echo \"<vast></vast>\" | ./index.js -m -l javascript xml").stdout;
tap.equal(ret,"application/xml\n","string is text/xml");

ret = shell.exec("echo \"{\\\"koko\\\":1}\" | ./index.js -l json html").stdout;
tap.equal(ret,"json\n","string is json");

ret = shell.exec("echo \"{\\\"koko\\\":1}\" | ./index.js -m -l json html").stdout;
tap.equal(ret,"application/json\n","string is application/json");
