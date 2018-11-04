#!/usr/bin/env node
const argv      = require('yargs')
    .usage('./$0')
    .option('mime', {
        alias: 'm',
        describe: 'get output as a mime type'
      })
    .option('lang', {
        alias: 'l',
        describe: 'list of languages to match against (all if not present)',
        array : true,
        default : []
      })
    .nargs("mime",0)
    .example('$0 -l javascript xml < file')
    .example('echo "{\\\"koko\\\":1}" | $0 -m -l json html css # output is \'application/json\'')
    .help()
    .argv;
const hljs      = require("highlight.js");
const getStdin  = require("get-stdin");
const mime = require('mime');

mime._types.javascript = mime._types.js;

getStdin().then(str => {
    lang = hljs.highlightAuto(str,argv.lang).language;
    if(argv.m){
        lang = mime.getType(lang);
    }
    //console.log(lang);
    process.stdout.write(lang+"\n");
});



