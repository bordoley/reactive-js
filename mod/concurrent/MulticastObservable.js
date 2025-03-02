/// <reference types="./MulticastObservable.d.ts" />

import * as Observable from "./Observable.js";
export const fromPromise = Observable.fromPromise;
export const keep = Observable.keep;
export const map = Observable.map;
// FIXME: This is wrong
export const mergeMany = Observable.mergeMany;
