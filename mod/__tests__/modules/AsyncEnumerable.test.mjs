/// <reference types="./AsyncEnumerable.test.d.ts" />
import { describe as createDescribe } from '../../__internal__/__internal__testing.mjs';
import { fromArray, keepT, toReadonlyArrayT, mapT, scanT, takeWhileT } from '../../ix/AsyncEnumerableLike.mjs';
import { keepTests, mapTests, scanTests, takeWhileTests } from '../operators.mjs';

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
}), takeWhileTests({
    fromArray: fromArray,
    ...takeWhileT,
    ...toReadonlyArrayT,
}));

export { AsyncEnumerableTest as default };
