import {
  Enumerate,
  FromReadonlyArray,
  Identity,
  IterableLike,
  ToReadonlyArray,
} from "../containers.js";
import ReadonlyArray_toReadonlyArray from "../keyedcontainers/ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import { ToEnumerable, ToObservable, ToRunnable } from "../rx.js";
import { ToAsyncEnumerable, ToFlowable } from "../streaming.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_toAsyncEnumerable from "./Iterable/__internal__/Iterable.toAsyncEnumerable.js";
import Iterable_toFlowable from "./Iterable/__internal__/Iterable.toFlowable.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";

export const enumerate: Enumerate<IterableLike>["enumerate"] =
  Iterable_enumerate;

export const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const identity: Identity<IterableLike>["identity"] = Container_identity;

export const toAsyncEnumerable: ToAsyncEnumerable<
  IterableLike,
  { delay?: number }
>["toAsyncEnumerable"] = Iterable_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toObservable;

export const toFlowable: ToFlowable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = Iterable_toFlowable;

export const toObservable: ToObservable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toObservable"] = Iterable_toObservable;

export const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"] =
  Iterable_toReadonlyArray;

export const toRunnable: ToRunnable<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnable"] = Iterable_toObservable;
