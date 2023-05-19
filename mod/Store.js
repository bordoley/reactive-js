/// <reference types="./Store.d.ts" />

import Store_create from "./Store/__internal__/Store.create.js";
import Store_toObservable from "./Store/__internal__/Store.toObservable.js";
import { identityLazy } from "./functions.js";
import { Container_type, } from "./types.js";
export const create = Store_create;
export const toEventSource = identityLazy;
export const toObservable = Store_toObservable;
