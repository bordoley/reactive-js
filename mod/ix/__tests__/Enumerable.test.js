/// <reference types="./Enumerable.test.d.ts" />

import { bufferTests, concatAllTests, concatMapTests, concatTests, concatWithTests, distinctUntilChangedTests, endWithTests, flatMapIterableTests, forEachTests, fromReadonlyArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, 
//repeatTests,
scanTests, skipFirstTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, toObservableTests, zipTests, zipWithTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as Enumerable from "../Enumerable.js";
testModule("Enumerable", bufferTests(Enumerable), concatTests(Enumerable), concatAllTests(Enumerable), concatMapTests(Enumerable), concatWithTests(Enumerable), distinctUntilChangedTests(Enumerable), endWithTests(Enumerable), forEachTests(Enumerable), fromReadonlyArrayTests(Enumerable), flatMapIterableTests(Enumerable), ignoreElementsTests(Enumerable), keepTests(Enumerable), mapTests(Enumerable), mapToTests(Enumerable), pairwiseTests(Enumerable), 
// FIXME
//repeatTests(Enumerable),
scanTests(Enumerable), skipFirstTests(Enumerable), startWithTests(Enumerable), takeFirstTests(Enumerable), takeLastTests(Enumerable), takeWhileTests(Enumerable), throwIfEmptyTests(Enumerable), toObservableTests(Enumerable), zipTests(Enumerable), zipWithTests(Enumerable));
