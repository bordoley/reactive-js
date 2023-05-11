/// <reference types="./DeferredObservable.d.ts" />

import DeferredObservable_multicast from "./DeferredObservable/__internal__/DeferredObservable.multicast.js";
import DeferredObservable_repeat from "./DeferredObservable/__internal__/DeferredObservable.repeat.js";
import DeferredObservable_retry from "./DeferredObservable/__internal__/DeferredObservable.retry.js";
import DeferredObservable_share from "./DeferredObservable/__internal__/DeferredObservable.share.js";
import { DeferredObservable_compute } from "./Observable/__internal__/Observable.compute.js";
import { Container_type, } from "./types.js";
export const compute = DeferredObservable_compute;
export const multicast = DeferredObservable_multicast;
export const repeat = DeferredObservable_repeat;
export const retry = DeferredObservable_retry;
export const share = DeferredObservable_share;
