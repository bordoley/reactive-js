/// <reference types="./EnumerableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toEnumerable } from '../containers/ReadonlyArrayLike.mjs';
import { distinctUntilChangedT, toReadonlyArrayT, keepT, mapT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, zipT } from '../ix/EnumerableLike.mjs';
import { distinctUntilChangedTest, keepTests, mapTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, zipTests } from './operators.test.mjs';

const EnumerableLikeTests = createDescribe("EnumerableLike", distinctUntilChangedTest({
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
}), zipTests({
    fromArray: toEnumerable,
    ...zipT,
    ...toReadonlyArrayT,
}));

export { EnumerableLikeTests };
