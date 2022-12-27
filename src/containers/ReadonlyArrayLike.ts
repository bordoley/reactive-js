import {
  Empty,
  ForEach,
  Keep,
  Map,
  ReadonlyArrayLike,
  ToReadonlyArray,
  ToSequence,
} from "../containers";
import { identity } from "../functions";
import { ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";

import ReadonlyArrayLike__empty from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.empty";
import ReadonlyArrayLike__every from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.every";
import ReadonlyArrayLike__forEach from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.forEach";
import ReadonlyArrayLike__keep from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.keep";
import ReadonlyArrayLike__map from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.map";
import ReadonlyArrayLike__some from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.some";
import ReadonlyArrayLike__toEnumerable from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toEnumerable";
import ReadonlyArrayLike__toRunnable from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import ReadonlyArrayLike__toRunnableObservable from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable";
import ReadonlyArrayLike__toSequence from "./__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toSequence";

export const empty: Empty<ReadonlyArrayLike>["empty"] =
  ReadonlyArrayLike__empty;
export const emptyT: Empty<ReadonlyArrayLike> = {
  empty,
};

export const every = ReadonlyArrayLike__every;

export const forEach: ForEach<ReadonlyArrayLike>["forEach"] =
  ReadonlyArrayLike__forEach;
export const forEachT: ForEach<ReadonlyArrayLike> = { forEach };

export const keep: Keep<ReadonlyArrayLike>["keep"] = ReadonlyArrayLike__keep;
export const keepT: Keep<ReadonlyArrayLike> = { keep };

export const map: Map<ReadonlyArrayLike>["map"] = ReadonlyArrayLike__map;
export const mapT: Map<ReadonlyArrayLike> = { map };

export const some = ReadonlyArrayLike__some;

export type FromArrayOptions = {
  readonly start: number;
  readonly count: number;
};

export const toEnumerable: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toEnumerable"] = ReadonlyArrayLike__toEnumerable;
export const toEnumerableT: ToEnumerable<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
> = { toEnumerable };

export const toEnumerableObservable: ToEnumerableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toEnumerableObservable"] = ReadonlyArrayLike__toRunnableObservable as ToEnumerableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
>["toEnumerableObservable"];
export const toEnumerableObservableT: ToEnumerableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly start?: number;
  }
> = { toEnumerableObservable };

export const toObservable: ToObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toObservable"] = ReadonlyArrayLike__toRunnableObservable;
export const toObservableT: ToObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
> = { toObservable };

export const toReadonlyArray: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
>["toReadonlyArray"] = () => identity;

export const toReadonlyArrayT: ToReadonlyArray<
  ReadonlyArrayLike,
  {
    readonly start: number;
    readonly count: number;
  }
> = {
  toReadonlyArray,
};

export const toRunnable: ToRunnable<ReadonlyArrayLike>["toRunnable"] =
  ReadonlyArrayLike__toRunnable;
export const toRunnableT: ToRunnable<ReadonlyArrayLike> = { toRunnable };

export const toRunnableObservable: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
>["toRunnableObservable"] = ReadonlyArrayLike__toRunnableObservable;
export const toRunnableObservableT: ToRunnableObservable<
  ReadonlyArrayLike,
  {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
  }
> = { toRunnableObservable };

export const toSequence: ToSequence<ReadonlyArrayLike>["toSequence"] =
  ReadonlyArrayLike__toSequence;
export const toSequenceT: ToSequence<ReadonlyArrayLike> = {
  toSequence,
};
