/// <reference types="./AsyncEnumerable.test.d.ts" />
import { toRunnableObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { fromArrayT, keepT, toReadonlyArrayT, mapT, scanT, scanAsyncT, takeWhileT } from '../../ix/AsyncEnumerableLike.mjs';
import { keepTests, mapTests, scanTests, scanAsyncTests, takeWhileTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("AsyncEnumerableLike", keepTests({
    ...fromArrayT,
    ...keepT,
    ...toReadonlyArrayT,
}), mapTests({
    ...fromArrayT,
    ...mapT,
    ...toReadonlyArrayT,
}), scanTests({
    ...fromArrayT,
    ...scanT,
    ...toReadonlyArrayT,
}), scanAsyncTests({
    ...fromArrayT,
    ...scanAsyncT,
    ...toReadonlyArrayT,
}, {
    fromArray: toRunnableObservable,
}), takeWhileTests({
    ...fromArrayT,
    ...takeWhileT,
    ...toReadonlyArrayT,
}));
