import { toRunnableObservable } from "../../containers/ReadonlyArray";
import { AsyncEnumerableLike } from "../../ix";
import AsyncEnumerable from "../../ix/AsyncEnumerable";
import { RunnableObservableLike } from "../../rx";
import {
  keepTests,
  mapTests,
  scanAsyncTests,
  scanTests,
  takeWhileTests,
} from "../operators";
import { testModule } from "../testing";

testModule(
  "AsyncEnumerable",
  keepTests(AsyncEnumerable),
  mapTests(AsyncEnumerable),
  scanTests(AsyncEnumerable),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(AsyncEnumerable, {
    fromArray: toRunnableObservable,
  }),
  takeWhileTests(AsyncEnumerable),
);
