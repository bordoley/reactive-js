/// <reference types="./Runnable.test.d.ts" />
import { pipeLazy, none } from '../../functions.mjs';
import Runnable from '../../rx/Runnable.mjs';
import { bufferTests, catchErrorTests, concatTests, concatAllTests, decodeWithCharsetTests, distinctUntilChangedTests, everySatisfyTests, forEachTests, fromReadonlyArrayTests, keepTests, mapTests, pairwiseTests, reduceTests, repeatTests, scanTests, skipFirstTests, someSatisfyTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests } from '../operators.mjs';
import { testModule, describe as createDescribe, test as createTest, expectEquals } from '../testing.mjs';

testModule("Runnable", bufferTests(Runnable), catchErrorTests(Runnable), concatTests(Runnable), concatAllTests(Runnable), decodeWithCharsetTests(Runnable), distinctUntilChangedTests(Runnable), everySatisfyTests(Runnable), forEachTests(Runnable), fromReadonlyArrayTests(Runnable), keepTests(Runnable), mapTests(Runnable), pairwiseTests(Runnable), reduceTests(Runnable), repeatTests(Runnable), scanTests(Runnable), skipFirstTests(Runnable), someSatisfyTests(Runnable), takeFirstTests(Runnable), takeLastTests(Runnable), takeWhileTests(Runnable), throwIfEmptyTests(Runnable), createDescribe("first", createTest("when the source has values", pipeLazy([0, 1, 2], Runnable.fromReadonlyArray(), Runnable.first(), expectEquals(0))), createTest("when the source is empty", pipeLazy([], Runnable.fromReadonlyArray(), Runnable.first(), expectEquals(none)))), createDescribe("last", createTest("when the source has values", pipeLazy([0, 1, 2], Runnable.fromReadonlyArray(), Runnable.last(), expectEquals(2))), createTest("when the source is empty", pipeLazy([], Runnable.fromReadonlyArray(), Runnable.last(), expectEquals(none)))));
