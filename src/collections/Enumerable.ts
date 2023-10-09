import { EnumerableLike } from "../collections.js";
import {
  Computation,
  Computation_T,
  Computation_type,
  PureComputationModule,
} from "../computations.js";
import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  Tuple2,
  Tuple3,
  Tuple4,
  Tuple5,
  Tuple6,
  Tuple7,
  Tuple8,
  Tuple9,
  Updater,
} from "../functions.js";
import Enumerable_buffer from "./Enumerable/__internal__/Enumerable.buffer.js";
import Enumerable_concatMany from "./Enumerable/__internal__/Enumerable.concatMany.js";
import Enumerable_decodeWithCharset from "./Enumerable/__internal__/Enumerable.decodeWithCharset.js";
import Enumerable_distinctUntilChanged from "./Enumerable/__internal__/Enumerable.distinctUntilChanged.js";
import Enumerable_empty from "./Enumerable/__internal__/Enumerable.empty.js";
import Enumerable_generate from "./Enumerable/__internal__/Enumerable.generate.js";
import Enumerable_keep from "./Enumerable/__internal__/Enumerable.keep.js";
import Enumerable_map from "./Enumerable/__internal__/Enumerable.map.js";
import Enumerable_pairwise from "./Enumerable/__internal__/Enumerable.pairwise.js";
import Enumerable_range from "./Enumerable/__internal__/Enumerable.range.js";
import Enumerable_reduce from "./Enumerable/__internal__/Enumerable.reduce.js";
import Enumerable_repeat from "./Enumerable/__internal__/Enumerable.repeat.js";
import Enumerable_scan from "./Enumerable/__internal__/Enumerable.scan.js";
import Enumerable_skipFirst from "./Enumerable/__internal__/Enumerable.skipFirst.js";
import Enumerable_takeFirst from "./Enumerable/__internal__/Enumerable.takeFirst.js";
import Enumerable_takeWhile from "./Enumerable/__internal__/Enumerable.takeWhile.js";
import Enumerable_toReadonlyArray from "./Enumerable/__internal__/Enumerable.toReadonlyArray.js";
import Enumerable_zip from "./Enumerable/__internal__/Enumerable.zip.js";
import Enumerable_zipWith from "./Enumerable/__internal__/Enumerable.zipWith.js";

export interface EnumerableComputation extends Computation {
  readonly [Computation_type]?: EnumerableLike<this[typeof Computation_T]>;
}

export type Type = EnumerableComputation;

export interface EnumerableModule
  extends PureComputationModule<EnumerableComputation> {
  /* 
  concat<T>(
    fst: EnumerableLike<T>,
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableLike<T>;*/

  concatMany<T>(enumerables: readonly EnumerableLike<T>[]): EnumerableLike<T>;

  /*
  concatWith<T>(
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): Function1<EnumerableLike<T>, EnumerableLike<T>>;*/

  empty<T>(): EnumerableLike<T>;

  generate<T>(
    generator: Updater<T>,
    initialValue: Factory<T>,
  ): EnumerableLike<T>;

  range(
    start: number,
    options?: { readonly count?: number },
  ): EnumerableLike<number>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<EnumerableLike<T>, TAcc>;

  repeat<T>(
    predicate: Predicate<number>,
  ): Function1<EnumerableLike<T>, EnumerableLike<T>>;
  repeat<T>(count: number): Function1<EnumerableLike<T>, EnumerableLike<T>>;
  repeat<T>(): Function1<EnumerableLike<T>, EnumerableLike<T>>;

  toReadonlyArray<T>(): Function1<EnumerableLike<T>, ReadonlyArray<T>>;

  zip<TA, TB>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
  ): EnumerableLike<Tuple2<TA, TB>>;
  zip<TA, TB, TC>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
  ): EnumerableLike<Tuple3<TA, TB, TC>>;
  zip<TA, TB, TC, TD>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
  ): EnumerableLike<Tuple4<TA, TB, TC, TD>>;
  zip<TA, TB, TC, TD, TE>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
  ): EnumerableLike<Tuple5<TA, TB, TC, TD, TE>>;
  zip<TA, TB, TC, TD, TE, TF>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
  ): EnumerableLike<Tuple6<TA, TB, TC, TD, TE, TF>>;
  zip<TA, TB, TC, TD, TE, TF, TG>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
  ): EnumerableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
  ): EnumerableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>;
  zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: EnumerableLike<TA>,
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
    i: EnumerableLike<TI>,
  ): EnumerableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>;

  zipWith<TA, TB>(
    b: EnumerableLike<TB>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<Tuple2<TA, TB>>>;
  zipWith<TA, TB, TC>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<Tuple3<TA, TB, TC>>>;
  zipWith<TA, TB, TC, TD>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<Tuple4<TA, TB, TC, TD>>>;
  zipWith<TA, TB, TC, TD, TE>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<Tuple5<TA, TB, TC, TD, TE>>>;
  zipWith<TA, TB, TC, TD, TE, TF>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
  ): Function1<
    EnumerableLike<TA>,
    EnumerableLike<Tuple6<TA, TB, TC, TD, TE, TF>>
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
  ): Function1<
    EnumerableLike<TA>,
    EnumerableLike<Tuple7<TA, TB, TC, TD, TE, TF, TG>>
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
  ): Function1<
    EnumerableLike<TA>,
    EnumerableLike<Tuple8<TA, TB, TC, TD, TE, TF, TG, TH>>
  >;
  zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    b: EnumerableLike<TB>,
    c: EnumerableLike<TC>,
    d: EnumerableLike<TD>,
    e: EnumerableLike<TE>,
    f: EnumerableLike<TF>,
    g: EnumerableLike<TG>,
    h: EnumerableLike<TH>,
    i: EnumerableLike<TI>,
  ): Function1<
    EnumerableLike<TA>,
    EnumerableLike<Tuple9<TA, TB, TC, TD, TE, TF, TG, TH, TI>>
  >;
}

export type Signature = EnumerableModule;

export const buffer: Signature["buffer"] = Enumerable_buffer;
export const concatMany: Signature["concatMany"] = Enumerable_concatMany;
export const decodeWithCharset: Signature["decodeWithCharset"] =
  Enumerable_decodeWithCharset;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  Enumerable_distinctUntilChanged;
export const empty: Signature["empty"] = Enumerable_empty;
export const generate: Signature["generate"] = Enumerable_generate;
export const keep: Signature["keep"] = Enumerable_keep;
export const map: Signature["map"] = Enumerable_map;
export const pairwise: Signature["pairwise"] = Enumerable_pairwise;
export const range: Signature["range"] = Enumerable_range;
export const reduce: Signature["reduce"] = Enumerable_reduce;
export const repeat: Signature["repeat"] = Enumerable_repeat;
export const scan: Signature["scan"] = Enumerable_scan;
export const skipFirst: Signature["skipFirst"] = Enumerable_skipFirst;
export const takeFirst: Signature["takeFirst"] = Enumerable_takeFirst;
export const takeWhile: Signature["takeWhile"] = Enumerable_takeWhile;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Enumerable_toReadonlyArray;
export const zip: Signature["zip"] = Enumerable_zip;
export const zipWith: Signature["zipWith"] = Enumerable_zipWith;
