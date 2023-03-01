/// <reference types="./ReadonlyArray.test.d.ts" />

import { forEachTests, fromReadonlyArrayTests, keepTests, mapTests, toEnumerableTests, toRunnableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
testModule("ReadonlyArray", forEachTests(ReadonlyArray), fromReadonlyArrayTests(ReadonlyArray), keepTests(ReadonlyArray), mapTests(ReadonlyArray), toEnumerableTests(ReadonlyArray), toRunnableTests(ReadonlyArray));
