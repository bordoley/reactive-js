/// <reference types="./SerialDisposable.mixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { __SerialDisposableMixin_current } from "../../../__internal__/symbols.js";
import { SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
const SerialDisposable_mixin = /*@__PURE__*/ (() => {
    return pipe(mix(function SerialDisposable(instance, defaultValue) {
        unsafeCast(instance);
        instance[__SerialDisposableMixin_current] = defaultValue;
        pipe(instance, Disposable_add(defaultValue));
        return instance;
    }, props({
        [__SerialDisposableMixin_current]: none,
    }), {
        get [SerialDisposableLike_current]() {
            unsafeCast(this);
            return this[__SerialDisposableMixin_current];
        },
        set [SerialDisposableLike_current](v) {
            unsafeCast(this);
            const oldValue = this[__SerialDisposableMixin_current];
            oldValue[DisposableLike_dispose]();
            this[__SerialDisposableMixin_current] = v;
            pipe(this, Disposable_add(v));
        },
    }), returns);
})();
export default SerialDisposable_mixin;
