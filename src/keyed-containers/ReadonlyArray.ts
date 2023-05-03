import { Container, EnumeratorLike } from "../containers.js";
import Container_identity from "../containers/Container/__internal__/Container.identity.js";
import Iterable_toReadonlyArray from "../containers/Iterable/__internal__/Iterable.toReadonlyArray.js";
import Optional_toReadonlyArray from "../containers/Optional/__internal__/Optional.toReadonlyArray.js";
import { Function1 } from "../functions.js";
import {
  Empty,
  Entries,
  ForEach,
  ForEachWithKey,
  FromReadonlyArray,
  Identity,
  Keep,
  KeepType,
  KeepWithKey,
  Map,
  MapWithKey,
  ReadonlyArrayContainer,
  ToReadonlyArray,
} from "../keyed-containers.js";
import {
  EnumerableLike,
  FromEnumerable,
  FromRunnable,
  ObservableLike,
  PauseableObservableLike,
  RunnableLike,
} from "../rx.js";
import type * as Rx from "../rx.js";
import Runnable_toReadonlyArray from "../rx/Runnable/__internal__/Runnable.toReadonlyArray.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  SchedulerLike,
} from "../util.js";
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

export const empty: Empty<ReadonlyArrayContainer>["empty"] =
  ReadonlyArray_empty;

export const entries: Entries<ReadonlyArrayContainer>["entries"] =
  ReadonlyArray_entries;

interface Enumerate extends Container.Enumerate<ReadonlyArrayContainer> {
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

export const everySatisfy: Container.EverySatisfy<ReadonlyArrayContainer>["everySatisfy"] =
  ReadonlyArray_everySatisfy;

export const first: Container.First<ReadonlyArrayContainer>["first"] =
  ReadonlyArray_first;

interface Flow extends Rx.Flow<ReadonlyArrayContainer> {
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

export const forEach: ForEach<ReadonlyArrayContainer>["forEach"] =
  ReadonlyArray_forEach;

export const forEachWithKey: ForEachWithKey<ReadonlyArrayContainer>["forEachWithKey"] =
  ReadonlyArray_forEachWithKey;

export const fromEnumerable: FromEnumerable<ReadonlyArrayContainer>["fromEnumerable"] =
  Runnable_toReadonlyArray;

export const fromIterable: Container.FromIterable<ReadonlyArrayContainer>["fromIterable"] =
  Iterable_toReadonlyArray;

export const fromOptional: Container.FromOptional<ReadonlyArrayContainer>["fromOptional"] =
  Optional_toReadonlyArray;

export const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayContainer>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromRunnable: FromRunnable<ReadonlyArrayContainer>["fromRunnable"] =
  Runnable_toReadonlyArray;

export const getLength = ReadonlyArray_getLength;

export const identity: Identity<ReadonlyArrayContainer>["identity"] =
  Container_identity as Identity<ReadonlyArrayContainer>["identity"];

export const isEmpty = ReadonlyArray_isEmpty;

export const keep: Keep<ReadonlyArrayContainer>["keep"] = ReadonlyArray_keep;

export const keepType: KeepType<ReadonlyArrayContainer>["keepType"] =
  ReadonlyArray_keepType;

export const keepWithKey: KeepWithKey<ReadonlyArrayContainer>["keepWithKey"] =
  ReadonlyArray_keepWithKey;

export const last: Container.Last<ReadonlyArrayContainer>["last"] =
  ReadonlyArray_last;

export const map: Map<ReadonlyArrayContainer>["map"] = ReadonlyArray_map;

export const mapWithKey: MapWithKey<ReadonlyArrayContainer>["mapWithKey"] =
  ReadonlyArray_mapWithKey;

export const someSatisfy: Container.SomeSatisfy<ReadonlyArrayContainer>["someSatisfy"] =
  ReadonlyArray_someSatisfy;

interface ToEnumerable extends Rx.ToEnumerable<ReadonlyArrayContainer> {
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

interface ToIterable extends Container.ToIterable<ReadonlyArrayContainer> {
  /** @category Transform */
  toIterable<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArray<T>, Iterable<T>>;
}
export const toIterable: ToIterable["toIterable"] =
  ReadonlyArray_toReadonlyArray;

interface ToObservable extends Rx.ToObservable<ReadonlyArrayContainer> {
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

export const toReadonlyArray: ToReadonlyArray<ReadonlyArrayContainer>["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

interface ToRunnable extends Rx.ToRunnable<ReadonlyArrayContainer> {
  /** @category Transform */
  toRunnable: <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => Function1<ReadonlyArray<T>, RunnableLike<T>>;
}
export const toRunnable: ToRunnable["toRunnable"] = ReadonlyArray_toObservable;
