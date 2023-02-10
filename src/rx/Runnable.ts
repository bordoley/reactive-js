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
import Runnable_buffer from "./Runnable/__internal__/Runnable.buffer";
import Runnable_catchError from "./Runnable/__internal__/Runnable.catchError";
import Runnable_concat from "./Runnable/__internal__/Runnable.concat";
import Runnable_concatAll from "./Runnable/__internal__/Runnable.concatAll";
import Runnable_create from "./Runnable/__internal__/Runnable.create";
import Runnable_decodeWithCharset from "./Runnable/__internal__/Runnable.decodeWithCharset";
import Runnable_defer from "./Runnable/__internal__/Runnable.defer";
import Runnable_distinctUntilChanged from "./Runnable/__internal__/Runnable.distinctUntilChanged";
import Runnable_empty from "./Runnable/__internal__/Runnable.empty";
import Runnable_everySatisfy from "./Runnable/__internal__/Runnable.everySatisfy";
import Runnable_first from "./Runnable/__internal__/Runnable.first";
import Runnable_forEach from "./Runnable/__internal__/Runnable.forEach";
import Runnable_fromArray from "./Runnable/__internal__/Runnable.fromArray";
import Runnable_generate from "./Runnable/__internal__/Runnable.generate";
import Runnable_keep from "./Runnable/__internal__/Runnable.keep";
import Runnable_last from "./Runnable/__internal__/Runnable.last";
import Runnable_map from "./Runnable/__internal__/Runnable.map";
import Runnable_never from "./Runnable/__internal__/Runnable.never";
import Runnable_onRun from "./Runnable/__internal__/Runnable.onRun";
import Runnable_pairwise from "./Runnable/__internal__/Runnable.pairwise";
import Runnable_reduce from "./Runnable/__internal__/Runnable.reduce";
import Runnable_repeat from "./Runnable/__internal__/Runnable.repeat";
import Runnable_run from "./Runnable/__internal__/Runnable.run";
import Runnable_scan from "./Runnable/__internal__/Runnable.scan";
import Runnable_skipFirst from "./Runnable/__internal__/Runnable.skipFirst";
import Runnable_someSatisfy from "./Runnable/__internal__/Runnable.someSatisfy";
import Runnable_takeFirst from "./Runnable/__internal__/Runnable.takeFirst";
import Runnable_takeLast from "./Runnable/__internal__/Runnable.takeLast";
import Runnable_takeWhile from "./Runnable/__internal__/Runnable.takeWhile";
import Runnable_throwIfEmpty from "./Runnable/__internal__/Runnable.throwIfEmpty";
import Runnable_toReadonlyArray from "./Runnable/__internal__/Runnable.toReadonlyArray";

export const buffer: Buffer<RunnableLike>["buffer"] = Runnable_buffer;

export const catchError: CatchError<RunnableLike>["catchError"] =
  Runnable_catchError;

export const concat: Concat<RunnableLike>["concat"] = Runnable_concat;

export const concatAll: ConcatAll<RunnableLike>["concatAll"] =
  Runnable_concatAll;

export const create = Runnable_create;

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

/** @ignore */
const Runnable = {
  buffer,
  catchError,
  concat,
  concatAll,
  create,
  decodeWithCharset,
  defer,
  distinctUntilChanged,
  empty,
  everySatisfy,
  first,
  forEach,
  fromArray,
  generate,
  keep,
  last,
  map,
  never,
  onRun,
  pairwise,
  reduce,
  repeat,
  run,
  scan,
  skipFirst,
  someSatisfy,
  takeFirst,
  takeLast,
  takeWhile,
  throwIfEmpty,
  toReadonlyArray,
  toRunnable,
};

export default Runnable;
