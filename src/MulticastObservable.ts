import MulticastObservable_catchError from "./MulticastObservable/__internal__/Multicast.catchError.js";
import MulticastObservable_concatAll from "./MulticastObservable/__internal__/MulticastObservable.concatAll.js";
import MulticastObservable_concatMap from "./MulticastObservable/__internal__/MulticastObservable.concatMap.js";
import MulticastObservable_exhaust from "./MulticastObservable/__internal__/MulticastObservable.exhaust.js";
import MulticastObservable_exhaustMap from "./MulticastObservable/__internal__/MulticastObservable.exhaustMap.js";
import MulticastObservable_mergeAll from "./MulticastObservable/__internal__/MulticastObservable.mergeAll.js";
import MulticastObservable_mergeMap from "./MulticastObservable/__internal__/MulticastObservable.mergeMap.js";
import MulticastObservable_scanLast from "./MulticastObservable/__internal__/MulticastObservable.scanLast.js";
import MulticastObservable_scanMany from "./MulticastObservable/__internal__/MulticastObservable.scanMany.js";
import MulticastObservable_switchAll from "./MulticastObservable/__internal__/MulticastObservable.switchAll.js";
import MulticastObservable_switchMap from "./MulticastObservable/__internal__/MulticastObservable.switchMap.js";
import { MulticastObservable_compute } from "./Observable/__internal__/Observable.compute.js";
import { Factory } from "./functions.js";
import { HigherOrderObservableBaseTypeClass } from "./type-classes.js";
import {
  DeferredObservableContainer,
  MulticastObservableContainer,
  MulticastObservableLike,
} from "./types.js";

export type Type = MulticastObservableContainer;

export interface MulticastObservableModule
  extends HigherOrderObservableBaseTypeClass<
    Type,
    DeferredObservableContainer
  > {
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): MulticastObservableLike<T>;
}

export type Signature = MulticastObservableModule;

export const catchError: Signature["catchError"] =
  MulticastObservable_catchError;
export const compute: Signature["compute"] = MulticastObservable_compute;
export const concatAll: Signature["concatAll"] = MulticastObservable_concatAll;
export const concatMap: Signature["concatMap"] = MulticastObservable_concatMap;
export const exhaust: Signature["exhaust"] = MulticastObservable_exhaust;
export const exhaustMap: Signature["exhaustMap"] =
  MulticastObservable_exhaustMap;
export const mergeAll: Signature["mergeAll"] = MulticastObservable_mergeAll;
export const mergeMap: Signature["mergeMap"] = MulticastObservable_mergeMap;
export const scanLast: Signature["scanLast"] = MulticastObservable_scanLast;
export const scanMany: Signature["scanMany"] = MulticastObservable_scanMany;
export const switchAll: Signature["switchAll"] = MulticastObservable_switchAll;
export const switchMap: Signature["switchMap"] = MulticastObservable_switchMap;
