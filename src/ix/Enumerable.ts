import {
  Buffer,
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  Empty,
  ForEach,
  FromArray,
  FromIterable,
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
import Iterable_toEnumerable from "../containers/__internal__/Iterable/Iterable.toEnumerable";
import { identity } from "../functions";
import { EnumerableLike, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import Enumerable_buffer from "./__internal__/Enumerable/Enumerable.buffer";
import Enumerable_concat from "./__internal__/Enumerable/Enumerable.concat";
import Enumerable_concatAll from "./__internal__/Enumerable/Enumerable.concatAll";
import Enumerable_distinctUntilChanged from "./__internal__/Enumerable/Enumerable.distinctUntilChanged";
import Enumerable_empty from "./__internal__/Enumerable/Enumerable.empty";
import Enumerable_enumerate from "./__internal__/Enumerable/Enumerable.enumerate";
import Enumerable_forEach from "./__internal__/Enumerable/Enumerable.forEach";
import Enumerable_fromArray from "./__internal__/Enumerable/Enumerable.fromArray";
import Enumerable_generate from "./__internal__/Enumerable/Enumerable.generate";
import Enumerable_keep from "./__internal__/Enumerable/Enumerable.keep";
import Enumerable_map from "./__internal__/Enumerable/Enumerable.map";
import Enumerable_pairwise from "./__internal__/Enumerable/Enumerable.pairwise";
import Enumerable_repeat from "./__internal__/Enumerable/Enumerable.repeat";
import Enumerable_scan from "./__internal__/Enumerable/Enumerable.scan";
import Enumerable_skipFirst from "./__internal__/Enumerable/Enumerable.skipFirst";
import Enumerable_takeFirst from "./__internal__/Enumerable/Enumerable.takeFirst";
import Enumerable_takeLast from "./__internal__/Enumerable/Enumerable.takeLast";
import Enumerable_takeWhile from "./__internal__/Enumerable/Enumerable.takeWhile";
import Enumerable_throwIfEmpty from "./__internal__/Enumerable/Enumerable.throwIfEmpty";
import Enumerable_toEnumerableObservable from "./__internal__/Enumerable/Enumerable.toEnumerableObservable";
import Enumerable_toIterable from "./__internal__/Enumerable/Enumerable.toIterable";
import Enumerable_toReadonlyArray from "./__internal__/Enumerable/Enumerable.toReadonlyArray";
import Enumerable_toRunnable from "./__internal__/Enumerable/Enumerable.toRunnable";
import Enumerable_toRunnableObservable from "./__internal__/Enumerable/Enumerable.toRunnableObservable";
import Enumerable_zip from "./__internal__/Enumerable/Enumerable.zip";

export const enumerate = Enumerable_enumerate;

export const buffer: Buffer<EnumerableLike>["buffer"] = Enumerable_buffer;

export const concat: Concat<EnumerableLike>["concat"] = Enumerable_concat;

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  Enumerable_concatAll;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  Enumerable_distinctUntilChanged;

export const empty: Empty<EnumerableLike>["empty"] = Enumerable_empty;

export const forEach: ForEach<EnumerableLike>["forEach"] = Enumerable_forEach;

export const fromArray = Enumerable_fromArray;

export const fromIterable: FromIterable<EnumerableLike>["fromIterable"] =
  Iterable_toEnumerable;

export const generate: Generate<EnumerableLike>["generate"] =
  Enumerable_generate;

export const keep: Keep<EnumerableLike>["keep"] = Enumerable_keep;

export const map: Map<EnumerableLike>["map"] = Enumerable_map;

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  Enumerable_pairwise;

export const repeat: Repeat<EnumerableLike>["repeat"] = Enumerable_repeat;

export const scan: Scan<EnumerableLike>["scan"] = Enumerable_scan;

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  Enumerable_skipFirst;

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  Enumerable_takeFirst;

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  Enumerable_takeLast;

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  Enumerable_takeWhile;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  Enumerable_throwIfEmpty;

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] = () =>
  identity;

export const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  Enumerable_toEnumerableObservable;

export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  Enumerable_toIterable;

export const toObservable: ToObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toObservable"] = Enumerable_toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  Enumerable_toReadonlyArray;

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  Enumerable_toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = Enumerable_toRunnableObservable;

export const zip: Zip<EnumerableLike>["zip"] = Enumerable_zip;

/** @ignore */
const Enumerable: Buffer<EnumerableLike> &
  Concat<EnumerableLike> &
  ConcatAll<EnumerableLike> &
  DistinctUntilChanged<EnumerableLike> &
  Empty<EnumerableLike, { delay: number }> &
  ForEach<EnumerableLike> &
  FromArray<EnumerableLike> &
  FromIterable<EnumerableLike> &
  Generate<EnumerableLike> &
  Keep<EnumerableLike> &
  Map<EnumerableLike> &
  Pairwise<EnumerableLike> &
  //Reduce<EnumerableLike> &
  Repeat<EnumerableLike> &
  Scan<EnumerableLike> &
  SkipFirst<EnumerableLike> &
  TakeFirst<EnumerableLike> &
  TakeLast<EnumerableLike> &
  TakeWhile<EnumerableLike> &
  ThrowIfEmpty<EnumerableLike> &
  ToEnumerable<EnumerableLike> &
  //ToFlowable<EnumerableLike> &
  //ToPromiseable<EnumerableLike, SchedulerLike> &
  ToReadonlyArray<EnumerableLike> &
  ToRunnable<EnumerableLike> &
  Zip<EnumerableLike> = {
  buffer,
  concat,
  concatAll,
  distinctUntilChanged,
  empty,
  forEach,
  fromArray,
  fromIterable,
  generate,
  keep,
  map,
  pairwise,
  repeat,
  scan,
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  throwIfEmpty,
  toEnumerable,
  toReadonlyArray,
  toRunnable,
  zip,
};

export default Enumerable;
