import {
  Containers,
  DisposableLike,
  EnumerableLike,
  EnumeratorLike,
  KeyedContainers,
  ObservableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReadonlyArrayContainer,
  RunnableContainers,
  RunnableLike,
  SchedulerLike,
} from "../core.js";
import Container_identity from "../core/Container/__internal__/Container.identity.js";
import Iterable_toReadonlyArray from "../core/Iterable/__internal__/Iterable.toReadonlyArray.js";
import Optional_toReadonlyArray from "../core/Optional/__internal__/Optional.toReadonlyArray.js";
import Runnable_toReadonlyArray from "../core/Runnable/__internal__/Runnable.toReadonlyArray.js";
import { Function1 } from "../functions.js";
import ReadonlyArray_empty from "./ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__internal__/ReadonlyArray.entries.js";
import ReadonlyArray_enumerate from "./ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_everySatisfy from "./ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_first from "./ReadonlyArray/__internal__/ReadonlyArray.first.js";
import ReadonlyArray_flow from "./ReadonlyArray/__internal__/ReadonlyArray.flow.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.forEachWithKey.js";
import ReadonlyArray_getLength from "./ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "./ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import ReadonlyArray_keep from "./ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_keepType from "./ReadonlyArray/__internal__/ReadonlyArray.keepType.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.keepWithKey.js";
import ReadonlyArray_last from "./ReadonlyArray/__internal__/ReadonlyArray.last.js";
import ReadonlyArray_map from "./ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.mapWithKey.js";
import ReadonlyArray_someSatisfy from "./ReadonlyArray/__internal__/ReadonlyArray.someSatisfy.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";

export const empty: KeyedContainers.TypeClass<ReadonlyArrayContainer>["empty"] =
  ReadonlyArray_empty;

export const entries: KeyedContainers.TypeClass<ReadonlyArrayContainer>["entries"] =
  ReadonlyArray_entries;

interface Enumerate extends Containers.TypeClass<ReadonlyArrayContainer> {
  /**
   *
   * @category Transform
   */
  enumerate<T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
}

export const enumerate: Enumerate["enumerate"] = ReadonlyArray_enumerate;

export const everySatisfy: RunnableContainers.TypeClass<ReadonlyArrayContainer>["everySatisfy"] =
  ReadonlyArray_everySatisfy;

export const first: RunnableContainers.TypeClass<ReadonlyArrayContainer>["first"] =
  ReadonlyArray_first;

interface Flow extends Containers.TypeClass<ReadonlyArrayContainer> {
  /** @category Transform */
  flow<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly delay?: number;
      readonly delayStart?: boolean;
      readonly start?: number;
      readonly count?: number;
    },
  ): Function1<ReadonlyArray<T>, PauseableObservableLike<T> & DisposableLike>;
}
export const flow: Flow["flow"] = ReadonlyArray_flow;

export const forEach: KeyedContainers.TypeClass<ReadonlyArrayContainer>["forEach"] =
  ReadonlyArray_forEach;

export const forEachWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["forEachWithKey"] =
  ReadonlyArray_forEachWithKey;

export const fromEnumerable: Containers.TypeClass<ReadonlyArrayContainer>["fromEnumerable"] =
  Runnable_toReadonlyArray;

export const fromIterable: Containers.TypeClass<ReadonlyArrayContainer>["fromIterable"] =
  Iterable_toReadonlyArray;

export const fromOptional: Containers.TypeClass<ReadonlyArrayContainer>["fromOptional"] =
  Optional_toReadonlyArray;

export const fromReadonlyArray: KeyedContainers.TypeClass<ReadonlyArrayContainer>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromRunnable: Containers.TypeClass<ReadonlyArrayContainer>["fromRunnable"] =
  Runnable_toReadonlyArray;

export const getLength = ReadonlyArray_getLength;

export const identity: KeyedContainers.TypeClass<ReadonlyArrayContainer>["identity"] =
  Container_identity as KeyedContainers.TypeClass<ReadonlyArrayContainer>["identity"];

export const isEmpty = ReadonlyArray_isEmpty;

export const keep: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keep"] =
  ReadonlyArray_keep;

export const keepType: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keepType"] =
  ReadonlyArray_keepType;

export const keepWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["keepWithKey"] =
  ReadonlyArray_keepWithKey;

export const last: RunnableContainers.TypeClass<ReadonlyArrayContainer>["last"] =
  ReadonlyArray_last;

export const map: KeyedContainers.TypeClass<ReadonlyArrayContainer>["map"] =
  ReadonlyArray_map;

export const mapWithKey: KeyedContainers.TypeClass<ReadonlyArrayContainer>["mapWithKey"] =
  ReadonlyArray_mapWithKey;

export const someSatisfy: RunnableContainers.TypeClass<ReadonlyArrayContainer>["someSatisfy"] =
  ReadonlyArray_someSatisfy;

interface ToEnumerable extends Containers.TypeClass<ReadonlyArrayContainer> {
  /**
   * @category Transform
   */
  toEnumerable<T>(options?: {
    readonly start: number;
    readonly count: number;
  }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
}
export const toEnumerable: ToEnumerable["toEnumerable"] =
  ReadonlyArray_toObservable;

interface ToIterable extends Containers.TypeClass<ReadonlyArrayContainer> {
  /** @category Transform */
  toIterable<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export const toIterable: ToIterable["toIterable"] =
  ReadonlyArray_toReadonlyArray;

interface ToObservable extends Containers.TypeClass<ReadonlyArrayContainer> {
  /** @category Transform */
  toObservable: <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => Function1<ReadonlyArray<T>, ObservableLike<T>>;
}
export const toObservable: ToObservable["toObservable"] =
  ReadonlyArray_toObservable;

export const toReadonlyArray: KeyedContainers.TypeClass<ReadonlyArrayContainer>["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

interface ToRunnable extends Containers.TypeClass<ReadonlyArrayContainer> {
  /** @category Transform */
  toRunnable: <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => Function1<ReadonlyArray<T>, RunnableLike<T>>;
}
export const toRunnable: ToRunnable["toRunnable"] = ReadonlyArray_toObservable;
