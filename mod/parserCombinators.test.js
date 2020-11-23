'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
require('./env.js');
var testing = require('./testing.js');
var parserCombinators = require('./parserCombinators.js');

const tests = testing.describe("parser combinators", testing.test("many", () => {
    const parser = functions.pipe(parserCombinators.string("abc"), parserCombinators.many());
    functions.pipe("abcabcabcabc", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["abc", "abc", "abc", "abc"]));
}), testing.test("many", () => {
    const parser = functions.pipe(parserCombinators.string("abc"), parserCombinators.many());
    functions.pipe("abcabcabcabc", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["abc", "abc", "abc", "abc"]));
}), testing.test("manySatisy", () => {
    const parser = parserCombinators.concat(parserCombinators.manySatisfy()(parserCombinators.pForwardSlash), parserCombinators.manySatisfy()(parserCombinators.char("z")));
    functions.pipe("////zzz", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["////", "zzz"]));
}), testing.test("map", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.map((x) => x + "cd"));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("abcd"));
}), testing.test("mapTo", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.mapTo("xyz"));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("xyz"));
}), testing.test("optional", () => {
    const parser = parserCombinators.concat(parserCombinators.string("ab"), functions.pipe(parserCombinators.optional(parserCombinators.string("cd")), parserCombinators.orCompute(functions.returns("ef"))), parserCombinators.pEof);
    functions.pipe("abcd", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["ab", "cd", option.none]));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser)), testing.expectArrayEquals(["ab", "ef", option.none]);
}), testing.test("or", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.or(parserCombinators.string("cd")));
    functions.pipe("ab", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("ab"));
    functions.pipe("cd", parserCombinators.parseWithOrThrow(parser), testing.expectEquals("cd"));
}), testing.test("sepBy", () => {
    const parser = functions.pipe(parserCombinators.string("ab"), parserCombinators.sepBy(parserCombinators.pColon));
    functions.pipe("ab:ab:ab:ab", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["ab", "ab", "ab", "ab"]));
}), testing.test("string", () => {
    const parser = parserCombinators.concat(parserCombinators.string("ab"), parserCombinators.string("cd"));
    functions.pipe("abcd", parserCombinators.parseWithOrThrow(parser), testing.expectArrayEquals(["ab", "cd"]));
}), testing.test("throwParseError", functions.defer(functions.defer("abc", parserCombinators.createCharStream, parserCombinators.throwParseError), testing.expectToThrow)));

exports.tests = tests;
