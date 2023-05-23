/// <reference types="./Observable.repeatOrRetry.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import Observer_createWithDelegate from "../../Observer/__internal__/Observer.createWithDelegate.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { CountingLike_count, DelegatingLike_delegate, HigherOrderEnumerator_inner, } from "../../__internal__/types.js";
import { alwaysFalse, bindMethod, error, isSome, none, partial, pipe, unsafeCast, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, SinkLike_notify, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
const Observable_repeatOrRetry = /*@__PURE__*/ (() => {
    const createRepeatObserver = (delegate, observable, shouldRepeat) => {
        let count = 1;
        const doOnDispose = (err) => {
            let shouldComplete = false;
            try {
                shouldComplete = !shouldRepeat(count, err);
            }
            catch (e) {
                shouldComplete = true;
                err = isSome(err) ? error([error(e), err]) : error(e);
            }
            if (shouldComplete) {
                delegate[DisposableLike_dispose](err);
            }
            else {
                count++;
                pipe(observable, Observable_forEach(bindMethod(delegate, SinkLike_notify)), Observable_subscribeWithConfig(delegate, delegate), Disposable_addTo(delegate, { ignoreChildErrors: true }), Disposable_onDisposed(doOnDispose));
            }
        };
        return pipe(Observer_createWithDelegate(delegate), Disposable_addTo(delegate, { ignoreChildErrors: true }), Disposable_onDisposed(doOnDispose));
    };
    const createRepeatOrRetryEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_mixin), function RepeatOrRetryEnumerator(instance, delegate, shouldRepeat) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);
        instance[HigherOrderEnumerator_inner] = Enumerator_empty();
        instance.p = shouldRepeat;
        return instance;
    }, props({
        [HigherOrderEnumerator_inner]: none,
        p: alwaysFalse,
        [CountingLike_count]: 0,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[HigherOrderEnumerator_inner][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[HigherOrderEnumerator_inner][EnumeratorLike_hasCurrent];
        },
        [EnumeratorLike_move]() {
            let inner = this[HigherOrderEnumerator_inner];
            this[EnumeratorLike_isCompleted] = this[DisposableLike_isDisposed];
            while (!this[DisposableLike_isDisposed] &&
                !inner[EnumeratorLike_move]()) {
                const cnt = this[CountingLike_count];
                let shouldComplete = false;
                let err = inner[DisposableLike_error];
                try {
                    shouldComplete = cnt !== 0 && !this.p(cnt, err);
                }
                catch (e) {
                    shouldComplete = true;
                    err = isSome(err) ? error([error(e), err]) : error(e);
                }
                if (shouldComplete) {
                    this[DisposableLike_dispose](err);
                }
                else {
                    this[CountingLike_count]++;
                    inner = this[DelegatingLike_delegate][EnumerableLike_enumerate]();
                    pipe(this, Disposable_add(inner, { ignoreChildErrors: true }));
                    this[HigherOrderEnumerator_inner] = inner;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return ((shouldRepeat) => (observable) => {
        if (Observable_isEnumerable(observable)) {
            return Enumerable_create(() => createRepeatOrRetryEnumerator(observable, shouldRepeat));
        }
        else {
            const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
            return pipe(observable, Observable_liftRunnableUpperBounded(operator));
        }
    });
})();
export default Observable_repeatOrRetry;
