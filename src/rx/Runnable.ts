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
import Runnable_buffer from "./__internal__/Runnable/Runnable.buffer";
import Runnable_catchError from "./__internal__/Runnable/Runnable.catchError";
import Runnable_concat from "./__internal__/Runnable/Runnable.concat";
import Runnable_concatAll from "./__internal__/Runnable/Runnable.concatAll";
import Runnable_create from "./__internal__/Runnable/Runnable.create";
import Runnable_decodeWithCharset from "./__internal__/Runnable/Runnable.decodeWithCharset";
import Runnable_defer from "./__internal__/Runnable/Runnable.defer";
import Runnable_distinctUntilChanged from "./__internal__/Runnable/Runnable.distinctUntilChanged";
import Runnable_empty from "./__internal__/Runnable/Runnable.empty";
import Runnable_everySatisfy from "./__internal__/Runnable/Runnable.everySatisfy";
import Runnable_first from "./__internal__/Runnable/Runnable.first";
import Runnable_forEach from "./__internal__/Runnable/Runnable.forEach";
import Runnable_fromArray from "./__internal__/Runnable/Runnable.fromArray";
import Runnable_generate from "./__internal__/Runnable/Runnable.generate";
import Runnable_keep from "./__internal__/Runnable/Runnable.keep";
import Runnable_last from "./__internal__/Runnable/Runnable.last";
import Runnable_map from "./__internal__/Runnable/Runnable.map";
import Runnable_never from "./__internal__/Runnable/Runnable.never";
import Runnable_onRun from "./__internal__/Runnable/Runnable.onRun";
import Runnable_pairwise from "./__internal__/Runnable/Runnable.pairwise";
import Runnable_reduce from "./__internal__/Runnable/Runnable.reduce";
import Runnable_repeat from "./__internal__/Runnable/Runnable.repeat";
import Runnable_run from "./__internal__/Runnable/Runnable.run";
import Runnable_scan from "./__internal__/Runnable/Runnable.scan";
import Runnable_skipFirst from "./__internal__/Runnable/Runnable.skipFirst";
import Runnable_someSatisfy from "./__internal__/Runnable/Runnable.someSatisfy";
import Runnable_takeFirst from "./__internal__/Runnable/Runnable.takeFirst";
import Runnable_takeLast from "./__internal__/Runnable/Runnable.takeLast";
import Runnable_takeWhile from "./__internal__/Runnable/Runnable.takeWhile";
import Runnable_throwIfEmpty from "./__internal__/Runnable/Runnable.throwIfEmpty";
import Runnable_toReadonlyArray from "./__internal__/Runnable/Runnable.toReadonlyArray";

export const create = Runnable_create;

export const buffer: Buffer<RunnableLike>["buffer"] = Runnable_buffer;

export const catchError: CatchError<RunnableLike>["catchError"] =
  Runnable_catchError;

export const concat: Concat<RunnableLike>["concat"] = Runnable_concat;

export const concatAll: ConcatAll<RunnableLike>["concatAll"] =
  Runnable_concatAll;

export const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  Runnable_decodeWithCharset;

export const defer: Defer<RunnableLike>["defer"] = Runnable_defer;

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  Runnable_distinctUntilChanged;

export const empty: Empty<RunnableLike>["empty"] = Runnable_empty;

export const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  Runnable_everySatisfy;

export const first = Runnable_first;

export const forEach: ForEach<RunnableLike>["forEach"] = Runnable_forEach;

export const fromArray = Runnable_fromArray;

export const generate: Generate<RunnableLike>["generate"] = Runnable_generate;

export const keep: Keep<RunnableLike>["keep"] = Runnable_keep;

export const last = Runnable_last;

export const map: Map<RunnableLike>["map"] = Runnable_map;

export const never: Never<RunnableLike>["never"] = Runnable_never;

export const onRun = Runnable_onRun;

export const pairwise: Pairwise<RunnableLike>["pairwise"] = Runnable_pairwise;

export const reduce: Reduce<RunnableLike>["reduce"] = Runnable_reduce;

export const repeat = Runnable_repeat;

export const run = Runnable_run;

export const scan: Scan<RunnableLike>["scan"] = Runnable_scan;

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  Runnable_skipFirst;

export const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  Runnable_someSatisfy;

export const takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  Runnable_takeFirst;

export const takeLast: TakeLast<RunnableLike>["takeLast"] = Runnable_takeLast;

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  Runnable_takeWhile;

export const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  Runnable_throwIfEmpty;

export const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =
  Runnable_toReadonlyArray;

export const toRunnable: ToRunnable<RunnableLike>["toRunnable"] =
  returns(identity);
