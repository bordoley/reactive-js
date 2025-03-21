import {
  ComputationModule,
  ComputationType,
  Computation_T,
  Computation_baseOfT,
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
  PureRunnableLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
  SynchronousComputationModule,
} from "../computations.js";
import { identity, returns } from "../functions.js";
import Observable_fromRunnable from "./Observable/__private__/Observable.fromRunnable.js";
import Runnable_buffer from "./Runnable/__private__/Runnable.buffer.js";
import Runnable_catchError from "./Runnable/__private__/Runnable.catchError.js";
import Runnable_concat from "./Runnable/__private__/Runnable.concat.js";
import Runnable_concatAll from "./Runnable/__private__/Runnable.concatAll.js";
import Runnable_decodeWithCharset from "./Runnable/__private__/Runnable.decodeWithCharset.js";
import Runnable_distinctUntilChanged from "./Runnable/__private__/Runnable.distinctUntilChanged.js";
import Runnable_empty from "./Runnable/__private__/Runnable.empty.js";
import Runnable_encodeUtf8 from "./Runnable/__private__/Runnable.encodeUtf8.js";
import Runnable_first from "./Runnable/__private__/Runnable.first.js";
import Runnable_firstAsync from "./Runnable/__private__/Runnable.firstAsync.js";
import Runnable_forEach from "./Runnable/__private__/Runnable.forEach.js";
import Runnable_fromReadonlyArray from "./Runnable/__private__/Runnable.fromReadonlyArray.js";
import Runnable_fromValue from "./Runnable/__private__/Runnable.fromValue.js";
import Runnable_gen from "./Runnable/__private__/Runnable.gen.js";
import Runnable_genWithSideEffects from "./Runnable/__private__/Runnable.genWithSideEffects.js";
import Runnable_keep from "./Runnable/__private__/Runnable.keep.js";
import Runnable_last from "./Runnable/__private__/Runnable.last.js";
import Runnable_lastAsync from "./Runnable/__private__/Runnable.lastAsync.js";
import Runnable_map from "./Runnable/__private__/Runnable.map.js";
import Runnable_pairwise from "./Runnable/__private__/Runnable.pairwise.js";
import Runnable_raise from "./Runnable/__private__/Runnable.raise.js";
import Runnable_reduce from "./Runnable/__private__/Runnable.reduce.js";
import Runnable_reduceAsync from "./Runnable/__private__/Runnable.reduceAsync.js";
import Runnable_repeat from "./Runnable/__private__/Runnable.repeat.js";
import Runnable_retry from "./Runnable/__private__/Runnable.retry.js";
import Runnable_run from "./Runnable/__private__/Runnable.run.js";
import Runnable_scan from "./Runnable/__private__/Runnable.scan.js";
import Runnable_skipFirst from "./Runnable/__private__/Runnable.skipFirst.js";
import Runnable_takeFirst from "./Runnable/__private__/Runnable.takeFirst.js";
import Runnable_takeLast from "./Runnable/__private__/Runnable.takeLast.js";
import Runnable_takeWhile from "./Runnable/__private__/Runnable.takeWhile.js";
import Runnable_throwIfEmpty from "./Runnable/__private__/Runnable.throwIfEmpty.js";
import Runnable_toReadonlyArray from "./Runnable/__private__/Runnable.toReadonlyArray.js";
import Runnable_toReadonlyArrayAsync from "./Runnable/__private__/Runnable.toReadonlyArrayAsync.js";

/**
 * @noInheritDoc
 */
export interface RunnableComputation extends ComputationType {
  readonly [Computation_baseOfT]?: RunnableLike<this[typeof Computation_T]>;
  readonly [Computation_pureSynchronousOfT]?: PureRunnableLike<
    this[typeof Computation_T]
  >;
  readonly [Computation_synchronousWithSideEffectsOfT]?: RunnableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

export type Computation = RunnableComputation;

export interface RunnableModule
  extends ComputationModule<RunnableComputation>,
    SequentialComputationModule<RunnableComputation>,
    SequentialReactiveComputationModule<RunnableComputation>,
    SynchronousComputationModule<RunnableComputation> {}

export type Signature = RunnableModule;

export const buffer: Signature["buffer"] = Runnable_buffer;
export const catchError: Signature["catchError"] = Runnable_catchError;
export const concatAll: Signature["concatAll"] = Runnable_concatAll;
export const concat: Signature["concat"] = Runnable_concat;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Runnable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Runnable_distinctUntilChanged;
export const empty: Signature["empty"] = Runnable_empty;
export const encodeUtf8: Signature["encodeUtf8"] = Runnable_encodeUtf8;
export const first: Signature["first"] = Runnable_first;
export const firstAsync: Signature["firstAsync"] = Runnable_firstAsync;
export const forEach: Signature["forEach"] = Runnable_forEach;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Runnable_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = Runnable_fromValue;
export const gen: Signature["gen"] = Runnable_gen;
export const genWithSideEffects: Signature["genWithSideEffects"] =
  Runnable_genWithSideEffects;
export const keep: Signature["keep"] = Runnable_keep;
export const last: Signature["last"] = Runnable_last;
export const lastAsync: Signature["lastAsync"] = Runnable_lastAsync;
export const map: Signature["map"] = Runnable_map;
export const pairwise: Signature["pairwise"] = Runnable_pairwise;
export const raise: Signature["raise"] = Runnable_raise;
export const reduce: Signature["reduce"] = Runnable_reduce;
export const reduceAsync: Signature["reduceAsync"] = Runnable_reduceAsync;
export const repeat: Signature["repeat"] = Runnable_repeat;
export const retry: Signature["retry"] = Runnable_retry;
export const run: Signature["run"] = Runnable_run;
export const scan: Signature["scan"] = Runnable_scan;
export const skipFirst: Signature["skipFirst"] = Runnable_skipFirst;
export const takeFirst: Signature["takeFirst"] = Runnable_takeFirst;
export const takeLast: Signature["takeLast"] = Runnable_takeLast;
export const takeWhile: Signature["takeWhile"] = Runnable_takeWhile;
export const throwIfEmpty: Signature["throwIfEmpty"] = Runnable_throwIfEmpty;
export const toObservable: Signature["toObservable"] =
  Observable_fromRunnable as Signature["toObservable"];
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Runnable_toReadonlyArray;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  Runnable_toReadonlyArrayAsync;
export const toRunnable: Signature["toRunnable"] = /*@__PURE__*/ returns(
  identity,
) as Signature["toRunnable"];
