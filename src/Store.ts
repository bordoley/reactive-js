import EventSource_addEventHandler from "./EventSource/__internal__/EventSource.addEventHandler.js";
import EventSource_toReadonlyArrayAsync from "./EventSource/__internal__/EventSource.toReadonlyArray.js";
import Store_create from "./Store/__internal__/Store.create.js";
import Store_toObservable from "./Store/__internal__/Store.toObservable.js";
import { identityLazy } from "./functions.js";
import {
  Container_T,
  Container_type,
  DisposableLike,
  EventSourceContainerModule,
  IndexedContainer,
  StoreLike,
  WritableStoreLike,
} from "./types.js";

/**
 * @noInheritDoc
 */
export interface StoreContainer extends IndexedContainer {
  readonly [Container_type]?: StoreLike<this[typeof Container_T]>;
}

export type Type = StoreContainer;

/**
 * @noInheritDoc
 * @category Module
 */
export interface StoreModule
  extends Pick<
    EventSourceContainerModule<Type>,
    | "addEventHandler"
    | "toEventSource"
    | "toObservable"
    | "toReadonlyArrayAsync"
  > {
  create<T>(initialValue: T): WritableStoreLike<T> & DisposableLike;
}

export type Signature = StoreModule;

export const addEventHandler: Signature["addEventHandler"] =
  EventSource_addEventHandler;
export const create: Signature["create"] = Store_create;
export const toEventSource: Signature["toEventSource"] = identityLazy;
export const toObservable: Signature["toObservable"] = Store_toObservable;
export const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"] =
  EventSource_toReadonlyArrayAsync;
