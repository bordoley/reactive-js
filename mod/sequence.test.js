'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var testing = require('./testing.js');
var monad_test = require('./monad.test.js');
var sequence = require('./sequence.js');

const Sequence = {
    concat: sequence.concat,
    concatMap: sequence.concatMap,
    distinctUntilChanged: sequence.distinctUntilChanged,
    empty: sequence.empty,
    endWith: sequence.endWith,
    fromArray: sequence.fromArray,
    fromValue: sequence.fromValue,
    generate: sequence.generate,
    keep: sequence.keep,
    map: sequence.map,
    mapTo: sequence.mapTo,
    repeat: sequence.repeat,
    scan: sequence.scan,
    skipFirst: sequence.skipFirst,
    startWith: sequence.startWith,
    takeFirst: sequence.takeFirst,
    takeLast: sequence.takeLast,
    takeWhile: sequence.takeWhile,
    toRunnable: sequence.toRunnable,
};
const tests = testing.describe("sequence", monad_test.createMonadTests(Sequence));

exports.tests = tests;
