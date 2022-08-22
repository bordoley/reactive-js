/// <reference types="./AsyncEnumerable.test.d.ts" />
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { fromArray, keepT, toReadonlyArrayT, mapT, scanT, scanAsyncT, takeWhileT } from '../../ix/AsyncEnumerableLike.mjs';
import { keepTests, mapTests, scanTests, scanAsyncTests, takeWhileTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("AsyncEnumerableLike", keepTests({
    fromArray: fromArray,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    fromArray: fromArray,
    ...mapT,
    ...toReadonlyArrayT,
}), scanTests({
    fromArray: fromArray,
    ...scanT,
    ...toReadonlyArrayT,
}), scanAsyncTests({
    fromArray: fromArray,
    ...scanAsyncT,
    ...toReadonlyArrayT,
}, {
    fromArray: toObservable,
}), takeWhileTests({
    fromArray: fromArray,
    ...takeWhileT,
    ...toReadonlyArrayT,
}));
