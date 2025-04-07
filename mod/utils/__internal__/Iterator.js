/// <reference types="./Iterator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { error, isSome, none, pipe, returns, } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { AsyncEnumeratorLike_moveNext, DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, SyncEnumeratorLike_moveNext, } from "../../utils.js";
export const toAsyncEnumerator = 
/*@__PURE__*/ (() => {
    const IteratorAsyncEnumerator_iterator = Symbol("IteratorAsyncEnumerator_iterator");
    function onAsyncIteratorEnumeratorDisposed(e) {
        const iterator = this[IteratorAsyncEnumerator_iterator];
        this[EnumeratorLike_hasCurrent] = false;
        this[EnumeratorLike_current] = none;
        try {
            isSome(e) && iterator.throw?.(e);
        }
        catch (_e) {
            // Eat the exception there is nothing else we can do
        }
        try {
            iterator.return?.();
        }
        catch (_e) {
            // Eat the exception there is nothing else we can do
        }
    }
    return returns(mixInstanceFactory(include(DisposableMixin), function IteratorAsyncEnumerator(iter) {
        init(DisposableMixin, this);
        pipe(this, DisposableContainer.onDisposed(onAsyncIteratorEnumeratorDisposed));
        this[IteratorAsyncEnumerator_iterator] = iter;
        return this;
    }, props({
        [IteratorAsyncEnumerator_iterator]: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), proto({
        async [AsyncEnumeratorLike_moveNext]() {
            this[EnumeratorLike_current] = none;
            this[EnumeratorLike_hasCurrent] = false;
            const iterator = this[IteratorAsyncEnumerator_iterator];
            let hasCurrent = false;
            try {
                await Promise.resolve();
                const result = iterator.next();
                hasCurrent = !result.done;
                this[EnumeratorLike_current] = result.value;
                this[EnumeratorLike_hasCurrent] = hasCurrent;
            }
            catch (e) {
                this[DisposableLike_dispose](error(e));
            }
            !hasCurrent && this[DisposableLike_dispose]();
            return hasCurrent;
        },
    })));
})();
export const toSyncEnumerator = /*@__PURE__*/ (() => {
    const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");
    function onIteratorEnumeratorDisposed(e) {
        const iterator = this[IteratorEnumerator_iterator];
        this[EnumeratorLike_hasCurrent] = false;
        this[EnumeratorLike_current] = none;
        try {
            isSome(e) && iterator.throw?.(e);
        }
        catch (_e) {
            // Eat the exception there is nothing else we can do
        }
        try {
            iterator.return?.();
        }
        catch (_e) {
            // Eat the exception there is nothing else we can do
        }
    }
    return returns(mixInstanceFactory(include(DisposableMixin), function IteratorEnumerator(iter) {
        init(DisposableMixin, this);
        pipe(this, DisposableContainer.onDisposed(onIteratorEnumeratorDisposed));
        this[IteratorEnumerator_iterator] = iter;
        return this;
    }, props({
        [IteratorEnumerator_iterator]: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), proto({
        [SyncEnumeratorLike_moveNext]() {
            const iterator = this[IteratorEnumerator_iterator];
            let hasCurrent = false;
            let isDisposed = this[DisposableLike_isDisposed];
            this[EnumeratorLike_current] = none;
            this[EnumeratorLike_hasCurrent] = false;
            if (isDisposed) {
                return false;
            }
            try {
                const result = iterator.next();
                // It's possible that a non-pure iterator could
                // have access to the enumerator's subscription
                // and dispose it during the call to
                isDisposed = this[DisposableLike_isDisposed];
                hasCurrent = !result.done && !isDisposed;
                this[EnumeratorLike_current] = hasCurrent ? result.value : none;
                this[EnumeratorLike_hasCurrent] = hasCurrent;
            }
            catch (e) {
                this[DisposableLike_dispose](error(e));
            }
            !hasCurrent && this[DisposableLike_dispose]();
            return hasCurrent;
        },
    })));
})();
