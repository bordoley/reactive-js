import {
  Buffer,
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  Empty,
  ForEach,
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
import IterableLike__toEnumerable from "../containers/__internal__/IterableLike/IterableLike.toEnumerable";
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
import EnumerableLike__fromArray from "./__internal__/EnumerableLike/EnumerableLike.fromArray";
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
import EnumerableLike__toEnumerableObservable from "./__internal__/EnumerableLike/EnumerableLike.toEnumerableObservable";
import EnumerableLike__toIterable from "./__internal__/EnumerableLike/EnumerableLike.toIterable";
import EnumerableLike__toReadonlyArray from "./__internal__/EnumerableLike/EnumerableLike.toReadonlyArray";
import EnumerableLike__toRunnable from "./__internal__/EnumerableLike/EnumerableLike.toRunnable";
import EnumerableLike__toRunnableObservable from "./__internal__/EnumerableLike/EnumerableLike.toRunnableObservable";
import EnumerableLike__zip from "./__internal__/EnumerableLike/EnumerableLike.zip";

export const enumerate = EnumerableLike__enumerate;

export const buffer: Buffer<EnumerableLike>["buffer"] = EnumerableLike__buffer;

export const concat: Concat<EnumerableLike>["concat"] = EnumerableLike__concat;

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  EnumerableLike__concatAll;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  EnumerableLike__distinctUntilChanged;

export const empty: Empty<EnumerableLike>["empty"] = EnumerableLike__empty;

export const forEach: ForEach<EnumerableLike>["forEach"] =
  EnumerableLike__forEach;

export const fromArray = EnumerableLike__fromArray;

export const fromIterable: FromIterable<EnumerableLike>["fromIterable"] =
  IterableLike__toEnumerable;

export const generate: Generate<EnumerableLike>["generate"] =
  EnumerableLike__generate;

export const keep: Keep<EnumerableLike>["keep"] = EnumerableLike__keep;

export const map: Map<EnumerableLike>["map"] = EnumerableLike__map;

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  EnumerableLike__pairwise;

export const repeat: Repeat<EnumerableLike>["repeat"] = EnumerableLike__repeat;

export const scan: Scan<EnumerableLike>["scan"] = EnumerableLike__scan;

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  EnumerableLike__skipFirst;

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  EnumerableLike__takeFirst;

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  EnumerableLike__takeLast;

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  EnumerableLike__takeWhile;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  EnumerableLike__throwIfEmpty;

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] = () =>
  identity;

export const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  EnumerableLike__toEnumerableObservable;

export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  EnumerableLike__toIterable;

export const toObservable: ToObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toObservable"] = EnumerableLike__toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  EnumerableLike__toReadonlyArray;

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  EnumerableLike__toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = EnumerableLike__toRunnableObservable;

export const zip: Zip<EnumerableLike>["zip"] = EnumerableLike__zip;
