/// <reference types="./AsyncEnumerable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { fromReadonlyArrayTests, toObservableTests, } from "../../__tests__/operators.js";
import * as AsyncEnumerable from "../AsyncEnumerable.js";
testModule("AsyncEnumerable", toObservableTests(AsyncEnumerable), fromReadonlyArrayTests(AsyncEnumerable));
