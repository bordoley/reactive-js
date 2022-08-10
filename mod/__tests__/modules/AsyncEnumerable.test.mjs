/// <reference types="./AsyncEnumerable.test.d.ts" />
import { describe as createDescribe } from '../../__internal__/__internal__testing.mjs';
import { fromArray, keepT, toReadonlyArrayT } from '../../ix/AsyncEnumerableLike.mjs';
import { keepTests } from '../operators.mjs';

var AsyncEnumerableTest = createDescribe("AsyncEnumerableLike", keepTests({
    fromArray: fromArray,
    ...keepT,
    ...toReadonlyArrayT,
}));

export { AsyncEnumerableTest as default };
