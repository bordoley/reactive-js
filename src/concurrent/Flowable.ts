import {
  DeferredObservableLike,
  FlowableLike,
  ObservableLike,
} from "../concurrent.js";
import { Function1 } from "../functions.js";
import Flowable_create from "./Flowable/__private__/Flowable.create.js";
import Flowable_fromAsyncIterable from "./Flowable/__private__/Flowable.fromAsyncIterable.js";

/**
 * @noInheritDoc
 */
export interface FlowableModule {
  create<T>(
    op: Function1<ObservableLike<boolean>, DeferredObservableLike<T>>,
  ): FlowableLike<T>;

  fromAsyncIterable<T>(): Function1<AsyncIterable<T>, FlowableLike<T>>;
}

export type Signature = FlowableModule;

export const create: Signature["create"] = Flowable_create;
export const fromAsyncIterable: Signature["fromAsyncIterable"] =
  Flowable_fromAsyncIterable;
