/// <reference types="./Iterable.test.d.ts" />

import { toEnumerableTests, toRunnableTests, } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as Iterable from "../Iterable.js";
testModule("Iterable", toEnumerableTests(Iterable), toRunnableTests(Iterable));
