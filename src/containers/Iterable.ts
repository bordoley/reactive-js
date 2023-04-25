import {
  Enumerate,
  FromReadonlyArray,
  Identity,
  IterableLike,
  ToReadonlyArray,
} from "../containers.js";
import ReadonlyArray_toReadonlyArray from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import {
  EnumerateAsync,
  Flow,
  ToEnumerable,
  ToObservable,
  ToRunnable,
} from "../rx.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_enumerateAsync from "./Iterable/__internal__/Iterable.enumerateAsync.js";
import Iterable_flow from "./Iterable/__internal__/Iterable.flow.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";

export const enumerate: Enumerate<IterableLike>["enumerate"] =
  Iterable_enumerate;

export const flow: Flow<
  IterableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["flow"] = Iterable_flow;

export const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const identity: Identity<IterableLike>["identity"] = Container_identity;

export const enumerateAsync: EnumerateAsync<
  IterableLike,
  { delay?: number }
>["enumerateAsync"] = Iterable_enumerateAsync;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toObservable;

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
