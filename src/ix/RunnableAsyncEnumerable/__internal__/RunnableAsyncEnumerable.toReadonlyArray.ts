import { ToReadonlyArray } from "../../../containers.js";
import { Function1, compose } from "../../../functions.js";
import {
  AsyncEnumerableLike,
  RunnableAsyncEnumerableLike,
} from "../../../ix.js";
import { RunnableLike } from "../../../rx.js";
import Runnable_toReadonlyArray from "../../../rx/Runnable/__internal__/Runnable.toReadonlyArray.js";
import AsyncEnumerable_toObservable from "../../AsyncEnumerable/__internal__/AsyncEnumerable.toObservable.js";

const RunnableAsyncEnumerable_toReadonlyArray: ToReadonlyArray<RunnableAsyncEnumerableLike>["toReadonlyArray"] =
  <T>() =>
    compose(
      AsyncEnumerable_toObservable() as Function1<
        AsyncEnumerableLike<T>,
        RunnableLike<T>
      >,
      Runnable_toReadonlyArray(),
    );

export default RunnableAsyncEnumerable_toReadonlyArray;
