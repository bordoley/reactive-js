import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanTests,
  takeWhileTests,
  toObservableTests,
} from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { AsyncEnumerableLike } from "../../streaming.js";
import * as AsyncEnumerable from "../AsyncEnumerable.js";

testModule(
  "AsyncEnumerable",
  toObservableTests<AsyncEnumerableLike>(AsyncEnumerable),
  fromReadonlyArrayTests<AsyncEnumerableLike>(AsyncEnumerable),
  keepTests(AsyncEnumerable),
  mapTests(AsyncEnumerable),
  scanTests(AsyncEnumerable),
  /*
  scanAsyncTests<AsyncEnumerableLike, RunnableLike>(
    AsyncEnumerable,
    Runnable,
  ),*/
  takeWhileTests(AsyncEnumerable),
);
