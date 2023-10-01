import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  Tuple2,
} from "../functions.js";
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

export interface EnumerableModule {
  buffer<T>(options?: {
    count?: number;
  }): Function1<EnumerableLike<T>, EnumerableLike<readonly T[]>>;

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

  decodeWithCharset(options?: {
    readonly charset?: string | undefined;
  }): Function1<EnumerableLike<ArrayBuffer>, EnumerableLike<string>>;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): Function1<EnumerableLike<T>, EnumerableLike<T>>;

  keep<T>(
    predicate: Predicate<T>,
  ): Function1<EnumerableLike<T>, EnumerableLike<T>>;

  map<TA, TB>(
    selector: Function1<TA, TB>,
  ): Function1<EnumerableLike<TA>, EnumerableLike<TB>>;

  pairwise<T>(): Function1<EnumerableLike<T>, EnumerableLike<Tuple2<T, T>>>;

  reduce<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<EnumerableLike<T>, TAcc>;

  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<EnumerableLike<T>, EnumerableLike<TAcc>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): Function1<EnumerableLike<T>, EnumerableLike<T>>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): Function1<EnumerableLike<T>, EnumerableLike<T>>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): Function1<EnumerableLike<T>, EnumerableLike<T>>;
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
