import {
  Computation,
  Computation_T,
  Computation_type,
  PureComputationModule,
} from "../computations.js";
import { Factory, Function1, Reducer } from "../functions.js";
import { EnumerableLike } from "../ix.js";
import Enumerable_buffer from "./Enumerable/__internal__/Enumerable.buffer.js";
import Enumerable_decodeWithCharset from "./Enumerable/__internal__/Enumerable.decodeWithCharset.js";
import Enumerable_distinctUntilChanged from "./Enumerable/__internal__/Enumerable.distinctUntilChanged.js";
import Enumerable_keep from "./Enumerable/__internal__/Enumerable.keep.js";
import Enumerable_map from "./Enumerable/__internal__/Enumerable.map.js";
import Enumerable_pairwise from "./Enumerable/__internal__/Enumerable.pairwise.js";
import Enumerable_reduce from "./Enumerable/__internal__/Enumerable.reduce.js";
import Enumerable_scan from "./Enumerable/__internal__/Enumerable.scan.js";
import Enumerable_skipFirst from "./Enumerable/__internal__/Enumerable.skipFirst.js";
import Enumerable_takeFirst from "./Enumerable/__internal__/Enumerable.takeFirst.js";
import Enumerable_takeWhile from "./Enumerable/__internal__/Enumerator.takeWhile.js";

export interface EnumerableComputation extends Computation {
  readonly [Computation_type]?: EnumerableLike<this[typeof Computation_T]>;
}

export type Type = EnumerableComputation;

export interface EnumerableModule
  extends PureComputationModule<EnumerableComputation> {
  concat<T>(
    fst: EnumerableLike<T>,
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableLike<T>;

  concatMany<T>(enumerables: readonly EnumerableLike<T>[]): EnumerableLike<T>;

  concatWith<T>(
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): Function1<EnumerableLike<T>, EnumerableLike<T>>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<EnumerableLike<T>, TAcc>;
}

export type Signature = EnumerableModule;

export const buffer: Signature["buffer"] = Enumerable_buffer;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Enumerable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Enumerable_distinctUntilChanged;
export const keep: Signature["keep"] = Enumerable_keep;
export const map: Signature["map"] = Enumerable_map;
export const pairwise: Signature["pairwise"] = Enumerable_pairwise;
export const reduce: Signature["reduce"] = Enumerable_reduce;
export const scan: Signature["scan"] = Enumerable_scan;
export const skipFirst: Signature["skipFirst"] = Enumerable_skipFirst;
export const takeFirst: Signature["takeFirst"] = Enumerable_takeFirst;
export const takeWhile: Signature["takeWhile"] = Enumerable_takeWhile;
