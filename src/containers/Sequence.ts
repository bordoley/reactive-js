import {
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  FromReadonlyArray,
  Generate,
  Keep,
  Map,
  Pairwise,
  Repeat,
  Scan,
  SequenceLike,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ToIterable,
  ToReadonlyArray,
  Zip,
} from "../containers.js";
import { ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx.js";
import { ToFlowable } from "../streaming.js";
import ReadonlyArray_toSequence from "./ReadonlyArray/__internal__/ReadonlyArray.toSequence.js";
import Sequence_concat from "./Sequence/__internal__/Sequence.concat.js";
import Sequence_concatAll from "./Sequence/__internal__/Sequence.concatAll.js";
import Sequence_distinctUntilChanged from "./Sequence/__internal__/Sequence.distinctUntilChanged.js";
import Sequence_generate from "./Sequence/__internal__/Sequence.generate.js";
import Sequence_keep from "./Sequence/__internal__/Sequence.keep.js";
import Sequence_map from "./Sequence/__internal__/Sequence.map.js";
import Sequence_pairwise from "./Sequence/__internal__/Sequence.pairwise.js";
import Sequence_repeat from "./Sequence/__internal__/Sequence.repeat.js";
import Sequence_scan from "./Sequence/__internal__/Sequence.scan.js";
import Sequence_seek from "./Sequence/__internal__/Sequence.seek.js";
import Sequence_skipFirst from "./Sequence/__internal__/Sequence.skipFirst.js";
import Sequence_takeFirst from "./Sequence/__internal__/Sequence.takeFirst.js";
import Sequence_takeLast from "./Sequence/__internal__/Sequence.takeLast.js";
import Sequence_takeWhile from "./Sequence/__internal__/Sequence.takeWhile.js";
import Sequence_toAsyncEnumerable from "./Sequence/__internal__/Sequence.toAsyncEnumerable.js";
import Sequence_toEnumerable from "./Sequence/__internal__/Sequence.toEnumerable.js";
import Sequence_toFlowable from "./Sequence/__internal__/Sequence.toFlowable.js";
import Sequence_toIterable from "./Sequence/__internal__/Sequence.toIterable.js";
import Sequence_toReadonlyArray from "./Sequence/__internal__/Sequence.toReadonlyArray.js";
import Sequence_toRunnable from "./Sequence/__internal__/Sequence.toRunnable.js";
import Sequence_toRunnableObservable from "./Sequence/__internal__/Sequence.toRunnableObservable.js";
import Sequence_zip from "./Sequence/__internal__/Sequence.zip.js";

export const concat: Concat<SequenceLike>["concat"] = Sequence_concat;

export const concatAll: ConcatAll<SequenceLike>["concatAll"] =
  Sequence_concatAll;

export const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =
  Sequence_distinctUntilChanged;

export const fromReadonlyArray: FromReadonlyArray<SequenceLike>["fromReadonlyArray"] =
  ReadonlyArray_toSequence;

export const generate: Generate<SequenceLike>["generate"] = Sequence_generate;

export const keep: Keep<SequenceLike>["keep"] = Sequence_keep;

export const map: Map<SequenceLike>["map"] = Sequence_map;

export const pairwise: Pairwise<SequenceLike>["pairwise"] = Sequence_pairwise;

export const repeat: Repeat<SequenceLike>["repeat"] = Sequence_repeat;

export const scan: Scan<SequenceLike>["scan"] = Sequence_scan;

export const seek = Sequence_seek;

export const skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  Sequence_skipFirst;

export const takeFirst: TakeFirst<SequenceLike>["takeFirst"] =
  Sequence_takeFirst;

export const takeLast: TakeLast<SequenceLike>["takeLast"] = Sequence_takeLast;

export const takeWhile: TakeWhile<SequenceLike>["takeWhile"] =
  Sequence_takeWhile;

export const toAsyncEnumerable: ToAsyncEnumerable<SequenceLike>["toAsyncEnumerable"] =
  Sequence_toAsyncEnumerable;

export const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  Sequence_toEnumerable;

export const toEnumerableObservable: ToEnumerableObservable<SequenceLike>["toEnumerableObservable"] =
  Sequence_toRunnableObservable as ToEnumerableObservable<SequenceLike>["toEnumerableObservable"];

export const toFlowable: ToFlowable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toFlowable"] = Sequence_toFlowable;

export const toIterable: ToIterable<SequenceLike>["toIterable"] =
  Sequence_toIterable;

export const toObservable: ToObservable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toObservable"] = Sequence_toRunnableObservable;

export const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"] =
  Sequence_toReadonlyArray;

export const toRunnable: ToRunnable<SequenceLike>["toRunnable"] =
  Sequence_toRunnable;

export const toRunnableObservable: ToRunnableObservable<
  SequenceLike,
  {
    readonly delay?: number;
    readonly delayStart?: boolean;
  }
>["toRunnableObservable"] = Sequence_toRunnableObservable;

export const zip: Zip<SequenceLike>["zip"] = Sequence_zip;

/** @ignore */
const Sequence = {
  concat,
  concatAll,
  distinctUntilChanged,
  fromReadonlyArray,
  generate,
  keep,
  map,
  pairwise,
  repeat,
  scan,
  seek,
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  toAsyncEnumerable,
  toEnumerable,
  toEnumerableObservable,
  toFlowable,
  toIterable,
  toObservable,
  toReadonlyArray,
  toRunnable,
  toRunnableObservable,
  zip,
};

export default Sequence;
