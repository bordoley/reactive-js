/// <reference types="./DelegatingDisposableMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import { DelegatingDisposableLike_delegate, DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, } from "../../utils.js";
import Disposable_onDisposed from "../Disposable/__internal__/Disposable.onDisposed.js";
const DelegatingDisposableMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingDisposableLike_delegate] = delegate;
        pipe(delegate, Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [DelegatingDisposableLike_delegate]: none,
        [DisposableLike_isDisposed]: false,
    }), {
        get [DisposableLike_error]() {
            unsafeCast(this);
            return this[DelegatingDisposableLike_delegate][DisposableLike_error];
        },
        [DisposableLike_add](disposable) {
            const delegate = this[DelegatingDisposableLike_delegate];
            delegate[DisposableLike_add](
            // Cast to make the typechecker happy even though its a lie.
            disposable);
        },
        [DisposableLike_dispose](error) {
            this[DelegatingDisposableLike_delegate][DisposableLike_dispose](error);
        },
    }));
})();
export default DelegatingDisposableMixin;
