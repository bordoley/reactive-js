/// <reference types="./SequenceLike.test.d.ts" />
import { describe as createDescribe } from '../__internal__/testing.mjs';
import { toSequence } from '../containers/ReadonlyArrayLike.mjs';
import { concatAllT, toReadonlyArrayT, distinctUntilChangedT, keepT, mapT, repeatT, takeFirstT, scanT, skipFirstT, takeLastT, takeWhileT, zipT } from '../containers/SequenceLike.mjs';
import { concatAllTests, distinctUntilChangedTests, keepTests, mapTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, zipTests } from './operators.test.mjs';

const SequenceLikeTests = createDescribe("SequenceLike", concatAllTests({
    fromArray: toSequence,
    ...concatAllT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toSequence,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toSequence,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toSequence,
    ...mapT,
    ...toReadonlyArrayT,
}), repeatTests({
    fromArray: toSequence,
    ...repeatT,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: toSequence,
    ...scanT,
    ...toReadonlyArrayT,
}), skipFirstTests({
    fromArray: toSequence,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), takeFirstTests({
    fromArray: toSequence,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toSequence,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeWhileTests({
    fromArray: toSequence,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), zipTests({
    fromArray: toSequence,
    ...zipT,
    ...toReadonlyArrayT,
}));

export { SequenceLikeTests };
