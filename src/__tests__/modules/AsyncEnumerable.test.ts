import { AsyncEnumerableLike } from "../../ix";
import AsyncEnumerable from "../../ix/AsyncEnumerable";
import { toObservableTests } from "../operators";
import { testModule } from "../testing";
/*
import { RunnableObservableLike } from "../../rx";
import RunnableObservable from "../../rx/RunnableObservable";
import {
  fromReadonlyArrayTests,
  keepTests,
  mapTests,
  scanAsyncTests,
  scanTests,
  takeWhileTests,
} from "../operators";

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
