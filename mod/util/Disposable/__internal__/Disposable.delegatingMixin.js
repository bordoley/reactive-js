/// <reference types="./Disposable.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_dispose from "./Disposable.dispose.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";
const Disposable_delegatingMixin = 
/*@__PURE__*/ (() => {
    return pipe(mix(include(delegatingMixin()), function DelegatingDisposableMixin(instance, delegate) {
        init(delegatingMixin(), instance, delegate);
        pipe(delegate, Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [DisposableLike_isDisposed]: false,
    }), {
        get [DisposableLike_error]() {
            unsafeCast(this);
            const delegate = this[DelegatingLike_delegate];
            return delegate[DisposableLike_error];
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            const delegate = this[DelegatingLike_delegate];
            delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](error) {
            pipe(this[DelegatingLike_delegate], Disposable_dispose(error));
        },
    }), returns);
})();
export default Disposable_delegatingMixin;
