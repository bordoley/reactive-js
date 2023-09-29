import { DeferredObservableLike, ObservableLike, ObserverLike, SchedulerLike } from "../concurrent.js";
import { Function1, SideEffect1 } from "../functions.js";
import {
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";
import Observable_create from "./Observable/__internal__/Observable.create.js";
import Observable_subscribe from "./Observable/__internal__/Observable.subscribe.js";

/**
 * @noInheritDoc
 * @category Module
 */
export interface ObservableModule {
  create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;
  
  subscribe<T>(
    scheduler: SchedulerLike,
    options?: {
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): Function1<ObservableLike<T>, DisposableLike>;
}

export type Signature = ObservableModule;

export const create = Observable_create;
export const subscribe = Observable_subscribe;
