/// <reference types="./EnumeratorFactory.repeatOrRetry.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, HigherOrderEnumerator_inner, } from "../../__internal__/types.js";
import { alwaysFalse, error, isSome, none, pipe, unsafeCast, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const Enumerator_repeatOrRetry = 
/*@__PURE__*/ (() => {
    const createRepeatOrRetryEnumerator = createInstanceFactory(mix(include(Delegating_mixin(), Disposable_mixin), function RepeatOrRetryEnumerator(instance, delegate, shouldRepeat) {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance);
        instance[HigherOrderEnumerator_inner] = Enumerator_empty();
        instance.p = shouldRepeat;
        return instance;
    }, props({
        [HigherOrderEnumerator_inner]: none,
        p: alwaysFalse,
        cnt: 0,
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
            while (!this[DisposableLike_isDisposed] &&
                !inner[EnumeratorLike_move]()) {
                const { cnt } = this;
                let shouldComplete = false;
                let err = inner[DisposableLike_error];
                try {
                    shouldComplete = !this.p(cnt, err);
                }
                catch (e) {
                    shouldComplete = true;
                    err = isSome(err) ? error([e, err]) : error(e);
                }
                if (shouldComplete) {
                    this[DisposableLike_dispose](err);
                }
                else {
                    this.cnt++;
                    inner = this[DelegatingLike_delegate]();
                    pipe(this, Disposable_add(inner, { ignoreChildErrors: true }));
                    this[HigherOrderEnumerator_inner] = inner;
                }
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return (predicate) => (delegate) => () => createRepeatOrRetryEnumerator(delegate, predicate);
})();
export default Enumerator_repeatOrRetry;
