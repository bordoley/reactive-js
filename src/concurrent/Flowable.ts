import {
  DeferredObservableLike,
  DeferredObservableWithSideEffectsLike,
  DispatcherLike,
  FlowableLike,
  SynchronousObservableLike,
} from "../concurrent.js";
import { EventSourceLike } from "../events.js";
import { Function1 } from "../functions.js";
import Flowable_create from "./Flowable/__private__/Flowable.create.js";
import Flowable_dispatchTo from "./Flowable/__private__/Flowable.dispatchTo.js";
import Flowable_fromAsyncIterable from "./Flowable/__private__/Flowable.fromAsyncIterable.js";
import Flowable_fromSynchronousObservable from "./Flowable/__private__/Flowable.fromSynchronousObservable.js";

/**
 * @noInheritDoc
 */
export interface FlowableModule {
  create<T>(
    op: Function1<EventSourceLike<boolean>, DeferredObservableLike<T>>,
  ): FlowableLike<T>;

  dispatchTo<T>(
    dispatcher: DispatcherLike<T>,
  ): Function1<FlowableLike<T>, DeferredObservableWithSideEffectsLike<T>>;

  fromAsyncIterable<T>(): Function1<AsyncIterable<T>, FlowableLike<T>>;

  fromSynchronousObservable<T>(): Function1<
    SynchronousObservableLike<T>,
    FlowableLike<T>
  >;
}

export type Signature = FlowableModule;

export const create: Signature["create"] = Flowable_create;
export const dispatchTo: Signature["dispatchTo"] = Flowable_dispatchTo;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  Flowable_fromAsyncIterable;
export const fromSynchronousObservable: Signature["fromSynchronousObservable"] =
  Flowable_fromSynchronousObservable;
