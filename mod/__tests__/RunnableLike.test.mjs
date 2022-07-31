/// <reference types="./RunnableLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toRunnable } from '../containers/ReadonlyArrayLike.mjs';
import { bufferT, toReadonlyArrayT, concatT, concatAllT, distinctUntilChangedT, forEachT, keepT, mapT, pairwiseT, repeatT, takeFirstT, scanT, skipFirstT, takeLastT, takeWhileT, throwIfEmptyT } from '../rx/RunnableLike.mjs';
import { bufferTests, concatTests, concatAllTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from './operators.test.mjs';

const RunnableLikeTests = createDescribe("RunnableLike", bufferTests({
    fromArray: toRunnable,
    ...bufferT,
    ...toReadonlyArrayT,
}), concatTests({
    fromArray: toRunnable,
    ...concatT,
    ...toReadonlyArrayT,
}), concatAllTests({
    fromArray: toRunnable,
    ...concatAllT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toRunnable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), forEachTests({
    fromArray: toRunnable,
    ...forEachT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toRunnable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toRunnable,
    ...mapT,
    ...toReadonlyArrayT,
}), pairwiseTests({
    fromArray: toRunnable,
    ...pairwiseT,
    ...toReadonlyArrayT,
}), repeatTests({
    fromArray: toRunnable,
    ...repeatT,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: toRunnable,
    ...scanT,
    ...toReadonlyArrayT,
}), skipFirstTests({
    fromArray: toRunnable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), takeFirstTests({
    fromArray: toRunnable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toRunnable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeWhileTests({
    fromArray: toRunnable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), throwIfEmptyTests({
    fromArray: toRunnable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
}));

export { RunnableLikeTests };
