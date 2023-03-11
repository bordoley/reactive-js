/// <reference types="./Iterable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { toEnumerableTests, toRunnableWithDelayTests, } from "../../__tests__/operators.js";
import * as Iterable from "../Iterable.js";
testModule("Iterable", toEnumerableTests(Iterable), toRunnableWithDelayTests(Iterable));
