import {
  EnumeratorLike,
  EverySatisfy,
  First,
  FromIterable,
  FromOptional,
  IterableLike,
  Last,
  SomeSatisfy,
} from "../containers.js";
import type * as Containers from "../containers.js";
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
  ReadonlyArrayContainerLike,
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

export const empty: Empty<ReadonlyArrayContainerLike>["empty"] =
  ReadonlyArray_empty;

export const entries: Entries<ReadonlyArrayContainerLike>["entries"] =
  ReadonlyArray_entries;

interface Enumerate
  extends Containers.Enumerate<ReadonlyArrayContainerLike, EnumeratorLike> {
  /**
   *
   * @category Transform
   */
  enumerate<T>(options?: {
    readonly start?: number;
    readonly count?: number;
  }): Function1<ReadonlyArrayContainerLike<T>, EnumeratorLike<T>>;
}

export const enumerate: Enumerate["enumerate"] = ReadonlyArray_enumerate;

export const everySatisfy: EverySatisfy<ReadonlyArrayContainerLike>["everySatisfy"] =
  ReadonlyArray_everySatisfy;

export const first: First<ReadonlyArrayContainerLike>["first"] =
  ReadonlyArray_first;

interface Flow extends Rx.Flow<ReadonlyArrayContainerLike> {
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
  ): Function1<
    ReadonlyArrayContainerLike<T>,
    PauseableObservableLike<T> & DisposableLike
  >;
}
export const flow: Flow["flow"] = ReadonlyArray_flow;

export const forEach: ForEach<ReadonlyArrayContainerLike>["forEach"] =
  ReadonlyArray_forEach;

export const forEachWithKey: ForEachWithKey<ReadonlyArrayContainerLike>["forEachWithKey"] =
  ReadonlyArray_forEachWithKey;

export const fromEnumerable: FromEnumerable<ReadonlyArrayContainerLike>["fromEnumerable"] =
  Runnable_toReadonlyArray;

export const fromIterable: FromIterable<ReadonlyArrayContainerLike>["fromIterable"] =
  Iterable_toReadonlyArray;

export const fromOptional: FromOptional<ReadonlyArrayContainerLike>["fromOptional"] =
  Optional_toReadonlyArray;

export const fromReadonlyArray: FromReadonlyArray<ReadonlyArrayContainerLike>["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

export const fromRunnable: FromRunnable<ReadonlyArrayContainerLike>["fromRunnable"] =
  Runnable_toReadonlyArray;

export const getLength = ReadonlyArray_getLength;

export const identity: Identity<ReadonlyArrayContainerLike>["identity"] =
  Container_identity as Identity<ReadonlyArrayContainerLike>["identity"];

export const isEmpty = ReadonlyArray_isEmpty;

export const keep: Keep<ReadonlyArrayContainerLike>["keep"] =
  ReadonlyArray_keep;

export const keepType: KeepType<ReadonlyArrayContainerLike>["keepType"] =
  ReadonlyArray_keepType;

export const keepWithKey: KeepWithKey<ReadonlyArrayContainerLike>["keepWithKey"] =
  ReadonlyArray_keepWithKey;

export const last: Last<ReadonlyArrayContainerLike>["last"] =
  ReadonlyArray_last;

export const map: Map<ReadonlyArrayContainerLike>["map"] = ReadonlyArray_map;

export const mapWithKey: MapWithKey<ReadonlyArrayContainerLike>["mapWithKey"] =
  ReadonlyArray_mapWithKey;

export const someSatisfy: SomeSatisfy<ReadonlyArrayContainerLike>["someSatisfy"] =
  ReadonlyArray_someSatisfy;

interface ToEnumerable extends Rx.ToEnumerable<ReadonlyArrayContainerLike> {
  /**
   * @category Transform
   */
  toEnumerable<T>(options?: {
    readonly start: number;
    readonly count: number;
  }): Function1<ReadonlyArrayContainerLike<T>, EnumerableLike<T>>;
}
export const toEnumerable: ToEnumerable["toEnumerable"] =
  ReadonlyArray_toObservable;

interface ToIterable extends Containers.ToIterable<ReadonlyArrayContainerLike> {
  /** @category Transform */
  toIterable<T>(options?: {
    readonly count?: number;
    readonly start?: number;
  }): Function1<ReadonlyArrayContainerLike<T>, IterableLike<T>>;
}
export const toIterable: ToIterable["toIterable"] =
  ReadonlyArray_toReadonlyArray;

interface ToObservable extends Rx.ToObservable<ReadonlyArrayContainerLike> {
  /** @category Transform */
  toObservable: <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => Function1<ReadonlyArrayContainerLike<T>, ObservableLike<T>>;
}
export const toObservable: ToObservable["toObservable"] =
  ReadonlyArray_toObservable;

export const toReadonlyArray: ToReadonlyArray<ReadonlyArrayContainerLike>["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;

interface ToRunnable extends Rx.ToRunnable<ReadonlyArrayContainerLike> {
  /** @category Transform */
  toRunnable: <T>(options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }) => Function1<ReadonlyArrayContainerLike<T>, RunnableLike<T>>;
}
export const toRunnable: ToRunnable["toRunnable"] = ReadonlyArray_toObservable;
