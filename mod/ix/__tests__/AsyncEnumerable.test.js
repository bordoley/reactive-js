/// <reference types="./AsyncEnumerable.test.d.ts" />

import { toObservableTests } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import * as AsyncEnumerable from "../AsyncEnumerable.js";
/*
import { RunnableLike } from "../../rx.js"
import Runnable from "../../rx/Runnable.js"
import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanAsyncTests,
  scanTests,
  takeWhileTests,
} from "../operators.js"

*/
testModule("AsyncEnumerable", toObservableTests(AsyncEnumerable));
