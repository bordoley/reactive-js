import { toRunnableObservable } from "../../containers/ReadonlyArray";
import { AsyncEnumerableLike } from "../../ix";
import {
  fromArray,
  keep,
  map,
  scan,
  scanAsync,
  takeWhile,
  toReadonlyArray,
} from "../../ix/AsyncEnumerable";
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
  keepTests({
    fromArray,
    keep,
    toReadonlyArray,
  }),
  mapTests({
    fromArray,
    map,
    toReadonlyArray,
  }),
  scanTests({
    fromArray,
    scan,
    toReadonlyArray,
  }),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
    {
      fromArray,
      scanAsync,
      toReadonlyArray,
    },
    {
      fromArray: toRunnableObservable,
    },
  ),
  takeWhileTests({
    fromArray,
    takeWhile,
    toReadonlyArray,
  }),
);
