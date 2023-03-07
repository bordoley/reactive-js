/// <reference types="./DisposableRef.mixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import { MutableRefLike_current, } from "../../__internal__/util.internal.js";
const DisposableRef_mixin = /*@__PURE__*/ (() => {
    const DisposableRefMixin_current = Symbol("DisposableRefMixin_current");
    return pipe(mix(function DisposableRef(instance, defaultValue) {
        unsafeCast(instance);
        instance[DisposableRefMixin_current] = defaultValue;
        pipe(instance, Disposable_add(defaultValue));
        return instance;
    }, props({
        [DisposableRefMixin_current]: none,
    }), {
        get [MutableRefLike_current]() {
            unsafeCast(this);
            return this[DisposableRefMixin_current];
        },
        set [MutableRefLike_current](v) {
            unsafeCast(this);
            const oldValue = this[DisposableRefMixin_current];
            oldValue[DisposableLike_dispose]();
            this[DisposableRefMixin_current] = v;
            pipe(this, Disposable_add(v));
        },
    }), returns);
})();
export default DisposableRef_mixin;
