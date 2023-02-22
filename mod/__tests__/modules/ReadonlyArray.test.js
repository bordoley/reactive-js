/// <reference types="./ReadonlyArray.test.d.ts" />

import ReadonlyArray from "../../containers/ReadonlyArray.js";
import { forEachTests, fromReadonlyArrayTests, keepTests, mapTests, toEnumerableObservableTests, toEnumerableTests, toRunnableObservableTests, } from "../operators.js";
import { testModule } from "../testing.js";
testModule("ReadonlyArray", forEachTests(ReadonlyArray), fromReadonlyArrayTests(ReadonlyArray), keepTests(ReadonlyArray), mapTests(ReadonlyArray), toEnumerableTests(ReadonlyArray), toEnumerableObservableTests(ReadonlyArray), toRunnableObservableTests(ReadonlyArray));
