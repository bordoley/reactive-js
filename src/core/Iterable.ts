import {
  Containers,
  DisposableLike,
  EnumerableContainers,
  IterableContainer,
  ObservableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  RunnableContainers,
  RunnableLike,
  SchedulerLike,
} from "../core.js";
import ReadonlyArray_toReadonlyArray from "../core/ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import { Function1 } from "../functions.js";
import Container_identity from "./Container/__internal__/Container.identity.js";
import Iterable_enumerate from "./Iterable/__internal__/Iterable.enumerate.js";
import Iterable_flow from "./Iterable/__internal__/Iterable.flow.js";
import Iterable_toObservable from "./Iterable/__internal__/Iterable.toObservable.js";
import Iterable_toReadonlyArray from "./Iterable/__internal__/Iterable.toReadonlyArray.js";

export const enumerate: EnumerableContainers.TypeClass<IterableContainer>["enumerate"] =
  Iterable_enumerate;

interface Flow extends Containers.TypeClass<IterableContainer> {
  /** @category Transform */
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly delay?: number;
      readonly delayStart?: boolean;
    },
  ): Function1<Iterable<T>, PauseableObservableLike<T> & DisposableLike>;
}
export const flow: Flow["flow"] = Iterable_flow;

export const fromReadonlyArray: Containers.TypeClass<IterableContainer>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const identity: Containers.TypeClass<IterableContainer>["identity"] =
  Container_identity;

export const toEnumerable: EnumerableContainers.TypeClass<IterableContainer>["toEnumerable"] =
  Iterable_toObservable;

interface ToObservable extends Containers.TypeClass<IterableContainer> {
  /** @category Transform */
  toObservable: <T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }) => Function1<Iterable<T>, ObservableLike<T>>;
}
export const toObservable: ToObservable["toObservable"] = Iterable_toObservable;

export const toReadonlyArray: RunnableContainers.TypeClass<IterableContainer>["toReadonlyArray"] =
  Iterable_toReadonlyArray;

interface ToRunnable extends Containers.TypeClass<IterableContainer> {
  /** @category Transform */
  toRunnable: <T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }) => Function1<Iterable<T>, RunnableLike<T>>;
}
export const toRunnable: ToRunnable["toRunnable"] = Iterable_toObservable;
