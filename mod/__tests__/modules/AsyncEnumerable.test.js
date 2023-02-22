/// <reference types="./AsyncEnumerable.test.d.ts" />

import AsyncEnumerable from "../../ix/AsyncEnumerable.js";
import { toObservableTests } from "../operators.js";
import { testModule } from "../testing.js";
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
