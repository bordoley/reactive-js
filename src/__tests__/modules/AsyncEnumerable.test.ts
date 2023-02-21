import { AsyncEnumerableLike } from "../../ix.js";
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
