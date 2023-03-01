/// <reference types="./Iterable.test.d.ts" />

import { toEnumerableObservableTests, toEnumerableTests, toRunnableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as Iterable from "../Iterable.js";
testModule("Iterable", toEnumerableTests(Iterable), toEnumerableObservableTests(Iterable), toRunnableTests(Iterable));
