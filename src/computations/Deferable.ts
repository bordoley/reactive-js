import {
  Computation,
  ComputationWithSideEffectsModule,
  Computation_T,
  Computation_type,
  DeferableLike,
  DeferredComputationModule,
  PureStatefulComputationModule,
  PureStatelessComputationModule,
  SynchronousComputationModule,
} from "../computations.js";
import Deferable_buffer from "./Deferable/__private__/Deferable.buffer.js";
import Deferable_decodeWithCharset from "./Deferable/__private__/Deferable.decodeWithCharset.js";
import Deferable_distinctUntilChanged from "./Deferable/__private__/Deferable.distinctUntilChanged.js";
import Deferable_forEach from "./Deferable/__private__/Deferable.forEach.js";
import Deferable_fromIterable from "./Deferable/__private__/Deferable.fromIterable.js";
import Deferable_fromReadonlyArray from "./Deferable/__private__/Deferable.fromReadonlyArray.js";
import Deferable_generate from "./Deferable/__private__/Deferable.generate.js";
import Deferable_keep from "./Deferable/__private__/Deferable.keep.js";
import Deferable_map from "./Deferable/__private__/Deferable.map.js";
import Deferable_pairwise from "./Deferable/__private__/Deferable.pairwise.js";
import Deferable_reduce from "./Deferable/__private__/Deferable.reduce.js";
import Deferable_scan from "./Deferable/__private__/Deferable.scan.js";
import Deferable_skipFirst from "./Deferable/__private__/Deferable.skipFirst.js";
import Deferable_takeFirst from "./Deferable/__private__/Deferable.takeFirst.js";
import Deferable_takeWhile from "./Deferable/__private__/Deferable.takeWhile.js";
import Deferable_toReadonlyArray from "./Deferable/__private__/Deferable.toReadonlyArray.js";

/**
 * @noInheritDoc
 */
export interface DeferableComputation extends Computation {
  readonly [Computation_type]?: DeferableLike<this[typeof Computation_T]>;
}

export interface DeferableModule
  extends PureStatelessComputationModule<DeferableComputation>,
    DeferredComputationModule<DeferableComputation>,
    PureStatefulComputationModule<DeferableComputation>,
    ComputationWithSideEffectsModule<DeferableComputation>,
    SynchronousComputationModule<DeferableComputation> {}

export type Signature = DeferableModule;

export const buffer: Signature["buffer"] = Deferable_buffer;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Deferable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Deferable_distinctUntilChanged;
export const forEach: Signature["forEach"] = Deferable_forEach;
export const fromIterable: Signature["fromIterable"] = Deferable_fromIterable;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  Deferable_fromReadonlyArray;
export const generate: Signature["generate"] = Deferable_generate;
export const keep: Signature["keep"] = Deferable_keep;
export const map: Signature["map"] = Deferable_map;
export const pairwise: Signature["pairwise"] = Deferable_pairwise;
export const reduce: Signature["reduce"] = Deferable_reduce;
export const scan: Signature["scan"] = Deferable_scan;
export const skipFirst: Signature["skipFirst"] = Deferable_skipFirst;
export const takeFirst: Signature["takeFirst"] = Deferable_takeFirst;
export const takeWhile: Signature["takeWhile"] = Deferable_takeWhile;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Deferable_toReadonlyArray;
