import {
  DeferredObservableLike,
  DispatcherLike,
  PauseableObservableLike,
} from "../concurrent.js";
import {
  Equality,
  Factory,
  Function1,
  Predicate,
  Reducer,
  Tuple2,
} from "../functions.js";
import PauseableObservable_buffer from "./PauseableObservable/__internal__/PauseableObservable.buffer.js";
import PauseableObservable_distinctUntilChanged from "./PauseableObservable/__internal__/PauseableObservable.distinctUntilChanged.js";
import PauseableObservable_keep from "./PauseableObservable/__internal__/PauseableObservable.keep.js";
import PauseableObservable_map from "./PauseableObservable/__internal__/PauseableObservable.map.js";
import PauseableObservable_pairwise from "./PauseableObservable/__internal__/PauseableObservable.pairwise.js";
import PauseableObservable_scan from "./PauseableObservable/__internal__/PauseableObservable.scan.js";
import PauseableObservable_sinkInto from "./PauseableObservable/__internal__/PauseableObservable.sinkInto.js";
import PauseableObservable_skipFirst from "./PauseableObservable/__internal__/PauseableObservable.skipFirst.js";
import PauseableObservable_takeFirst from "./PauseableObservable/__internal__/PauseableObservable.takeFirst.js";
import PauseableObservable_takeLast from "./PauseableObservable/__internal__/PauseableObservable.takeLast.js";
import PauseableObservable_takeWhile from "./PauseableObservable/__internal__/PauseableObservable.takeWhile.js";

/**
 * @noInheritDoc
 * @category Module
 */
export interface PauseableObservableModule {
  buffer<T>(options?: {
    count?: number;
  }): Function1<
    PauseableObservableLike<T>,
    PauseableObservableLike<readonly T[]>
  >;

  distinctUntilChanged<T>(options?: {
    readonly equality?: Equality<T>;
  }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;

  keep<T>(
    predicate: Predicate<T>,
  ): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;

  map<TA, TB>(
    selector: Function1<TA, TB>,
  ): Function1<PauseableObservableLike<TA>, PauseableObservableLike<TB>>;

  pairwise<T>(): Function1<
    PauseableObservableLike<T>,
    PauseableObservableLike<Tuple2<T, T>>
  >;

  scan<T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): Function1<PauseableObservableLike<T>, PauseableObservableLike<TAcc>>;

  sinkInto<T>(
    sink: DispatcherLike<T>,
  ): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;

  skipFirst<T>(options?: {
    readonly count?: number;
  }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;

  takeFirst<T>(options?: {
    readonly count?: number;
  }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;

  takeLast<T>(options?: {
    readonly count?: number;
  }): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;

  takeWhile<T>(
    predicate: Predicate<T>,
    options?: { readonly inclusive?: boolean },
  ): Function1<PauseableObservableLike<T>, PauseableObservableLike<T>>;
}

export type Signature = PauseableObservableModule;

export const buffer: Signature["buffer"] = PauseableObservable_buffer;
export const distinctUntilChanged: Signature["distinctUntilChanged"] =
  PauseableObservable_distinctUntilChanged;
export const keep: Signature["keep"] = PauseableObservable_keep;
export const map: Signature["map"] = PauseableObservable_map;
export const pairwise: Signature["pairwise"] = PauseableObservable_pairwise;
export const scan: Signature["scan"] = PauseableObservable_scan;
export const sinkInto: Signature["sinkInto"] = PauseableObservable_sinkInto;
export const skipFirst: Signature["skipFirst"] = PauseableObservable_skipFirst;
export const takeFirst: Signature["takeFirst"] = PauseableObservable_takeFirst;
export const takeLast: Signature["takeLast"] = PauseableObservable_takeLast;
export const takeWhile: Signature["takeWhile"] = PauseableObservable_takeWhile;
