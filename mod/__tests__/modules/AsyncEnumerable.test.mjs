/// <reference types="./AsyncEnumerable.test.d.ts" />
import { toRunnableObservable } from '../../containers/ReadonlyArrayLike.mjs';
import { fromArray, keep, toReadonlyArray, map, scan, scanAsync, takeWhile } from '../../ix/AsyncEnumerableLike.mjs';
import { keepTests, mapTests, scanTests, scanAsyncTests, takeWhileTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("AsyncEnumerableLike", keepTests({
    fromArray,
    keep,
    toReadonlyArray,
}), mapTests({
    fromArray,
    map,
    toReadonlyArray,
}), scanTests({
    fromArray,
    scan,
    toReadonlyArray,
}), scanAsyncTests({
    fromArray,
    scanAsync,
    toReadonlyArray,
}, {
    fromArray: toRunnableObservable,
}), takeWhileTests({
    fromArray,
    takeWhile,
    toReadonlyArray,
}));
