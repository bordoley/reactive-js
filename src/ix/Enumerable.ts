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
import Iterable$toEnumerable from "../containers/__internal__/Iterable/Iterable.toEnumerable";
import { identity } from "../functions";
import { EnumerableLike, ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import Enumerable$buffer from "./__internal__/Enumerable/Enumerable.buffer";
import Enumerable$concat from "./__internal__/Enumerable/Enumerable.concat";
import Enumerable$concatAll from "./__internal__/Enumerable/Enumerable.concatAll";
import Enumerable$distinctUntilChanged from "./__internal__/Enumerable/Enumerable.distinctUntilChanged";
import Enumerable$empty from "./__internal__/Enumerable/Enumerable.empty";
import Enumerable$enumerate from "./__internal__/Enumerable/Enumerable.enumerate";
import Enumerable$forEach from "./__internal__/Enumerable/Enumerable.forEach";
import Enumerable$fromArray from "./__internal__/Enumerable/Enumerable.fromArray";
import Enumerable$generate from "./__internal__/Enumerable/Enumerable.generate";
import Enumerable$keep from "./__internal__/Enumerable/Enumerable.keep";
import Enumerable$map from "./__internal__/Enumerable/Enumerable.map";
import Enumerable$pairwise from "./__internal__/Enumerable/Enumerable.pairwise";
import Enumerable$repeat from "./__internal__/Enumerable/Enumerable.repeat";
import Enumerable$scan from "./__internal__/Enumerable/Enumerable.scan";
import Enumerable$skipFirst from "./__internal__/Enumerable/Enumerable.skipFirst";
import Enumerable$takeFirst from "./__internal__/Enumerable/Enumerable.takeFirst";
import Enumerable$takeLast from "./__internal__/Enumerable/Enumerable.takeLast";
import Enumerable$takeWhile from "./__internal__/Enumerable/Enumerable.takeWhile";
import Enumerable$throwIfEmpty from "./__internal__/Enumerable/Enumerable.throwIfEmpty";
import Enumerable$toEnumerableObservable from "./__internal__/Enumerable/Enumerable.toEnumerableObservable";
import Enumerable$toIterable from "./__internal__/Enumerable/Enumerable.toIterable";
import Enumerable$toReadonlyArray from "./__internal__/Enumerable/Enumerable.toReadonlyArray";
import Enumerable$toRunnable from "./__internal__/Enumerable/Enumerable.toRunnable";
import Enumerable$toRunnableObservable from "./__internal__/Enumerable/Enumerable.toRunnableObservable";
import Enumerable$zip from "./__internal__/Enumerable/Enumerable.zip";

export const enumerate = Enumerable$enumerate;

export const buffer: Buffer<EnumerableLike>["buffer"] = Enumerable$buffer;

export const concat: Concat<EnumerableLike>["concat"] = Enumerable$concat;

export const concatAll: ConcatAll<EnumerableLike>["concatAll"] =
  Enumerable$concatAll;

export const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"] =
  Enumerable$distinctUntilChanged;

export const empty: Empty<EnumerableLike>["empty"] = Enumerable$empty;

export const forEach: ForEach<EnumerableLike>["forEach"] = Enumerable$forEach;

export const fromArray = Enumerable$fromArray;

export const fromIterable: FromIterable<EnumerableLike>["fromIterable"] =
  Iterable$toEnumerable;

export const generate: Generate<EnumerableLike>["generate"] =
  Enumerable$generate;

export const keep: Keep<EnumerableLike>["keep"] = Enumerable$keep;

export const map: Map<EnumerableLike>["map"] = Enumerable$map;

export const pairwise: Pairwise<EnumerableLike>["pairwise"] =
  Enumerable$pairwise;

export const repeat: Repeat<EnumerableLike>["repeat"] = Enumerable$repeat;

export const scan: Scan<EnumerableLike>["scan"] = Enumerable$scan;

export const skipFirst: SkipFirst<EnumerableLike>["skipFirst"] =
  Enumerable$skipFirst;

export const takeFirst: TakeFirst<EnumerableLike>["takeFirst"] =
  Enumerable$takeFirst;

export const takeLast: TakeLast<EnumerableLike>["takeLast"] =
  Enumerable$takeLast;

export const takeWhile: TakeWhile<EnumerableLike>["takeWhile"] =
  Enumerable$takeWhile;

export const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"] =
  Enumerable$throwIfEmpty;

export const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"] = () =>
  identity;

export const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  Enumerable$toEnumerableObservable;

export const toIterable: ToIterable<EnumerableLike>["toIterable"] =
  Enumerable$toIterable;

export const toObservable: ToObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toObservable"] = Enumerable$toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"] =
  Enumerable$toReadonlyArray;

export const toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  Enumerable$toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  EnumerableLike,
  {
    delay?: number;
    delayStart?: boolean;
  }
>["toRunnableObservable"] = Enumerable$toRunnableObservable;

export const zip: Zip<EnumerableLike>["zip"] = Enumerable$zip;
