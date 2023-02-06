/// <reference types="./AsyncEnumerable.test.d.ts" />
import AsyncEnumerable from '../../ix/AsyncEnumerable.mjs';
import RunnableObservable from '../../rx/RunnableObservable.mjs';
import { keepTests, mapTests, scanTests, scanAsyncTests, takeWhileTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("AsyncEnumerable", keepTests(AsyncEnumerable), mapTests(AsyncEnumerable), scanTests(AsyncEnumerable), scanAsyncTests(AsyncEnumerable, RunnableObservable), takeWhileTests(AsyncEnumerable));
