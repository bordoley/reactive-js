/// <reference types="./ReadonlyArray.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { forEachTests, fromReadonlyArrayTests, keepTests, mapTests, toEnumerableTests, toRunnableWithDelayTests, } from "../../__tests__/operators.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
testModule("ReadonlyArray", forEachTests(ReadonlyArray), fromReadonlyArrayTests(ReadonlyArray), keepTests(ReadonlyArray), mapTests(ReadonlyArray), toEnumerableTests(ReadonlyArray), toRunnableWithDelayTests(ReadonlyArray));
