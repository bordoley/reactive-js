import {
  DeferredObservableLike,
  DispatcherLike,
  PauseableObservableLike,
} from "../concurrent.js";
import { Function1 } from "../functions.js";
import PauseableObservable_sinkInto from "./PauseableObservable/__private__/PauseableObservable.sinkInto.js";

/**
 * @noInheritDoc
 */
export interface PauseableObservableModule {
  sinkInto<T>(
    sink: DispatcherLike<T>,
  ): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
}

export type Signature = PauseableObservableModule;

export const sinkInto: Signature["sinkInto"] = PauseableObservable_sinkInto;
