/// <reference types="./Iterable.test.d.ts" />
import Iterable from '../../containers/Iterable.mjs';
import { toEnumerableTests, toEnumerableObservableTests, toRunnableObservableTests } from '../operators.mjs';
import { testModule } from '../testing.mjs';

testModule("Iterable", toEnumerableTests(Iterable), toEnumerableObservableTests(Iterable), toRunnableObservableTests(Iterable));
