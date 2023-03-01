/// <reference types="./Sequence.test.d.ts" />

import { concatAllTests, concatMapTests, concatTests, concatWithTests, distinctUntilChangedTests, endWithTests, fromReadonlyArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, toEnumerableObservableTests, toEnumerableTests, toObservableTests, toRunnableTests, zipTests, zipWithTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as Sequence from "../Sequence.js";
testModule("Sequence", concatTests(Sequence), concatAllTests(Sequence), concatMapTests(Sequence), concatWithTests(Sequence), distinctUntilChangedTests(Sequence), endWithTests(Sequence), fromReadonlyArrayTests(Sequence), ignoreElementsTests(Sequence), keepTests(Sequence), mapTests(Sequence), mapToTests(Sequence), pairwiseTests(Sequence), repeatTests(Sequence), scanTests(Sequence), skipFirstTests(Sequence), startWithTests(Sequence), takeFirstTests(Sequence), takeLastTests(Sequence), toEnumerableTests(Sequence), toEnumerableObservableTests(Sequence), toObservableTests(Sequence), toRunnableTests(Sequence), takeWhileTests(Sequence), zipTests(Sequence), zipWithTests(Sequence));
