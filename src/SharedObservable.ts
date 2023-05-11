import Observable_never from "./Observable/__internal__/Observable.never.js";
import SharedObservable_concatAll from "./SharedObservable/__internal__/SharedObservable.concatAll.js";
import SharedObservable_concatMap from "./SharedObservable/__internal__/SharedObservable.concatMap.js";
import SharedObservable_exhaust from "./SharedObservable/__internal__/SharedObservable.exhaust.js";
import SharedObservable_exhaustMap from "./SharedObservable/__internal__/SharedObservable.exhaustMap.js";
import SharedObservable_mergeAll from "./SharedObservable/__internal__/SharedObservable.mergeAll.js";
import SharedObservable_mergeMap from "./SharedObservable/__internal__/SharedObservable.mergeMap.js";
import { Factory } from "./functions.js";
import { HigherOrderObservableBaseTypeClass } from "./type-classes.js";
import {
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

  never<T>(): SharedObservableLike<T>;
}

export const concatAll: Signature["concatAll"] = SharedObservable_concatAll;
export const concatMap: Signature["concatMap"] = SharedObservable_concatMap;
export const exhaust: Signature["exhaust"] = SharedObservable_exhaust;
export const exhaustMap: Signature["exhaustMap"] = SharedObservable_exhaustMap;
export const mergeAll: Signature["mergeAll"] = SharedObservable_mergeAll;
export const mergeMap: Signature["mergeMap"] = SharedObservable_mergeMap;
export const never: Signature["never"] = Observable_never;
