/// <reference types="./AsyncIterator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import { error, isSome, none, pipe, returns, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import { AsyncEnumeratorLike_moveNext, DisposableLike_dispose, EnumeratorLike_current, EnumeratorLike_hasCurrent, } from "../../utils.js";
export const fromAsyncEnumerator = 
/*@__PURE__*/ returns((enumerator) => (async function* () {
    while (await enumerator[AsyncEnumeratorLike_moveNext]()) {
        yield enumerator[EnumeratorLike_current];
    }
    Disposable.raiseIfDisposedWithError(enumerator);
})());
export const toAsyncEnumerator = 
/*@__PURE__*/ (() => {
    const AsyncIteratorAsyncEnumerator_asyncIterator = Symbol("IteratorAsyncEnumerator_iterator");
    async function onAsyncIteratorEnumeratorDisposed(e) {
        const iterator = this[AsyncIteratorAsyncEnumerator_asyncIterator];
        this[EnumeratorLike_hasCurrent] = false;
        this[EnumeratorLike_current] = none;
        if (isSome(e)) {
            try {
                await (iterator.throw?.(e) ?? Promise.resolve());
            }
            catch (_e) {
                // Eat the exception there is nothing else we can do
            }
        }
        try {
            await iterator.return?.();
        }
        catch (_e) {
            // Eat the exception there is nothing else we can do
        }
    }
    return returns(mixInstanceFactory(include(DisposableMixin), function IteratorAsyncEnumerator(iter) {
        init(DisposableMixin, this);
        pipe(this, DisposableContainer.onDisposed(onAsyncIteratorEnumeratorDisposed));
        this[AsyncIteratorAsyncEnumerator_asyncIterator] = iter;
        return this;
    }, props({
        [AsyncIteratorAsyncEnumerator_asyncIterator]: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), proto({
        async [AsyncEnumeratorLike_moveNext]() {
            this[EnumeratorLike_current] = none;
            this[EnumeratorLike_hasCurrent] = false;
            const iterator = this[AsyncIteratorAsyncEnumerator_asyncIterator];
            let hasCurrent = false;
            try {
                const result = await iterator.next();
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
