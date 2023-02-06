/// <reference types="./Enumerable.test.d.ts" />
import Enumerable from '../../ix/Enumerable.mjs';
import { bufferTests, concatTests, concatAllTests, distinctUntilChangedTests, forEachTests, keepTests, mapTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, zipTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("Enumerable", bufferTests(Enumerable), concatTests(Enumerable), concatAllTests(Enumerable), distinctUntilChangedTests(Enumerable), forEachTests(Enumerable), keepTests(Enumerable), mapTests(Enumerable), pairwiseTests(Enumerable), repeatTests(Enumerable), scanTests(Enumerable), skipFirstTests(Enumerable), takeFirstTests(Enumerable), takeLastTests(Enumerable), takeWhileTests(Enumerable), throwIfEmptyTests(Enumerable), zipTests(Enumerable));
