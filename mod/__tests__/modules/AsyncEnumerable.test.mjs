/// <reference types="./AsyncEnumerable.test.d.ts" />
import { toRunnableObservable } from '../../containers/ReadonlyArray.mjs';
import AsyncEnumerable from '../../ix/AsyncEnumerable.mjs';
import { keepTests, mapTests, scanTests, scanAsyncTests, takeWhileTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("AsyncEnumerable", keepTests(AsyncEnumerable), mapTests(AsyncEnumerable), scanTests(AsyncEnumerable), scanAsyncTests(AsyncEnumerable, {
    fromArray: toRunnableObservable,
}), takeWhileTests(AsyncEnumerable));
