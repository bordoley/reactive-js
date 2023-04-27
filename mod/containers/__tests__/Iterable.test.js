/// <reference types="./Iterable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { toEnumerableTests, toRunnableTest, } from "../../__tests__/operators.js";
import * as Iterable from "../Iterable.js";
testModule("Iterable", toEnumerableTests(Iterable), toRunnableTest(Iterable));
