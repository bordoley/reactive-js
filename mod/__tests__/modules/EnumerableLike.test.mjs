/// <reference types="./EnumerableLike.test.d.ts" />
import { testModule } from '../../__internal__/__internal__testing.mjs';
import { toEnumerable } from '../../containers/ReadonlyArrayLike.mjs';
import { bufferT, toReadonlyArrayT, concatT, concatAllT, distinctUntilChangedT, forEachT, keepT, mapT, pairwiseT, repeatT, takeFirstT, scanT, skipFirstT, takeLastT, takeWhileT, throwIfEmptyT, zipT } from '../../ix/EnumerableLike.mjs';
import { bufferTests, concatTests, concatAllTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests } from '../operators.mjs';

testModule("EnumerableLike", bufferTests({
    fromArray: toEnumerable,
    ...bufferT,
    ...toReadonlyArrayT,
}), concatTests({
    fromArray: toEnumerable,
    ...concatT,
    ...toReadonlyArrayT,
}), concatAllTests({
    fromArray: toEnumerable,
    ...concatAllT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toEnumerable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), forEachTests({
    fromArray: toEnumerable,
    ...forEachT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toEnumerable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toEnumerable,
    ...mapT,
    ...toReadonlyArrayT,
}), pairwiseTests({
    fromArray: toEnumerable,
    ...pairwiseT,
    ...toReadonlyArrayT,
}), repeatTests({
    fromArray: toEnumerable,
    ...repeatT,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: toEnumerable,
    ...scanT,
    ...toReadonlyArrayT,
}), skipFirstTests({
    fromArray: toEnumerable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), takeFirstTests({
    fromArray: toEnumerable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toEnumerable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeWhileTests({
    fromArray: toEnumerable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), throwIfEmptyTests({
    fromArray: toEnumerable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
}), zipTests({
    fromArray: toEnumerable,
    ...zipT,
    ...toReadonlyArrayT,
}));
