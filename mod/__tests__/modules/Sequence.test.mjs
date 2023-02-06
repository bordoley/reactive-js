/// <reference types="./Sequence.test.d.ts" />
import Sequence from '../../containers/Sequence.mjs';
import { concatTests, concatAllTests, distinctUntilChangedTests, keepTests, mapTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, takeFirstTests, takeLastTests, takeWhileTests, zipTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("Sequence", concatTests(Sequence), concatAllTests(Sequence), distinctUntilChangedTests(Sequence), keepTests(Sequence), mapTests(Sequence), pairwiseTests(Sequence), repeatTests(Sequence), scanTests(Sequence), skipFirstTests(Sequence), takeFirstTests(Sequence), takeLastTests(Sequence), takeWhileTests(Sequence), zipTests(Sequence));
