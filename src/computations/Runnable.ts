import {
  ComputationModule,
  ComputationTypeLike,
  ComputationTypeLike_T,
  ComputationTypeLike_baseOfT,
  PureRunnableLike,
  RunnableLike,
  SequentialComputationModule,
  SequentialReactiveComputationModule,
  SynchronousComputationModule,
} from "../computations.js";
import {
  Factory,
  Function1,
  Optional,
  Reducer,
  identity,
  returns,
} from "../functions.js";
import Runnable_buffer from "./Runnable/__private__/Runnable.buffer.js";
import Runnable_catchError from "./Runnable/__private__/Runnable.catchError.js";
import Runnable_concat from "./Runnable/__private__/Runnable.concat.js";
import Runnable_concatAll from "./Runnable/__private__/Runnable.concatAll.js";
import Runnable_decodeWithCharset from "./Runnable/__private__/Runnable.decodeWithCharset.js";
import Runnable_distinctUntilChanged from "./Runnable/__private__/Runnable.distinctUntilChanged.js";
import Runnable_encodeUtf8 from "./Runnable/__private__/Runnable.encodeUtf8.js";
import Runnable_forEach from "./Runnable/__private__/Runnable.forEach.js";
import Runnable_fromReadonlyArray from "./Runnable/__private__/Runnable.fromReadonlyArray.js";
import {
  Runnable_gen,
  Runnable_genPure,
} from "./Runnable/__private__/Runnable.gen.js";
import Runnable_keep from "./Runnable/__private__/Runnable.keep.js";
import Runnable_last from "./Runnable/__private__/Runnable.last.js";
import Runnable_map from "./Runnable/__private__/Runnable.map.js";
import Runnable_pairwise from "./Runnable/__private__/Runnable.pairwise.js";
import Runnable_reduce from "./Runnable/__private__/Runnable.reduce.js";
import Runnable_repeat from "./Runnable/__private__/Runnable.repeat.js";
import Runnable_retry from "./Runnable/__private__/Runnable.retry.js";
import Runnable_scan from "./Runnable/__private__/Runnable.scan.js";
import Runnable_skipFirst from "./Runnable/__private__/Runnable.skipFirst.js";
import Runnable_takeFirst from "./Runnable/__private__/Runnable.takeFirst.js";
import Runnable_takeLast from "./Runnable/__private__/Runnable.takeLast.js";
import Runnable_takeWhile from "./Runnable/__private__/Runnable.takeWhile.js";
import Runnable_throwIfEmpty from "./Runnable/__private__/Runnable.throwIfEmpty.js";
import Runnable_toProducer from "./Runnable/__private__/Runnable.toProducer.js";
import Runnable_toReadonlyArray from "./Runnable/__private__/Runnable.toReadonlyArray.js";
import Runnable_withEffect from "./Runnable/__private__/Runnable.withEffect.js";

/**
 * @noInheritDoc
 */
export interface RunnableComputation extends ComputationTypeLike {
  readonly [ComputationTypeLike_baseOfT]?: RunnableLike<
    this[typeof ComputationTypeLike_T]
  >;
}

export type Computation = RunnableComputation;

export interface RunnableModule
  extends ComputationModule<RunnableComputation>,
    SequentialComputationModule<RunnableComputation>,
    SequentialReactiveComputationModule<RunnableComputation>,
    SynchronousComputationModule<RunnableComputation> {
  fromReadonlyArray<T>(options?: {
    count?: number;
    start?: number;
  }): Function1<ReadonlyArray<T>, PureRunnableLike<T>>;

  last<T>(): Function1<RunnableLike<T>, Optional<T>>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<RunnableLike<T>, TAcc>;

  toReadonlyArray<T>(): Function1<RunnableLike<T>, ReadonlyArray<T>>;
}

export type Signature = RunnableModule;

export const buffer: Signature["buffer"] = Runnable_buffer;
export const catchError: Signature["catchError"] = Runnable_catchError;
export const concatAll: Signature["concatAll"] = Runnable_concatAll;
export const concat: Signature["concat"] = Runnable_concat;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Runnable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Runnable_distinctUntilChanged;
export const encodeUtf8: Signature["encodeUtf8"] = Runnable_encodeUtf8;
export const forEach: Signature["forEach"] = Runnable_forEach;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Runnable_fromReadonlyArray;
export const gen: Signature["gen"] = Runnable_gen;
export const genPure: Signature["genPure"] = Runnable_genPure;
export const keep: Signature["keep"] = Runnable_keep;
export const map: Signature["map"] = Runnable_map;
export const last: Signature["last"] = Runnable_last;
export const pairwise: Signature["pairwise"] = Runnable_pairwise;
export const reduce: Signature["reduce"] = Runnable_reduce;
export const repeat: Signature["repeat"] = Runnable_repeat;
export const retry: Signature["retry"] = Runnable_retry;
export const scan: Signature["scan"] = Runnable_scan;
export const skipFirst: Signature["skipFirst"] = Runnable_skipFirst;
export const takeFirst: Signature["takeFirst"] = Runnable_takeFirst;
export const takeLast: Signature["takeLast"] = Runnable_takeLast;
export const takeWhile: Signature["takeWhile"] = Runnable_takeWhile;
export const throwIfEmpty: Signature["throwIfEmpty"] = Runnable_throwIfEmpty;
export const toProducer: Signature["toProducer"] = Runnable_toProducer;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Runnable_toReadonlyArray;
export const toRunnable: Signature["toRunnable"] = /*@__PURE__*/ returns(
  identity,
) as Signature["toRunnable"];
export const withEffect: Signature["withEffect"] = Runnable_withEffect;
