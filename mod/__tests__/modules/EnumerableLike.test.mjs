/// <reference types="./EnumerableLike.test.d.ts" />
import { fromArray, buffer, toReadonlyArray, concat, concatAll, distinctUntilChanged, forEach, keep, map, pairwise, repeat, takeFirst, scan, skipFirst, takeLast, takeWhile, throwIfEmpty, zip } from '../../ix/EnumerableLike.mjs';
import { bufferTests, concatTests, concatAllTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("EnumerableLike", bufferTests({
    fromArray,
    buffer,
    toReadonlyArray,
}), concatTests({
    fromArray,
    concat,
    toReadonlyArray,
}), concatAllTests({
    fromArray,
    concatAll,
    toReadonlyArray,
}), distinctUntilChangedTests({
    fromArray,
    distinctUntilChanged,
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
}), zipTests({
    fromArray,
    zip,
    toReadonlyArray,
}));
