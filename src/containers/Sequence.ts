import {
  ConcatAll,
  DistinctUntilChanged,
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
import Sequence$concat from "./__internal__/Sequence/Sequence.concat";
import Sequence$concatAll from "./__internal__/Sequence/Sequence.concatAll";
import Sequence$distinctUntilChanged from "./__internal__/Sequence/Sequence.distinctUntilChanged";
import Sequence$fromArray from "./__internal__/Sequence/Sequence.fromArray";
import Sequence$generate from "./__internal__/Sequence/Sequence.generate";
import Sequence$keep from "./__internal__/Sequence/Sequence.keep";
import Sequence$map from "./__internal__/Sequence/Sequence.map";
import Sequence$pairwise from "./__internal__/Sequence/Sequence.pairwise";
import Sequence$repeat from "./__internal__/Sequence/Sequence.repeat";
import Sequence$scan from "./__internal__/Sequence/Sequence.scan";
import Sequence$seek from "./__internal__/Sequence/Sequence.seek";
import Sequence$skipFirst from "./__internal__/Sequence/Sequence.skipFirst";
import Sequence$takeFirst from "./__internal__/Sequence/Sequence.takeFirst";
import Sequence$takeLast from "./__internal__/Sequence/Sequence.takeLast";
import Sequence$takeWhile from "./__internal__/Sequence/Sequence.takeWhile";
import Sequence$toEnumerable from "./__internal__/Sequence/Sequence.toEnumerable";
import Sequence$toReadonlyArray from "./__internal__/Sequence/Sequence.toReadonlyArray";
import Sequence$toRunnable from "./__internal__/Sequence/Sequence.toRunnable";
import Sequence$zip from "./__internal__/Sequence/Sequence.zip";

export const concat: <T>(
  fst: SequenceLike<T>,
  snd: SequenceLike<T>,
  ...tail: readonly SequenceLike<T>[]
) => SequenceLike<T> = Sequence$concat;

export const concatAll: ConcatAll<SequenceLike>["concatAll"] =
  Sequence$concatAll;

export const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =
  Sequence$distinctUntilChanged;

export const fromArray = Sequence$fromArray;

export const generate: Generate<SequenceLike>["generate"] = Sequence$generate;

export const keep: Keep<SequenceLike>["keep"] = Sequence$keep;

export const map: Map<SequenceLike>["map"] = Sequence$map;

export const pairwise: Pairwise<SequenceLike>["pairwise"] = Sequence$pairwise;

export const repeat: Repeat<SequenceLike>["repeat"] = Sequence$repeat;

export const scan: Scan<SequenceLike>["scan"] = Sequence$scan;

export const seek = Sequence$seek;

export const skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  Sequence$skipFirst;

export const takeFirst: TakeFirst<SequenceLike>["takeFirst"] =
  Sequence$takeFirst;

export const takeLast: TakeLast<SequenceLike>["takeLast"] = Sequence$takeLast;

export const takeWhile: TakeWhile<SequenceLike>["takeWhile"] =
  Sequence$takeWhile;

export const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  Sequence$toEnumerable;

export const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"] =
  Sequence$toReadonlyArray;

export const toRunnable: ToRunnable<SequenceLike>["toRunnable"] =
  Sequence$toRunnable;

export const zip: Zip<SequenceLike>["zip"] = Sequence$zip;
