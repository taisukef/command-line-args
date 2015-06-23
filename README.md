[![view on npm](http://img.shields.io/npm/v/command-line-args.svg)](https://www.npmjs.org/package/command-line-args)
[![npm module downloads per month](http://img.shields.io/npm/dm/command-line-args.svg)](https://www.npmjs.org/package/command-line-args)
[![Build Status](https://travis-ci.org/75lb/command-line-args.svg?branch=master)](https://travis-ci.org/75lb/command-line-args)
[![Dependency Status](https://david-dm.org/75lb/command-line-args.svg)](https://david-dm.org/75lb/command-line-args)

# command-line-args
A command-line parser and usage-guide producer.. Particularly good at organising large sets of options. 

## Install
```sh
$ npm install command-line-args --save
```

## Synopsis
the following `app.js`...
```js
var cliArgs = require("command-line-args");

/* define the command-line options */
var cli = cliArgs([
    { name: "verbose", type: Boolean, alias: "v", description: "Write plenty output" },
    { name: "help", type: Boolean, description: "Print usage instructions" },
    { name: "files", type: Array, defaultOption: true, description: "The input files" }
]);

/* parse the supplied command-line values */
var options = cli.parse();

/* generate a usage guide */
var usage = cli.getUsage({
    header: "A synopsis application.",
    footer: "For more information, visit http://example.com"
});
    
console.log(options.help ? usage : options);
```
...returns this output at the command line:
```sh
$ node app.js
{}

$ node app.js -v
{ verbose: true }

$ node app.js README.md package.json
{ files: [ 'README.md', 'package.json' ] }

$ node app.js README.md package.json -v
{ verbose: true, files: [ 'README.md', 'package.json' ] }

$ node app.js --help

  A synopsis application.

  Usage

  -v, --verbose    Write plenty output
  --help           Print usage instructions
  --files <array>  The input files

  For more information, visit http://example.com

```

## API Reference
<a name="exp_module_command-line-args--parse"></a>
### parse(definitions, argv) ⇒ <code>object</code> ⏏
**Kind**: Exported function  

| Param | Type |
| --- | --- |
| definitions | <code>module:command-line-args.argDefType</code> | 
| argv | <code>Array.&lt;string&gt;</code> | 


* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).
