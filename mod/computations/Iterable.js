/// <reference types="./Iterable.d.ts" />

import { mixInstanceFactory, props } from "../__internal__/mixins.js";
import { Computation_type, } from "../computations.js";
import { none } from "../functions.js";
export const keep = (() => {
    const KeepIterable_predicate = Symbol("KeepIterable_predicate");
    const KeepIterable_delegate = Symbol("KeepIterable_delegate");
    const createKeepIterable = mixInstanceFactory(function KeepIterable(instance, delegate, predicate) {
        instance[KeepIterable_delegate] = delegate;
        instance[KeepIterable_predicate] = predicate;
        return instance;
    }, props({
        [KeepIterable_delegate]: none,
        [KeepIterable_predicate]: none,
    }), {
        *[Symbol.iterator]() {
            const delegate = this[KeepIterable_delegate];
            const predicate = this[KeepIterable_predicate];
            for (const v of delegate) {
                if (predicate(v)) {
                    yield v;
                }
            }
        },
    });
    return (predicate) => (iterable) => createKeepIterable(iterable, predicate);
})();
export const map = (() => {
    const MapIterable_mapper = Symbol("MapIterable_mapper");
    const MapIterable_delegate = Symbol("MapIterable_delegate");
    const createMapIterable = mixInstanceFactory(function MapIterable(instance, delegate, mapper) {
        instance[MapIterable_delegate] = delegate;
        instance[MapIterable_mapper] = mapper;
        return instance;
    }, props({
        [MapIterable_delegate]: none,
        [MapIterable_mapper]: none,
    }), {
        *[Symbol.iterator]() {
            const delegate = this[MapIterable_delegate];
            const mapper = this[MapIterable_mapper];
            for (const v of delegate) {
                yield mapper(v);
            }
        },
    });
    return (mapper) => (iterable) => createMapIterable(iterable, mapper);
})();
