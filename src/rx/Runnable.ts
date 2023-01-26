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
import Runnable$buffer from "./__internal__/Runnable/Runnable.buffer";
import Runnable$catchError from "./__internal__/Runnable/Runnable.catchError";
import Runnable$concat from "./__internal__/Runnable/Runnable.concat";
import Runnable$concatAll from "./__internal__/Runnable/Runnable.concatAll";
import Runnable$create from "./__internal__/Runnable/Runnable.create";
import Runnable$decodeWithCharset from "./__internal__/Runnable/Runnable.decodeWithCharset";
import Runnable$defer from "./__internal__/Runnable/Runnable.defer";
import Runnable$distinctUntilChanged from "./__internal__/Runnable/Runnable.distinctUntilChanged";
import Runnable$empty from "./__internal__/Runnable/Runnable.empty";
import Runnable$everySatisfy from "./__internal__/Runnable/Runnable.everySatisfy";
import Runnable$first from "./__internal__/Runnable/Runnable.first";
import Runnable$forEach from "./__internal__/Runnable/Runnable.forEach";
import Runnable$fromArray from "./__internal__/Runnable/Runnable.fromArray";
import Runnable$generate from "./__internal__/Runnable/Runnable.generate";
import Runnable$keep from "./__internal__/Runnable/Runnable.keep";
import Runnable$last from "./__internal__/Runnable/Runnable.last";
import Runnable$map from "./__internal__/Runnable/Runnable.map";
import Runnable$never from "./__internal__/Runnable/Runnable.never";
import Runnable$onRun from "./__internal__/Runnable/Runnable.onRun";
import Runnable$pairwise from "./__internal__/Runnable/Runnable.pairwise";
import Runnable$reduce from "./__internal__/Runnable/Runnable.reduce";
import Runnable$repeat from "./__internal__/Runnable/Runnable.repeat";
import Runnable$run from "./__internal__/Runnable/Runnable.run";
import Runnable$scan from "./__internal__/Runnable/Runnable.scan";
import Runnable$skipFirst from "./__internal__/Runnable/Runnable.skipFirst";
import Runnable$someSatisfy from "./__internal__/Runnable/Runnable.someSatisfy";
import Runnable$takeFirst from "./__internal__/Runnable/Runnable.takeFirst";
import Runnable$takeLast from "./__internal__/Runnable/Runnable.takeLast";
import Runnable$takeWhile from "./__internal__/Runnable/Runnable.takeWhile";
import Runnable$throwIfEmpty from "./__internal__/Runnable/Runnable.throwIfEmpty";
import Runnable$toReadonlyArray from "./__internal__/Runnable/Runnable.toReadonlyArray";

export const create = Runnable$create;

export const buffer: Buffer<RunnableLike>["buffer"] = Runnable$buffer;

export const catchError: CatchError<RunnableLike>["catchError"] =
  Runnable$catchError;

export const concat: Concat<RunnableLike>["concat"] = Runnable$concat;

export const concatAll: ConcatAll<RunnableLike>["concatAll"] =
  Runnable$concatAll;

export const decodeWithCharset: DecodeWithCharset<RunnableLike>["decodeWithCharset"] =
  Runnable$decodeWithCharset;

export const defer: Defer<RunnableLike>["defer"] = Runnable$defer;

export const distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  Runnable$distinctUntilChanged;

export const empty: Empty<RunnableLike>["empty"] = Runnable$empty;

export const everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  Runnable$everySatisfy;

export const first = Runnable$first;

export const forEach: ForEach<RunnableLike>["forEach"] = Runnable$forEach;

export const fromArray = Runnable$fromArray;

export const generate: Generate<RunnableLike>["generate"] = Runnable$generate;

export const keep: Keep<RunnableLike>["keep"] = Runnable$keep;

export const last = Runnable$last;

export const map: Map<RunnableLike>["map"] = Runnable$map;

export const never: Never<RunnableLike>["never"] = Runnable$never;

export const onRun = Runnable$onRun;

export const pairwise: Pairwise<RunnableLike>["pairwise"] = Runnable$pairwise;

export const reduce: Reduce<RunnableLike>["reduce"] = Runnable$reduce;

export const repeat = Runnable$repeat;

export const run = Runnable$run;

export const scan: Scan<RunnableLike>["scan"] = Runnable$scan;

export const skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  Runnable$skipFirst;

export const someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  Runnable$someSatisfy;

export const takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  Runnable$takeFirst;

export const takeLast: TakeLast<RunnableLike>["takeLast"] = Runnable$takeLast;

export const takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  Runnable$takeWhile;

export const throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  Runnable$throwIfEmpty;

export const toReadonlyArray: ToReadonlyArray<RunnableLike>["toReadonlyArray"] =
  Runnable$toReadonlyArray;

export const toRunnable: ToRunnable<RunnableLike>["toRunnable"] =
  returns(identity);
