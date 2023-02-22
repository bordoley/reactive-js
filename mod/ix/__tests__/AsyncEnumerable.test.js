/// <reference types="./AsyncEnumerable.test.d.ts" />

import { toObservableTests } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import AsyncEnumerable from "../AsyncEnumerable.js";
/*
import { RunnableObservableLike } from "../../rx.js"
import RunnableObservable from "../../rx/RunnableObservable.js"
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
