import {
  Computation,
  ComputationWithSideEffectsModule,
  Computation_T,
  Computation_type,
  DeferableLike,
  DeferableWithSideEffectsLike,
  DeferredComputationModule,
  PureStatefulComputationModule,
  PureStatelessComputationModule,
  SynchronousComputationModule,
} from "../computations.js";
import { identity, returns } from "../functions.js";
import Deferable_buffer from "./Deferable/__private__/Deferable.buffer.js";
import Deferable_catchError from "./Deferable/__private__/Deferable.catchError.js";
import Deferable_concat from "./Deferable/__private__/Deferable.concat.js";
import Deferable_concatAll from "./Deferable/__private__/Deferable.concatAll.js";
import Deferable_concatMany from "./Deferable/__private__/Deferable.concatMany.js";
import Deferable_concatMap from "./Deferable/__private__/Deferable.concatMap.js";
import Deferable_concatWith from "./Deferable/__private__/Deferable.concatWith.js";
import Deferable_decodeWithCharset from "./Deferable/__private__/Deferable.decodeWithCharset.js";
import Deferable_distinctUntilChanged from "./Deferable/__private__/Deferable.distinctUntilChanged.js";
import Deferable_empty from "./Deferable/__private__/Deferable.empty.js";
import Deferable_endWith from "./Deferable/__private__/Deferable.endWith.js";
import Deferable_forEach from "./Deferable/__private__/Deferable.forEach.js";
import Deferable_fromIterable from "./Deferable/__private__/Deferable.fromIterable.js";
import Deferable_fromReadonlyArray from "./Deferable/__private__/Deferable.fromReadonlyArray.js";
import Deferable_fromValue from "./Deferable/__private__/Deferable.fromValue.js";
import Deferable_generate from "./Deferable/__private__/Deferable.generate.js";
import Deferable_ignoreElements from "./Deferable/__private__/Deferable.ignoreElements.js";
import Deferable_keep from "./Deferable/__private__/Deferable.keep.js";
import Deferable_last from "./Deferable/__private__/Deferable.last.js";
import Deferable_map from "./Deferable/__private__/Deferable.map.js";
import Deferable_pairwise from "./Deferable/__private__/Deferable.pairwise.js";
import Deferable_raise from "./Deferable/__private__/Deferable.raise.js";
import Deferable_reduce from "./Deferable/__private__/Deferable.reduce.js";
import Deferable_repeat from "./Deferable/__private__/Deferable.repeat.js";
import Deferable_retry from "./Deferable/__private__/Deferable.retry.js";
import Deferable_scan from "./Deferable/__private__/Deferable.scan.js";
import Deferable_skipFirst from "./Deferable/__private__/Deferable.skipFirst.js";
import Deferable_startWith from "./Deferable/__private__/Deferable.startWith.js";
import Deferable_takeFirst from "./Deferable/__private__/Deferable.takeFirst.js";
import Deferable_takeLast from "./Deferable/__private__/Deferable.takeLast.js";
import Deferable_takeWhile from "./Deferable/__private__/Deferable.takeWhile.js";
import Deferable_throwIfEmpty from "./Deferable/__private__/Deferable.throwIfEmpty.js";
import Deferable_toReadonlyArray from "./Deferable/__private__/Deferable.toReadonlyArray.js";

/**
 * @noInheritDoc
 */
export interface DeferableComputation extends Computation<DeferableLike> {
  readonly [Computation_type]?: DeferableLike<this[typeof Computation_T]>;
}

export interface DeferableWithSideEffectsComputation
  extends Computation<DeferableWithSideEffectsLike> {
  readonly [Computation_type]?: DeferableWithSideEffectsLike<
    this[typeof Computation_T]
  >;
}

export interface DeferableModule
  extends PureStatelessComputationModule<DeferableLike, DeferableComputation>,
    DeferredComputationModule<DeferableLike, DeferableComputation>,
    PureStatefulComputationModule<DeferableLike, DeferableComputation>,
    ComputationWithSideEffectsModule<
      DeferableLike,
      DeferableComputation,
      DeferableWithSideEffectsLike,
      DeferableWithSideEffectsComputation
    >,
    SynchronousComputationModule<DeferableLike, DeferableComputation> {}

export type Signature = DeferableModule;

export const buffer: Signature["buffer"] = Deferable_buffer;
export const catchError: Signature["catchError"] = Deferable_catchError;
export const concat: Signature["concat"] = Deferable_concat;
export const concatAll: Signature["concatAll"] = Deferable_concatAll;
export const concatMap: Signature["concatMap"] = Deferable_concatMap;
export const concatMany: Signature["concatMany"] = Deferable_concatMany;
export const concatWith: Signature["concatWith"] = Deferable_concatWith;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Deferable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Deferable_distinctUntilChanged;
export const empty: Signature["empty"] = Deferable_empty;
export const endWith: Signature["endWith"] = Deferable_endWith;
export const forEach: Signature["forEach"] = Deferable_forEach;
export const fromIterable: Signature["fromIterable"] = Deferable_fromIterable;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Deferable_fromReadonlyArray;
export const fromValue: Signature["fromValue"] = Deferable_fromValue;
export const generate: Signature["generate"] = Deferable_generate;
export const ignoreElements: Signature["ignoreElements"] =
  Deferable_ignoreElements;
export const keep: Signature["keep"] = Deferable_keep;
export const last: Signature["last"] = Deferable_last;
export const map: Signature["map"] = Deferable_map;
export const pairwise: Signature["pairwise"] = Deferable_pairwise;
export const raise: Signature["raise"] = Deferable_raise;
export const reduce: Signature["reduce"] = Deferable_reduce;
export const repeat: Signature["repeat"] = Deferable_repeat;
export const retry: Signature["retry"] = Deferable_retry;
export const scan: Signature["scan"] = Deferable_scan;
export const skipFirst: Signature["skipFirst"] = Deferable_skipFirst;
export const startWith: Signature["startWith"] = Deferable_startWith;
export const takeFirst: Signature["takeFirst"] = Deferable_takeFirst;
export const takeLast: Signature["takeLast"] = Deferable_takeLast;
export const takeWhile: Signature["takeWhile"] = Deferable_takeWhile;
export const throwIfEmpty: Signature["throwIfEmpty"] = Deferable_throwIfEmpty;
export const toDeferable: Signature["toDeferable"] =
  /*@__PURE__*/ returns(identity);
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Deferable_toReadonlyArray;
