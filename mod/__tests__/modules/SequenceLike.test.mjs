/// <reference types="./SequenceLike.test.d.ts" />
import { toSequence } from '../../containers/ReadonlyArrayLike.mjs';
import { concatT, toReadonlyArrayT, concatAllT, distinctUntilChangedT, keepT, mapT, pairwiseT, repeatT, takeFirstT, scanT, skipFirstT, takeLastT, takeWhileT, zipT } from '../../containers/SequenceLike.mjs';
import { concatTests, concatAllTests, distinctUntilChangedTests, keepTests, mapTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, zipTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("SequenceLike", concatTests({
    fromArray: toSequence,
    ...concatT,
    ...toReadonlyArrayT,
}), concatAllTests({
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
}), pairwiseTests({
    fromArray: toSequence,
    ...pairwiseT,
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
