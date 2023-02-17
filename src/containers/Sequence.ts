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
  ToReadonlyArray,
  Zip,
} from "../containers";
import { ToEnumerable } from "../ix";
import {
  ToEnumerableObservable,
  ToObservable,
  ToRunnable,
  ToRunnableObservable,
} from "../rx";
import ReadonlyArray_toSequence from "./ReadonlyArray/__internal__/ReadonlyArray.toSequence";
import Sequence_concat from "./Sequence/__internal__/Sequence.concat";
import Sequence_concatAll from "./Sequence/__internal__/Sequence.concatAll";
import Sequence_distinctUntilChanged from "./Sequence/__internal__/Sequence.distinctUntilChanged";
import Sequence_generate from "./Sequence/__internal__/Sequence.generate";
import Sequence_keep from "./Sequence/__internal__/Sequence.keep";
import Sequence_map from "./Sequence/__internal__/Sequence.map";
import Sequence_pairwise from "./Sequence/__internal__/Sequence.pairwise";
import Sequence_repeat from "./Sequence/__internal__/Sequence.repeat";
import Sequence_scan from "./Sequence/__internal__/Sequence.scan";
import Sequence_seek from "./Sequence/__internal__/Sequence.seek";
import Sequence_skipFirst from "./Sequence/__internal__/Sequence.skipFirst";
import Sequence_takeFirst from "./Sequence/__internal__/Sequence.takeFirst";
import Sequence_takeLast from "./Sequence/__internal__/Sequence.takeLast";
import Sequence_takeWhile from "./Sequence/__internal__/Sequence.takeWhile";
import Sequence_toEnumerable from "./Sequence/__internal__/Sequence.toEnumerable";
import Sequence_toReadonlyArray from "./Sequence/__internal__/Sequence.toReadonlyArray";
import Sequence_toRunnable from "./Sequence/__internal__/Sequence.toRunnable";
import Sequence_toRunnableObservable from "./Sequence/__internal__/Sequence.toRunnableObservable";
import Sequence_zip from "./Sequence/__internal__/Sequence.zip";

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

export const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  Sequence_toEnumerable;

export const toEnumerableObservable: ToEnumerableObservable<SequenceLike>["toEnumerableObservable"] =
  Sequence_toRunnableObservable as ToEnumerableObservable<SequenceLike>["toEnumerableObservable"];

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
  skipFirst,
  takeFirst,
  takeLast,
  takeWhile,
  toEnumerable,
  toEnumerableObservable,
  toObservable,
  toReadonlyArray,
  toRunnable,
  toRunnableObservable,
  zip,
};

export default Sequence;
