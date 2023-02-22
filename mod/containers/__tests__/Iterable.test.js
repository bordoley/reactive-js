/// <reference types="./Iterable.test.d.ts" />

import { toEnumerableObservableTests, toEnumerableTests, toRunnableObservableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import Iterable from "../Iterable.js";
testModule("Iterable", toEnumerableTests(Iterable), toEnumerableObservableTests(Iterable), toRunnableObservableTests(Iterable));
