/// <reference types="./RunnableLike.test.d.ts" />
import { testModule, describe as createDescribe, test as createTest, expectEquals } from '../../__internal__/__internal__testing.mjs';
import { toRunnable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy, none } from '../../functions.mjs';
import { deferRunnableT } from '../../rx.mjs';
import { bufferT, toReadonlyArrayT, catchErrorT, mapT, concatT, concatAllT, decodeWithCharsetT, distinctUntilChangedT, everySatisfyT, forEachT, keepT, pairwiseT, reduceT, repeatT, takeFirstT, scanT, skipFirstT, someSatisfyT, takeLastT, takeWhileT, throwIfEmptyT, first, last } from '../../rx/RunnableLike.mjs';
import { bufferTests, catchErrorTests, concatTests, concatAllTests, decodeWithCharsetTests, distinctUntilChangedTests, everySatisfyTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, repeatTests, scanTests, skipFirstTests, someSatisfyTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';

testModule("RunnableLike", bufferTests({
    fromArray: toRunnable,
    ...bufferT,
    ...toReadonlyArrayT,
}), catchErrorTests({
    fromArray: toRunnable,
    ...catchErrorT,
    ...mapT,
    ...toReadonlyArrayT,
}), concatTests({
    fromArray: toRunnable,
    ...concatT,
    ...toReadonlyArrayT,
}), concatAllTests({
    fromArray: toRunnable,
    ...concatAllT,
    ...toReadonlyArrayT,
}), decodeWithCharsetTests({
    fromArray: toRunnable,
    ...decodeWithCharsetT,
    ...deferRunnableT,
    ...mapT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toRunnable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), everySatisfyTests({
    fromArray: toRunnable,
    ...everySatisfyT,
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
}), reduceTests({
    fromArray: toRunnable,
    ...reduceT,
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
}), someSatisfyTests({
    fromArray: toRunnable,
    ...someSatisfyT,
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
}), createDescribe("first", createTest("when the source has values", pipeLazy([0, 1, 2], toRunnable(), first(), expectEquals(0))), createTest("when the source is empty", pipeLazy([], toRunnable(), first(), expectEquals(none)))), createDescribe("last", createTest("when the source has values", pipeLazy([0, 1, 2], toRunnable(), last(), expectEquals(2))), createTest("when the source is empty", pipeLazy([], toRunnable(), last(), expectEquals(none)))));
