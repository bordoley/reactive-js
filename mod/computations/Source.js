/// <reference types="./Source.d.ts" />

import { SourceLike_subscribe } from "../computations.js";
import * as DefaultScheduler from "../utils/DefaultScheduler.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Observer from "../utils/__internal__/Observer.js";
import { CollectionEnumeratorLike_peek, } from "../utils.js";
export const lastAsync = (options) => async (src) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.takeLast(scheduler, 1);
    src[SourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);
    return observer[CollectionEnumeratorLike_peek];
};
export const subscribe = (options) => (src) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.takeLast(scheduler, 0);
    src[SourceLike_subscribe](observer);
    return observer;
};
export const toReadonlyArrayAsync = (options) => async (src) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const buffer = [];
    const observer = Observer.collect(scheduler, buffer);
    src[SourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);
    return buffer;
};
