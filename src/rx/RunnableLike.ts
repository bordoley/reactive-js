import {
  Buffer,
  CatchError,
  Concat,
  ConcatAll,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  Empty,
  EverySatisfy,
  ForEach,
  Generate,
  Keep,
  Map,
  Never,
  Pairwise,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
} from "../containers";
import { identity, returns } from "../functions";
import { RunnableLike, ToRunnable } from "../rx";
import RunnableLike__buffer from "./__internal__/RunnableLike/RunnableLike.buffer";
import RunnableLike__catchError from "./__internal__/RunnableLike/RunnableLike.catchError";
import RunnableLike__concat from "./__internal__/RunnableLike/RunnableLike.concat";
import RunnableLike__concatAll from "./__internal__/RunnableLike/RunnableLike.concatAll";
import RunnableLike__create from "./__internal__/RunnableLike/RunnableLike.create";
import RunnableLike__decodeWithCharset from "./__internal__/RunnableLike/RunnableLike.decodeWithCharset";
import RunnableLike__defer from "./__internal__/RunnableLike/RunnableLike.defer";
import RunnableLike__distinctUntilChanged from "./__internal__/RunnableLike/RunnableLike.distinctUntilChanged";
import RunnableLike__empty from "./__internal__/RunnableLike/RunnableLike.empty";
import RunnableLike__everySatisfy from "./__internal__/RunnableLike/RunnableLike.everySatisfy";
import RunnableLike__first from "./__internal__/RunnableLike/RunnableLike.first";
import RunnableLike__forEach from "./__internal__/RunnableLike/RunnableLike.forEach";
import RunnableLike__fromArray from "./__internal__/RunnableLike/RunnableLike.fromArray";
import RunnableLike__generate from "./__internal__/RunnableLike/RunnableLike.generate";
import RunnableLike__keep from "./__internal__/RunnableLike/RunnableLike.keep";
import RunnableLike__last from "./__internal__/RunnableLike/RunnableLike.last";
import RunnableLike__map from "./__internal__/RunnableLike/RunnableLike.map";
import RunnableLike__never from "./__internal__/RunnableLike/RunnableLike.never";
import RunnableLike__onRun from "./__internal__/RunnableLike/RunnableLike.onRun";
import RunnableLike__pairwise from "./__internal__/RunnableLike/RunnableLike.pairwise";
import RunnableLike__reduce from "./__internal__/RunnableLike/RunnableLike.reduce";
import RunnableLike__repeat from "./__internal__/RunnableLike/RunnableLike.repeat";
import RunnableLike__run from "./__internal__/RunnableLike/RunnableLike.run";
import RunnableLike__scan from "./__internal__/RunnableLike/RunnableLike.scan";
import RunnableLike__skipFirst from "./__internal__/RunnableLike/RunnableLike.skipFirst";
import RunnableLike__someSatisfy from "./__internal__/RunnableLike/RunnableLike.someSatisfy";
import RunnableLike__takeFirst from "./__internal__/RunnableLike/RunnableLike.takeFirst";
import RunnableLike__takeLast from "./__internal__/RunnableLike/RunnableLike.takeLast";
import RunnableLike__takeWhile from "./__internal__/RunnableLike/RunnableLike.takeWhile";
import RunnableLike__throwIfEmpty from "./__internal__/RunnableLike/RunnableLike.throwIfEmpty";
import RunnableLike__toReadonlyArray from "./__internal__/RunnableLike/RunnableLike.toReadonlyArray";

export const create = RunnableLike__create;

export const buffer: Buffer<RunnableLike>["buffer"] = RunnableLike__buffer;
export const bufferT: Buffer<RunnableLike> = { buffer };

export const catchError: CatchError<RunnableLike>["catchError"] =
  RunnableLike__catchError;
export const catchErrorT: CatchError<RunnableLike> = { catchError };

export const concat: Concat<RunnableLike>["concat"] = RunnableLike__concat;
export const concatT: Concat<RunnableLike> = {
  concat,
};

export const concatAll: ConcatAll<RunnableLike>["concatAll"] =
  RunnableLike__concatAll;
export const concatAllT: ConcatAll<RunnableLike> = {
  concatAll,
};

export const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  RunnableLike__decodeWithCharset;
export const decodeWithCharsetT: DecodeWithCharset<RunnableLike> = {
  decodeWithCharset,
};

export const defer: Defer<RunnableLike>["defer"] = RunnableLike__defer;
export const deferT: Defer<RunnableLike> = { defer };

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  RunnableLike__distinctUntilChanged;
export const distinctUntilChangedT: DistinctUntilChanged<RunnableLike> = {
  distinctUntilChanged,
};

export const empty: Empty<RunnableLike>["empty"] = RunnableLike__empty;
export const emptyT: Empty<RunnableLike> = { empty };

export const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  RunnableLike__everySatisfy;
export const everySatisfyT: EverySatisfy<RunnableLike> = { everySatisfy };

export const first = RunnableLike__first;

export const forEach: ForEach<RunnableLike>["forEach"] = RunnableLike__forEach;
export const forEachT: ForEach<RunnableLike> = { forEach };

export const fromArray = RunnableLike__fromArray;

export const generate: Generate<RunnableLike>["generate"] =
  RunnableLike__generate;
export const generateT: Generate<RunnableLike> = {
  generate,
};

export const keep: Keep<RunnableLike>["keep"] = RunnableLike__keep;
export const keepT: Keep<RunnableLike> = { keep };

export const last = RunnableLike__last;

export const map: Map<RunnableLike>["map"] = RunnableLike__map;
export const mapT: Map<RunnableLike> = { map };

export const never: Never<RunnableLike>["never"] = RunnableLike__never;
export const neverT: Never<RunnableLike> = {
  never: never,
};

export const onRun = RunnableLike__onRun;

export const pairwise: Pairwise<RunnableLike>["pairwise"] =
  RunnableLike__pairwise;
export const pairwiseT: Pairwise<RunnableLike> = { pairwise };

export const reduce: Reduce<RunnableLike>["reduce"] = RunnableLike__reduce;
export const reduceT: Reduce<RunnableLike> = { reduce };

export const repeat = RunnableLike__repeat;
export const repeatT: Repeat<RunnableLike> = { repeat };

export const run = RunnableLike__run;

export const scan: Scan<RunnableLike>["scan"] = RunnableLike__scan;
export const scanT: Scan<RunnableLike> = { scan };

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  RunnableLike__skipFirst;
export const skipFirstT: SkipFirst<RunnableLike> = { skipFirst };

export const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  RunnableLike__someSatisfy;
export const someSatisfyT: SomeSatisfy<RunnableLike> = { someSatisfy };

export const takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  RunnableLike__takeFirst;
export const takeFirstT: TakeFirst<RunnableLike> = { takeFirst };

export const takeLast: TakeLast<RunnableLike>["takeLast"] =
  RunnableLike__takeLast;
export const takeLastT: TakeLast<RunnableLike> = { takeLast };

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  RunnableLike__takeWhile;
export const takeWhileT: TakeWhile<RunnableLike> = { takeWhile };

export const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  RunnableLike__throwIfEmpty;
export const throwIfEmptyT: ThrowIfEmpty<RunnableLike> = {
  throwIfEmpty,
};

export const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =
  RunnableLike__toReadonlyArray;
export const toReadonlyArrayT: ToReadonlyArray<RunnableLike> = {
  toReadonlyArray,
};

export const toRunnable: ToRunnable<RunnableLike>["toRunnable"] =
  returns(identity);
export const toRunnableT: ToRunnable<RunnableLike> = {
  toRunnable,
};
