import { toObservableTests } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { AsyncEnumerableLike } from "../../ix.js";
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

testModule(
  "AsyncEnumerable",
  toObservableTests<AsyncEnumerableLike>(AsyncEnumerable),
  /*
  fromReadonlyArrayTests<AsyncEnumerableLike>(AsyncEnumerable),
  keepTests(AsyncEnumerable),
  mapTests(AsyncEnumerable),
  scanTests(AsyncEnumerable),
  scanAsyncTests<AsyncEnumerableLike, RunnableLike>(
    AsyncEnumerable,
    Runnable,
  ),
  takeWhileTests(AsyncEnumerable),*/
);
