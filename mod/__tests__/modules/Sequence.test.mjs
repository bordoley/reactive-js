/// <reference types="./Sequence.test.d.ts" />
import { fromArray, concat, toReadonlyArray, concatAll, distinctUntilChanged, keep, map, pairwise, repeat, takeFirst, scan, skipFirst, takeLast, takeWhile, zip } from '../../containers/Sequence.mjs';
import { concatTests, concatAllTests, distinctUntilChangedTests, keepTests, mapTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, zipTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("Sequence", concatTests({
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
}), zipTests({
    fromArray,
    zip,
    toReadonlyArray,
}));
