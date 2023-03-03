import { toObservableTests } from "../../__tests__/operators.js";
import { testModule } from "../../__tests__/testing.js";
import { AsyncEnumerableLike } from "../../streaming";
import * as AsyncEnumerable from "../AsyncEnumerable.js";

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

testModule(
  "AsyncEnumerable",
  toObservableTests<AsyncEnumerableLike>(AsyncEnumerable),
  /*
  fromReadonlyArrayTests<AsyncEnumerableLike>(AsyncEnumerable),
  keepTests(AsyncEnumerable),
  mapTests(AsyncEnumerable),
  scanTests(AsyncEnumerable),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
    AsyncEnumerable,
    RunnableObservable,
  ),
  takeWhileTests(AsyncEnumerable),*/
);
