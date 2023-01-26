/// <reference types="./Runnable.test.d.ts" />
import { pipeLazy, none } from '../../functions.mjs';
import { fromArray, buffer, toReadonlyArray, catchError, map, concat, concatAll, decodeWithCharset, defer, distinctUntilChanged, everySatisfy, forEach, keep, pairwise, reduce, repeat, takeFirst, scan, skipFirst, someSatisfy, takeLast, takeWhile, throwIfEmpty, first, last } from '../../rx/Runnable.mjs';
import { bufferTests, catchErrorTests, concatTests, concatAllTests, decodeWithCharsetTests, distinctUntilChangedTests, everySatisfyTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, repeatTests, scanTests, skipFirstTests, someSatisfyTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';
import { testModule, describe as createDescribe, test as createTest, expectEquals } from '../testing.mjs';

testModule("Runnable", bufferTests({
    fromArray,
    buffer,
    toReadonlyArray,
}), catchErrorTests({
    fromArray,
    catchError,
    map,
    toReadonlyArray,
}), concatTests({
    fromArray,
    concat,
    toReadonlyArray,
}), concatAllTests({
    fromArray,
    concatAll,
    toReadonlyArray,
}), decodeWithCharsetTests({
    fromArray,
    decodeWithCharset,
    defer,
    map,
    toReadonlyArray,
}), distinctUntilChangedTests({
    fromArray,
    distinctUntilChanged,
    toReadonlyArray,
}), everySatisfyTests({
    fromArray,
    everySatisfy,
    toReadonlyArray,
}), forEachTests({
    fromArray,
    forEach,
    toReadonlyArray,
}), keepTests({
    fromArray,
    keep,
    toReadonlyArray,
}), mapTests({
    fromArray,
    map,
    toReadonlyArray,
}), pairwiseTests({
    fromArray,
    pairwise,
    toReadonlyArray,
}), reduceTests({
    fromArray,
    reduce,
    toReadonlyArray,
}), repeatTests({
    fromArray,
    repeat,
    takeFirst,
    toReadonlyArray,
}), scanTests({
    fromArray,
    scan,
    toReadonlyArray,
}), skipFirstTests({
    fromArray,
    skipFirst,
    toReadonlyArray,
}), someSatisfyTests({
    fromArray,
    someSatisfy,
    toReadonlyArray,
}), takeFirstTests({
    fromArray,
    takeFirst,
    toReadonlyArray,
}), takeLastTests({
    fromArray,
    takeLast,
    toReadonlyArray,
}), takeWhileTests({
    fromArray,
    takeWhile,
    toReadonlyArray,
}), throwIfEmptyTests({
    fromArray,
    throwIfEmpty,
    toReadonlyArray,
}), createDescribe("first", createTest("when the source has values", pipeLazy([0, 1, 2], fromArray(), first(), expectEquals(0))), createTest("when the source is empty", pipeLazy([], fromArray(), first(), expectEquals(none)))), createDescribe("last", createTest("when the source has values", pipeLazy([0, 1, 2], fromArray(), last(), expectEquals(2))), createTest("when the source is empty", pipeLazy([], fromArray(), last(), expectEquals(none)))));
