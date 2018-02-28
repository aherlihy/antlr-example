'use strict'

const antlr4 = require('antlr4');
const ECMAScriptLexer = require('./lib/ECMAScriptLexer.js');
const ECMAScriptParser = require('./lib/ECMAScriptParser.js');
const Visitor = require('./visitor.js');

const input = '999 + 888';

const chars = new antlr4.InputStream(input);
const lexer = new ECMAScriptLexer.ECMAScriptLexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new ECMAScriptParser.ECMAScriptParser(tokens);
const visitor = new Visitor();

parser.buildParseTrees = true;

const tree = parser.program();
visitor.visitProgram(tree);
