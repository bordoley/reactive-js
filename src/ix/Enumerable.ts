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
import Iterable_toEnumerable from "../containers/Iterable/__internal__/Iterable.toEnumerable";
import { identity, returns } from "../functions";
import { EnumerableLike, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import Enumerable_buffer from "./Enumerable/__internal__/Enumerable.buffer";
import Enumerable_concat from "./Enumerable/__internal__/Enumerable.concat";
import Enumerable_concatAll from "./Enumerable/__internal__/Enumerable.concatAll";
import Enumerable_distinctUntilChanged from "./Enumerable/__internal__/Enumerable.distinctUntilChanged";
import Enumerable_empty from "./Enumerable/__internal__/Enumerable.empty";
import Enumerable_enumerate from "./Enumerable/__internal__/Enumerable.enumerate";
import Enumerable_forEach from "./Enumerable/__internal__/Enumerable.forEach";
import Enumerable_fromReadonlyArray from "./Enumerable/__internal__/Enumerable.fromReadonlyArray";
import Enumerable_generate from "./Enumerable/__internal__/Enumerable.generate";
import Enumerable_keep from "./Enumerable/__internal__/Enumerable.keep";
import Enumerable_map from "./Enumerable/__internal__/Enumerable.map";
import Enumerable_pairwise from "./Enumerable/__internal__/Enumerable.pairwise";
import Enumerable_repeat from "./Enumerable/__internal__/Enumerable.repeat";
import Enumerable_scan from "./Enumerable/__internal__/Enumerable.scan";
import Enumerable_skipFirst from "./Enumerable/__internal__/Enumerable.skipFirst";
import Enumerable_takeFirst from "./Enumerable/__internal__/Enumerable.takeFirst";
import Enumerable_takeLast from "./Enumerable/__internal__/Enumerable.takeLast";
import Enumerable_takeWhile from "./Enumerable/__internal__/Enumerable.takeWhile";
import Enumerable_throwIfEmpty from "./Enumerable/__internal__/Enumerable.throwIfEmpty";
import Enumerable_toEnumerableObservable from "./Enumerable/__internal__/Enumerable.toEnumerableObservable";
import Enumerable_toIterable from "./Enumerable/__internal__/Enumerable.toIterable";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray";
import Enumerable_toRunnable from "./Enumerable/__internal__/Enumerable.toRunnable";
import Enumerable_toRunnableObservable from "./Enumerable/__internal__/Enumerable.toRunnableObservable";
import Enumerable_zip from "./Enumerable/__internal__/Enumerable.zip";

export const enumerate = Enumerable_enumerate;

export const buffer: Buffer<EnumerableLike>["buffer"] = Enumerable_buffer;

export const concat: Concat<EnumerableLike>["concat"] = Enumerable_concat;

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  Enumerable_concatAll;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  Enumerable_distinctUntilChanged;

export const empty: Empty<EnumerableLike>["empty"] = Enumerable_empty;

export const forEach: ForEach<EnumerableLike>["forEach"] = Enumerable_forEach;

export const fromReadonlyArray = Enumerable_fromReadonlyArray;

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

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] =
  /*@__PURE__*/ returns(
    identity,
  ) as ToEnumerable<EnumerableLike>["toEnumerable"];

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

export const toRunnableObservable: ToRunnableObservable<EnumerableLike>["toRunnableObservable"] =
  Enumerable_toRunnableObservable;

export const zip: Zip<EnumerableLike>["zip"] = Enumerable_zip;

/** @ignore */
const Enumerable = {
  buffer,
  concat,
  concatAll,
  distinctUntilChanged,
  empty,
  forEach,
  fromReadonlyArray,
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
  toEnumerableObservable,
  toObservable,
  toReadonlyArray,
  toRunnable,
  toRunnableObservable,
  zip,
};

export default Enumerable;
