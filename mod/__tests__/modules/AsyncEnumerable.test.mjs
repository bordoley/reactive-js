/// <reference types="./AsyncEnumerable.test.d.ts" />
import { describe as createDescribe } from '../../__internal__/__internal__testing.mjs';
import { toObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { fromArray, keepT, toReadonlyArrayT, mapT, scanT, scanAsyncT, takeWhileT } from '../../ix/AsyncEnumerableLike.mjs';
import { keepTests, mapTests, scanTests, scanAsyncTests, takeWhileTests } from '../operators.mjs';

var AsyncEnumerableTest = createDescribe("AsyncEnumerableLike", keepTests({
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

export { AsyncEnumerableTest as default };
