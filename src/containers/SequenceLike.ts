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
import SequenceLike__concat from "./__internal__/SequenceLike/SequenceLike.concat";
import SequenceLike__concatAll from "./__internal__/SequenceLike/SequenceLike.concatAll";
import SequenceLike__distinctUntilChanged from "./__internal__/SequenceLike/SequenceLike.distinctUntilChanged";
import SequenceLike__fromArray from "./__internal__/SequenceLike/SequenceLike.fromArray";
import SequenceLike__generate from "./__internal__/SequenceLike/SequenceLike.generate";
import SequenceLike__keep from "./__internal__/SequenceLike/SequenceLike.keep";
import SequenceLike__map from "./__internal__/SequenceLike/SequenceLike.map";
import SequenceLike__pairwise from "./__internal__/SequenceLike/SequenceLike.pairwise";
import SequenceLike__repeat from "./__internal__/SequenceLike/SequenceLike.repeat";
import SequenceLike__scan from "./__internal__/SequenceLike/SequenceLike.scan";
import SequenceLike__seek from "./__internal__/SequenceLike/SequenceLike.seek";
import SequenceLike__skipFirst from "./__internal__/SequenceLike/SequenceLike.skipFirst";
import SequenceLike__takeFirst from "./__internal__/SequenceLike/SequenceLike.takeFirst";
import SequenceLike__takeLast from "./__internal__/SequenceLike/SequenceLike.takeLast";
import SequenceLike__takeWhile from "./__internal__/SequenceLike/SequenceLike.takeWhile";
import SequenceLike__toEnumerable from "./__internal__/SequenceLike/SequenceLike.toEnumerable";
import SequenceLike__toReadonlyArray from "./__internal__/SequenceLike/SequenceLike.toReadonlyArray";
import SequenceLike__toRunnable from "./__internal__/SequenceLike/SequenceLike.toRunnable";
import SequenceLike__zip from "./__internal__/SequenceLike/SequenceLike.zip";

export const concat: <T>(
  fst: SequenceLike<T>,
  snd: SequenceLike<T>,
  ...tail: readonly SequenceLike<T>[]
) => SequenceLike<T> = SequenceLike__concat;
export const concatT: Concat<SequenceLike> = { concat };

export const concatAll: ConcatAll<SequenceLike>["concatAll"] =
  SequenceLike__concatAll;
export const concatAllT: ConcatAll<SequenceLike> = { concatAll };

export const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =
  SequenceLike__distinctUntilChanged;
export const distinctUntilChangedT: DistinctUntilChanged<SequenceLike> = {
  distinctUntilChanged,
};

export const fromArray = SequenceLike__fromArray;
export const fromArrayT: FromArray<SequenceLike> = { fromArray };

export const generate: Generate<SequenceLike>["generate"] =
  SequenceLike__generate;
export const generateT: Generate<SequenceLike> = { generate };

export const keep: Keep<SequenceLike>["keep"] = SequenceLike__keep;
export const keepT: Keep<SequenceLike> = { keep };

export const map: Map<SequenceLike>["map"] = SequenceLike__map;
export const mapT: Map<SequenceLike> = { map };

export const pairwise: Pairwise<SequenceLike>["pairwise"] =
  SequenceLike__pairwise;
export const pairwiseT: Pairwise<SequenceLike> = { pairwise };

export const repeat: Repeat<SequenceLike>["repeat"] = SequenceLike__repeat;
export const repeatT: Repeat<SequenceLike> = { repeat };

export const scan: Scan<SequenceLike>["scan"] = SequenceLike__scan;
export const scanT: Scan<SequenceLike> = { scan };

export const seek = SequenceLike__seek;

export const skipFirst: SkipFirst<SequenceLike>["skipFirst"] =
  SequenceLike__skipFirst;
export const skipFirstT: SkipFirst<SequenceLike> = { skipFirst };

export const takeFirst: TakeFirst<SequenceLike>["takeFirst"] =
  SequenceLike__takeFirst;
export const takeFirstT: TakeFirst<SequenceLike> = { takeFirst };

export const takeLast: TakeLast<SequenceLike>["takeLast"] =
  SequenceLike__takeLast;
export const takeLastT: TakeLast<SequenceLike> = { takeLast };

export const takeWhile: TakeWhile<SequenceLike>["takeWhile"] =
  SequenceLike__takeWhile;
export const takeWhileT: TakeWhile<SequenceLike> = { takeWhile };

export const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"] =
  SequenceLike__toEnumerable;
export const toEnumerableT: ToEnumerable<SequenceLike> = { toEnumerable };

export const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"] =
  SequenceLike__toReadonlyArray;
export const toReadonlyArrayT: ToReadonlyArray<SequenceLike> = {
  toReadonlyArray,
};

export const toRunnable: ToRunnable<SequenceLike>["toRunnable"] =
  SequenceLike__toRunnable;
export const toRunnableT: ToRunnable<SequenceLike> = { toRunnable };

export const zip: Zip<SequenceLike>["zip"] = SequenceLike__zip;
export const zipT: Zip<SequenceLike> = { zip };
