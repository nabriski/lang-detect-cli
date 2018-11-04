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
    .example('$0 -l javascript xml')
    .example('$0 -m -l json html css')
    .help()
    .argv;
const hljs      = require("highlight.js");
const getStdin  = require("get-stdin");
const Mime = require('mime/Mime');
const typeMap = {
  'text/javascript': ['javascript']
};
const mime = new Mime(typeMap);

getStdin().then(str => {
    lang = hljs.highlightAuto(str,argv.l).language;
    if(argv.m){
        lang = mime.getType(lang);
    }
    console.log(lang);
});



