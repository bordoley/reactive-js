import { toObservable } from "../../containers/ReadonlyArrayLike";
import { AsyncEnumerableLike } from "../../ix";
import {
  fromArray,
  keepT,
  mapT,
  scanAsyncT,
  scanT,
  takeWhileT,
  toReadonlyArrayT,
} from "../../ix/AsyncEnumerableLike";
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
  "AsyncEnumerableLike",
  keepTests({
    fromArray: fromArray,
    ...keepT,
    ...toReadonlyArrayT,
  }),
  mapTests({
    fromArray: fromArray,
    ...mapT,
    ...toReadonlyArrayT,
  }),
  scanTests({
    fromArray: fromArray,
    ...scanT,
    ...toReadonlyArrayT,
  }),
  scanAsyncTests<AsyncEnumerableLike, RunnableObservableLike>(
    {
      fromArray: fromArray,
      ...scanAsyncT,
      ...toReadonlyArrayT,
    },
    {
      fromArray: toObservable,
    },
  ),
  takeWhileTests({
    fromArray: fromArray,
    ...takeWhileT,
    ...toReadonlyArrayT,
  }),
);
