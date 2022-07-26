/// <reference types="./EnumerableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toEnumerable } from '../containers/ReadonlyArrayLike.mjs';
import { bufferT, toReadonlyArrayT, concatAllT, distinctUntilChangedT, keepT, mapT, repeatT, takeFirstT, scanT, skipFirstT, takeLastT, takeWhileT, throwIfEmptyT, zipT } from '../ix/EnumerableLike.mjs';
import { bufferTests, concatAllTests, distinctUntilChangedTests, keepTests, mapTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests } from './operators.test.mjs';

const EnumerableLikeTests = createDescribe("EnumerableLike", bufferTests({
    fromArray: toEnumerable,
    ...bufferT,
    ...toReadonlyArrayT,
}), concatAllTests({
    fromArray: toEnumerable,
    ...concatAllT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toEnumerable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toEnumerable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toEnumerable,
    ...mapT,
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

export { EnumerableLikeTests };
