/// <reference types="./EnumerableObservable.test.d.ts" />
import EnumerableObservable from '../../rx/EnumerableObservable.mjs';
import { bufferTests, catchErrorTests, concatTests, concatAllTests, concatMapTests, concatWithTests, decodeWithCharsetTests, distinctUntilChangedTests, endWithTests, everySatisfyTests, forEachTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, reduceTests, scanTests, scanAsyncTests, skipFirstTests, someSatisfyTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests, zipWithTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("EnumerableObservable", bufferTests(EnumerableObservable), catchErrorTests(EnumerableObservable), concatTests(EnumerableObservable), concatAllTests(EnumerableObservable), concatMapTests(EnumerableObservable), concatWithTests(EnumerableObservable), decodeWithCharsetTests(EnumerableObservable), distinctUntilChangedTests(EnumerableObservable), endWithTests(EnumerableObservable), everySatisfyTests(EnumerableObservable), forEachTests(EnumerableObservable), ignoreElementsTests(EnumerableObservable), keepTests(EnumerableObservable), mapTests(EnumerableObservable), mapToTests(EnumerableObservable), pairwiseTests(EnumerableObservable), reduceTests(EnumerableObservable), scanTests(EnumerableObservable), scanAsyncTests(EnumerableObservable, EnumerableObservable), skipFirstTests(EnumerableObservable), someSatisfyTests(EnumerableObservable), startWithTests(EnumerableObservable), takeFirstTests(EnumerableObservable), takeLastTests(EnumerableObservable), takeWhileTests(EnumerableObservable), throwIfEmptyTests(EnumerableObservable), zipTests(EnumerableObservable), zipWithTests(EnumerableObservable));
