/// <reference types="./Observable.throwIfEmpty.d.ts" />

import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Enumerator_createWithDelegate from "../../Enumerator/__internal__/Enumerator.createWithDelegate.js";
import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import Observer_createThrowIfEmptyObserver from "../../Observer/__internal__/Observer.createThrowIfEmptyObserver.js";
import { error, none, partial, pipe, } from "../../functions.js";
import { DisposableLike_dispose } from "../../types.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observable_throwIfEmpty = ((factory) => {
    const createThrowIfEmptyEnumerator = (enumerator) => {
        let hasValue = false;
        const throwIfEmptyEnumerator = pipe(enumerator, Enumerator_forEach(_ => {
            hasValue = true;
        }), Disposable_onComplete(() => {
            let err = none;
            if (!hasValue) {
                try {
                    err = error(factory());
                }
                catch (e) {
                    err = error(e);
                }
            }
            throwIfEmptyEnumerator[DisposableLike_dispose](err);
        }), Enumerator_createWithDelegate);
        return throwIfEmptyEnumerator;
    };
    const op = pipe(Observer_createThrowIfEmptyObserver, partial(factory));
    return Observable_liftPure(createThrowIfEmptyEnumerator, op);
});
export default Observable_throwIfEmpty;
