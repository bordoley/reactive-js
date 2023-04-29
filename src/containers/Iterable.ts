import {
  Enumerate,
  FromReadonlyArray,
  Identity,
  IterableLike,
  ToReadonlyArray,
} from "../containers.js";
import { Function1 } from "../functions.js";
import ReadonlyArray_toReadonlyArray from "../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import type * as Rx from "../rx.js";
import { ObservableLike, RunnableLike, ToEnumerable } from "../rx.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../util.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_flow from "./Iterable/__internal__/Iterable.flow.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";

export const enumerate: Enumerate<IterableLike>["enumerate"] =
  Iterable_enumerate;

interface Flow extends Rx.Flow<IterableLike> {
  /** @category Transform */
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): Function1<IterableLike<T>, Rx.PauseableObservableLike<T> & DisposableLike>;
}
export const flow: Flow["flow"] = Iterable_flow;

export const fromReadonlyArray: FromReadonlyArray<IterableLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const identity: Identity<IterableLike>["identity"] = Container_identity;

export const toEnumerable: ToEnumerable<IterableLike>["toEnumerable"] =
  Iterable_toObservable;

interface ToObservable extends Rx.ToObservable<IterableLike> {
  /** @category Transform */
  toObservable: <T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }) => Function1<IterableLike<T>, ObservableLike<T>>;
}
export const toObservable: ToObservable["toObservable"] = Iterable_toObservable;

export const toReadonlyArray: ToReadonlyArray<IterableLike>["toReadonlyArray"] =
  Iterable_toReadonlyArray;

interface ToRunnable extends Rx.ToRunnable<IterableLike> {
  /** @category Transform */
  toRunnable: <T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }) => Function1<IterableLike<T>, RunnableLike<T>>;
}
export const toRunnable: ToRunnable["toRunnable"] = Iterable_toObservable;
