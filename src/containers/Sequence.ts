import {
  Concat,
  ConcatAll,
  DistinctUntilChanged,
  FromArray,
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
import { ToRunnable } from "../rx";
import Sequence_concat from "./__internal__/Sequence/Sequence.concat";
import Sequence_concatAll from "./__internal__/Sequence/Sequence.concatAll";
import Sequence_distinctUntilChanged from "./__internal__/Sequence/Sequence.distinctUntilChanged";
import Sequence_fromArray from "./__internal__/Sequence/Sequence.fromArray";
import Sequence_generate from "./__internal__/Sequence/Sequence.generate";
import Sequence_keep from "./__internal__/Sequence/Sequence.keep";
import Sequence_map from "./__internal__/Sequence/Sequence.map";
import Sequence_pairwise from "./__internal__/Sequence/Sequence.pairwise";
import Sequence_repeat from "./__internal__/Sequence/Sequence.repeat";
import Sequence_scan from "./__internal__/Sequence/Sequence.scan";
import Sequence_seek from "./__internal__/Sequence/Sequence.seek";
import Sequence_skipFirst from "./__internal__/Sequence/Sequence.skipFirst";
import Sequence_takeFirst from "./__internal__/Sequence/Sequence.takeFirst";
import Sequence_takeLast from "./__internal__/Sequence/Sequence.takeLast";
import Sequence_takeWhile from "./__internal__/Sequence/Sequence.takeWhile";
import Sequence_toEnumerable from "./__internal__/Sequence/Sequence.toEnumerable";
import Sequence_toReadonlyArray from "./__internal__/Sequence/Sequence.toReadonlyArray";
import Sequence_toRunnable from "./__internal__/Sequence/Sequence.toRunnable";
import Sequence_zip from "./__internal__/Sequence/Sequence.zip";

export const concat: <T>(
  fst: SequenceLike<T>,
  snd: SequenceLike<T>,
  ...tail: readonly SequenceLike<T>[]
) => SequenceLike<T> = Sequence_concat;

export const concatAll: ConcatAll<SequenceLike>["concatAll"] =
  Sequence_concatAll;

export const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =
  Sequence_distinctUntilChanged;

export const fromArray = Sequence_fromArray;

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

export const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"] =
  Sequence_toReadonlyArray;

export const toRunnable: ToRunnable<SequenceLike>["toRunnable"] =
  Sequence_toRunnable;

export const zip: Zip<SequenceLike>["zip"] = Sequence_zip;

const Sequence: Concat<SequenceLike> &
  ConcatAll<SequenceLike> &
  DistinctUntilChanged<SequenceLike> &
  FromArray<SequenceLike> &
  Generate<SequenceLike> &
  Keep<SequenceLike> &
  Map<SequenceLike> &
  Pairwise<SequenceLike> &
  Repeat<SequenceLike> &
  Scan<SequenceLike> &
  SkipFirst<SequenceLike> &
  TakeFirst<SequenceLike> &
  TakeLast<SequenceLike> &
  TakeWhile<SequenceLike> &
  ToEnumerable<SequenceLike> &
  ToReadonlyArray<SequenceLike> &
  ToRunnable<SequenceLike> &
  Zip<SequenceLike> = {
  concat,
  concatAll,
  distinctUntilChanged,
  fromArray,
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
  toReadonlyArray,
  toRunnable,
  zip,
};

export default Sequence;
