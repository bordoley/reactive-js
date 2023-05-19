/// <reference types="./Store.d.ts" />

import EventSource_addEventHandler from "./EventSource/__internal__/EventSource.addEventHandler.js";
import EventSource_toReadonlyArrayAsync from "./EventSource/__internal__/EventSource.toReadonlyArray.js";
import Store_create from "./Store/__internal__/Store.create.js";
import Store_toObservable from "./Store/__internal__/Store.toObservable.js";
import { identityLazy } from "./functions.js";
import { Container_type, } from "./types.js";
export const addEventHandler = EventSource_addEventHandler;
export const create = Store_create;
export const toEventSource = identityLazy;
export const toObservable = Store_toObservable;
export const toReadonlyArrayAsync = EventSource_toReadonlyArrayAsync;
