/// <reference types="./EnumerableObservable.test.d.ts" />

import EnumerableObservable from "../../rx/EnumerableObservable.js";
import { bufferTests, catchErrorTests, concatAllTests, concatMapTests, concatTests, concatWithTests, decodeWithCharsetTests, distinctUntilChangedTests, endWithTests, everySatisfyTests, forEachTests, fromReadonlyArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, reduceTests, retryTests, scanAsyncTests, scanTests, skipFirstTests, someSatisfyTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, toEnumerableTests, toObservableTests, toRunnableObservableTests, zipTests, zipWithTests, } from "../operators.js";
import { testModule } from "../testing.js";
testModule("EnumerableObservable", bufferTests(EnumerableObservable), catchErrorTests(EnumerableObservable), concatTests(EnumerableObservable), concatAllTests(EnumerableObservable), concatMapTests(EnumerableObservable), concatWithTests(EnumerableObservable), decodeWithCharsetTests(EnumerableObservable), distinctUntilChangedTests(EnumerableObservable), endWithTests(EnumerableObservable), everySatisfyTests(EnumerableObservable), forEachTests(EnumerableObservable), fromReadonlyArrayTests(EnumerableObservable), ignoreElementsTests(EnumerableObservable), keepTests(EnumerableObservable), mapTests(EnumerableObservable), mapToTests(EnumerableObservable), pairwiseTests(EnumerableObservable), reduceTests(EnumerableObservable), retryTests(EnumerableObservable), scanTests(EnumerableObservable), scanAsyncTests(EnumerableObservable, EnumerableObservable), skipFirstTests(EnumerableObservable), someSatisfyTests(EnumerableObservable), startWithTests(EnumerableObservable), takeFirstTests(EnumerableObservable), takeLastTests(EnumerableObservable), takeWhileTests(EnumerableObservable), throwIfEmptyTests(EnumerableObservable), toEnumerableTests(EnumerableObservable), toObservableTests(EnumerableObservable), toRunnableObservableTests(EnumerableObservable), zipTests(EnumerableObservable), zipWithTests(EnumerableObservable));
