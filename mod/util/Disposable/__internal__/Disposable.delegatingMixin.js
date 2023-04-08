/// <reference types="./Disposable.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { DelegatingDisposableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, pipe, unsafeCast } from "../../../functions.js";
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";
const Disposable_delegatingMixin = 
/*@__PURE__*/ (() => {
    return mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingDisposableMixin_delegate] = delegate;
        pipe(delegate, Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [DelegatingDisposableMixin_delegate]: none,
        [DisposableLike_isDisposed]: false,
    }), {
        get [DisposableLike_error]() {
            unsafeCast(this);
            return this[DelegatingDisposableMixin_delegate][DisposableLike_error];
        },
        [DisposableLike_add](disposable) {
            this[DelegatingDisposableMixin_delegate][DisposableLike_add](disposable);
        },
        [DisposableLike_dispose](error) {
            this[DelegatingDisposableMixin_delegate][DisposableLike_dispose](error);
        },
    });
})();
export default Disposable_delegatingMixin;
