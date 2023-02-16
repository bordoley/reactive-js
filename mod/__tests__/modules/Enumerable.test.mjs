/// <reference types="./Enumerable.test.d.ts" />
import Enumerable from '../../ix/Enumerable.mjs';
import { bufferTests, concatTests, concatAllTests, concatMapTests, concatWithTests, distinctUntilChangedTests, endWithTests, forEachTests, fromReadonlyArrayTests, genMapTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, toEnumerableTests, toRunnableObservableTests, toObservableTests, zipTests, zipWithTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("Enumerable", bufferTests(Enumerable), concatTests(Enumerable), concatAllTests(Enumerable), concatMapTests(Enumerable), concatWithTests(Enumerable), distinctUntilChangedTests(Enumerable), endWithTests(Enumerable), forEachTests(Enumerable), fromReadonlyArrayTests(Enumerable), genMapTests(Enumerable), ignoreElementsTests(Enumerable), keepTests(Enumerable), mapTests(Enumerable), mapToTests(Enumerable), pairwiseTests(Enumerable), repeatTests(Enumerable), scanTests(Enumerable), skipFirstTests(Enumerable), startWithTests(Enumerable), takeFirstTests(Enumerable), takeLastTests(Enumerable), takeWhileTests(Enumerable), throwIfEmptyTests(Enumerable), toEnumerableTests(Enumerable), toRunnableObservableTests(Enumerable), toObservableTests(Enumerable), zipTests(Enumerable), zipWithTests(Enumerable));
