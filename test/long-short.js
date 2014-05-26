var test = require("tap").test;
var parse = require("../lib/command-line-args");

var optionDefinitions = [
    { name: "verbose", alias: "v", type: "boolean" },
    { name: "dry", alias: "d", type: Boolean },
    { name: "colour", alias: "c" },
    { name: "number", alias: "n", type: Number },
    { name: "files", defaultOption: true }
];

test("one of each", function(t){
    var argv = [ "--verbose", "-d", "--colour", "red", "--number", 3 ];
    t.deepEqual(parse(optionDefinitions, argv), {
        verbose: true,
        dry: true,
        colour: "red",
        number: 3
    });
    t.end();
});
