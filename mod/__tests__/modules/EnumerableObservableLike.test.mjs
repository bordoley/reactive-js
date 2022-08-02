/// <reference types="./EnumerableObservableLike.test.d.ts" />
import { describe as createDescribe, test as createTest, expectArrayEquals } from '../../__internal__/testing.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { pipeLazy } from '../../functions.mjs';
import { toReadonlyArray } from '../../ix/EnumerableLike.mjs';
import { deferObservableT } from '../../rx.mjs';
import { concatT, toReadonlyArrayT, decodeWithCharsetT, mapT, distinctUntilChangedT, forEachT, keepT, pairwiseT, reduceT, scanT, skipFirstT, takeFirstT, takeLastT, takeWhileT, throwIfEmptyT, toEnumerable } from '../../rx/EnumerableObservableLike.mjs';
import { concatTests, decodeWithCharsetTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, reduceTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';

const EnumerableObservableLikeTests = createDescribe("RunnableObservableLike", concatTests({
    fromArray: toObservable,
    ...concatT,
    ...toReadonlyArrayT,
}), decodeWithCharsetTests({
    fromArray: toObservable,
    ...decodeWithCharsetT,
    ...deferObservableT,
    ...mapT,
    ...toReadonlyArrayT,
}), distinctUntilChangedTests({
    fromArray: toObservable,
    ...distinctUntilChangedT,
    ...toReadonlyArrayT,
}), forEachTests({
    fromArray: toObservable,
    ...forEachT,
    ...toReadonlyArrayT,
}), keepTests({
    fromArray: toObservable,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: toObservable,
    ...mapT,
    ...toReadonlyArrayT,
}), pairwiseTests({
    fromArray: toObservable,
    ...pairwiseT,
    ...toReadonlyArrayT,
}), reduceTests({
    fromArray: toObservable,
    ...reduceT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: toObservable,
    ...scanT,
    ...toReadonlyArrayT,
}), skipFirstTests({
    fromArray: toObservable,
    ...skipFirstT,
    ...toReadonlyArrayT,
}), takeFirstTests({
    fromArray: toObservable,
    ...takeFirstT,
    ...toReadonlyArrayT,
}), takeLastTests({
    fromArray: toObservable,
    ...takeLastT,
    ...toReadonlyArrayT,
}), takeWhileTests({
    fromArray: toObservable,
    ...takeWhileT,
    ...toReadonlyArrayT,
}), throwIfEmptyTests({
    fromArray: toObservable,
    ...throwIfEmptyT,
    ...toReadonlyArrayT,
}), createTest("toEnumerable", pipeLazy([1, 2, 3, 4], toObservable(), toEnumerable(), toReadonlyArray(), expectArrayEquals([1, 2, 3, 4]))));

export { EnumerableObservableLikeTests };
