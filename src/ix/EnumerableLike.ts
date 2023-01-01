import {
  Buffer,
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  Empty,
  ForEach,
  Generate,
  Keep,
  Map,
  Pairwise,
  Repeat,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToIterable,
  ToReadonlyArray,
  Zip,
} from "../containers";
import { identity } from "../functions";
import { EnumerableLike, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import EnumerableLike__buffer from "./__internal__/EnumerableLike/EnumerableLike.buffer";
import EnumerableLike__concat from "./__internal__/EnumerableLike/EnumerableLike.concat";
import EnumerableLike__concatAll from "./__internal__/EnumerableLike/EnumerableLike.concatAll";
import EnumerableLike__distinctUntilChanged from "./__internal__/EnumerableLike/EnumerableLike.distinctUntilChanged";
import EnumerableLike__empty from "./__internal__/EnumerableLike/EnumerableLike.empty";
import EnumerableLike__enumerate from "./__internal__/EnumerableLike/EnumerableLike.enumerate";
import EnumerableLike__forEach from "./__internal__/EnumerableLike/EnumerableLike.forEach";
import EnumerableLike__generate from "./__internal__/EnumerableLike/EnumerableLike.generate";
import EnumerableLike__keep from "./__internal__/EnumerableLike/EnumerableLike.keep";
import EnumerableLike__map from "./__internal__/EnumerableLike/EnumerableLike.map";
import EnumerableLike__pairwise from "./__internal__/EnumerableLike/EnumerableLike.pairwise";
import EnumerableLike__repeat from "./__internal__/EnumerableLike/EnumerableLike.repeat";
import EnumerableLike__scan from "./__internal__/EnumerableLike/EnumerableLike.scan";
import EnumerableLike__skipFirst from "./__internal__/EnumerableLike/EnumerableLike.skipFirst";
import EnumerableLike__takeFirst from "./__internal__/EnumerableLike/EnumerableLike.takeFirst";
import EnumerableLike__takeLast from "./__internal__/EnumerableLike/EnumerableLike.takeLast";
import EnumerableLike__takeWhile from "./__internal__/EnumerableLike/EnumerableLike.takeWhile";
import EnumerableLike__throwIfEmpty from "./__internal__/EnumerableLike/EnumerableLike.throwIfEmpty";
import EnumerableLike__toIterable from "./__internal__/EnumerableLike/EnumerableLike.toIterable";
import EnumerableLike__toReadonlyArray from "./__internal__/EnumerableLike/EnumerableLike.toReadonlyArray";
import EnumerableLike__toRunnable from "./__internal__/EnumerableLike/EnumerableLike.toRunnable";
import EnumerableLike__toRunnableObservable from "./__internal__/EnumerableLike/EnumerableLike.toRunnableObservable";
import EnumerableLike__zip from "./__internal__/EnumerableLike/EnumerableLike.zip";

export const enumerate = EnumerableLike__enumerate;

export const buffer: Buffer<EnumerableLike>["buffer"] = EnumerableLike__buffer;
export const bufferT: Buffer<EnumerableLike> = {
  buffer,
};

export const concat: Concat<EnumerableLike>["concat"] = EnumerableLike__concat;
export const concatT: Concat<EnumerableLike> = {
  concat,
};

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  EnumerableLike__concatAll;
export const concatAllT: ConcatAll<EnumerableLike> = { concatAll };

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  EnumerableLike__distinctUntilChanged;
export const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike> = {
  distinctUntilChanged,
};

export const empty: Empty<EnumerableLike>["empty"] = EnumerableLike__empty;
export const emptyT: Empty<EnumerableLike> = { empty };

export const forEach: ForEach<EnumerableLike>["forEach"] =
  EnumerableLike__forEach;
export const forEachT: ForEach<EnumerableLike> = { forEach };

export const generate: Generate<EnumerableLike>["generate"] =
  EnumerableLike__generate;
export const generateT: Generate<EnumerableLike> = {
  generate,
};

export const keep: Keep<EnumerableLike>["keep"] = EnumerableLike__keep;
export const keepT: Keep<EnumerableLike> = {
  keep,
};

export const map: Map<EnumerableLike>["map"] = EnumerableLike__map;
export const mapT: Map<EnumerableLike> = { map };

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  EnumerableLike__pairwise;
export const pairwiseT: Pairwise<EnumerableLike> = {
  pairwise,
};

export const repeat: Repeat<EnumerableLike>["repeat"] = EnumerableLike__repeat;
export const repeatT: Repeat<EnumerableLike> = {
  repeat,
};

export const scan: Scan<EnumerableLike>["scan"] = EnumerableLike__scan;
export const scanT: Scan<EnumerableLike> = {
  scan,
};

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  EnumerableLike__skipFirst;
export const skipFirstT: SkipFirst<EnumerableLike> = {
  skipFirst,
};

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  EnumerableLike__takeFirst;
export const takeFirstT: TakeFirst<EnumerableLike> = {
  takeFirst,
};

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  EnumerableLike__takeLast;
export const takeLastT: TakeLast<EnumerableLike> = { takeLast };

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  EnumerableLike__takeWhile;
export const takeWhileT: TakeWhile<EnumerableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  EnumerableLike__throwIfEmpty;
export const throwIfEmptyT: ThrowIfEmpty<EnumerableLike> = {
  throwIfEmpty,
};

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] = () =>
  identity;
export const toEnumerableT: ToEnumerable<EnumerableLike> = {
  toEnumerable,
};

export const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  EnumerableLike__toRunnableObservable as ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];
export const toEnumerableObservableT: ToEnumerableObservable<EnumerableLike> = {
  toEnumerableObservable,
};

export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  EnumerableLike__toIterable;
export const toIterableT: ToIterable<EnumerableLike> = { toIterable };

export const toObservable: ToObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toObservable"] = EnumerableLike__toRunnableObservable;
export const toObservableT: ToObservable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
> = { toObservable };

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  EnumerableLike__toReadonlyArray;
export const toReadonlyArrayT: ToReadonlyArray<EnumerableLike> = {
  toReadonlyArray,
};

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  EnumerableLike__toRunnable;
export const toRunnableT: ToRunnable<EnumerableLike> = { toRunnable };

export const toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = EnumerableLike__toRunnableObservable;
export const toRunnableObservableT: ToRunnableObservable<
  EnumerableLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
> = { toRunnableObservable };

export const zip: Zip<EnumerableLike>["zip"] = EnumerableLike__zip;
export const zipT: Zip<EnumerableLike> = { zip };
