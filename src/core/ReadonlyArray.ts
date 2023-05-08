import {
  Container,
  DisposableLike,
  EnumerableLike,
  EnumeratorLike,
  KeyedContainer,
  ObservableLike,
  PauseableObservableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  ReadonlyArrayContainer,
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

export const empty: KeyedContainer.TypeClass<ReadonlyArrayContainer>["empty"] =
  ReadonlyArray_empty;

export const entries: KeyedContainer.TypeClass<ReadonlyArrayContainer>["entries"] =
  ReadonlyArray_entries;

interface Enumerate extends Container.TypeClass<ReadonlyArrayContainer> {
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

export const everySatisfy: Container.TypeClass<ReadonlyArrayContainer>["everySatisfy"] =
  ReadonlyArray_everySatisfy;

export const first: Container.TypeClass<ReadonlyArrayContainer>["first"] =
  ReadonlyArray_first;

interface Flow extends Container.TypeClass<ReadonlyArrayContainer> {
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

export const forEach: KeyedContainer.TypeClass<ReadonlyArrayContainer>["forEach"] =
  ReadonlyArray_forEach;

export const forEachWithKey: KeyedContainer.TypeClass<ReadonlyArrayContainer>["forEachWithKey"] =
  ReadonlyArray_forEachWithKey;

export const fromEnumerable: Container.TypeClass<ReadonlyArrayContainer>["fromEnumerable"] =
  Runnable_toReadonlyArray;

export const fromIterable: Container.TypeClass<ReadonlyArrayContainer>["fromIterable"] =
  Iterable_toReadonlyArray;

export const fromOptional: Container.TypeClass<ReadonlyArrayContainer>["fromOptional"] =
  Optional_toReadonlyArray;

export const fromReadonlyArray: KeyedContainer.TypeClass<ReadonlyArrayContainer>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromRunnable: Container.TypeClass<ReadonlyArrayContainer>["fromRunnable"] =
  Runnable_toReadonlyArray;

export const getLength = ReadonlyArray_getLength;

export const identity: KeyedContainer.TypeClass<ReadonlyArrayContainer>["identity"] =
  Container_identity as KeyedContainer.TypeClass<ReadonlyArrayContainer>["identity"];

export const isEmpty = ReadonlyArray_isEmpty;

export const keep: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keep"] =
  ReadonlyArray_keep;

export const keepType: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keepType"] =
  ReadonlyArray_keepType;

export const keepWithKey: KeyedContainer.TypeClass<ReadonlyArrayContainer>["keepWithKey"] =
  ReadonlyArray_keepWithKey;

export const last: Container.TypeClass<ReadonlyArrayContainer>["last"] =
  ReadonlyArray_last;

export const map: KeyedContainer.TypeClass<ReadonlyArrayContainer>["map"] =
  ReadonlyArray_map;

export const mapWithKey: KeyedContainer.TypeClass<ReadonlyArrayContainer>["mapWithKey"] =
  ReadonlyArray_mapWithKey;

export const someSatisfy: Container.TypeClass<ReadonlyArrayContainer>["someSatisfy"] =
  ReadonlyArray_someSatisfy;

interface ToEnumerable extends Container.TypeClass<ReadonlyArrayContainer> {
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

interface ToIterable extends Container.TypeClass<ReadonlyArrayContainer> {
  /** @category Transform */
  toIterable<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export const toIterable: ToIterable["toIterable"] =
  ReadonlyArray_toReadonlyArray;

interface ToObservable extends Container.TypeClass<ReadonlyArrayContainer> {
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

export const toReadonlyArray: KeyedContainer.TypeClass<ReadonlyArrayContainer>["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

interface ToRunnable extends Container.TypeClass<ReadonlyArrayContainer> {
  /** @category Transform */
  toRunnable: <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => Function1<ReadonlyArray<T>, RunnableLike<T>>;
}
export const toRunnable: ToRunnable["toRunnable"] = ReadonlyArray_toObservable;
