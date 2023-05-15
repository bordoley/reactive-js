/// <reference types="./Observable.fromEnumeratorFactory.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_toObservable from "../../Enumerator/__internal__/Enumerator.toObservable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { invoke, pipe } from "../../functions.js";
import { ObservableLike_observe, } from "../../types.js";
const Observable_fromEnumeratorFactory = ((options) => (factory) => {
    const { delay = 0 } = options ?? {};
    const onSubscribe = (observer) => {
        const enumerator = factory();
        pipe(enumerator, Enumerator_toObservable(options), invoke(ObservableLike_observe, observer));
    };
    return delay > 0
        ? Runnable_create(onSubscribe)
        : Enumerable_create(onSubscribe);
});
export default Observable_fromEnumeratorFactory;
