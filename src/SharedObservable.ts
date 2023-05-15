import { SharedObservable_compute } from "./Observable/__internal__/Observable.compute.js";
import SharedObservable_concatAll from "./SharedObservable/__internal__/SharedObservable.concatAll.js";
import SharedObservable_concatMap from "./SharedObservable/__internal__/SharedObservable.concatMap.js";
import SharedObservable_exhaust from "./SharedObservable/__internal__/SharedObservable.exhaust.js";
import SharedObservable_exhaustMap from "./SharedObservable/__internal__/SharedObservable.exhaustMap.js";
import SharedObservable_flatMapAsync from "./SharedObservable/__internal__/SharedObservable.flatMapAsync.js";
import SharedObservable_flatMapIterable from "./SharedObservable/__internal__/SharedObservable.flatMapIterable.js";
import SharedObservable_mergeAll from "./SharedObservable/__internal__/SharedObservable.mergeAll.js";
import SharedObservable_mergeMap from "./SharedObservable/__internal__/SharedObservable.mergeMap.js";
import SharedObservable_switchAll from "./SharedObservable/__internal__/SharedObservable.switchAll.js";
import SharedObservable_switchMap from "./SharedObservable/__internal__/SharedObservable.switchMap.js";
import { Factory, Function2 } from "./functions.js";
import { HigherOrderObservableBaseTypeClass } from "./type-classes.js";
import {
  ContainerOperator,
  DeferredObservableContainer,
  SharedObservableContainer,
  SharedObservableLike,
} from "./types.js";

export type Type = SharedObservableContainer;

export interface Signature
  extends HigherOrderObservableBaseTypeClass<
    Type,
    DeferredObservableContainer
  > {
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): SharedObservableLike<T>;

  flatMapAsync<TA, TB>(
    f: Function2<TA, AbortSignal, Promise<TB>>,
  ): ContainerOperator<Type, TA, TB>;
}

export const compute: Signature["compute"] = SharedObservable_compute;
export const concatAll: Signature["concatAll"] = SharedObservable_concatAll;
export const concatMap: Signature["concatMap"] = SharedObservable_concatMap;
export const exhaust: Signature["exhaust"] = SharedObservable_exhaust;
export const exhaustMap: Signature["exhaustMap"] = SharedObservable_exhaustMap;
export const flatMapAsync: Signature["flatMapAsync"] =
  SharedObservable_flatMapAsync;
export const flatMapIterable: Signature["flatMapIterable"] =
  SharedObservable_flatMapIterable;
export const mergeAll: Signature["mergeAll"] = SharedObservable_mergeAll;
export const mergeMap: Signature["mergeMap"] = SharedObservable_mergeMap;
export const switchAll: Signature["switchAll"] = SharedObservable_switchAll;
export const switchMap: Signature["switchMap"] = SharedObservable_switchMap;
