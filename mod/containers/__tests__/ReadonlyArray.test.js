/// <reference types="./ReadonlyArray.test.d.ts" />

import { forEachTests, fromReadonlyArrayTests, keepTests, mapTests, toEnumerableObservableTests, toEnumerableTests, toRunnableObservableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
testModule("ReadonlyArray", forEachTests(ReadonlyArray), fromReadonlyArrayTests(ReadonlyArray), keepTests(ReadonlyArray), mapTests(ReadonlyArray), toEnumerableTests(ReadonlyArray), toEnumerableObservableTests(ReadonlyArray), toRunnableObservableTests(ReadonlyArray));
