/// <reference types="./SerialDisposableMixin.d.ts" />

import { mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import { DisposableLike_dispose, SerialDisposableLike_current, } from "../../utils.js";
import Disposable_add from "../Disposable/__internal__/Disposable.add.js";
const SerialDisposableMixin_current = Symbol("SerialDisposableMixin_current");
const SerialDisposableMixin = /*@__PURE__*/ (() => {
    return pipe(mix(function SerialDisposableMixin(instance, defaultValue) {
        unsafeCast(instance);
        instance[SerialDisposableMixin_current] = defaultValue;
        pipe(instance, Disposable_add(defaultValue));
        return instance;
    }, props({
        [SerialDisposableMixin_current]: none,
    }), {
        get [SerialDisposableLike_current]() {
            unsafeCast(this);
            return this[SerialDisposableMixin_current];
        },
        set [SerialDisposableLike_current](v) {
            unsafeCast(this);
            const oldValue = this[SerialDisposableMixin_current];
            oldValue[DisposableLike_dispose]();
            this[SerialDisposableMixin_current] = v;
            pipe(this, Disposable_add(v));
        },
    }), returns);
})();
export default SerialDisposableMixin;
