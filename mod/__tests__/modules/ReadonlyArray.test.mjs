/// <reference types="./ReadonlyArray.test.d.ts" />
import ReadonlyArray from '../../containers/ReadonlyArray.mjs';
import { forEachTests, fromReadonlyArrayTests, keepTests, mapTests, toEnumerableTests, toEnumerableObservableTests, toRunnableObservableTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("ReadonlyArray", forEachTests(ReadonlyArray), fromReadonlyArrayTests(ReadonlyArray), keepTests(ReadonlyArray), mapTests(ReadonlyArray), toEnumerableTests(ReadonlyArray), toEnumerableObservableTests(ReadonlyArray), toRunnableObservableTests(ReadonlyArray));
