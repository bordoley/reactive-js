import {
  BroadcasterLike,
  BroadcasterLike_connect,
  DeferredObservableWithSideEffectsLike,
} from "../computations.js";
import { Function1, returns } from "../functions.js";
import Observable_create from "./Observable/__private__/Observable.create.js";

export interface BroadcasterModule {
  toObservable<T>(): Function1<
    BroadcasterLike<T>,
    DeferredObservableWithSideEffectsLike<T>
  >;
}

export type Signature = BroadcasterModule;

export const toObservable: Signature["toObservable"] = /*@__PURE__*/ (<T>() =>
  returns((broadcaster: BroadcasterLike<T>) =>
    Observable_create<T>(observer => {
      broadcaster[BroadcasterLike_connect](observer);
    }),
  ))();
