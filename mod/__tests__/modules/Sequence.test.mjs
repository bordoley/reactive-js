/// <reference types="./Sequence.test.d.ts" />
import Sequence from '../../containers/Sequence.mjs';
import { concatTests, concatAllTests, concatMapTests, concatWithTests, distinctUntilChangedTests, endWithTests, fromReadonlyArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, repeatTests, scanTests, skipFirstTests, startWithTests, takeFirstTests, takeLastTests, toEnumerableTests, takeWhileTests, zipTests, zipWithTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("Sequence", concatTests(Sequence), concatAllTests(Sequence), concatMapTests(Sequence), concatWithTests(Sequence), distinctUntilChangedTests(Sequence), endWithTests(Sequence), fromReadonlyArrayTests(Sequence), ignoreElementsTests(Sequence), keepTests(Sequence), mapTests(Sequence), mapToTests(Sequence), pairwiseTests(Sequence), repeatTests(Sequence), scanTests(Sequence), skipFirstTests(Sequence), startWithTests(Sequence), takeFirstTests(Sequence), takeLastTests(Sequence), toEnumerableTests(Sequence), 
// FIXME
// toRunnableObservableTests<SequenceLike>(Sequence),
takeWhileTests(Sequence), zipTests(Sequence), zipWithTests(Sequence));
