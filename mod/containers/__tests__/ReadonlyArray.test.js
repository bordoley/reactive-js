/// <reference types="./ReadonlyArray.test.d.ts" />

import { forEachTests, fromReadonlyArrayTests, keepTests, mapTests, toEnumerableObservableTests, toEnumerableTests, toRunnableObservableTests, toRunnableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
testModule("ReadonlyArray", forEachTests(ReadonlyArray), fromReadonlyArrayTests(ReadonlyArray), keepTests(ReadonlyArray), mapTests(ReadonlyArray), toEnumerableTests(ReadonlyArray), toEnumerableObservableTests(ReadonlyArray), toRunnableTests(ReadonlyArray), toRunnableObservableTests(ReadonlyArray));
