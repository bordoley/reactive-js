/// <reference types="./EventSource.d.ts" />

import { EventSourceLike_subscribe } from "../computations.js";
import { isFunction, isSome, none, } from "../functions.js";
import * as DefaultScheduler from "../utils/DefaultScheduler.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Observer from "../utils/__internal__/Observer.js";
import { CollectionEnumeratorLike_peek, } from "../utils.js";
export const lastAsync = (options) => async (src) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const observer = Observer.takeLast(1, scheduler);
    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);
    return observer[CollectionEnumeratorLike_peek];
};
export const reduceAsync = (reducer, initialValue, options) => async (src) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const ref = [initialValue()];
    const observer = Observer.reducer(reducer, ref, scheduler);
    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);
    return ref[0];
};
export const subscribe = (optionsOrEffect, options) => (src) => {
    const effect = isFunction(optionsOrEffect) ? optionsOrEffect : none;
    const scheduler = (isFunction(optionsOrEffect) ? options : optionsOrEffect)?.scheduler ??
        DefaultScheduler.get();
    const observer = isSome(effect)
        ? Observer.create(effect, scheduler)
        : Observer.takeLast(0, scheduler);
    src[EventSourceLike_subscribe](observer);
    return observer;
};
export const toReadonlyArrayAsync = (options) => async (src) => {
    const scheduler = options?.scheduler ?? DefaultScheduler.get();
    const buffer = [];
    const observer = Observer.collect(buffer, scheduler);
    src[EventSourceLike_subscribe](observer);
    await DisposableContainer.toPromise(observer);
    return buffer;
};
